import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { GET_ACCOUNT } from '../../../controller/CustProfileController';

class AuthCust extends Component {
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
                account:res
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
                </div>
            );
        }
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default withRouter(AuthCust);