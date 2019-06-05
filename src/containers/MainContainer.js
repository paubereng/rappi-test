import React, { Component, Fragment } from 'react';
import MainMenu from '../components/MainMenu';
import Footer from '../components/Footer';

class MainContainer extends Component{
  constructor(props) {
   super(props);
   this.state = {}
  }

  render(){
    return (
      <Fragment>
        <MainMenu />
        <div className="main-container">
          {this.props.children}
        </div>
        <Footer />
      </Fragment>
    );
  };
};

export default MainContainer;
