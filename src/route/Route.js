import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom'

// Function Route
import PublicRoute from './PublicRoute';

// View
import Home from '../view/page/Home/Home';
import Profile from '../view/page/Profile/Profile';
import Product from '../view/page/Product/Product';
import ProductDetail from '../view/page/Product/ProductDetail';

const AppRoute = ({component = Component, layout: Layout, ...rest}) => (
    <Router>
        <div className="App">
            <Switch>
                
                {/* Home Route */}
                <PublicRoute exact path="/" component={Home} />

                {/* Profile Route */}
                <PublicRoute path="/profile" component={Profile} />

                {/* Product Route */}
                <PublicRoute exact path="/product" component={Product} />
                <PublicRoute path="/product/detail/:id" component={ProductDetail} />

                
            </Switch>
        </div>
    </Router>
)

export default AppRoute;