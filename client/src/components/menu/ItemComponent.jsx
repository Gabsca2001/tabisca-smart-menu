import React from 'react'
import '../../assets/styles/Header.css'
import { Col, Offcanvas, Row } from 'react-bootstrap'
import { Modal, Button } from 'react-bootstrap'

const ItemComponent = (props) => {

    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);

    return (
        <>
            <div className='card-item shadow-sm'>
                <div className='card-item-header'>
                    <Row>
                        <Col xs={4}>
                            <Button variant="link" onClick={() => setShow(true)} style={{ padding: '0', position: 'relative' }}>
                                <div className='position-relative'>
                                    <img src={props.image} alt={props.name} className='img-fluid' style={{ filter: 'brightness(70%) contrast(70%)', zIndex: '1' }} />
                                    <i className='bi bi-zoom-in position-absolute' style={{ fontSize: '1.5rem', color: '#f28b30', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '2' }}></i>
                                </div>
                            </Button>
                        </Col>
                        <Col xs={8} className='d-flex flex-column justify-content-start'>
                            <h4 style={{ color: '#232f42' }}>{props.name}</h4>
                            <p className="text-start" style={{ fontWeight: '500', color: '#808080' }}>{props.description}</p>
                        </Col>
                    </Row>
                </div>

                <div style={{ position: 'relative' }} className='mt-4'>
                    <div style={{ height: '1px', width: '100%', backgroundColor: '#bdbdbd' }} >
                    </div>
                    <span className='position-absolute pe-3 pb-1 ps-3' style={{ bottom: '-15px', left: '1rem', backgroundColor: '#fff', fontWeight: '600', color: '#3b3939' }}>Allergeni</span>
                </div>
                <div className='d-flex mt-3'>
                    <span style={{ fontWeight: '500', color: '#808080' }}>{props.allergens}</span>
                </div>

                <div className='d-flex w-100' >
                    <div className='ms-auto itemButton'>
                        <span>€ {props.price.toFixed(2)}</span>
                    </div>
                </div>
            </div>

            <Modal show={show} onHide={handleClose} style={{ fontFamily: 'Montserrat' }}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='d-flex justify-content-center'>
                    <img src={props.image} alt={props.name} style={{maxHeight: '300px', maxWidth: '100%' }} className='rounded-4' />
                    </div>
                    <div style={{ position: 'relative' }} className='mt-5'>
                        <div style={{ height: '1px', width: '100%', backgroundColor: '#bdbdbd' }} >
                        </div>
                        <span className='position-absolute pe-3 pb-1 ps-3' style={{ bottom: '-15px', left: '1rem', backgroundColor: '#fff', fontWeight: '600', color: '#3b3939' }}>Ingredienti</span>
                    </div>
                    <div className='d-flex mt-3'>
                        <span style={{ fontWeight: '500', color: '#808080' }}>{props.description}</span>
                    </div>

                    <div style={{ position: 'relative' }} className='mt-5'>
                        <div style={{ height: '1px', width: '100%', backgroundColor: '#bdbdbd' }} >
                        </div>
                        <span className='position-absolute pe-3 pb-1 ps-3' style={{ bottom: '-15px', left: '1rem', backgroundColor: '#fff', fontWeight: '600', color: '#3b3939' }}>Allergeni</span>
                    </div>
                    <div className='d-flex mt-3'>
                        <span style={{ fontWeight: '500', color: '#808080' }}>{props.allergens}</span>
                    </div>
                    <div className='d-flex w-100' >
                        <div className='ms-auto itemButton'>
                            <span>€ {props.price.toFixed(2)}</span>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

        </>

    )
}

export default ItemComponent