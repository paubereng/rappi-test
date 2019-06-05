import React from 'react';
import ProductItem from './ProductItem';
import Alert from 'react-bootstrap/Alert';

const ProductList = ({ data }) => {
  if(!data || !data.length > 0) {
    return (
      <div className="message--wrapper">
        <Alert variant="dark">Not Found</Alert>
      </div>
    )
  }
  return (
    <ul className="product-list">
      {data.map(product =>  <ProductItem key={product.id} data={product}/>)}
    </ul>
  );
};

export default ProductList;
