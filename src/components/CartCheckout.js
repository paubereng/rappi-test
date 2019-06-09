import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { stringPriceToNumber, replaceDot } from '../utils/utils';

const CartCheckout = ({ data }) => {
  let subtotal = data.reduce((a, b) => {
    let priceFloat = stringPriceToNumber(b['price']);
    return a + (priceFloat * b['cart_quantity']);
  }, 0);

  let shipping = 0;
  let tax = 0;
  let totalPrice = shipping + tax + subtotal;
  let subtotalWithComma = replaceDot(subtotal);
  let totalPriceWithComma = replaceDot(totalPrice);

  return (
    <div className="cart-checkout">
      <div className="cart-checkout__title">Summary</div>
      <div className="cart-checkout__item cart-checkout__subtotal">
        <span>Subtotal:</span> <span>{`$${subtotalWithComma}`}</span>
      </div>
      <div className="cart-checkout__item cart-checkout__shipping">
        <span>Shipping:</span> <span>{`$${shipping}`}</span>
      </div>
      <div className="cart-checkout__item cart-checkout__tax">
        <span>Tax:</span> <span>{`$${tax}`}</span>
      </div>
      <div className="cart-checkout__item cart-checkout__total-price">
        <span>Total:</span> <span>{`$${totalPriceWithComma}`}</span>
      </div>
      <div className="cart-checkout__item">
        <Button className="cart-checkout__checkout-btn">Checkout</Button>
      </div>
    </div>
  );
};

CartCheckout.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
};

export default CartCheckout;
