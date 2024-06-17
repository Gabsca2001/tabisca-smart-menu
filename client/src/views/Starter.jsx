import React from 'react'
import '../assets/styles/Header.css'
import CardCategory from '../components/CardCategory'
import ItemComponent from '../components/ItemComponent'
import { Col, Container, Row } from 'react-bootstrap'
import { starterList } from '../utils/food'
import {useState, useEffect} from 'react'
import {findAll} from '../services/articoli'

const Starter = () => {
    const [loading, setLoading] = useState(false)
    const [countries, setCountries] = useState([])

    const fetchData = async () => {
        setLoading(true)

        const res = await findAll()

        setCountries([...res])
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
                    starterList.map((starter, index) => (
                        <Col xs={12} md={6} lg={4} className='mb-4'>
                        <ItemComponent key={index} name={starter.name} price={starter.price} description={starter.description} image={starter.image} allergens={starter.allergens}/>
                        </Col>
                    ))
                }
                </Row>
            </Container>
            <section>
            <header>
                <h2>Countries</h2>
            </header>

            { loading && 
                <p>loading...</p>
            }

            <ul>
                {countries.length > 0 && countries.map(country => (
                    <li key={country.id}>
                        <h3>{country.nome}</h3>
                    </li>
                ))}
            </ul>
        </section>
        </>
    )
}

export default Starter