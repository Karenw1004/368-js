import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Header(props) {
  return (
    <Navbar collapseOnSelect bg="dark" variant="dark" expand="md" sticky="top">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse>
        <Navbar.Brand>368 Sudoko</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
  
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;