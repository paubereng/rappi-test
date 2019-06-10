import React from 'react';
import { mount } from 'enzyme';
import CartCheckout from '../CartCheckout';

describe('CartCheckout container', () => {
  let component;
  const handleClick = jest.fn();
  const mockProps = {
    data: [{
      "cart_quantity": 1,
      "quantity": 308,
      "price": "$8,958",
      "available": false,
      "sublevel_id": 3,
      "name": "aute",
      "id": "58b5a5b1b6b6c7aacc25b3fb",
      "image": "./img/coffe.png"
    }],
    handleCheckoutProcess: handleClick
  }

  beforeEach(()=>{
    component = mount(<CartCheckout {...mockProps} />);
  });

  it('render without crash', () => {
    expect(component.exists()).toBe(true);
  });

  it('render button', () => {
    expect(component.find('button').length).toBe(1);
  });

  // it('on click button handleSearchProduct it\'s called 1 time', () => {
  //   const event = Object.assign(jest.fn(), {preventDefault: () => {}});
  //   component.find('button').simulate('click', event);
  //   expect(event).toHaveBeenCalledTimes(1);
  // });

});
