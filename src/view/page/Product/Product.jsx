import React, { Component } from 'react';
import { GET_LIST_PRODUCT, GET_IMAGE_PRODUCT } from '../../../controller/ProductController';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";
import Truncate from 'react-truncate';
import './css/product-style.css';
import CoverA from '../../layout/component/CoverA/CoverA';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list_product:[],
            pict : GET_IMAGE_PRODUCT
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

                <CoverA name="Products" info="Best products only for you!"/>

                {/* <div className="container-fluid">
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
                </div> */}
                
                <section id="tabs">
                    <div class="container">
                        <div class="row mt-4">
                            <div class="col-xs-12 ">
                                <nav>
                                    <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                                        <a class="nav-item nav-link active" id="nav-all-tab" data-toggle="tab" href="#nav-all" role="tab" aria-controls="nav-all" aria-selected="true">All</a>
                                        <a class="nav-item nav-link" id="nav-fnb-tab" data-toggle="tab" href="#nav-fnb" role="tab" aria-controls="nav-fnb" aria-selected="false">Food & Beverage</a>
                                        <a class="nav-item nav-link" id="nav-other-tab" data-toggle="tab" href="#nav-other" role="tab" aria-controls="nav-other" aria-selected="false">Other</a>
                                    </div>
                                </nav>
                                <div class="tab-content py-3 px-3 px-sm-0 popular-items" id="nav-tabContent">
                                    <div class="tab-pane fade show active" id="nav-all" role="tabpanel" aria-labelledby="nav-all-tab">
                                        <div class="container">
                                            <div class="row mt-4">
                                                {this.state.list_product.map((u, index) =>
                                                    <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 mt-2 mb-2">
                                                        <div class="single-popular-items mb-50 text-center">
                                                            <div class="popular-img">
                                                                <img src={this.state.pict + u.cover} alt="Image" class="img-fluid"></img>
                                                                <div class="img-cap">
                                                                    <span><Link to={`/product/detail/${u.slug}`} class="link-custom-2">Detail</Link></span>
                                                                </div>
                                                                {/* <div class="favorit-items">
                                                                    <span class="flaticon-heart"></span>
                                                                </div> */}
                                                            </div>
                                                            <div class="popular-caption">
                                                                <h3><a href="product_details.html">
                                                                    <Truncate lines={1} ellipsis={""}>
                                                                            {u.name}
                                                                    </Truncate></a></h3>
                                                                <span>Rp{u.price}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}                        
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="nav-fnb" role="tabpanel" aria-labelledby="nav-fnb-tab">       
                                        <div class="container">
                                            <div class="row mt-4">
                                                {this.state.list_product.map((u, index) =>
                                                    u.brand_id == 2 &&
                                                    <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 mt-2 mb-2">
                                                        <div class="single-popular-items mb-50 text-center">
                                                            <div class="popular-img">
                                                                <img src={this.state.pict + u.cover} alt="Image" class="img-fluid"></img>
                                                                <div class="img-cap">
                                                                    <span><Link to={`/product/detail/${u.slug}`} class="link-custom-2">Detail</Link></span>
                                                                </div>
                                                                {/* <div class="favorit-items">
                                                                    <span class="flaticon-heart"></span>
                                                                </div> */}
                                                            </div>
                                                            <div class="popular-caption">
                                                                <h3><a href="product_details.html">
                                                                    <Truncate lines={1} ellipsis={""}>
                                                                            {u.name}
                                                                    </Truncate></a></h3>
                                                                <span>Rp{u.price}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}    
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="nav-other" role="tabpanel" aria-labelledby="nav-other-tab"> 
                                        <div class="container">
                                            <div class="row mt-4">
                                                {this.state.list_product.map((u, index) =>
                                                    u.brand_id != 2 &&
                                                    <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 mt-2 mb-2">
                                                        <div class="single-popular-items mb-50 text-center">
                                                            <div class="popular-img">
                                                                <img src={this.state.pict + u.cover} alt="Image" class="img-fluid"></img>
                                                                <div class="img-cap">
                                                                    <span><Link to={`/product/detail/${u.slug}`} class="link-custom-2">Detail</Link></span>
                                                                </div>
                                                                {/* <div class="favorit-items">
                                                                    <span class="flaticon-heart"></span>
                                                                </div> */}
                                                            </div>
                                                            <div class="popular-caption">
                                                                <h3><a href="product_details.html">
                                                                    <Truncate lines={1} ellipsis={""}>
                                                                            {u.name}
                                                                    </Truncate></a></h3>
                                                                <span>Rp{u.price}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>                
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </section>
                
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