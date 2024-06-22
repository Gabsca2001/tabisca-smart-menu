import React, { useState } from 'react';
import { Container, Form, Button, Toast, ToastContainer, Alert } from 'react-bootstrap';
import { categories } from '../../utils/categories';
import { uploadImage } from '../../services/storage';
import { add } from '../../services/articoli.mjs';
import { Link } from 'react-router-dom';

const AddItem = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [allergeni, setAllergeni] = useState('');
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
        if (!name || !description || !image || !price || !category || !allergeni) {
            setError('Perfavore riempi tutti i campi');
            return;
        }

        //check if price is a number
        if (isNaN(price)) {
            setError('Il prezzo deve essere un numero');
            return;
        }

        //check if image is a valid file
        if (!image.type.includes('image')) {
            setError('Perfavore inserisci un file immagine valido');
            return;
        }

        setLoading('Inserimento in corso...');
        //upload image to firebase storage
        uploadImage(image)
            .then((url) => {
                //add item to firestore

                add({
                    nome: name,
                    descrizione: description,
                    allergeni: allergeni,
                    image: url,
                    prezzo: parseFloat(price),
                    categoria: category,
                })
                    .then(() => {
                        setName('');
                        setDescription('');
                        setAllergeni('');
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
                        <Form.Label>Allergeni *</Form.Label>
                        <Form.Control

                            type='text'
                            placeholder='Inserisci allergeni'
                            value={allergeni}
                            onChange={(e) => setAllergeni(e.target.value)}
                        />
                    </Form.Group>

                    {imagePreview && (
                        <img
                            src={imagePreview}
                            alt="Image Preview"
                            style={{ marginTop: '10px', maxHeight: '200px' }}
                        />
                    )}
                    <Form.Group className='mb-3' controlId='formBasicImage'>
                        <Form.Label>Immagine *</Form.Label>
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
                            placeholder='Enter price'
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
                            <option value=''>Selziona categoria</option>
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
