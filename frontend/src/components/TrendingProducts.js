import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

// Import product images
import sofa1 from "../assets/sofa1.jpg";
import bed1 from "../assets/bed1.jpg";
import dining1 from "../assets/dining1.jpg";

const products = [
  { name: "Modern Sofa", price: "₹15,999", img: sofa1 },
  { name: "Wooden Bed", price: "₹24,999", img: bed1 },
  { name: "Dining Set", price: "₹18,499", img: dining1 },
];

const TrendingProducts = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Trending Products</h2>
      <Row>
        {products.map((product, index) => (
          <Col key={index} md={4} sm={6} xs={12} className="mb-4">
            <Card className="shadow-sm">
              <Card.Img src={product.img} width="400" height="400" alt={product.name} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
                <Button variant="dark">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TrendingProducts;
