import React, { Component } from 'react';
import { GET_ACCOUNT } from '../../../controller/CustProfileController';
import jwt_decode from 'jwt-decode';
import {withRouter} from 'react-router-dom'

class CustProfile extends Component {
    constructor() {
        super();
        
        this.state = {
            account:undefined,
        }

    }

    componentDidMount(){
        const jwt = localStorage.getItem('custtoken');
        console.log(jwt);
        if(!jwt){
            this.props.history.push('/login');
        }
        GET_ACCOUNT().then(res => {
            console.log(res)
            this.setState({
                account:res.data
            })
        }).catch(err => {
            this.props.history.push('/login');
        })
    }
    render() {
        if(this.state.account === undefined){
            return(
            <div>
                Loading...
            </div>);
        }
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default withRouter(CustProfile);