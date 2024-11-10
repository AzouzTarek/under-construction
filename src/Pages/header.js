import React, { useState } from 'react';
import '../styles/header.css';
import "bootstrap/dist/css/bootstrap.min.css";
import logo from '../image/Logo2.svg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CallIcon from '@mui/icons-material/Call';
import photo8 from '../image/beach.svg';
import photo9 from '../image/wallet.svg';
import photo10 from '../image/suitcase.svg';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
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
            <Navbar.Collapse id="basic-navbar-nav" className={`navbar-collapse ${isMenuOpen ? 'open' : ''}`}>
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

            {/* Affichage du numéro de téléphone dans la Sidebar pour petits écrans */}
            <div className="header_phone sidebar-phone">
              <CallIcon /> 216-28 642 656
            </div>
          </Container>
          <h1 className='hh1'>Let us take you away</h1>
        </Navbar>
      </div>
      <div class="intro">
	
		<div class="container">
			<div class="row">
				<div class="col">
					<div class="intro_container">
						<div class="row">

							{/* -- Intro Item -- */}
							<div class="col-lg-4 intro_col">
								<div class="intro_item d-flex flex-row align-items-end justify-content-start">
									<div class="intro_icon"><img src={photo8} alt=""/></div>
									<div class="intro_content">
										<div class="intro_title">Top Destinations</div>
										<div class="intro_subtitle"><p>Nulla pretium tincidunt felis, nec.</p></div>
									</div>
								</div>
							</div>

							{/* -- Intro Item -- */}
							<div class="col-lg-4 intro_col">
								<div class="intro_item d-flex flex-row align-items-end justify-content-start">
									<div class="intro_icon"><img src={photo9} alt=""/></div>
									<div class="intro_content">
										<div class="intro_title">The Best Prices</div>
										<div class="intro_subtitle"><p>Sollicitudin mauris lobortis in.</p></div>
									</div>
								</div>
							</div>

							{/*-- Intro Item  */}
							<div class="col-lg-4 intro_col">
								<div class="intro_item d-flex flex-row align-items-end justify-content-start">
									<div class="intro_icon"><img src={photo10} alt=""/></div>
									<div class="intro_content">
										<div class="intro_title">Amazing Services</div>
										<div class="intro_subtitle"><p>Nulla pretium tincidunt felis, nec.</p></div>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>		
			</div>
		</div>
	</div>
    </div>
  );
};

export default Header;
