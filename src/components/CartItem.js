import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const handleButtonDeleteProduct = (data, handleRemoveProductToCartItem, ev) => {
  ev.preventDefault();
  handleRemoveProductToCartItem(data);
}
const handleButtonAddProduct = (data, handleAddProductToCartItem, ev) => {
  ev.preventDefault();
  handleAddProductToCartItem(data);
}
const handleButtonDeleteProductItem = (data, handleRemoveProductItemToCartItem, ev) => {
  ev.preventDefault();
  handleRemoveProductItemToCartItem(data);
}
const CartItem = ({ data, handleRemoveProductToCartItem, handleAddProductToCartItem, handleRemoveProductItemToCartItem }) => {
    let { name, price, quantity, cart_quantity, image } = data;
    let strToIntPrice = parseFloat(price.slice(1).replace(/,/g, "."));
    let totalPrice = strToIntPrice * cart_quantity;

    return (
      <li className="cart-item">
        <Row>
          <Col xs={3} sm={3} md={3} className="align-self-center text-center">
            <div className="cart-item__product-info">
              <div>
                <img className="cart-item__image" src={image} alt="product" />
              </div>
              <div>{name}</div>
              <div>
                <Button
                  variant="link"
                  onClick={handleButtonDeleteProduct.bind(this, data, handleRemoveProductToCartItem)}>
                  Delete
                </Button>
              </div>
            </div>
          </Col>
          <Col xs={3} sm={3} md={3} className="align-self-center text-center">
            <div>
              <div className="product-item__price">{price}</div>
            </div>
          </Col>
          <Col xs={3} sm={3} md={3} className="align-self-center text-center">
            <div className="cart-item__quantity">
              <Button
                variant="link"
                disabled={cart_quantity === 1}
                onClick={handleButtonDeleteProductItem.bind(this, data, handleRemoveProductItemToCartItem)}
                >
                <i className="fa fa-minus"></i>
              </Button>
              <Form.Control
                name="cart_quantity"
                type="number"
                value={cart_quantity}
                disabled
              />
              <Button
                variant="link"
                disabled={cart_quantity === quantity}
                onClick={handleButtonAddProduct.bind(this, data, handleAddProductToCartItem)}
              >
                <i className="fa fa-plus"></i>
              </Button>
            </div>
          </Col>
          <Col xs={3} sm={3} md={3} className="align-self-center text-center">
            {`$${totalPrice.toFixed(3)}`}
          </Col>
        </Row>
      </li>
    );
};

export default CartItem;
