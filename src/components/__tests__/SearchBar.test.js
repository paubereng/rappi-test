import React from 'react';
import { mount } from 'enzyme';
import SearchBar from '../SearchBar';

describe('SearchBar container', () => {
  let component;
  const handleClick = jest.fn();
  const mockProps = {
    handleSearchProduct: handleClick
  }

  beforeEach(()=>{
    component = mount(<SearchBar {...mockProps} />);
  });

  it('render without crash', () => {
    expect(component.exists()).toBe(true);
  });

  it('render input', () => {
    expect(component.find('input').length).toBe(1);
  });

  it('change input value', () => {
    component.find('input').simulate('change', {
      target: { value: 'ok'}
    });
    expect(component.state().term_search).toEqual('ok');
  });

  it('render button search', () => {
    expect(component.find('button').length).toBe(1);
  });

  it('on click button search handleSearchProduct it\'s called 1 time', () => {
    component.find('button').simulate('click');
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
