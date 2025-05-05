import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Solar Station Dashboard</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Account</Nav.Link>
          <Nav.Link as={Link} to="/dashboard">Data</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
