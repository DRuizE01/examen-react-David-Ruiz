import React from 'react';
import { Navbar, Container, Nav, Offcanvas, NavDropdown, Button, Form, FormControl } from 'react-bootstrap';
import { Link, BrowserRouter } from 'react-router-dom';
import { PaginasApp } from '../data/PaginasApp';

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar bg="light" expand={false}>
  <Container fluid>
    <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <BrowserRouter>
          <Nav>
              {PaginasApp.map((item) => {
                return (
                  <Nav.Link as={Link} to={item.path}>
                    {item.title}
                    <br/>
                  </Nav.Link>
                );
              })}
            </Nav>
        </BrowserRouter>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
    );
  }
}

export default Menu;