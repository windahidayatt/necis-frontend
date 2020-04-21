import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import './css/login-style.css';

class Login extends Component {
    render() {
        return (
            <div>
                {/* Title */}
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Login - Necis</title>
                </Helmet>

                {/* Content */}
                <div className="container-fluid">
                    <div className="row">
                        <div class="card card-login mt-4 mb-4">
                            <div class="card-body">
                                This is some text within a card body.
                            </div>
                        </div>
                    </div>
                    
                </div>        
            </div>
        );
    }
}

export default Login;