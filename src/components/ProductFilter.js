import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { OPTIONS_FILTER_AVAILABLE } from '../constants'

class ProductFilter extends Component{
  constructor(props) {
   super(props);
   this.state = {
     available: 0,
     stock: undefined,
     min_price: undefined,
     max_price: undefined
   }
  }
  handleChangeInput = ev => {
    let name = ev.target.name;
    let value = ev.target.value;

    this.setState({
      [name]: value
    });
  }
  handleClickButtonFilter = ev => {
    this.props.handleFilter(ev, this.state);
  }
  render(){
    let { available, stock, min_price, max_price } = this.state;
    return (
      <Form className="product-filter">
        <div className="product-filter__title">Filter options</div>
        <Form.Group>
          <Form.Label>Availability</Form.Label>
          <Form.Control name="available" as="select" value={available} onChange={this.handleChangeInput} >
            {OPTIONS_FILTER_AVAILABLE.map(option => {
              return (
                <option key={option.value} value={option.value}>{option.name}</option>
              )
            })}
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Stock:</Form.Label>
          <Form.Control
            name="stock"
            type="number"
            value={stock || ''}
            onChange={this.handleChangeInput}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Min. price:</Form.Label>
          <Form.Control
            name="min_price"
            type="number"
            value={min_price || ''}
            onChange={this.handleChangeInput}
          />
          <Form.Label>Max. price:</Form.Label>
          <Form.Control
            name="max_price"
            type="number"
            value={max_price || ''}
            onChange={this.handleChangeInput}
          />
        </Form.Group>
        <Button
          variant="primary"
          onClick={this.handleClickButtonFilter.bind(this)}>
          Filter
        </Button>
      </Form>
    );
  };
};

export default ProductFilter;
