import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ShopContainer from './ShopContainer';

class MainContainer extends Component{
  constructor(props) {
   super(props);
   this.state = {}
  }

  render(){
    return (
      <Container>
        <ShopContainer />
      </Container>
    );
  };
};

export default MainContainer;
