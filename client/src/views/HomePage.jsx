import React from 'react'
import '../assets/styles/Layout.css'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
      {/* hero section */}
      <section className="hero">
        <div className="hero-overlay">
          <h4>Benvenuti</h4>
          <img src="/assets/images/logoBig2.png" alt="logo" className='logo' />
        </div>
        <div className='d-flex justify-content-center align-items-center'>
          <div className="hero-content">
            <p className='mt-4'>La nostra pizzeria è famosa per la sua pizza napoletana, preparata con ingredienti di alta qualità e cotta in forno a legna. Siamo aperti tutti i giorni dalle 11:00 alle 23:00. Vi aspettiamo!</p>
            <div className="hero-buttons">
              <Button variant="outline-light" className='rounded-0' as={Link} to='/menu/antipasti'>Scopri il nostro menu</Button>
              <Button variant="light" className='rounded-0' as={Link} to='tel:+393274564857'>Chiama adesso</Button>
            </div>
          </div>
          <div className="hero-image">
            <img src="/assets/images/pizza-3.jpg" alt="pizza" />
            <img src="/assets/images/pizza-2.jpg" alt="pizza" />
            <img src="/assets/images/hamburger-1.jpg" alt="pizza" />
          </div>
        </div>
      </section>
      {/* end of hero section */}


      <Row className='m-0 p-0 custom-row'>
        <Col md={6} className="d-flex flex-column justify-content-center p-5 text-md-start text-lg-end text-sm-start text-light">
          <h2 style={{ fontFamily: 'Playwrite TZ' }} className='mb-4'>La nostra pizza</h2>
          <p>La nostra pizzeria è famosa per la sua pizza napoletana, preparata con ingredienti di alta qualità e cotta in forno a legna. Siamo aperti tutti i giorni dalle 11:00 alle 23:00. Vi aspettiamo!</p>
        </Col>
        <Col md={6} className="d-flex justify-content-center align-items-center m-0 p-0">
          <div className='custom-col n1'>
            <img src="/assets/images/pizza-2.jpg" alt="pizza" />
            <img src="/assets/images/pizza-3.jpg" alt="pizza" />
          </div>

        </Col>
      </Row>

      <Row className='m-0 p-0 pb-4 custom-row'>
        <Col
          md={6}
          className="d-flex justify-content-center align-items-center m-0 p-0 order-last order-md-first"
        >
          <div className='custom-col n2'>
            <img src="/assets/images/rosticceria-1.jpg" alt="pizza" />
            <img src="/assets/images/hamburger-1.jpg" alt="pizza" />
          </div>
        </Col>
        <Col
          md={6}
          className="d-flex flex-column justify-content-center p-5 order-first order-md-last text-light"
        >
          <h2 style={{ fontFamily: 'Playwrite TZ' }} className='mb-4'>Scopri tutto il resto</h2>
          <p>La nostra pizzeria è famosa per la sua pizza napoletana, preparata con ingredienti di alta qualità e cotta in forno a legna. Siamo aperti tutti i giorni dalle 11:00 alle 23:00. Vi aspettiamo!</p>
        </Col>
      </Row>

      <Row className='m-0 p-0 pb-4 pt-4 custom-row n2'>
        <Col md={6} className="d-flex flex-column justify-content-center p-5 text-md-start text-lg-end text-sm-start text-light">
          <h2 style={{ fontFamily: 'Playwrite TZ' }} className='mb-4'>La nostra storia</h2>
          <p>La nostra pizzeria è famosa per la sua pizza napoletana, preparata con ingredienti di alta qualità e cotta in forno a legna. Siamo aperti tutti i giorni dalle 11:00 alle 23:00. Vi aspettiamo!</p>
          <Button variant="outline-light" className='rounded-0 mt-3' as={Link} to='/about'>Scopri di più</Button>
        </Col>
        <Col md={6} className="d-flex justify-content-center align-items-center m-0 p-0">
          <div className='custom-col n3'>
            <img src="/assets/images/owners.jpg" alt="pizza" />
            <img src="/assets/images/owners-2.jpg" alt="pizza" />
          </div>

        </Col>
      </Row>


      <Container className='text-center mt-5' style={{ fontFamily: 'Montserrat' }}>
        <img src="/assets/icons/placeholder.png" width='40px' alt="logo" className='logo' />
        <h2 className='mb-3'>Come raggiuncerci</h2>
      </Container>
      <iframe
        title="maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1112.102698234058!2d13.178119580675562!3d37.96542562286279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1319f4cc02c15bcf%3A0x55866da0d50688ee!2sLa%20Tabisca!5e0!3m2!1sit!2sit!4v1718814290078!5m2!1sit!2sit"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>

    </>
  )
}

export default HomePage