import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { categories } from '../../utils/categories';
import { uploadImage } from '../../services/storage';
import { add } from '../../services/articoli.mjs';

const AddItem = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [imagePreview, setImagePreview] = useState('');

    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        setError(null);
        e.preventDefault();

        //check if all fields are filled
        if (!name || !description || !image || !price || !category) {
            setError('Please fill all fields');
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

        //upload image to firebase storage
        uploadImage(image)
            .then((url) => {
                console.log(url);
                //add item to firestore
                add({
                    nome: name,
                    descrizione: description,
                    image: url,
                    prezzo: parseFloat(price),
                    categoria: category,
                })
                    .then(() => {
                        setName('');
                        setDescription('');
                        setImage(null);
                        setPrice('');
                        setCategory('');
                        setImagePreview('');
                        setError('');
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            })
            .catch((error) => {
                console.error(error);
            });

        

    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        setImagePreview(URL.createObjectURL(file));
    };

    return (
        <Container>
            <h1>Add Item</h1>
            {error && <p className='text-danger'>{error}</p>}
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
                {imagePreview && (
                    <img
                        src={imagePreview}
                        alt="Image Preview"
                        style={{ marginTop: '10px', maxHeight: '200px' }}
                    />
                )}
                <Form.Group className='mb-3' controlId='formBasicImage'>
                    <Form.Label>Image *</Form.Label>
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
                        <option value=''>Select category</option>
                        {categories.map((category) => (
                            <option key={category.name} value={category.name}>
                                {category.name}
                            </option>
                        ))}
                    </Form.Control>
                </Form.Group>
                <Button variant='primary' type='submit'>
                    Inserisci
                </Button>
            </Form>
        </Container>
    );
};

export default AddItem;
