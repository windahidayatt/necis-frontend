import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import { Link } from 'react-router-dom';
import {SIGNUP_CUSTOMER} from '../../../controller/SignUpController';

class SignUp extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name : "",
            email : "",
            password : "",
            password_confirmation : "",
            status : "1"
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit(event){
        // console.log("Form submitted" + this.state.name + "" + this.state.email);
        event.preventDefault();

        const newCust = {
            name : this.state.name,
            email : this.state.email,
            status : this.state.status,
            password : this.state.password,
            password_confirmation : this.state.password_confirmation
        }

        SIGNUP_CUSTOMER(newCust).then(res =>{
            this.props.history.push('/login');
        })
    }
    
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
                            <div className="card card-login mt-4 mb-4">
                                <div className="card-body">
                                    <h3 className="card-title mb-4">Sign Up</h3>
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-group">
                                            <input type="text" name="name" className="form-control" placeholder="Name" value={this.state.name} onChange={this.handleChange} required></input>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" value={this.state.email} onChange={this.handleChange} required></input>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={this.state.password} onChange={this.handleChange} required></input>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" name="password_confirmation" className="form-control" id="exampleInputPassword1" placeholder="Confirm Password" value={this.state.password_confirmation} onChange={this.handleChange} required></input>
                                        </div>
                                        <div className="form-group">
                                            <input type="hidden" name="status" className="form-control" value={this.state.status} ></input>
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-lg btn-block mt-4 mb-2">Sign Up</button>
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