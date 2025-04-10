import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <h5>MAOSIX Ltd</h5>
            <p>Millennium Association of Six</p>
            <p>Building sustainable businesses that empower communities</p>
          </Col>
          <Col md={4} className="mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-white">
                  Our Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact Info</h5>
            <address>
              <p>
                <i className="fas fa-map-marker-alt me-2"></i> Old Kampala Road,
                Uganda
              </p>
              <p>
                <i className="fas fa-phone me-2"></i> +256 123 456 789
              </p>
              <p>
                <i className="fas fa-envelope me-2"></i> info@maosix.com
              </p>
            </address>
          </Col>
        </Row>
        <hr className="mt-4" />
        <div className="text-center">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} MAOSIX Ltd. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
