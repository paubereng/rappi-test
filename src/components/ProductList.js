import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ data }) => {
  return (
    <ul className="product-list">
      {data.map(product =>  <ProductItem key={product.id} data={product}/>)}
    </ul>
  );
};

export default ProductList;
