import React from "react";
import { Container, Button } from "react-bootstrap";
import bannerImage from "../assets/banner.jpg"; // Import image

const Hero = () => {
  return (
    <div
      className="hero-section text-center text-white d-flex align-items-center justify-content-center"
      style={{
        background: `url(${bannerImage}) center/cover no-repeat`,
        height: "600px",
        width: "100%",
      }}
    >
      <Container>
        <h1 className="display-4 fw-bold">Transform Your Home</h1>
        <p className="lead">Discover premium furniture & home decor</p>
        <Button variant="light" size="lg">
          Shop Now
        </Button>
      </Container>
    </div>
  );
};

export default Hero;
