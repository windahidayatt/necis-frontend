import React, { Component } from 'react';
import { GET_ACCOUNT } from '../../../controller/CustProfileController';
import {Helmet} from 'react-helmet';
import CoverA from '../../layout/component/CoverA/CoverA';
import './css/cust_profile-style.css';

class CustProfile extends Component {
    constructor() {
        super();
        
        this.state = {
            account:"",
        }

    }

    componentDidMount(){
        const jwt = localStorage.getItem('custtoken');
        console.log(jwt);
        if(!jwt){
            this.props.history.push('/login');
        }
        GET_ACCOUNT().then(res => {
            console.log(res[0])
            this.setState({
                account:res[0]
            })
            console.log(this.state.account.name)
        }).catch(err => {
            this.props.history.push('/login');
        })
    }
    render() {
        return (
            <div>
                {/* Title */}
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Your Profile - Necis</title>
                </Helmet>
            
                <CoverA name="Your Profile" info="Account info and Order History!"/>

                <section id="tabs" className="site-section  pb-0">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-10 text-center">
                                <nav>
                                    <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                                        <a className="nav-item nav-link active" id="nav-all-tab" data-toggle="tab" href="#nav-all" role="tab" aria-controls="nav-all" aria-selected="true">Account Details</a>
                                        <a className="nav-item nav-link" id="nav-fnb-tab" data-toggle="tab" href="#nav-fnb" role="tab" aria-controls="nav-fnb" aria-selected="false">Order History</a>
                                    </div>
                                </nav>
                                <div className="tab-content py-3 px-3 px-sm-0 popular-items" id="nav-tabContent">
                                    <div className="tab-pane fade show active" id="nav-all" role="tabpanel" aria-labelledby="nav-all-tab">
                                        <div className="container">
                                            <div className="row mt-4 row-profile">
                                                <div className="col-4 text-right">
                                                    <h4 className="h4-profile-title">Name</h4>
                                                    <h4 className="h4-profile-title">Email</h4>
                                                </div>
                                                <div className="col-8 text-left">
                                                    <h4 className="h4-profile-value">{this.state.account.name}</h4>
                                                    <h4 className="h4-profile-value">{this.state.account.email}</h4>
                                                </div>     
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="nav-fnb" role="tabpanel" aria-labelledby="nav-fnb-tab">       
                                        <div className="container">
                                            <div className="row mt-4 row-profile tetc-center">
                                                <h4 className="h4-profile-title">ORDER HISTORY</h4> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </section>
                {/* {this.state.account.name} */}
            </div>
        );
    }
}

export default CustProfile;