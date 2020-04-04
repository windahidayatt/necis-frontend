import React, { Component } from 'react';
import './css/navbar_a-style.css';
import { Link } from 'react-router-dom';

class NavbarA extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-sm navbar-dark bg-custom">
                    <Link to='/' class="navbar-brand" >Navbar</Link>
                    <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation"></button>
                    <div class="collapse navbar-collapse" id="collapsibleNavId">
                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li class="nav-item active">
                                {/* <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> */}
                                <Link to='/' class="nav-link">Home</Link>
                            </li>
                            <li class="nav-item">
                                {/* <a class="nav-link" href="#">Profile</a> */}
                                <Link to='/profile' class='nav-link'>Profile</Link>
                            </li>
                            <li class="nav-item">
                                {/* <a class="nav-link" href="#">Profile</a> */}
                                <Link to='/product' class='nav-link'>Product</Link>
                            </li>
                            {/* <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                <div class="dropdown-menu" aria-labelledby="dropdownId">
                                    <a class="dropdown-item" href="#">Action 1</a>
                                    <a class="dropdown-item" href="#">Action 2</a>
                                </div>
                            </li> */}
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavbarA;