import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import MainContainer from './containers/MainContainer';
import ShopContainer from './containers/ShopContainer';
import CartContainer from './containers/CartContainer';

const history = createBrowserHistory();

const Routes = () => {
  return (
    <Router history={history}>
      <MainContainer>
        <div>
          <Route exact path="/" component={ShopContainer} />
          <Route path="/cart" component={CartContainer} />
        </div>
      </MainContainer>
    </Router>
  )
}

export default Routes;
