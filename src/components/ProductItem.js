import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class ProductItem extends PureComponent {
  handleButtonAddProduct = (ev) => {
    ev.preventDefault();
    this.props.handleAddProductItem(this.props.data);
  }
  render (){
    let { name, available, price, image, quantity } = this.props.data;
    let availableClass = cs({
      'product-item__available': true,
      'product-item__available--in': available,
      'product-item__available--out': !available
    });
    return (
      <li className="product-item">
        <Card className={!available ? 'card--disabled' : null}>
        <Card.Img variant="top" src={image} alt="product" className="product-item__image" />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <div>{`${quantity} units`}</div>
            <div className={availableClass}>
              {available ? 'In stock' : 'Out of stock'}
            </div>
          </Card.Body>
          <Card.Footer>
            <div className="product-item__price">{price}</div>
            <div>
              <Button
                variant="secondary"
                onClick={this.handleButtonAddProduct.bind(this)}
                disabled={!available}>
                Add to cart
              </Button>
            </div>
          </Card.Footer>
        </Card>
      </li>
    );
  }
};

ProductItem.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.string,
    available: PropTypes.bool,
    image: PropTypes.string
  }),
  handleAddProductItem: PropTypes.func.isRequired
};

export default ProductItem;
