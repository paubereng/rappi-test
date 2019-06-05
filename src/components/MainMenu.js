import React from 'react';
import MenuItem from './MenuItem';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';


const  MainMenu = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <MenuItem className="navbar-brand" to="/" exact={true}>El Baratón</MenuItem>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <MenuItem to="/" exact={true}>Products</MenuItem>
            <MenuItem to="/cart">
              <Button variant="primary">
                <i className="fa fa-shopping-cart"></i> <Badge variant="light">2</Badge>
              </Button>
            </MenuItem>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainMenu;
