import React from 'react'
import '../../assets/styles/Header.css'
import CardCategory from '../../components/menu/CardCategory'
import ItemComponent from '../../components/menu/ItemComponent'
import { Col, Container, Row } from 'react-bootstrap'
import {allergens} from '../../utils/food'


const Allergeni = () => {

    const allergeni = allergens


    return (
        <>
            <Container className='d-flex flex-column align-items-center justify-content-center'>
                <CardCategory name="Allergeni" />
                <Row className="gy-3 mt-4 mb-4">
                    {allergeni.map((item, index) => (
                        <Col xs={12} md={6} lg={4} key={index}>
                            <div className='d-flex align-items-center p-3 shadow-sm rounded' style={{backgroundColor: '#f8f9fa', border: '1px solid #dee2e6'}}>
                                <img src={item.iconLink} alt={item.name} className='me-3' />
                                <p className='mb-0' style={{fontFamily: 'Dosis'}}>{item.name}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}

export default Allergeni