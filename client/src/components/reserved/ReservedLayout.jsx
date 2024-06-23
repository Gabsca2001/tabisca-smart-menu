import React from 'react'
import { Container, Navbar, Nav, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../context/authContext.jsx'
import { useNavigate } from 'react-router-dom'
import '../../assets/styles/Header.css'

const ReservedLayout = ({children}) => {

  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async() => {
    try{
      await logout();
      navigate('/login');
    }catch(err){
      console.error(err);
    }
    
  }

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
        <Navbar.Brand to="/" as={Link}>
            <img src="/assets/images/logo.png" height='80px' alt="logo" className='logo' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='ml-auto justify-content-end'>
            <Nav>
              <Nav.Link as={Link} to='/' className='linkNavbar'>Torna al sito web</Nav.Link>
              <Nav.Link as={Link} to='/reserved' className='linkNavbar'>Area riservata</Nav.Link>
              <Nav.Link as={Link} to='/reserved/addItem' className='linkNavbar'>Aggiungi prodotto</Nav.Link>
              <Button variant='danger' onClick={handleLogout} className='linkNavbar mx-lg-2'>Esci</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      {children}
    </>
  )
}

export default ReservedLayout