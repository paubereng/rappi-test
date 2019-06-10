import React from 'react';
import { mount } from 'enzyme';
import CategoriesMenu from '../CategoriesMenu';

describe('CategoriesMenu container', () => {
  let component;
  const handleClick = jest.fn();
  const mockProps = {
    data:[{
  		"id": 8,
  		"name": "Almuerzos",
  		"sublevels": [
  			{
  				"id": 9,
  				"name": "Fake 5"
  			},
  			{
  				"id": 10,
  				"name": "Fake 6"
  			}
  		]
  	}],
    handleClickCategory: handleClick
  }

  beforeEach(()=>{
    component = mount(<CategoriesMenu {...mockProps} />);
  });

  it('render without crash', () => {
    expect(component.exists()).toBe(true);
  });

  it('render 3 categories', () => {
    expect(component.find('.menu-category__item').length).toBe(3);
  });

  it('on click first category it change a true', () => {
    component.find('.menu-category__item').at(0).simulate('click', {
      target: { value: 'Almuerzos'}
    });
    expect(component.state().Almuerzos).toBe(true);
  });

});
