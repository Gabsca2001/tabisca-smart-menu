import React from 'react'
import Footer from '../Footer'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import '../../assets/styles/Header.css'
import { Link } from 'react-router-dom'

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar expand="lg" className='bg-light'>
        <Container>
          <Navbar.Brand href="#home">
            <img src="/assets/images/logo.png" height='80px' alt="logo" className='logo' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='border-0'/>
          <Navbar.Collapse id="basic-navbar-nav" className='ml-auto justify-content-end'>
            <Nav>
              <Nav.Link as={Link} to='/' className='linkNavbar'>Home</Nav.Link>
              <Nav.Link as={Link} to='/storia' className='linkNavbar'>Storia</Nav.Link>
              <Nav.Link as={Link} to='/menu/antipasti' className='linkNavbar'>Menù</Nav.Link>
              <Nav.Link href="#link" className='linkNavbar'>Contatti</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      {children}
      <Footer />
    </div>
  )
}

export default Layout