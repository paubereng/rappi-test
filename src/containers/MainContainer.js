import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionsCreatorProducts from '../reducers/ProductsReducer';
import * as actionsCreatorsCategories from '../reducers/CategoriesReducer';
import MainMenu from '../components/MainMenu';
import Footer from '../components/Footer';

class MainContainer extends Component{
  componentDidMount() {
    this.props.productActions.getProducts();
    this.props.categoriesActions.fetchCategories();
  }

  render(){
    let { cart } = this.props.cart;
    let productsNumber = cart.length;
    return (
      <Fragment>
        <MainMenu productsNumber={productsNumber}/>
        <div className="main-container">
          {this.props.children}
        </div>
        <Footer />
      </Fragment>
    );
  };
};

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

function mapDispatchToProps(dispatch) {
  return {
    productActions: bindActionCreators(actionsCreatorProducts, dispatch),
    categoriesActions: bindActionCreators(actionsCreatorsCategories, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
