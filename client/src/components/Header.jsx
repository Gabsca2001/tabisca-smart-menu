import React from 'react'
import { Navbar, Nav, Container, Button, Offcanvas } from 'react-bootstrap'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { categories } from '../utils/categories'
import '../assets/styles/Header.css'
import { UIContext, AuthContext } from '../context/context';
import { useContext } from 'react';
import {auth} from '../services/db'
import { signOut } from 'firebase/auth';

const Header = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { setSelectedItem } = useContext(UIContext);

  const { currentUser, setCurrentUser } = useContext(AuthContext);

  const handleClickCanvas = (index) => {
    setSelectedItem(index)
    setShow(false)
  }

  const handleLogout = async() => {
    try {
      await signOut(auth);
      setCurrentUser(null);
    } catch (err) {
      console.error(err);
    }

  }



  return (
    <>
      <Navbar bg="light" expand="lg" className='shadow-sm' sticky="top">
        <Container>
          <Navbar.Brand to="/" as={Link}>Tabisca Logo</Navbar.Brand>
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
              <i className='bi bi-house-door'></i>
              <span className='ms-4 text-light'>Home</span>
            </Nav.Link>
            <Nav.Link as={Link} to='/about' className='link-body-emphasis mb-3 single-link' style={{ fontFamily: "Montserrat" }}>
              <i className='bi bi-info-circle'></i>
              <span className='ms-4 text-light'>Contatti</span>
            </Nav.Link>
            {categories.map((category, index) => (
              <div key={index}>
                <Nav.Link as={Link} to={category.link} className='link-body-emphasis mb-3 single-link' style={{ fontFamily: "Montserrat" }} onClick={() => handleClickCanvas(index)}>
                  <img src={category.iconLink} alt={category.name} />
                  <span className='ms-4 text-light '>{category.name}</span>
                </Nav.Link>
              </div>
            ))}
            {
              currentUser ? (
                <div>
                  <Nav.Link as={Link} to='/dashboard' className='link-body-emphasis mb-3 single-link' style={{ fontFamily: "Montserrat" }}>
                    <i className='bi bi-person'></i>
                    <span className='ms-4 text-light'>Dashboard</span>
                  </Nav.Link>
                  <Button onClick={handleLogout}>Logout</Button>
                </div>
              ) : (
                <Nav.Link as={Link} to='/login' className='link-body-emphasis mb-3 single-link' style={{ fontFamily: "Montserrat" }}>
                  <i className='bi bi-box-arrow-in-right'></i>
                  <span className='ms-4 text-light'>Login</span>
                </Nav.Link>
              )
            }

          </Nav>
        </Offcanvas.Body>
      </Offcanvas>


    </>
  )
}

export default Header