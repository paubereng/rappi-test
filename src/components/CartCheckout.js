import React from 'react';
import CartItem from './CartItem';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const CartCheckout = ({ data }) => {
  let subtotal = data.reduce((a, b) => {
      return a + parseFloat(b['price'].slice(1).replace(/,/g, "."));
  }, 0);
  let shipping = 0;
  let tax = 0;
  let totalPrice = shipping + tax + subtotal;
  
  return (
    <div className="cart-checkout">
      <div>Summary</div>
      <div className="cart-checkout__subtotal">
        <span>Subtotal:</span> <span>{`$${subtotal.toFixed(2)}`}</span>
      </div>
      <div className="cart-checkout__shipping">
        <span>Shipping:</span> <span>{`$${shipping}`}</span>
      </div>
      <div className="cart-checkout__tax">
        <span>Tax:</span> <span>{`$${tax}`}</span>
      </div>
      <div className="cart-checkout__total-price">
        <span>Total:</span> <span>{`$${totalPrice.toFixed(2)}`}</span>
      </div>
      <div className="cart-checkout__checkout-btn">
        <Button>Checkout</Button>
      </div>
    </div>
  );
};

export default CartCheckout;
