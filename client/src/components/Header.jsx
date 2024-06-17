import React from 'react'
import { Navbar, Nav, Container, Button, Offcanvas } from 'react-bootstrap'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { categories } from '../utils/categories'
import '../assets/styles/Header.css'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const Header = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClickCanvas = (index) => {
    setValue(index)
    setShow(false)
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
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      <Container className='d-flex flex-column align-items-center justify-content-center'>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          sx={{ "& .Mui-selected": { backgroundColor: '#1f1c3e', color: 'white' }, "& .MuiTabs-indicator": { backgroundColor: 'white'}}}
          textColor='white'
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
          className='tabContainer'
        >
          {categories.map((category, index) => (
            <Tab 
              label={category.name} 
              key={index} 
              component={Link}
              to={category.link}
              className='tabElement' 
            />
          ))}
        </Tabs>
      </Container>
    </>
  )
}

export default Header