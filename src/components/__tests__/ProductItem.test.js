import React from 'react';
import { mount } from 'enzyme';
import ProductItem from '../ProductItem';
import Button from 'react-bootstrap/Button';

describe('ProductItem container', () => {
  let component;
  const handleClick = jest.fn();
  const mockProps = {
    data: {
      "quantity": 308,
      "price": "$8,958",
      "available": false,
      "sublevel_id": 3,
      "name": "aute",
      "id": "58b5a5b1b6b6c7aacc25b3fb",
      "image": "./img/coffe.png"
    },
    handleAddProductItem: handleClick
  }

  beforeEach(()=>{
    component = mount(<ProductItem {...mockProps} />);
  });

  it('render without crash', () => {
    expect(component.exists()).toBe(true);
  });

  it('render button', () => {
    expect(component.find('button').length).toBe(1);
  });

});
