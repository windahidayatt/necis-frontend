import React, { Component } from 'react';
import {Helmet} from "react-helmet";

class How extends Component {
    render() {
        return (
            <div>
                {/* Title */}
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>How? - Necis</title>
                </Helmet>

                {/* Content */}
                <h3>How necis deliver your danus?</h3>
            </div>
        );
    }
}

export default How;