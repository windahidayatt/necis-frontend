import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import './css/login-style.css';
import { Link } from 'react-router-dom';
import {LOGIN_CUSTOMER, LOGOUT_CUSTOMER} from '../../../controller/LoginController';
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
            // console.log(res);
            this.props.history.push('/cust-profile');
        })
    }

    logOut() {
        LOGOUT_CUSTOMER().then(res => {
            // console.log(res)
            // this.setState({
            //     list_product:res
            // })
        })
        localStorage.removeItem('custtoken');
        this.props.history.push('/login');
    }

    render() {
        return (
            <div>
                {/* Title */}
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Masuk - Necis</title>
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
                                        <h3 className="card-title mb-4">Masuk</h3>
                                        <form onSubmit={this.handleSubmit}>
                                            <div className="form-group">
                                                <input type="email" name="email" className="form-control" aria-describedby="emailHelp" placeholder="E-mail" value={this.state.email} onChange={this.handleChange} required></input>
                                            </div>
                                            <div className="form-group">
                                                <input type="password" name="password" className="form-control" placeholder="Kata Sandi" value={this.state.password} onChange={this.handleChange} required></input>
                                            </div>
                                            <button type="submit" className="btn btn-primary btn-lg btn-block mt-4 mb-2">Masuk</button>
                                            <Link to='/login' className="link-custom link1-custom mt-3">Masuk sebagai Toko</Link>
                                            <Link to='/login' className="link-custom link2-custom mt-3">Lupa Kata Sandi</Link>
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