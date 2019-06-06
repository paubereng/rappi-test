import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import MainMenu from '../components/MainMenu';
import Footer from '../components/Footer';

class MainContainer extends Component{
  constructor(props) {
   super(props);
   this.state = {}
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

export default connect(mapStateToProps)(MainContainer);
