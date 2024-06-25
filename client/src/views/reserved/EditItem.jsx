import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Alert, ToastContainer, Toast, Row, Col } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import { categories } from '../../utils/categories';
import { updateItem } from '../../services/articoli.mjs';
import { uploadImage } from '../../services/storage';
import { allergens } from '../../utils/food'; // Assuming you have allergens defined similarly to the previous example

const EditItem = () => {
    const navigate = useNavigate();
    const item = window.history.state.usr;

    const [name, setName] = useState(item.nome);
    const [description, setDescription] = useState(item.descrizione);
    const [image, setImage] = useState(null);
    const [price, setPrice] = useState(item.prezzo.toString()); // Ensure price is treated as a string initially
    const [category, setCategory] = useState(item.categoria);
    const [imagePreview, setImagePreview] = useState(item.image);
    const [selectedAllergens, setSelectedAllergens] = useState([]);

    const [error, setError] = useState('');
    const [loading, setLoading] = useState('');

    // Load selected allergens into state on component mount
    useEffect(() => {
        if (item.allergeni) {
            setSelectedAllergens(item.allergeni);
        }
    }, [item.allergeni]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleCheckboxChange = (allergenId) => {
        setSelectedAllergens((prevSelected) =>
            prevSelected.includes(allergenId)
                ? prevSelected.filter(id => id !== allergenId)
                : [...prevSelected, allergenId]
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(null);

        // Check if all required fields are filled
        if (!name || !description || !price || !category) {
            setError('Perfavore riempi tutti i campi');
            return;
        }

        // Check if price is a number
        if (isNaN(parseFloat(price))) {
            setError('Prezzo deve essere un numero');
            return;
        }

        // Check if image is a valid file
        if (image && !image.type.includes('image')) {
            setError('Perfavore inserisci un file immagine valido');
            return;
        }

        setLoading('Aggiornamento in corso...');

        // If image is changed, upload new image
        if (image) {
            uploadImage(image)
                .then((url) => {
                    // Update item in firestore
                    updateItem({
                        nome: name,
                        descrizione: description,
                        image: url,
                        prezzo: parseFloat(price),
                        categoria: category,
                        allergeni: selectedAllergens
                    }, item.id)
                        .then(() => {
                            setLoading('');
                            setName('');
                            setDescription('');
                            setImage(null);
                            setPrice('');
                            setCategory('');
                            setImagePreview('');
                            setError('');
                            setSelectedAllergens([]);
                            navigate('/reserved');
                        })
                        .catch((error) => {
                            setLoading('');
                            setError('Errore durante l\'aggiornamento dell\'articolo');
                        });
                })
                .catch((error) => {
                    console.error(error);
                    setLoading('');
                    setError('Errore durante il caricamento dell\'immagine');
                });
        } else {
            // Update item in firestore without changing image
            updateItem({
                nome: name,
                descrizione: description,
                image: imagePreview,
                prezzo: parseFloat(price),
                categoria: category,
                allergeni: selectedAllergens
            }, item.id)
                .then(() => {
                    setLoading('');
                    setName('');
                    setDescription('');
                    setImage(null);
                    setPrice('');
                    setCategory('');
                    setImagePreview('');
                    setError('');
                    setSelectedAllergens([]);
                    navigate('/reserved');
                })
                .catch((error) => {
                    setLoading('Errore durante l\'aggiornamento dell\'articolo');
                    setError('Errore durante l\'aggiornamento dell\'articolo');
                });
        }
    };

    return (
        <>
            {loading && (
                <ToastContainer position='bottom-end' className='p-3 position-fixed'>
                    <Toast bg='success' className='text-white' onClose={() => setLoading('')}>
                        <Toast.Header>
                            <strong className='me-auto'>Notifica</strong>
                        </Toast.Header>
                        <Toast.Body>{loading}</Toast.Body>
                    </Toast>
                </ToastContainer>
            )}
            <Container className='mt-5 mb-5'>
                <Button variant='primary' as={Link} to='/reserved'>Indietro</Button>
                <Form className='mt-5' style={{ fontFamily: 'Montserrat' }} onSubmit={handleSubmit}>
                    <h2>Modifica prodotto</h2>
                    {error && <Alert variant='danger' className='mt-3'>{error}</Alert>}
                    <Form.Group className='mb-3' controlId='formBasicName'>
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type='text' placeholder='Inserisci nome' value={name} onChange={(e) => setName(e.target.value)} />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='formBasicDescription'>
                        <Form.Label>Descrizione</Form.Label>
                        <Form.Control type='text' placeholder='Inserisci descrizione' value={description} onChange={(e) => setDescription(e.target.value)} />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='formBasicAllergens'>
                        <Form.Label>Allergeni</Form.Label>
                        <Row className='rounded-2 p-2' style={{ backgroundColor: '#f8f9fa' }}>
                            {allergens.map((allergen) => (
                                <Col xs={6} md={4} key={allergen.id}>
                                    <Form.Check
                                        key={allergen.id}
                                        type='checkbox'
                                        id={`allergen-${allergen.id}`}
                                        label={allergen.name}
                                        checked={selectedAllergens.includes(allergen.id)}
                                        onChange={() => handleCheckboxChange(allergen.id)}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='formBasicPrice'>
                        <Form.Label>Prezzo *</Form.Label>
                        <Form.Control type='text' placeholder='Inserisci prezzo' value={price} onChange={(e) => setPrice(e.target.value)} />
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
                    <Form.Group className='mb-3' controlId='formBasicImage'>
                        <Form.Label>Immagine</Form.Label>
                        <Form.Control
                            type='file'
                            onChange={handleImageChange}
                            accept='image/*'
                        />
                    </Form.Group>
                    {imagePreview && (
                        <img
                            src={imagePreview}
                            alt="Image Preview"
                            style={{ marginTop: '10px', maxHeight: '200px' }}
                        />
                    )}
                    <br />
                    <Button variant='primary' type='submit' className='mt-3'>
                        Aggiorna
                    </Button>
                </Form>
            </Container>
        </>
    );
};

export default EditItem;
