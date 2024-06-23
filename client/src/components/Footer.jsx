import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='text-light p-3 pt-5 pb-4' style={{ backgroundColor: 'rgb(7, 19, 43)', fontFamily: 'Montserrat' }}>
      <Row>
        <Col lg={4} className='d-flex flex-column justify-content-startalign-items-center mb-3'>
          <div className='d-block rounded-3 mt-3 align-self-center bg-light' style={{ width: 'max-content' }} >
            <img src="/assets/images/logo.png" alt="logo" width='120px' />
          </div>
          <div className='d-flex justify-content-center align-items-center mt-3'>
            {/* Facebook link */}
            <Button variant="link" style={{ backgroundColor: '#1B569C', border: 'none', borderRadius: '0.8rem', padding: '0.3rem 0.6rem' }} as={Link} to='https://www.facebook.com/latabisca05/'>
              <i className='bi bi-facebook' style={{ fontSize: '1.2rem', color: 'white' }}></i>
            </Button>
            {/* Instagram link */}
            <Button variant="link" className='ms-3' as={Link} style={{ backgroundColor: '#FC19A1', border: 'none', borderRadius: '0.8rem', padding: '0.3rem 0.6rem' }} to='https://www.instagram.com/la_tabisca/'>
              <i className='bi bi-instagram' style={{ fontSize: '1.2rem', color: 'white' }}></i>
            </Button>
          </div>
        </Col>
        <Col lg={4} className='d-flex flex-column justify-content-start align-items-center mb-3'>
          <h4>Indirizzo</h4>
          <p>Via Roma 42, 90040 San Cipirello (PA)</p>
          <h4>Contatti</h4>
          <p>Telefono: +390917793195</p>
        </Col>
        <Col lg={4} className='d-flex flex-column justify-content-start align-items-center'>
          <h4>Servizi</h4>
          <Link to='/' className='text-light text-decoration-none'>Home</Link>
          <Link to='/storia' className='text-light text-decoration-none'>Storia</Link>
          <Link to='/menu/antipasti' className='text-light text-decoration-none'>Menu</Link>
          <Link to='/#contatti' className='text-light text-decoration-none'>Contatti</Link>
          <Link to='/privacy-policy' className='text-light text-decoration-none'>Privacy Policy</Link>
          <Link to='/cookie-policy' className='text-light text-decoration-none'>Cookie Policy</Link>
          <Link to='/termini-e-condizioni' className='text-light text-decoration-none'>Termini e Condizioni</Link>
          <Link to='/login' className='text-light text-decoration-none'>Area Riservata</Link>
        </Col>
      </Row>
      <Row className='mt-3'>
        <Col className='d-flex justify-content-center align-items-center'>
          <p className='text-center'>© 2024 La Tabisca. Tutti i diritti riservati.</p>
        </Col>
      </Row>
    </footer>

  )
}

export default Footer