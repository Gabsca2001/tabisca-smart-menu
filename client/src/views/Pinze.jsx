import React from 'react'
import '../assets/styles/Header.css'
import CardCategory from '../components/CardCategory'
import ItemComponent from '../components/ItemComponent'
import { Col, Container, Row } from 'react-bootstrap'
import { pinzeList } from '../utils/food'

const Pinze = () => {

    return (
        <>
            <Container className='d-flex flex-column align-items-center justify-content-center'>
                
                <CardCategory name="Pinze"/>
                <Row className='w-100'>
                {
                    pinzeList.map((starter, index) => (
                        <Col xs={12} md={6} lg={4} className='mb-4'>
                        <ItemComponent key={index} name={starter.name} price={starter.price} description={starter.description} image={starter.image} allergens={starter.allergens}/>
                        </Col>
                    ))
                }
                </Row>
            </Container>
        </>
    )
}

export default Pinze