import React from "react";
import { Navbar, Nav, Container, Form, FormControl, Button, Dropdown } from "react-bootstrap";
import { FaUser, FaShoppingCart, FaSearch, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../assets/logo.png"; // Place your logo inside `src/assets/logo.png`

const NavigationBar = () => {
  // Ensure cartItems and wishlistItems are always arrays
  const cartItems = useSelector((state) => state.cart.cartItems) || [];
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems) || [];

  return (
    <Navbar expand="lg" bg="light" className="shadow-sm py-2">
      <Container>
        {/* LOGO */}
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Logo" height="50" />
        </Navbar.Brand>

        {/* SEARCH BAR */}
        <Form className="d-flex mx-auto w-50">
          <FormControl type="search" placeholder="Search for furniture, decor..." className="me-2" />
          <Button variant="dark">
            <FaSearch />
          </Button>
        </Form>

        {/* RIGHT MENU: Wishlist, Cart, Login */}
        <Nav>
          <Nav.Link as={Link} to="/wishlist">
            <FaHeart /> Wishlist{" "}
            {wishlistItems.length > 0 && (
              <span className="badge bg-danger">{wishlistItems.length}</span>
            )}
          </Nav.Link>

          <Nav.Link as={Link} to="/cart">
            <FaShoppingCart /> Cart{" "}
            {cartItems.length > 0 && (
              <span className="badge bg-danger">{cartItems.length}</span>
            )}
          </Nav.Link>

          <Dropdown>
            <Dropdown.Toggle variant="link" className="text-dark">
              <FaUser /> Login
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/login">Sign In</Dropdown.Item>
              <Dropdown.Item as={Link} to="/register">Create Account</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
