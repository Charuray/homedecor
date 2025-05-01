import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import { removeFromWishlist } from "../redux/slices/wishlistSlice";
import { Link } from "react-router-dom";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const WishlistPage = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items) || [];

  const moveToCart = (item) => {
    dispatch(addToCart({ ...item, quantity: 1 }));
    dispatch(removeFromWishlist(item.id));
  };

  return (
    <Container className="mt-4">
      <h2 className="mb-4 text-center">💖 Your Wishlist</h2>

      {wishlistItems.length === 0 ? (
        <div className="text-center mt-5">
          <h4>Your wishlist is empty! 😔</h4>
          <Link to="/" className="btn btn-primary mt-3">Start Shopping</Link>
        </div>
      ) : (
        <Row>
          {wishlistItems.map((item) => (
            <Col key={item.id} md={4} className="mb-4">
              <Card className="shadow-sm">
                <Card.Img
                  variant="top"
                  src={item.image}
                  alt={item.name}
                  className="img-fluid"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text className="text-danger fw-bold">
                    ₹{item.price.toLocaleString("en-IN")}
                  </Card.Text>

                  <div className="d-flex justify-content-between">
                    <Button variant="warning" onClick={() => moveToCart(item)}>
                      🛒 Move to Cart
                    </Button>
                    <Button variant="outline-danger" onClick={() => dispatch(removeFromWishlist(item.id))}>
                      ❌ Remove
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default WishlistPage;
