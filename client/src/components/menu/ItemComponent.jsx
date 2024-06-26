import React from 'react'
import '../../assets/styles/Header.css'
import { Col, Container, Row } from 'react-bootstrap'
import { Modal, Button, Badge } from 'react-bootstrap'
import { allergens } from '../../utils/food'

const ItemComponent = (props) => {

    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);

    const allergensList = allergens;

    const renderAllergens = () => {
        return props.allergens.map((allergenId, index) => {
            const allergen = allergensList.find(item => item.id === allergenId);
            if (!allergen) return null; // Handle case where allergen ID is not found

            return (
                <Badge key={index} pill bg='light' className='me-2 text-dark mb-2' style={{ fontFamily: 'Dosis', fontSize: '1rem', fontWeight: '500' }}>
                    <img src={allergen.iconLink} alt={allergen.name} style={{ width: '1rem', height: '1rem', marginRight: '0.5rem' }} />
                    {allergen.name}
                </Badge>
            );
        });
    };

    return (
        <>
            <div className='card-item shadow-sm'>
                <div className='card-item-header'>
                    <Row className="align-items-center">
                        {props.image === null
                            ? null
                            : (
                                <Col xs={12} sm={5} md={5} lg={4} className="mb-3 mb-md-0">
                                    <Button variant="link" onClick={() => setShow(true)} style={{ padding: '0', position: 'relative', width: '100%' }}>
                                        <div className='position-relative d-flex justify-content-center align-items-center' style={{ minHeight: '8rem', width: '100%' }}>

                                            <img src={props.image} alt={props.name} className='img-fluid' style={{ filter: 'brightness(80%) contrast(90%)', zIndex: '1', width: '100%', minHeight: '8rem', objectFit: 'cover', objectPosition: 'center', }} />

                                            <i className='bi bi-zoom-in position-absolute' style={{ fontSize: '1.5rem', color: '#f28b30', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '2' }}></i>
                                        </div>
                                    </Button>
                                </Col>
                            )}
                        <Col xs={12} sm={7} md={7} lg={8} className='d-flex flex-column justify-content-start'>
                            <h4 style={{ color: '#232f42', fontFamily: 'Montserrat' }}>{props.name}</h4>
                            <p className="text-start" style={{ fontWeight: '500', color: '#808080', fontFamily: 'Dosis' }}>{props.description}</p>
                        </Col>
                    </Row>
                </div>

                {props.allergens && props.allergens.length > 0 && (
                    <>
                        <div style={{ position: 'relative' }} className='mt-4'>
                            <hr style={{ border: 'none', borderTop: '2.5px dotted black' }} />
                            <span className='position-absolute pe-2 pb-1 ps-2' style={{ bottom: '-15px', left: '1rem', backgroundColor: '#fff', fontWeight: '600', color: '#3b3939', fontFamily: 'Montserrat' }}>Allergeni</span>
                        </div>
                        <Container>
                            {renderAllergens()}
                        </Container>
                    </>
                )}
                {
                    props.price === 0 ? null : (
                        <div className='d-flex w-100' >
                            <div className='ms-auto itemButton'>
                                <span>€ {props.price.toFixed(2)}</span>
                            </div>
                        </div>
                    )
                }
            </div>

            <Modal show={show} onHide={handleClose} style={{ fontFamily: 'Montserrat' }}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    {props.image === null
                        ? null
                        : (
                            <div className='d-flex justify-content-center'>
                                <img src={props.image} alt={props.name} style={{ maxHeight: '300px', maxWidth: '100%' }} className='rounded-4' />
                            </div>
                        )}
                    <div className='d-flex justify-content-between'>
                        <h4 className='mt-3' style={{ color: '#232f42', fontFamily: 'Montserrat' }}>{props.name}</h4>
                        {props.price === 0 ? (
                            null
                        ) : (
                            <div className='itemButton'>
                                <span>€ {props.price.toFixed(2)}</span>
                            </div>
                        )}
                    </div>
                    <div style={{ position: 'relative' }} className='mt-4'>
                        <hr style={{ border: 'none', borderTop: '2.5px dotted black' }} />
                        <span className='position-absolute pe-2 pb-1 ps-2' style={{ bottom: '-15px', left: '1rem', backgroundColor: '#fff', fontWeight: '600', color: '#3b3939', fontFamily: 'Montserrat' }}>Ingredienti</span>
                    </div>
                    <div className='d-flex mt-3'>
                        <span style={{ fontWeight: '550', color: '#808080', fontFamily: 'Dosis' }}>{props.description}</span>
                    </div>
                    {props.allergens && (
                        <>
                            <div style={{ position: 'relative' }} className='mt-5'>
                                <hr style={{ border: 'none', borderTop: '2.5px dotted black' }} />
                                <span className='position-absolute pe-2 pb-1 ps-2' style={{ bottom: '-15px', left: '1rem', backgroundColor: '#fff', fontWeight: '600', color: '#3b3939', fontFamily: 'Montserrat' }}>Allergeni</span>
                            </div>
                            <Container>
                                {renderAllergens()}
                            </Container>
                        </>
                    )}
                </Modal.Body>
            </Modal>

        </>

    )
}

export default ItemComponent