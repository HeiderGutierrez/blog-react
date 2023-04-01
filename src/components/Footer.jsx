import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid className="container bg-white border-top p-3 mt-5">
      <Row className="d-flex align-items-center justify-content-between">
        <Col xs={12} md={6} className="text-muted small">
          <span className="navbar-brand mr-2">
            <strong>Salud al Día</strong>
          </span>
          &copy; {new Date().getFullYear()}. Todos los derechos reservados.
        </Col>
        <Col xs={12} md={6} className="text-md-right">
          <span className="small">
            Desarrollado por{" "}
            <a
              href="#"
              className="text-secondary font-weight-bold"
            >
              Heider Gutierrez
            </a>
          </span>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
