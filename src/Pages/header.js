import React from 'react';
import '../styles/header.css';
import "bootstrap/dist/css/bootstrap.min.css";
import logo from '../image/Logo3.svg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <Navbar expand="lg" data-bs-theme="white" className="flex-column align-items-center">
      <Container className="d-flex flex-column align-items-center">
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" className="Logo mb-3" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="w-100">
        <Nav className="d-flex flex-row align-items-center">
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
      </Container>
    </Navbar>
  );
}

export default Header;
