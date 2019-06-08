import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionsCreators from '../reducers/CartReducer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import CartList from '../components/CartList';
import CartCheckout from '../components/CartCheckout';

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
  renderCartContent = () => {
    let { cart } = this.props.cart;

    if(!cart || !cart.length > 0) {
      return (
        <Col>
          <div className="message-wrapper">
            <Alert variant="dark">Cart is empty</Alert>
          </div>
        </Col>
      )
    }
    return (
      <Fragment>
        <Col xs={12} sm={12} md={8}>
          <CartList
            data={cart}
            handleRemoveProductToCart={this.handleRemoveProductToCart}
            handleAddProductToCart={this.handleAddProductToCart}
            handleRemoveProductItemToCart={this.handleRemoveProductItemToCart}
          />
        </Col>
        <Col xs={12} sm={12} md={4}>
          <CartCheckout data={cart}/>
        </Col>
      </Fragment>
    )
  }
  render(){
    return (
      <Container>
        <h1>My cart</h1>
          <Row className="mt-30">
            {this.renderCartContent()}
          </Row>
      </Container>
    );
  };
};

CartContainer.propTypes = {
  cart: PropTypes.object
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
