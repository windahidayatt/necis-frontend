import React, { Component } from 'react';
import { GET_PRODUCT } from '../../../controller/ProductController';

class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:'',
            body:'',
        }
    }
    
    componentDidMount(){
        GET_PRODUCT(this.props.match.params.id).then(res => {
            this.setState({
                title:res.title,
                body:res.body
            })
        })
    }

    render() {
        return (
            <div>
                <h4>{this.state.title}</h4>
                <p>{this.state.body}</p>
            </div>
        );
    }
}

export default ProductDetail;