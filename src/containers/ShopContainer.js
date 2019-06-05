import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionsCreatorProducts from '../reducers/ProductsReducer';
import * as actionsCreatorsCategories from '../reducers/CategoriesReducer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CategoriesMenu from '../components/CategoriesMenu';
import ProductList from '../components/ProductList';
import ProductFilter from '../components/ProductFilter';
import Spinner from 'react-bootstrap/Spinner';


class ShopContainer extends Component{
  constructor(props) {
   super(props);
   this.state = {}
  }
  componentDidMount() {
    this.props.productActions.getProducts();
    this.props.categoriesActions.fetchCategories();
  }
  handleFilter = (ev, filters) => {
    ev.preventDefault();
    this.props.productActions.getProductsFiltered(filters);
  }
  render(){
    let { products, categories } = this.props;

    return (
      <Container>
        <Row>
          <Col xs={4} md={2}>
            {categories.is_loading
              ? <Spinner animation="grow" />
              : <CategoriesMenu data={categories.categories}/>}
              <ProductFilter handleFilter={this.handleFilter}/>
          </Col>
          <Col xs={8} md={10}>
            <h1>Products</h1>
            {products.is_loading
              ? <Spinner animation="grow" />
              : <ProductList data={products.products}/>}
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
    categoriesActions: bindActionCreators(actionsCreatorsCategories, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopContainer);
