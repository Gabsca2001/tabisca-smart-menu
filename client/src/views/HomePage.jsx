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
            <p className='mt-4'>La nostra pizzeria è famosa per la sua pizza, preparata con ingredienti di alta qualità e cotta in forno a legna.<br/><br/> Siamo aperti tutti i giorni dalle 17:00 alle 02:00. Vi aspettiamo!</p>
            <div className="hero-buttons">
              <Button variant="outline-light" className='rounded-0' as={Link} to='/menu/antipasti'>Scopri il nostro menu</Button>
              <Button variant="light" className='rounded-0 d-flex justify-content-center align-items-center' as={Link} to='tel:+390917793195'>
                <div className='d-flex justify-content-center align-items-center w-100'>
                  <div className='d-flex justify-content-center align-items-center'>
                    <img src="/assets/icons/telephone.png" alt="phone" style={{ width: '24px', height: '24px', marginRight: '0.5rem' }} />
                  </div>
                  <div className='d-flex justify-content-center align-items-center'>
                    <p className='mb-0 ml-2'>Chiama adesso</p>
                  </div>
                </div>
              </Button>
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
          <p>
            La nostra pizzeria è famosa per la sua pizza, preparata con ingredienti di alta qualità e cotta in forno a legna. Venite a trovarci e scoprite il nostro menu!
          </p>
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
          <p>
            Oltre alla pizza, la nostra pizzeria offre una vasta selezione di piatti, tra cui hamburger, panini, focacce, pinse e molto altro.<br/><br/> Venite a trovarci e scoprite il nostro menu!
          </p>
        </Col>
      </Row>

      <Row className='m-0 p-0 pb-4 pt-4 custom-row n2'>
        <Col md={6} className="d-flex flex-column justify-content-center p-5 text-md-start text-lg-end text-sm-start text-light">
          <h2 style={{ fontFamily: 'Playwrite TZ' }} className='mb-4'>La nostra storia</h2>
          <p>
            La Tabisca opera nel settore da molti anni ed è ormai sinonimo di qualità e innovazione. Nel 2023, per il suo ventesimo anno di attività, decide di rinnovare il locale e aprirsi a una visione più moderna della pizza...
          </p>
          <Button variant="outline-light" className='d-block rounded-0 mt-3 align-self-lg-end align-self-md-start align-items-sm-start' style={{ width: 'max-content' }} as={Link} to='/storia'>Scopri di più</Button>
        </Col>
        <Col md={6} className="d-flex justify-content-center align-items-center m-0 p-0">
          <div className='custom-col n3'>
            <img src="/assets/images/owners.jpg" alt="pizza" />
            <img src="/assets/images/owners-2.jpg" alt="pizza" />
          </div>

        </Col>
      </Row>

      <Row className='m-0 p-0 pb-4 pt-4 custom-row n2'>
        <Col md={6} className="d-flex justify-content-center align-items-center m-0 p-4 order-last order-md-first">
          <iframe
            title="maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196.59218099215693!2d13.17967422023028!3d37.966045181746324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1319f4cc02c5d7d9%3A0x6a155b3aac2470a1!2sVia%20Roma%2C%2042%2C%2090040%20San%20Cipirello%20PA!5e0!3m2!1sit!2sit!4v1719064705150!5m2!1sit!2sit"
            width="100%"
            height="450"
            style={{ border: 0, borderRadius: '2rem' }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </Col>
        <Col md={6} className="d-flex flex-column justify-content-center p-5 text-start text-light ">
          <h2 style={{ fontFamily: 'Montserrat' }} className='mb-4'>Come raggiungerci</h2>

          <div className="d-flex align-items-center mb-3">
            <img src="/assets/icons/placeholder.png" alt="location" width='24px' className="me-2" />
            <p className="mb-0">Via Roma 42, San Cipirello (PA)</p>
          </div>
          <Button variant="outline-light" className='d-block rounded-0 mt-2 align-self-start mb-4' style={{ width: 'max-content' }} as={Link} to='https://maps.app.goo.gl/eYGjV8xoKDrh8sCs8'>Apri su mappa</Button>

          <h2 style={{ fontFamily: 'Montserrat' }} className='mb-4 mt-3'>Orari di apertura</h2>
          <div className="d-flex align-items-center mb-3">
            <img src="/assets/icons/clock.png" alt="location" width='24px' className="me-2" />
            <p className="mb-0">Aperti tutti i giorni dalle 17:00 alle 02:00</p>
          </div>

          <h2 style={{ fontFamily: 'Montserrat' }} className='mb-4 mt-3'>Contatti</h2>
          <div className="d-flex align-items-center mb-3">
            <img src="/assets/icons/phone.png" alt="location" width='24px' className="me-2" />
            <Link to='tel:+390917793195' className="mb-0 text-light">+39 0917793195</Link>
          </div>

        </Col>
      </Row>

    </>
  )
}

export default HomePage