import React from 'react';
import { Navbar, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <div >
        <Navbar className="header-color" bg="dark" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto ">
      <Nav.Link >
      <Link to="/">Home</Link></Nav.Link>
      <Nav.Link >
      <Link to="/about">About</Link></Nav.Link>
      <Nav.Link >
      <Link to="/contact">Contact</Link></Nav.Link>
      <Nav.Link >
      <Link to="/projects">Projects</Link></Nav.Link>
      <Nav.Link >
      <Link to="/resume">Resume</Link></Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </div>
  );
}

export default Navigation;
