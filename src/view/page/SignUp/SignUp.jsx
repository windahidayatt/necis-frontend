import React, { Component } from 'react';
import {Helmet} from 'react-helmet';

class SignUp extends Component {
    render() {
        return (
            <div>
                {/* Title */}
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Sign Up - Necis</title>
                </Helmet>

                {/* Content */}
                <h1>Ini Sign Up.</h1>
            </div>
        );
    }
}

export default SignUp;