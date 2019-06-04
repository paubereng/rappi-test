import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CategoriesMenu from '../components/CategoriesMenu';

class MainContainer extends Component{
  constructor(props) {
   super(props);
   this.state = {}
  }

  render(){
    return (
      <Container>
        <Row>
          <Col xs={4}>
            <CategoriesMenu />
          </Col>
          <Col xs={8}>sm=8</Col>
        </Row>
      </Container>
    );
  };
};

export default MainContainer;
