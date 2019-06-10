import React from 'react';
import { mount } from 'enzyme';
import CartList from '../CartList';
import CartItem from '../CartItem';

describe('CartList container', () => {
  let component;
  const handleDeleteAllProducts = jest.fn();
  const handleRemoveProduct = jest.fn();
  const handleAddProduct = jest.fn();
  const mockProps = {
    data: [{
      "cart_quantity": 3,
      "quantity": 308,
      "price": "$8,958",
      "available": false,
      "sublevel_id": 3,
      "name": "aute",
      "id": "58b5a5b1b6b6c7aacc25b3fb",
      "image": "./img/coffe.png"
    },
    {
      "quantity": 891,
      "price": "$5,450",
      "available": true,
      "sublevel_id": 3,
      "name": "mollit",
      "id": "58b5a5b117bf36cf8aed54ab",
      "image": "./img/coffe-2.png"
    }],
    handleRemoveProductToCart: handleDeleteAllProducts,
    handleAddProductToCart: handleAddProduct,
    handleRemoveProductItemToCart: handleRemoveProduct
  }

  beforeEach(()=>{
    component = mount(<CartList {...mockProps} />);
  });

  it('render without crash', () => {
    expect(component.exists()).toBe(true);
  });

  it('render 2 ProductItem', () => {
    expect(component.find(CartItem).length).toBe(2);
  });

});
