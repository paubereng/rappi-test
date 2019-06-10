import React from 'react';
import { shallow } from 'enzyme';
import ProductFilter from '../ProductFilter';

describe('ProductFilter container', () => {
  let component;
  const mockProps = {
    prevFilters: {},
    handleFilter: jest.fn(),
    handleResetFilter: jest.fn()
  }

  beforeEach(()=>{
    component = shallow(<ProductFilter {...mockProps} />);
  });

  it('render without crash', () => {
    expect(component.exists()).toBe(true);
  });

  // it('change select value', () => {
  //   // console.log(component.debug());
  //   // console.log(component.html());
  //   console.log(component.find('.product-filter__body select'));
  //   component.find('.product-filter__body select').simulate('change', {
  //     target: { value: 1}
  //   });
  //   expect(component.state().available).toEqual(1);
  // });
  //
  // it('render input', () => {
  //   expect(component.find('.form-control').at(0).length).toBe(1);
  // });
  //
  // it('change input value', () => {
  //   //console.log(component.find('select'));
  //   component.find('select[available]').simulate('change', {
  //     target: { value: 1}
  //   });
  //   expect(component.state().available).toEqual(1);
  // });
  //
  // it('render button', () => {
  //   expect(component.find('button').length).toBe(1);
  // });

});
