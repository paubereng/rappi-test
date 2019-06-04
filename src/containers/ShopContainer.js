import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CategoriesMenu from '../components/CategoriesMenu';
import ProductList from '../components/ProductList';
import products from '../json/products.json';

class MainContainer extends Component{
  constructor(props) {
   super(props);
   this.state = {}
  }

  render(){
    return (
      <Container>
        <Row>
          <Col xs={4} md={2}>
            <CategoriesMenu />
          </Col>
          <Col xs={8} md={10}>
            <h1>Products</h1>
            <ProductList data={products}/>
          </Col>
        </Row>
      </Container>
    );
  };
};

export default MainContainer;
