import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class ProductItem extends PureComponent {
  handleButtonAddProduct = (ev) => {
    ev.preventDefault();
    this.props.handleAddProductItem(this.props.data);
  }
  render (){
    let { name, available, price, image } = this.props.data;
    return (
      <li className="product-item">
        <Card className={!available ? 'card--disabled' : null}>
        <Card.Img variant="top" src={image} alt="product" className="product-item__image" />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
          </Card.Body>
          <Card.Footer>
            <div className="product-item__price">{price}</div>
            <div>
              <Button
                variant="primary"
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
