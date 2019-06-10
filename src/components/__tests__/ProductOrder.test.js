import React from 'react';
import { shallow } from 'enzyme';
import ProductOrder from '../ProductOrder';

describe('ProductOrder container', () => {
  let component;
  const handleClick = jest.fn();
  const mockProps = {
    handleOrder: handleClick
  }

  beforeEach(()=>{
    component = shallow(<ProductOrder {...mockProps} />);
  });

  it('render without crash', () => {
    expect(component.exists()).toBe(true);
  });

  it('render 3 <li> tags', () => {
    expect(component.find('li').length).toBe(3);
  });

  it('on click button handleOrder it\'s called 1 time', () => {
    component.find('li').at(1).simulate('click');
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('change input value', () => {
    component.find('li').at(0).simulate('click', {
      target: { value: '1'}
    });
    expect(component.state().price).toEqual(1);
  });

});
