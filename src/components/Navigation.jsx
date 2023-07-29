import React from "react";
import { Container, Nav, Navbar, Form } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <Navbar bg="primary" data-bs-theme="dark" collapseOnSelect expand="md">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Living Las Vegas
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/birding">
              Birding
            </Nav.Link>
            <Nav.Link as={NavLink} to="/faqs">
              FAQs
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
