import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'

const PrimaPagina = () => {
  return (
    <Container className='bg-light rounded-3 p-4 mb-5' style={{fontFamily: 'Montserrat'}}>
      <h1>Benvenuto nel menù della nostra pizzeria</h1>
      <Row>
        <Col>
          <p>Qui troverai una vasta scelta di pizze, antipasti, panini e dolci.</p>
          <p>Seleziona una categoria dal menù in alto per visualizzare i prodotti.</p>
        </Col>

      </Row>
    </Container>

  )
}

export default PrimaPagina