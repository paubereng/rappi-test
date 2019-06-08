import React from 'react';
import ProductItem from './ProductItem';
import Alert from 'react-bootstrap/Alert';

const ProductList = ({ data, handleAddProduct }) => {
  if(!data || !data.length > 0) {
    return (
      <div className="message-wrapper">
        <Alert variant="dark">Not Found</Alert>
      </div>
    )
  }
  return (
    <ul className="product-list">
      {data.map(product =>  {
        return (
          <ProductItem
            key={product.id}
            data={product}
            handleAddProductItem={handleAddProduct}
          />
        )
      })}
    </ul>
  );
};

export default ProductList;
