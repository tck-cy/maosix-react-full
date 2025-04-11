import React, { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      bg="white"
      expand="lg"
      fixed="top"
      className="shadow-sm"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-primary">
          MAOSIX
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : true)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={() => setExpanded(false)}>
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/products"
              onClick={() => setExpanded(false)}
            >
              Products
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              onClick={() => setExpanded(false)}
            >
              Contact
            </Nav.Link>
          </Nav>
          <Nav>
            <Button
              as={Link}
              to="/login"
              variant="outline-primary"
              className="ms-2"
            >
              {" "}
              Login{" "}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
