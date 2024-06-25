import React from 'react'
import '../../assets/styles/Header.css'
import CardCategory from '../../components/menu/CardCategory'
import ItemComponent from '../../components/menu/ItemComponent'
import { Col, Container, Row } from 'react-bootstrap'
import { findByCategory } from '../../services/articoli.mjs'
import { CACHE_DURATION } from '../../utils/cache-optimize'
import { useState, useEffect } from 'react'


const Bibite = () => {

    const [loading, setLoading] = useState(false)
    const [prodotti, setProdotti] = useState([])

    const fetchData = async () => {

        setLoading(true);

        const cachedData = localStorage.getItem('bibiteItems')
        const cachedTime = localStorage.getItem('bibiteItemsTime')

        const now = new Date().getTime()

        if (cachedData && cachedTime && (now - cachedTime < CACHE_DURATION)) {
            setProdotti(JSON.parse(cachedData))
            setLoading(false)
        } else {
            const res = await findByCategory('Bibite')
            setProdotti(res)
            localStorage.setItem('bibiteItems', JSON.stringify(res))
            localStorage.setItem('bibiteItemsTime', now)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <Container className='d-flex flex-column align-items-center justify-content-center'>
                
                <CardCategory name="Bibite"/>
                {loading && <p>Caricamento...</p>}
                <Row className='w-100'>
                    {prodotti.map((item, index) => (
                        <Col key={index} xs={12} md={6} lg={4} className='mb-4'>
                            <ItemComponent key={index} name={item.nome} price={item.prezzo} description={item.descrizione} image={item.image} allergens={item.allergeni} />
                        </Col>
                    ))
                    }
                </Row>
            </Container>
        </>
    )
}

export default Bibite