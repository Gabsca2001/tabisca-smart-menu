import React from 'react'
import '../../assets/styles/Header.css'
import CardCategory from '../../components/menu/CardCategory'
import ItemComponent from '../../components/menu/ItemComponent'
import { Col, Container, Row } from 'react-bootstrap'
import { paniniList } from '../../utils/food'

const Panini = () => {

    return (
        <>
            <Container className='d-flex flex-column align-items-center justify-content-center'>
                
                <CardCategory name="Panini"/>
                <Row className='w-100'>
                {
                    paniniList.map((starter, index) => (
                        <Col key={index} xs={12} md={6} lg={4} className='mb-4'>
                        <ItemComponent key={index} name={starter.name} price={starter.price} description={starter.description} image={starter.image} allergens={starter.allergens}/>
                        </Col>
                    ))
                }
                </Row>
            </Container>
        </>
    )
}

export default Panini