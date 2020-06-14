import React, { Component } from 'react';
import {Helmet} from "react-helmet";

class Cart extends Component {
    render() {
        return (
            <div>
                {/* Title */}
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Cart - Necis</title>
                </Helmet>

                {/* Content */}
                <h1>Ini Cart.</h1>
            </div>
        );
    }
}

export default Cart;