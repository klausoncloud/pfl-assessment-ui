import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import logo from './KoC3.svg';

import ProductListContainer from './ProductListContainer';
import ProductOrderContainer from './ProductOrderContainer';
import OrderStatusContainer from './OrderStatusContainer';
import { ROUTE_BASE, ROUTE_PRODUCT_LIST, ROUTE_PRODUCT_DETAIL, ROUTE_ORDER_STATUS } from './routeNames';

class App extends Component {
  render() {
    return (
      <Router basename={ROUTE_BASE}>
        <div className="container-fluid">
          <nav className="navbar navbar-light bg-light justify-content-between mb-3">
            <a className="navbar-brand logo" href="#">
              <img src={logo} width="50" height="50" alt="logo" />
              Klaus on Cloud
            </a>
            <h1>PFL API Example</h1>
          </nav>

          <Route exact path={ROUTE_PRODUCT_LIST} component={ProductListContainer} />
          <Route exact path={ROUTE_PRODUCT_DETAIL} component={ProductOrderContainer} />
          <Route exact path={ROUTE_ORDER_STATUS} component={OrderStatusContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
