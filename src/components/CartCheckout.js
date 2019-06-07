import React from 'react';
import Button from 'react-bootstrap/Button';

const CartCheckout = ({ data }) => {
  let subtotal = data.reduce((a, b) => {
    let priceFloat = parseFloat(b['price'].slice(1).replace(/,/g, "."));
      return a + (priceFloat * b['cart_quantity']);
  }, 0);

  let shipping = 0;
  let tax = 0;
  let totalPrice = shipping + tax + subtotal;

  return (
    <div className="cart-checkout">
      <div className="cart-checkout__title">Summary</div>
      <div className="cart-checkout__item cart-checkout__subtotal">
        <span>Subtotal:</span> <span>{`$${subtotal.toFixed(3)}`}</span>
      </div>
      <div className="cart-checkout__item cart-checkout__shipping">
        <span>Shipping:</span> <span>{`$${shipping}`}</span>
      </div>
      <div className="cart-checkout__item cart-checkout__tax">
        <span>Tax:</span> <span>{`$${tax}`}</span>
      </div>
      <div className="cart-checkout__item cart-checkout__total-price">
        <span>Total:</span> <span>{`$${totalPrice.toFixed(3)}`}</span>
      </div>
      <div className="cart-checkout__item">
        <Button className="cart-checkout__checkout-btn">Checkout</Button>
      </div>
    </div>
  );
};

export default CartCheckout;
