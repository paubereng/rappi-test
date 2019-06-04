import React from 'react';
import { Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import store from '../store/store';
import MainContainer from '../containers/MainContainer';
import ShopContainer from '../containers/ShopContainer';
import CartContainer from '../containers/CartContainer';

const history = createBrowserHistory();

const Routes = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <MainContainer>
          <div>
            <Route exact path="/" component={ShopContainer} />
            <Route path="/cart" component={CartContainer} />
          </div>
        </MainContainer>
      </Router>
    </Provider>
  )
}

export default Routes;
