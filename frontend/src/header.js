
import React, { useState } from "react";
import { Navbar, Nav, Container, Modal, Button } from "react-bootstrap";
import Login from "./login";

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginShow = () => setShowLogin(true);
  const handleLoginClose = () => setShowLogin(false);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">SELLERS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
            <Nav className="ms-auto"> {/* Use ms-auto (Bootstrap 5) to align Login button to the right */}
              <Nav.Link onClick={handleLoginShow} style={{ cursor: "pointer" }}>
                <i className="fas fa-user-circle"></i> Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={showLogin} onHide={handleLoginClose} centered>
        <Modal.Body>
          <Login />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Header;
