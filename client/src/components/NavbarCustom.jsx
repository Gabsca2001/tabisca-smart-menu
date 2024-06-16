import React from 'react'
import { Navbar, Nav, Container, NavDropdown, Button, Offcanvas } from 'react-bootstrap'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {categories} from '../utils/categories'
import './NavBar.css'

const NavbarCustom = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  

  return (
    <div>
      <Navbar bg="light" expand="lg" className='shadow-sm'>
        <Container>
          <Navbar.Brand to="/" as={Link}>Tabisca Logo</Navbar.Brand>
          <Button onClick={handleShow} variant='dark' className='border-0 rounded-4'>
            <i className='bi bi-list-nested'></i>
          </Button>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} className='customCanvas'>
        <Offcanvas.Header closeButton className='customCanvasHeader'>
          <Offcanvas.Title className='text-light' style={{fontFamily: 'Playwrite TZ'}}>Menù</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            {categories.map((category, index) => (
              <div key={index}>
                <Nav.Link as={Link} to={category.link} className='link-body-emphasis mb-3 single-link' style={{fontFamily: "Montserrat"}}>
                  <img src={category.iconLink} alt={category.name}/>
                  <span className='ms-4 text-light '>{category.name}</span>
                </Nav.Link>
              </div>
            ))}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

    </div>
  )
}

export default NavbarCustom