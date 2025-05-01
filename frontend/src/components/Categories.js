import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

// Import images from assets
import sofaImg from "../assets/sofa.jpg";
import bedImg from "../assets/bed.jpg";
import diningImg from "../assets/dining.jpg";
import decorImg from "../assets/decor.jpg";
import storageImg from "../assets/storage.jpg";
import lightingImg from "../assets/lighting.jpg";

const categories = [
  { name: "Sofas", img: sofaImg },
  { name: "Beds", img: bedImg },
  { name: "Dining", img: diningImg },
  { name: "Decor", img: decorImg },
  { name: "Storage", img: storageImg },
  { name: "Lighting", img: lightingImg },
];

const Categories = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Shop by Categories</h2>
      <Row>
        {categories.map((category, index) => (
          <Col key={index} md={2} sm={6} xs={12} className="mb-4">
            <Card className="border-0 text-center">
              <Card.Img src={category.img} width="300" height="300" alt={category.name} />
              <Card.Body>
                <Card.Title>{category.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Categories;
