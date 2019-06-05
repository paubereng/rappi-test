import React, { PureComponent  } from 'react';
import cs from 'classnames';

const INITIAL_STATE = {
  price: false,
  quantity: false,
  available: false
}

class ProductOrder extends PureComponent {
  constructor(props) {
   super(props);
   this.state = {
     ...INITIAL_STATE
   }
  }
  handleClickOrderItem = (name, ev ) => {
    this.setState({
      ...INITIAL_STATE,
      [name]: !this.state[name]
    })
    this.props.handleOrder(name);
  }
  render(){
    let { price, quantity, available } = this.state;
    let productItemPrice = cs('product-order__item',
      {'order-item--pressed': price}
    );
    let productItemQuantity = cs('product-order__item',
      {'order-item--pressed': quantity}
    );
    let productItemAvailable = cs('product-order__item',
      {'order-item--pressed': available}
    );

    return (
      <div className="product-order">
        <ul className="product-order__list">
          <li className={productItemPrice} onClick={this.handleClickOrderItem.bind(this, "price")}>Price</li>
          <li className={productItemQuantity} onClick={this.handleClickOrderItem.bind(this, "quantity")}>Quantity</li>
          <li className={productItemAvailable} onClick={this.handleClickOrderItem.bind(this, "available")}>Availability</li>
        </ul>
      </div>
    );
  };
};

export default ProductOrder;
