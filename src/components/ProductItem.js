import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ProductItem = ({ data }) => {
  let { name, id, available, price, quantity } = data;
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
              disabled={!available}>
              Add to cart
            </Button>
          </div>
        </Card.Footer>
      </Card>
    </li>
  );
};

export default ProductItem;
