import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import './css/login-style.css';
import { Link } from 'react-router-dom';
import {LOGIN_CUSTOMER} from '../../../controller/LoginController';
import {isLogin} from './../../../utils/Utils'


class Login extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            email : "",
            password : "",
            loginErrors : ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.logOut = this.logOut.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit(event){
        // console.log("Form submitted" + this.state.name + "" + this.state.email);
        event.preventDefault();

        const cust = {
            email : this.state.email,
            password : this.state.password
        }

        LOGIN_CUSTOMER(cust).then(res =>{
            console.log(res);
            this.props.history.push('/cust-profile');
        })
    }

    logOut() {
        
        console.log(localStorage.getItem('custtoken'));
        localStorage.removeItem('custtoken');
        console.log(localStorage.getItem('custtoken'));

        this.props.history.push('/login');
    }

    render() {
        return (
            <div>
                {/* Title */}
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Login - Necis</title>
                </Helmet>

                {/* Content */}
                {isLogin() ? 
                    <div>
                        {this.logOut()}
                    </div>
                :
                    <div className="container-fluid container-form">
                        <div className="row mt-5">
                            <div className="col-lg-12 margin-content">
                                <div className="card card-login mt-4 mb-4">
                                    <div className="card-body">
                                        <h3 className="card-title mb-4">Login</h3>
                                        <form onSubmit={this.handleSubmit}>
                                            <div className="form-group">
                                                <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" value={this.state.email} onChange={this.handleChange} required></input>
                                            </div>
                                            <div className="form-group">
                                                <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={this.state.password} onChange={this.handleChange} required></input>
                                            </div>
                                            <button type="submit" className="btn btn-primary btn-lg btn-block mt-4 mb-2">Login</button>
                                            <Link to='/login' className="link-custom link1-custom mt-3">Login as a store</Link>
                                            <Link to='/login' className="link-custom link2-custom mt-3">Forgot Password?</Link>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>    
                }
                    
            </div>
        );
    }
}

export default Login;