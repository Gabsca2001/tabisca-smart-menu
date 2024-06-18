import React from 'react'
import '../assets/styles/Header.css'
import CardCategory from '../components/CardCategory'
import ItemComponent from '../components/ItemComponent'
import { Col, Container, Row } from 'react-bootstrap'
import { starterList } from '../utils/food'
import {useState, useEffect} from 'react'
import {findAll} from '../services/articoli'
import { findByCategory } from '../services/articoli.mjs'

const Starter = () => {
    const [loading, setLoading] = useState(false)
    const [prodotti, setProdotti] = useState([])

    const fetchData = async () => {
        setLoading(true)

        const res = await findByCategory('Antipasto')

        setProdotti([...res])
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <Container className='d-flex flex-column align-items-center justify-content-center'>
                
                <CardCategory name="Antipasti"/>
                <Row className='w-100'>
                {

                    loading ? <p>Caricamento...</p> : prodotti.map((starter, index) => (
                        <Col key={index} xs={12} md={6} lg={4} className='mb-4'>
                        <ItemComponent key={index} name={starter.nome} price={starter.prezzo} description={starter.descrizione} image={starter.image} allergens={starter.allergeni}/>
                        </Col>
                    ))
                }
                </Row>
            </Container>

        </>
    )
}

export default Starter