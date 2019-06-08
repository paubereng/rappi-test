import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { OPTIONS_FILTER_AVAILABLE } from '../constants';

const INITIAL_STATE = {
  available: 0,
  stock: undefined,
  min_price: undefined,
  max_price: undefined
}

class ProductFilter extends Component{
  constructor(props) {
   super(props);
   this.state = {
     ...INITIAL_STATE
   }
  }
  componentDidMount() {
    let { filters } = this.props.products;
    let keys = Object.keys(filters);
    for (let index in keys) {
      if(filters[keys[index]] !== this.state[keys[index]]){
        this.setState({ [keys[index]]: filters[keys[index]] });
      }
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
    ev.preventDefault();
    this.props.handleFilter(ev, this.state);
  }
  handleClickButtonResetFilter = ev => {
    ev.persist();
    this.setState({
      ...INITIAL_STATE
    }, () => {
      this.props.handleResetFilter(ev, this.state);
    });
  }
  render(){
    let { available, stock, min_price, max_price } = this.state;
    return (
      <Form className="product-filter">
        <div className="product-filter__title">Filter options</div>
        <div className="product-filter__body">
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
          <div className="filter-buttons">
            <Button
              variant="primary"
              onClick={this.handleClickButtonFilter.bind(this)}>
              Filter
            </Button>
            <Button
              variant="light"
              onClick={this.handleClickButtonResetFilter.bind(this)}>
              Reset Filter
            </Button>
          </div>
        </div>
      </Form>
    );
  };
};

ProductFilter.propTypes = {
  products: PropTypes.object,
  handleFilter: PropTypes.func.isRequired,
  handleResetFilter: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    products: state.products
  };
}

export default connect(mapStateToProps)(ProductFilter);
