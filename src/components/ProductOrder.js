import React, { PureComponent  } from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';

const INITIAL_STATE = {
  price: 0,
  quantity: 0,
  available: 0
}

class ProductOrder extends PureComponent {
  constructor(props) {
   super(props);
   this.state = {
     ...INITIAL_STATE
   }
  }
  componentDidMount() {
    let { prevOrder } = this.props;
    if(prevOrder && prevOrder.sort_order !== this.state[prevOrder.name]) {
      this.setState({
        [prevOrder.name]: prevOrder.sort_order
      })
    }
  }
  handleClickOrderItem = (name, ev ) => {
    let newState = {};
    let orderType = 0;
    if(this.state[name] === 0) {
      orderType = 1;
      newState = {
        ...INITIAL_STATE,
        [name]: orderType
      }
    }else if (this.state[name] === 1) {
      orderType = 2;
      newState = {
        ...INITIAL_STATE,
        [name]: orderType
      };
    }else {
      newState = {
        ...INITIAL_STATE
      }
    }
    this.setState({
      ...newState
    })
    this.props.handleOrder(name, orderType);
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
    let iconPriceOrder = cs({
      'order-icon fa': true,
      'fa-caret-up': price === 1,
      'fa-caret-down': price === 2
    });
    let iconQuantityOrder = cs({
      'order-icon fa': true,
      'fa-caret-up': quantity === 1,
      'fa-caret-down': quantity === 2
    });
    let iconAvailableOrder = cs({
      'order-icon fa': true,
      'fa-caret-up': available === 1,
      'fa-caret-down': available === 2
    });

    return (
      <div className="product-order">
        <div className="product-order__title">Sort by</div>
        <ul className="product-order__list">
          <li className={productItemPrice} onClick={this.handleClickOrderItem.bind(this, "price")}>
            Price <i className={iconPriceOrder}></i>
          </li>
          <li className={productItemQuantity} onClick={this.handleClickOrderItem.bind(this, "quantity")}>
            Quantity <i className={iconQuantityOrder}></i>
          </li>
          <li className={productItemAvailable} onClick={this.handleClickOrderItem.bind(this, "available")}>
            Availability <i className={iconAvailableOrder}></i>
          </li>
        </ul>
      </div>
    );
  };
};

ProductOrder.propTypes = {
  handleOrder: PropTypes.func.isRequired,
  prevOrder: PropTypes.object
};

export default ProductOrder;
