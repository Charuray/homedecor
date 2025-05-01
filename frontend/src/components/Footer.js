import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>Discover premium home decor and furniture at affordable prices.</p>
          </Col>
          <Col md={4}>
            <h5>Contact</h5>
            <p>Email: support@homedecor.com</p>
            <p>Phone: +91 98765 43210</p>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <FaFacebook className="me-3" size={24} />
            <FaTwitter className="me-3" size={24} />
            <FaInstagram size={24} />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
