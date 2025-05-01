import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const MegaMenu = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Nav className="mx-auto">
          {/* Furniture Category */}
          <NavDropdown title="Furniture" id="furniture-menu">
            <NavDropdown.Item as={Link} to="/category/sofas">Sofas</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/category/beds">Beds</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/category/dining-tables">Dining Tables</NavDropdown.Item>
          </NavDropdown>

          {/* Decor Category */}
          <NavDropdown title="Decor" id="decor-menu">
            <NavDropdown.Item as={Link} to="/category/wall-art">Wall Art</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/category/lighting">Lighting</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/category/rugs">Rugs</NavDropdown.Item>
          </NavDropdown>

          {/* Storage Category */}
          <NavDropdown title="Storage" id="storage-menu">
            <NavDropdown.Item as={Link} to="/category/wardrobes">Wardrobes</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/category/tv-units">TV Units</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/category/shelves">Shelves</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MegaMenu;
