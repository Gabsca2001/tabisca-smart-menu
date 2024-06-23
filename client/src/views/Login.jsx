import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/authContext.jsx'
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap'
import '../assets/styles/Header.css'

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const {currentUser, login } = useContext(AuthContext);

    useEffect(() => {
        if (currentUser) {
            navigate('/reserved');
        }
    }, [navigate]);

    const handleSignIn = async (e) => {
        setError(null);
        e.preventDefault();

        if (!email || !password) {
            setError('Inserisci e-mail e password');
            return;
        }

        try {
            await login(email, password);
            navigate('/reserved');
        } catch (err) {
            setError('Credenziali non valide. Riprova');
        }
    };

    const [passwordVisible, setPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };


    return (
        <>
        <div style={{minHeight: '50vh'}} className='p-lg-5 p-md-5 shadow'>
            <Row className='p-0 m-0' style={{ fontFamily: 'Montserrat' }}>
                <Col xs={12} md={6} className='login-col-1 d-flex flex-column justify-content-center align-items-center text-light'>
                    <h5>Benvenuto</h5>
                    <h4>Accedi per visualizzare il menu</h4>
                </Col>
                <Col xs={12} md={6} className='login-col-2 d-flex justify-content-center align-items-center bg-dark'>
                    <Form onSubmit={handleSignIn} className='bg-white m-4 p-4 rounded-2'>
                        <h3>Accedi</h3>
                        {error && <p className='text-danger'>{error}</p>}
                        <Form.Group className='mt-3 mb-3' controlId='formBasicEmail'>
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type='email' className='input-form' placeholder='Inserisci e-mail' onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='formBasicPassword'>
                            <Form.Label>Password</Form.Label>
                            <InputGroup >
                            <div className='d-flex position-relative'>

                                <Form.Control type={passwordVisible ? 'text' : 'password'} className='input-form' placeholder='Inserisci password' onChange={(e) => setPassword(e.target.value)} />
                                <Button variant='transparent' className='position-absolute end-0 text-light' onClick={togglePasswordVisibility}>
                                    {passwordVisible
                                        ? <i className='bi bi-eye-slash'></i>
                                        : <i className='bi bi-eye'></i>
                                    }
                                    
                                </Button>
                            </div>
                            </InputGroup>
                        </Form.Group>
                        <div className='d-flex justify-content-center'>
                            <Button type='submit' className='bg-dark rounded-4'>
                                Accedi
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </div>
        </>
    )
}

export default Login