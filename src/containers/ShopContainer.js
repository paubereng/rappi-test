import React, { Component, Fragment } from 'react';
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
  componentDidMount() {
    this.props.productActions.getProducts();
    this.props.categoriesActions.fetchCategories();
  }
  handleFilter = (ev, filters) => {
    ev.preventDefault();
    this.props.productActions.getProductsFiltered(filters);
  }
  handleResetFilter = (ev) => {
    this.props.productActions.resetProductsFiltered();
  }
  handleOrder = (name) => {
    this.props.productActions.getProductsOrdered(name);
  }
  handleAddProduct = (product) => {
    this.props.cartActions.addProductToCart(product);
  }
  handleClickCategory = (category) => {
    this.props.productActions.getProductsFilteredByCategory(category.id);
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
        <div className="spinner--wrapper">
          <Spinner animation="grow" />
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
    let { last_level } = this.state;

    if(is_loading){
      return(
        <div className="spinner--wrapper">
          <Spinner animation="grow" />
        </div>
      )
    }
    return (
      <Fragment>
        {last_level && <SearchBar handleSearchProduct={this.handleSearchProduct}/>}
        <ProductList
          data={products}
          handleAddProduct={this.handleAddProduct}
        />
      </Fragment>
    )
  }
  render(){
    return (
      <Container className="shop-container">
        <Row>
          <Col xs={5} sm={4} md={3} className="col-category-filter">
              {this.renderCategories()}
              <ProductFilter
                handleFilter={this.handleFilter}
                handleResetFilter={this.handleResetFilter}
              />
          </Col>
          <Col xs={7} sm={8} md={9} className="col-products">
            <ProductOrder handleOrder={this.handleOrder}/>
            {this.renderProductList()}
          </Col>
        </Row>
      </Container>
    );
  };
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
