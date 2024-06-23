import React from 'react'
import { useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button, Container, Alert, ToastContainer, Toast } from 'react-bootstrap'
import { categories } from '../../utils/categories'
import { updateItem } from '../../services/articoli.mjs'
import { uploadImage } from '../../services/storage'
import { Link } from 'react-router-dom'


const EditItem = () => {
    //get item from location state

    const navigate = useNavigate()

    const item = window.history.state.usr

    const [name, setName] = useState(item.nome)
    const [description, setDescription] = useState(item.descrizione)
    const [image, setImage] = useState(null)
    const [price, setPrice] = useState(item.prezzo)
    const [category, setCategory] = useState(item.categoria)
    const [imagePreview, setImagePreview] = useState(item.image)
    const [allergens, setAllergens] = useState(item.allergeni)
    const [error, setError] = useState('')

    const [loading, setLoading] = useState('');

    const handleImageChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setImage(file)
            const reader = new FileReader()
            reader.onloadend = () => {
                setImagePreview(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setError(null)

        //check if all fields are filled
        if (!name || !description || !price || !category) {
            setError('Perfavore compila tutti i campi')
            return
        }

        //check if price is a number
        if (isNaN(price)) {
            setError('Il prezzo deve essere un numero')
            return
        }

        //check if image is a valid file
        if (image && !image.type.includes('image')) {
            setError('Perfavore inserisci un file immagine valido')
            return
        }

        //if image is changed, upload new image
        if (image) {

            setLoading('Aggiornamento in corso...')

            uploadImage(image)
                .then((url) => {
                    console.log(url)
                    //update item in firestore
                    updateItem({
                        nome: name,
                        descrizione: description,
                        image: url,
                        prezzo: parseFloat(price),
                        categoria: category,
                        allergeni: allergens
                    }, item.id)
                        .then(() => {
                            setLoading('Aggiornamento completato')
                            setName('')
                            setDescription('')
                            setImage(null)
                            setPrice('')
                            setCategory('')
                            setImagePreview('')
                            setAllergens('')
                            setError('')
                            navigate('/reserved')
                        })
                        .catch((error) => {
                            setLoading('')
                            setError('Errore durante l\'aggiornamento dell\'articolo')
                        })
                })
                .catch((error) => {
                    console.error(error)
                    setLoading('')
                    setError('Errore durante l\'aggiornamento dell\'immagine')
                })
        } else {
            //update item in firestore
            setLoading('Aggiornamento in corso...')
            updateItem({
                nome: name,
                descrizione: description,
                image: imagePreview,
                prezzo: parseFloat(price),
                categoria: category,
                allergeni: allergens
            }, item.id)
                .then(() => {
                    setLoading('Aggiornamento completato')
                    setName('')
                    setDescription('')
                    setImage(null)
                    setPrice('')
                    setCategory('')
                    setImagePreview('')
                    setAllergens('')
                    setError('')
                    navigate('/reserved')
                })
                .catch((error) => {
                    setLoading('')
                    setError('Errore durante l\'aggiornamento dell\'articolo')
                })
        }
    }

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
            <Container className='mt-5 mb-5'>
                <Button variant='primary' as={Link} to='/reserved'>Torna indietro</Button>
                <Form className='mt-5' style={{ fontFamily: 'Montserrat' }} onSubmit={handleSubmit}>
                    <h2>Modifica articolo</h2>
                    {error &&
                        <Alert variant='danger' className='mt-3'>
                            {error}
                        </Alert>
                    }
                    <Form.Group className='mb-3' controlId='formBasicName'>
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type='text' placeholder='Inserisci nome' value={name} onChange={(e) => setName(e.target.value)} />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='formBasicDescription'>
                        <Form.Label>Descrizione</Form.Label>
                        <Form.Control type='text' placeholder='Inserisci ingredienti' value={description} onChange={(e) => setDescription(e.target.value)} />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='formBasicAllergens'>
                        <Form.Label>Allergeni</Form.Label>
                        <Form.Control type='text' placeholder='Inserisci allergeni' value={allergens} onChange={(e) => setAllergens(e.target.value)} />
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
                            <option value=''>Select category</option>
                            {categories.map((category) => (
                                <option key={category.name} value={category.name}>
                                    {category.name}
                                </option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='formBasicImage'>
                        <Form.Label>Image *</Form.Label>
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
                        Modifica
                    </Button>

                </Form>
            </Container>

        </>
    )
}

export default EditItem