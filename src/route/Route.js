import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom'

// Function Route
import PublicRoute from './PublicRoute';

// View
import Home from '../view/page/Home/Home';
import Profile from '../view/page/Profile/Profile';
import Product from '../view/page/Product/Product';
import ProductDetail from '../view/page/Product/ProductDetail';
import Event from '../view/page/Event/Event';
import EventDetail from '../view/page/Event/EventDetail';
import How from '../view/page/How/How';
import Login from '../view/page/Login/Login';
import SignUp from '../view/page/SignUp/SignUp';
import Cart from '../view/page/Cart/Cart';
import CustProfile from '../view/page/CustProfile/CustProfile';


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
                <PublicRoute path="/product/detail/:slug" component={ProductDetail} />

                {/* Event Route */}
                <PublicRoute exact path="/event" component={Event} />
                <PublicRoute path="/event/detail/:id" component={EventDetail} />

                {/* How Route */}
                <PublicRoute path="/how" component={How} />

                {/* Sign In Route */}
                <PublicRoute path="/login" component={Login} />

                {/* Sign Up Route */}
                <PublicRoute path="/sign-up" component={SignUp}/>
                
                {/* Cart Route */}
                {/* <PublicRoute path="/cart" component={Cart}/> */}

                <CustProfile>
                    {/* Customer Profile Route */}
                    <PublicRoute path="/cart" component={Cart}/>
                </CustProfile>
            </Switch>
        </div>
    </Router>
)

export default AppRoute;