import React from 'react'
import { Container, Navbar, Nav, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { auth } from '../../services/firebase-config.mjs'
import { useContext } from 'react'
import { AuthContext } from '../../context/context'
import { useNavigate } from 'react-router-dom'

const ReservedLayout = ({children}) => {

  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    /*firebase logout */
    auth.signOut().then(() => {
      setCurrentUser(null);
      navigate('/login');
    }).catch((error) => {
      console.error(error);
    });
    
  }

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='ml-auto justify-content-end'>
            <Nav>
              <Nav.Link as={Link} to='/' className='linkNavbar'>Torna al sito web</Nav.Link>
              <Nav.Link as={Link} to='/reserved' className='linkNavbar'>Area riservata</Nav.Link>
              <Nav.Link as={Link} to='/reserved/addItem' className='linkNavbar'>Aggiungi prodotto</Nav.Link>
              <Button onClick={handleLogout} className='linkNavbar'>Logout</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {children}
    </>
  )
}

export default ReservedLayout