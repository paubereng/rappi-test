import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionsCreators from '../reducers/CartReducer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CartList from '../components/CartList';

class CartContainer extends Component{
  handleRemoveProductToCart = (product) => {
    this.props.deleteProductToCart(product);
  }
  handleAddProductToCart = (product) => {
    this.props.addProductToCart(product);
  }
  handleRemoveProductItemToCart = (product) => {
    this.props.deleteItemProductToCart(product);
  }
  render(){
    let { cart } = this.props.cart;

    return (
      <Container>
        <Row>
          <Col>
            <h1>My cart</h1>
            <CartList
              data={cart}
              handleRemoveProductToCart={this.handleRemoveProductToCart}
              handleAddProductToCart={this.handleAddProductToCart}
              handleRemoveProductItemToCart={this.handleRemoveProductItemToCart}
            />
          </Col>
        </Row>
      </Container>
    );
  };
};

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionsCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
