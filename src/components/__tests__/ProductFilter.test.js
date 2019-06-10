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

});
