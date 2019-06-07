import React, { PureComponent } from 'react';
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

export default ProductItem;
