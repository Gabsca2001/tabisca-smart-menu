import React from 'react'
import { Navbar, Nav, Container, Button, Offcanvas } from 'react-bootstrap'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { categories } from '../../utils/categories'
import '../../assets/styles/Header.css'
import { UIContext} from '../../context/context';
import { useContext } from 'react';

const Header = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { setSelectedItem } = useContext(UIContext);

  const handleClickCanvas = (index) => {
    setSelectedItem(index)
    setShow(false)
  }

  return (
    <>
      <Navbar bg="light" expand="lg" className='shadow-sm' sticky="top">
        <Container>
          <Navbar.Brand to="/" as={Link}>
            <img src="/assets/images/logo.png" height='100px' alt="logo" className='logo' />
          </Navbar.Brand>
          <Button onClick={handleShow} variant='dark' className='border-0 rounded-4'>
            <i className='bi bi-list-nested'> Menù</i>
          </Button>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} className='customCanvas'>
        <Offcanvas.Header closeButton className='customCanvasHeader'>
          <Offcanvas.Title className='text-light' style={{ fontFamily: 'Playwrite TZ' }}>Menù</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link as={Link} to='/' className='link-body-emphasis mb-3 single-link' style={{ fontFamily: "Montserrat" }}>
              <img src='/assets/icons/home.png' alt='home' />
              <span className='ms-4 text-light'>Home</span>
            </Nav.Link>
            {categories.map((category, index) => (
              <div key={index}>
                <Nav.Link as={Link} to={category.link} className='link-body-emphasis mb-3 single-link' style={{ fontFamily: "Montserrat" }} onClick={() => handleClickCanvas(index)}>
                  <img src={category.iconLink} alt={category.name} />
                  <span className='ms-4 text-light '>{category.name}</span>
                </Nav.Link>
              </div>
            ))}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>


    </>
  )
}

export default Header