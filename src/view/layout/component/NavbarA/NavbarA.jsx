import React, { Component } from 'react';
import './css/navbar_a-style.css';
import { Link } from 'react-router-dom';
import '../../../../../node_modules/font-awesome/css/font-awesome.min.css'; 
import logo from './assets/logo-necis.jpeg';

class NavbarA extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-light navbar-custom">
                    <Link to='/' className="navbar-brand mb-0 h1" >
                        <img src={logo} width="60" height="60" className="d-inline-block align-top rounded-circle" alt=""></img>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item menu-item">
                                {/* <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a> */}
                                <Link to='/' className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item menu-item">
                                {/* <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a> */}
                                <Link to='/event' className="nav-link">Event</Link>
                            </li>
                            <li className="nav-item menu-item">
                                {/* <a className="nav-link" href="#">Profile</a> */}
                                <Link to='/product' className='nav-link'>Product</Link>
                            </li>
                            <li className="nav-item menu-item" >
                                {/* <a className="nav-link" href="#">Profile</a> */}
                                <Link to='/how' className='nav-link'>How?</Link>
                            </li>
                            <li className="nav-item menu-item" >
                                {/* <a className="nav-link" href="#">Profile</a> */}
                                <Link to='/profile' className='nav-link'>About</Link>
                            </li>
                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                <div className="dropdown-menu" aria-labelledby="dropdownId">
                                    <a className="dropdown-item" href="#">Action 1</a>
                                    <a className="dropdown-item" href="#">Action 2</a>
                                </div>
                            </li> */}
                        </ul>
                    </div>
                    <div className="collapse navbar-collapse w-100 flex-md-column" id="navbarCollapse">
                        <ul className="navbar-nav ml-auto medium mt-0">
                            <li className="nav-item">
                                <Link to='/login' className="nav-link"><i className="fa fa-sign-in" aria-hidden="true"></i> Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/sign-up' className='nav-link'><i className="fa fa-user-plus" aria-hidden="true"></i> Sign Up</Link>
                            </li>
                        </ul>
                        <form className="form-inline ml-auto mb-2">
                            <div className="input-group">
                                <input type="text" className="form-control border-dark" placeholder="Search"></input>
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="button"><i className="fa fa-search" aria-hidden="true"></i></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </nav>
            </div>

        );
    }
}

export default NavbarA;