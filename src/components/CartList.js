import React from 'react';
import CartItem from './CartItem';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CartList = ({ data, handleRemoveProductToCart, handleAddProductToCart, handleRemoveProductItemToCart }) => {
  return (
    <div className="cart-list">
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
      <ul className="cart-list__list">
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
