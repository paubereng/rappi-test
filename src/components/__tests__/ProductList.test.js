import React from 'react';
import { mount } from 'enzyme';
import ProductList from '../ProductList';
import ProductItem from '../ProductItem';

describe('ProductList container', () => {
  let component;
  const mockProps = {
    data: [{
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
    handleAddProduct: jest.fn()
  }

  beforeEach(()=>{
    component = mount(<ProductList {...mockProps} />);
  });

  it('render without crash', () => {
    expect(component.exists()).toBe(true);
  });

  it('render 2 ProductItem', () => {
    expect(component.find(ProductItem).length).toBe(2);
  });

  it('render no product items message', () => {
    let props = {
      ...mockProps,
      data: []
    }
    component = mount(<ProductList {...props } />);
    expect(component.find('.message-wrapper').length).toBe(1);
    expect(component.find(ProductItem).length).toBe(0);
  });

});
