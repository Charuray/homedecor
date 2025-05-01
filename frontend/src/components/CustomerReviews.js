import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

// Import images from assets folder
import user1 from "../assets/user1.jpg";
import user2 from "../assets/user2.jpg";
import user3 from "../assets/user3.jpg";

const reviews = [
  { name: "Rahul Sharma", comment: "Amazing quality and service!", img: user1 },
  { name: "Pooja Mehta", comment: "Loved the furniture collection!", img: user2 },
  { name: "Amit Verma", comment: "Great value for money!", img: user3 },
];

const Reviews = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">What Our Customers Say</h2>
      <Row className="justify-content-center">
        {reviews.map((review, index) => (
          <Col key={index} md={4} sm={6} xs={12} className="mb-4">
            <Card className="text-center shadow p-3">
              <Card.Img
                variant="top"
                src={review.img}
                alt={review.name}
                className="rounded-circle mx-auto"
                style={{ width: "80px", height: "80px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{review.name}</Card.Title>
                <Card.Text>"{review.comment}"</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Reviews;
