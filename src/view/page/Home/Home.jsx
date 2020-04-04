import React, { Component } from 'react';
import {Helmet} from "react-helmet";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title : 'Home'
        }
    }
    
    render() {
        return (
            <div>
                {/* Title */}
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Home - Necis</title>
                </Helmet>

                {/* Content */}
                <h1>{this.state.title}</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae alias a doloribus saepe eveniet optio, mollitia natus dolore quis iure nemo hic rem magnam provident commodi atque porro. Perspiciatis, voluptatem.</p>
            </div>
        );
    }
}

export default Home;