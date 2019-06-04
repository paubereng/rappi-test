import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import MainMenu from '../components/MainMenu';
import Footer from '../components/Footer';

class MainContainer extends Component{
  constructor(props) {
   super(props);
   this.state = {}
  }

  render(){
    return (
      <Container>
        <MainMenu />
        {this.props.children}
        <Footer />
      </Container>
    );
  };
};

export default MainContainer;
