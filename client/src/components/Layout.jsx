import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import '../assets/styles/Header.css'
import { Link } from 'react-router-dom'

const Layout = ({ children }) => {
  return (
    <div>
      {/* <Header /> */}
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='ml-auto justify-content-end'>
            <Nav>
              <Nav.Link href="#link" className='linkNavbar'>Your Element</Nav.Link>
              <Nav.Link href="#link">Your Element</Nav.Link>
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