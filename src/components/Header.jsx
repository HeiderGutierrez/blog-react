import React from "react";

import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="white" variant="light" expand="lg" fixed="top">
      <Container>
        <Link to={'/'} className="navbar-brand">
          <strong>Salud al Día</strong>
        </Link>
        <Navbar.Toggle aria-controls="navbarColor02" />
        <Navbar.Collapse id="navbarColor02">
          <Nav className="ml-auto align-items-center">
            <Nav.Link as={Link} to={'/'}>Inicio</Nav.Link>
            <Nav.Link as={Link} to={'/'}>
              <i className="fa-brands fa-facebook"></i>
            </Nav.Link>
            <Nav.Link as={Link} to={'/'}>
              <i className="fa-brands fa-instagram"></i>
            </Nav.Link>
            <Nav.Link as={Link} to={'/'}>
              <i className="fa-brands fa-twitter"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
