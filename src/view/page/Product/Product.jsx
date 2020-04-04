import React, { Component } from 'react';
import { GET_LIST_PRODUCT } from '../../../controller/ProductController';
import { Link } from 'react-router-dom';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list_product:[]
        }
    }
    
    componentDidMount(){
        GET_LIST_PRODUCT().then(res => {
            // console.log(res)
            this.setState({
                list_product:res
            })
        })
    }

    render() {
        return (
            <div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">User ID</th>
                            <th scope="col">ID</th>
                            <th scope="col">Title</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.list_product.map((u, index) =>
                            
                            <tr>
                                <th scope="row">{index+1}</th>
                                <td>{u.userId}</td>
                                <td>{u.id}</td>
                                <td>{u.title}</td>
                                <td>
                                    <Link to={`/product/detail/${u.id}`} class="btn btn-primary btn-block" role="button">Detail</Link>
                                </td>
                            </tr>
                            
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Product;