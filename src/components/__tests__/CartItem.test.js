import React from 'react';
import { mount } from 'enzyme';
import CartItem from '../CartItem';

describe('CartItem container', () => {
  let component;
  const handleDeleteAllProducts = jest.fn();
  const handleRemoveProduct = jest.fn();
  const handleAddProduct = jest.fn();
  const mockProps = {
    data: {
      "cart_quantity": 3,
      "quantity": 308,
      "price": "$8,958",
      "available": false,
      "sublevel_id": 3,
      "name": "aute",
      "id": "58b5a5b1b6b6c7aacc25b3fb",
      "image": "./img/coffe.png"
    },
    handleRemoveProductToCartItem: handleDeleteAllProducts,
    handleAddProductToCartItem: handleAddProduct,
    handleRemoveProductItemToCartItem: handleRemoveProduct
  }

  beforeEach(()=>{
    component = mount(<CartItem {...mockProps} />);
  });

  it('render without crash', () => {
    expect(component.exists()).toBe(true);
  });

  it('on click button handleRemoveProductToCartItem it\'s called 1 time', () => {
    component.find('.cart-item__product-info button').simulate('click');
    expect(handleDeleteAllProducts).toHaveBeenCalledTimes(1);
  });

  it('on click button handleRemoveProductItemToCartItem it\'s called 1 time', () => {
    component.find('.cart-item__quantity button').at(0).simulate('click');
    expect(handleRemoveProduct).toHaveBeenCalledTimes(1);
  });

  it('on click button handleAddProductToCartItem it\'s called 1 time', () => {
    component.find('.cart-item__quantity button').at(1).simulate('click');
    expect(handleAddProduct).toHaveBeenCalledTimes(1);
  });

});
