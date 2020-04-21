import React, { Component } from 'react';
import { GET_LIST_PRODUCT } from '../../../controller/ProductController';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";
import Truncate from 'react-truncate';
import './css/product-style.css';

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
                {/* Title */}
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Product - Necis</title>
                </Helmet>

                <div className="container-fluid">
                    <div className="row" style={{ marginTop : "10px" }}>
                        {this.state.list_product.map((u, index) =>
                            <div className="col-lg-3">
                                <div class="card card-custom h-10">
                                    <img class="card-img-top img-fluid" src="https://via.placeholder.com/150x60" alt={`Card${index}`}></img>
                                        <div class="card-body">
                                            
                                            <h5 class="card-title">{u.id}</h5>
                                            <p class="card-text">
                                                <Truncate lines={1} ellipsis={""}>
                                                    {u.title}
                                                </Truncate>
                                            </p>
                                            <Link to={`/product/detail/${u.id}`} class="btn btn-primary btn-block" role="button">Detail</Link>
                                        </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                
                
                {/* <table class="table">
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
                </table> */}
            </div>
        );
    }
}

export default Product;