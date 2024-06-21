import React from 'react'
import '../assets/styles/Layout.css'
import { Col, Container, Row } from 'react-bootstrap'

const Storia = () => {
  return (
    <>
      <div className="hero-storia">
        <div className="hero-storia-overlay">
          <h1 className='mt-5'>La nostra storia</h1>
        </div>
      </div>

      <Row className='m-0 p-0 custom-row-storia'>
        <Col md={6} className='d-flex flex-column justify-content-center p-5' style={{ fontFamily: 'Montserrat' }}>
          <p>
            La Tabisca opera nel settore da molti anni ed è ormai sinonimo di qualità e innovazione.
            <br /><br />
            Nel 2023, per il suo ventesimo anno di attività, decide di rinnovare il locale e aprirsi a una visione più moderna della pizza.<br />
            Dall'utilizzo di ottime materie prime, agli impasti semi integrali e a lunga maturazione, si impone sul mercato grazie al gradimento dei suoi clienti.
            <br /><br />  
            La Tabisca è un'attività a conduzione familiare in cui si respira aria di casa.<br /><br />
            Qui potrai trovare sempre cordialità e un ambiente intimo, amichevole e non troppo formale.<br />
            La professionalità di <b>Giuseppe</b>, unita ormai a quella dei figli - <b>Angelo</b> e <b>Cristian</b> - fa de La Tabisca un luogo di convivialità in cui sperimentare un percorso di gusto innovativo e al tempo stesso tradizionale.
          </p>
        </Col>
        <Col md={6} className='custom-col-storia n1'>
          <img src="/assets/images/owners-3.jpg" alt="pizza" />
        </Col>
      </Row>

      <div className='row-video mt-5'>
        <div className='video-overlay'>
          <video controls>
            <source src="/assets/videos/videoTabisca.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

      </div>

    </>
  )
}

export default Storia