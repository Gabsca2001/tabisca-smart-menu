import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-dark text-light p-3 d-flex justify-content-around align-items-center'>
      <div>
        <h5>Contatti</h5>
        <p>Indirizzo: Via Roma, 123</p>
        <p>Telefono: 0123456789</p>
      </div>
    </footer>

  )
}

export default Footer