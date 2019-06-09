import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionsCreatorProducts from '../reducers/ProductsReducer';
import * as actionsCreatorsCategories from '../reducers/CategoriesReducer';
import * as actionsCreatorsCart from '../reducers/CartReducer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CategoriesMenu from '../components/CategoriesMenu';
import ProductList from '../components/ProductList';
import ProductFilter from '../components/ProductFilter';
import ProductOrder from '../components/ProductOrder';
import SearchBar from '../components/SearchBar';
import Spinner from 'react-bootstrap/Spinner';


class ShopContainer extends Component{
  constructor(props) {
   super(props);
   this.state = {
     last_level: false
   }
  }
  handleFilter = (ev, filters) => {
    ev.preventDefault();
    let { categories } = this.props.products;
    this.props.productActions.getProductsFiltered(filters, categories);
  }
  handleResetFilter = (ev) => {
    this.props.productActions.resetProductsFiltered();
  }
  handleOrder = (name, orderType) => {
    this.props.productActions.getProductsOrdered(name, orderType);
  }
  handleAddProduct = (product) => {
    this.props.cartActions.addProductToCart(product);
  }
  handleClickCategory = (category) => {
    let { filters } = this.props.products;
    this.props.productActions.getProductsFiltered(filters, category);
    let isLastLevel = category.hasOwnProperty('sublevels');

    this.setState({
      last_level: !isLastLevel
    });
  }
  handleSearchProduct = (termSearch) => {
    this.props.productActions.getProductsSearched(termSearch);
  }

  renderCategories = () => {
    let { categories, is_loading } = this.props.categories;

    if(is_loading){
      return(
        <div className="spinner-wrapper">
          <Spinner animation="grow" variant="primary" />
        </div>
      )
    }
    return (
      <Fragment>
        <CategoriesMenu data={categories} handleClickCategory={this.handleClickCategory}/>
      </Fragment>
    )
  }
  renderProductList = () => {
    let { products, is_loading } = this.props.products;
    let { name, sublevels } = this.props.products.categories;
    let lastLevel = (name && (!sublevels || sublevels.length === 0)) ? true : false;

    if(is_loading){
      return(
        <div className="spinner-wrapper">
          <Spinner animation="grow" variant="primary" />
        </div>
      )
    }
    return (
      <Fragment>
        <div className="product-list__category-selected">Category: <b>{name ? name : 'All'}</b></div>
        {lastLevel && <SearchBar handleSearchProduct={this.handleSearchProduct}/>}
        <ProductList
          data={products}
          handleAddProduct={this.handleAddProduct}
        />
      </Fragment>
    )
  }
  render(){
    let { order, filters } = this.props.products;
    return (
      <Fragment>
        <div className="banner"/>
        <Container className="shop-container">
          <Row>
            <Col xs={5} sm={4} md={3} className="col-category-filter">
                {this.renderCategories()}
                <ProductFilter
                  handleFilter={this.handleFilter}
                  handleResetFilter={this.handleResetFilter}
                  prevFilters={filters}
                />
            </Col>
            <Col xs={7} sm={8} md={9} className="col-products">
              <ProductOrder handleOrder={this.handleOrder} prevOrder={order}/>
              {this.renderProductList()}
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  };
};

ShopContainer.propTypes = {
  products: PropTypes.object,
  categories: PropTypes.object
};

function mapStateToProps(state) {
  return {
    products: state.products,
    categories: state.categories
  };
}

function mapDispatchToProps(dispatch) {
  return {
    productActions: bindActionCreators(actionsCreatorProducts, dispatch),
    categoriesActions: bindActionCreators(actionsCreatorsCategories, dispatch),
    cartActions: bindActionCreators(actionsCreatorsCart, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopContainer);
