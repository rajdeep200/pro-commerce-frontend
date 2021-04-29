import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>ProCommerce</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/cart">
                <Nav.Link style={{ fontSize: "0.8rem" }}>
                  <i class="fas fa-shopping-cart mr-1"></i>Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link style={{ fontSize: "0.8rem" }}>
                  <i class="fas fa-user-alt mr-1"></i>Sign In
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
