import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ data }) => {
  console.log(data.products)
  return (
    <ul className="product-list">
      {data.products.map(product =>  <ProductItem key={product.id} data={product}/>)}
    </ul>
  );
};

export default ProductList;
