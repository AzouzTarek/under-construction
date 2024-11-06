import React, { useState } from 'react';
import '../styles/header.css';
import "bootstrap/dist/css/bootstrap.min.css";
import logo from '../image/Logo3.svg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CallIcon from '@mui/icons-material/Call';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // Gestion de l'état du menu

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);  // Ouvrir/fermer le menu
  };

  return (
    <div>
      <div className="background-section">
        <Navbar expand="lg" data-bs-theme="white" className="flex-column align-items-center">
          <Container className="d-flex flex-column flex-lg-row align-items-center justify-content-center">
            <Navbar.Brand href="#home" className="d-flex justify-content-center">
              <img src={logo} alt="Logo" className="Logo mb-3" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
            <Navbar.Collapse id="basic-navbar-nav" className={`w-100 ${isMenuOpen ? 'open' : ''}`}>
              <Nav className="ms-auto d-flex flex-column flex-lg-row align-items-center justify-content-center">
                <Nav.Link href="#home" className="Parent">Accueil</Nav.Link>
                <div className="hover-dropdown">
                  <Nav.Link className="Parent">Les excursions</Nav.Link>
                  <div className="dropdown-menu">
                    <Nav.Link href="#action/3.1">Tozeur</Nav.Link>
                    <Nav.Link href="#action/3.2">Tunis</Nav.Link>
                    <Nav.Link href="#action/3.3">Douz</Nav.Link>
                  </div>
                </div>
                <div className="hover-dropdown">
                  <Nav.Link className="Parent">Les circuits</Nav.Link>
                  <div className="dropdown-menu">
                    <Nav.Link href="#action/3.1">Tozeur</Nav.Link>
                    <Nav.Link href="#action/3.2">Tunis</Nav.Link>
                    <Nav.Link href="#action/3.3">Douz</Nav.Link>
                  </div>
                </div>
                <Nav.Link href="#home" className="Parent">Circuit sur mesure</Nav.Link>
                <Nav.Link href="#home" className="Parent">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <div className="header_phone ml-auto"><CallIcon /> 216-28 642 656</div>
          </Container>
          <h1 className='hh1'>Let us take you away</h1>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
