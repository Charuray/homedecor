import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaTruck, FaCheckCircle, FaMoneyBillWave } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Why Choose Us?</h2>
      <Row className="text-center">
        <Col md={4}>
          <FaTruck size={40} className="mb-2 text-dark" />
          <h5>Free Shipping</h5>
          <p>Enjoy free shipping on all orders.</p>
        </Col>
        <Col md={4}>
          <FaCheckCircle size={40} className="mb-2 text-dark" />
          <h5>Premium Quality</h5>
          <p>We guarantee top-notch quality.</p>
        </Col>
        <Col md={4}>
          <FaMoneyBillWave size={40} className="mb-2 text-dark" />
          <h5>Easy Returns</h5>
          <p>Hassle-free 30-day return policy.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default WhyChooseUs;
