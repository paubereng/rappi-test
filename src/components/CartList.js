import React from 'react';
import CartItem from './CartItem';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

const CartList = ({ data, handleRemoveProductToCart, handleAddProductToCart, handleRemoveProductItemToCart }) => {
  if(!data || !data.length > 0) {
    return (
      <div className="message--wrapper">
        <Alert variant="dark">Cart is empty</Alert>
      </div>
    )
  }
  return (
    <div>
      <Row>
        <Col xs={3} sm={3} md={3} className="align-self-center text-center">
          Products
        </Col>
        <Col xs={3} sm={3} md={3} className="align-self-center text-center">
          Price
        </Col>
        <Col xs={3} sm={3} md={3} className="align-self-center text-center">
          Quantity
        </Col>
        <Col xs={3} sm={3} md={3} className="align-self-center text-center">
          Total
        </Col>
      </Row>
      <ul className="cart-list">
        {data.map(product =>  {
          return (
            <CartItem
              key={product.id}
              data={product}
              handleRemoveProductToCartItem={handleRemoveProductToCart}
              handleAddProductToCartItem={handleAddProductToCart}
              handleRemoveProductItemToCartItem={handleRemoveProductItemToCart}
            />
          )
        })}
      </ul>
    </div>
  );
};

export default CartList;
