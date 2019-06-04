import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class CartContainer extends Component{
  constructor(props) {
   super(props);
   this.state = {}
  }

  render(){
    return (
      <Container>
        <Row>
          <h1>Cart</h1>
        </Row>
      </Container>
    );
  };
};

export default CartContainer;
