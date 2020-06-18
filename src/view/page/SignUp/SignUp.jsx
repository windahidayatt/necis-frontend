import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import { Link } from 'react-router-dom';


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
                {/* <h1>Ini Sign Up.</h1> */}
                <div className="container-fluid container-form">
                    <div className="row mt-5">
                        <div className="col-lg-12 margin-content">
                            <div class="card card-login mt-4 mb-4">
                                <div class="card-body">
                                    <h3 className="card-title mb-4">Sign Up</h3>
                                    <form>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Name"></input>
                                        </div>
                                        <div class="form-group">
                                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"></input>
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Confirm Password"></input>
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-lg btn-block mt-4 mb-2">Signup</button>
                                        <Link to='/sign-up' className="link-custom link1-custom mt-3">Sign Up as a store</Link>
                                        <Link to='/login' className="link-custom link2-custom mt-3">Already Have Account? Login</Link>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div> 
            </div>
        );
    }
}

export default SignUp;