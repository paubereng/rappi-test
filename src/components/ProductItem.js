import React, { PureComponent } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class ProductItem extends PureComponent {
  constructor(props) {
   super(props);
  }
  handleButtonAddProduct = (ev) => {
    ev.preventDefault();
    this.props.handleAddProductItem(this.props.data);
  }
  render (){
    let { name, id, available, price, quantity } = this.props.data;
    return (
      <li className="product-item">
        <Card className={!available ? 'card--disabled' : null}>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
            </Card.Text>
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
