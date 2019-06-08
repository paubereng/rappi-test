import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from './MenuItem';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Badge from 'react-bootstrap/Badge';

const  MainMenu = ({ productsNumber }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <MenuItem className="navbar-brand" to="/" exact={true}>El Baratón</MenuItem>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <MenuItem to="/" exact={true}>Products</MenuItem>
            <MenuItem to="/cart">
              <i className="fa fa-shopping-cart"></i>
              {productsNumber && productsNumber > 0 ? <Badge className="badge-cart" variant="light">{productsNumber}</Badge> : null }
            </MenuItem>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

MainMenu.propTypes = {
  productsNumber: PropTypes.number
};

export default MainMenu;
