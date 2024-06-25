import React, { useState } from 'react';
import { Container, Form, Button, Toast, ToastContainer, Alert } from 'react-bootstrap';
import { categories } from '../../utils/categories';
import { uploadImage } from '../../services/storage';
import { add } from '../../services/articoli.mjs';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import { allergens } from '../../utils/food';

const AddItem = () => {

    const allergeniList = allergens;
    const [selectedAllergeni, setSelectedAllergeni] = useState([]);

    const handleCheckboxChange = (allergenId) => {
        setSelectedAllergeni((prevSelected) =>
            prevSelected.includes(allergenId)
                ? prevSelected.filter(id => id !== allergenId)
                : [...prevSelected, allergenId]
        );
    };

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [imagePreview, setImagePreview] = useState('');

    const [error, setError] = useState('');

    const [loading, setLoading] = useState('');

    const handleSubmit = (e) => {
        setError(null);
        e.preventDefault();

        //check if all fields are filled
        if (!name || !description || !price || !category) {
            setError('Perfavore riempi tutti i campi');
            return;
        }

        //check if price is a number
        if (isNaN(price)) {
            setError('Il prezzo deve essere un numero');
            return;
        }

        //check if image is a valid file
        if (image) {
            if (!image.type.includes('image')) {
                setError('Perfavore inserisci un file immagine valido');
                return;
            }
            setLoading('Inserimento in corso...');
            uploadImage(image)
                .then((url) => {
                    //add item to firestore

                    add({
                        nome: name,
                        descrizione: description,
                        allergeni: selectedAllergeni,
                        image: url,
                        prezzo: parseFloat(price),
                        categoria: category,
                    })
                        .then(() => {
                            setName('');
                            setDescription('');
                            setSelectedAllergeni([]);
                            setImage(null);
                            setImagePreview('');
                            setPrice('');
                            setCategory('');
                            setImagePreview('');
                            setError('');
                            setLoading('Inserimento completato');
                        })
                        .catch((error) => {
                            console.error(error);
                            setError('Errore durante l\'aggiunta dell\'articolo');
                            setLoading('Errore durante l\'aggiunta dell\'articolo');
                        });
                })
                .catch((error) => {
                    setError('Errore durante il caricamento dell\'immagine');
                    setLoading('Errore durante il caricamento dell\'immagine');
                    console.error(error);
                });
        } else {
            setLoading('Inserimento in corso...');
            add({
                nome: name,
                descrizione: description,
                allergeni: selectedAllergeni,
                image: null,
                prezzo: parseFloat(price),
                categoria: category,
            })
                .then(() => {
                    setName('');
                    setDescription('');
                    setSelectedAllergeni([]);
                    setImage(null);
                    setImagePreview('');
                    setPrice('');
                    setCategory('');
                    setImagePreview('');
                    setError('');
                    setLoading('Inserimento completato');
                })
                .catch((error) => {
                    console.error(error);
                    setError('Errore durante l\'aggiunta dell\'articolo');
                    setLoading('Errore durante l\'aggiunta dell\'articolo');
                });


        }

    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        setImagePreview(URL.createObjectURL(file));
    };

    return (
        <>
            {loading &&
                <ToastContainer position='bottom-end' className='p-3 position-fixed'>
                    <Toast bg='success' className='text-white' onClose={() => setLoading('')} >
                        <Toast.Header>
                            <strong className='me-auto'>Notifica</strong>
                        </Toast.Header>
                        <Toast.Body>{loading}</Toast.Body>
                    </Toast>
                </ToastContainer>

            }
            <Container className='mb-5 mt-3'>
                <Button variant='primary' as={Link} to='/reserved'>Torna indietro</Button>
                <h1 className='mt-3 mb-4'>Aggiungi prodotto</h1>
                {error &&
                    <Alert variant='danger'>
                        {error}
                    </Alert>
                }
                <Form onSubmit={handleSubmit}>
                    <Form.Group className='mb-3' controlId='formBasicName'>
                        <Form.Label>Nome *</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Inserisci nome'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='formBasicDescription'>
                        <Form.Label>Descrizione *</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Inserisci ingredienti'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='formBasicAllergeni'>
                        <Form.Label>Allergeni</Form.Label>
                        <Row className='rounded-2 p-2' style={{ backgroundColor: '#f8f9fa' }}>
                            {allergeniList.map((allergen) => (
                                <Col xs={6} md={4} key={allergen.id}>
                                    <Form.Check
                                        type='checkbox'
                                        id={`allergen-${allergen.id}`}
                                        label={allergen.name}
                                        checked={selectedAllergeni.includes(allergen.id)}
                                        onChange={() => handleCheckboxChange(allergen.id)}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </Form.Group>

                    {imagePreview && (
                        <img
                            src={imagePreview}
                            alt="Image Preview"
                            style={{ marginTop: '10px', maxHeight: '200px' }}
                        />
                    )}
                    <Form.Group className='mb-3' controlId='formBasicImage'>
                        <Form.Label>Immagine </Form.Label>
                        <Form.Control
                            type='file'
                            onChange={handleImageChange}
                            accept='image/*'
                        />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='formBasicPrice'>
                        <Form.Label>Prezzo *</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Inserisci prezzo'
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='formBasicCategory'>
                        <Form.Label>Categoria *</Form.Label>
                        <Form.Control
                            as='select'
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value=''>Seleziona categoria</option>
                            {categories.map((category) => (
                                <option key={category.name} value={category.name}>
                                    {category.name}
                                </option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                    <Button variant='primary' type='submit'>
                        Aggiungi
                    </Button>
                </Form>
            </Container>
        </>
    );
};

export default AddItem;
