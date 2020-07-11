import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";
import Truncate from 'react-truncate';
import { GET_PRODUCT_SEARCH} from '../../../controller/ProductController';
import './css/search-style.css';


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list_product:[],
            q : this.props.location.q
            // pict : GET_IMAGE_PRODUCT
        }
    }
    
    componentDidMount(){
        GET_PRODUCT_SEARCH(this.props.location.q).then(res => {
            // console.log(res)
            this.setState({
                list_product:res
            })
        })
        
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.location.q !== prevProps.location.q) {
            // console.log("NEW")
            GET_PRODUCT_SEARCH(this.props.location.q).then(res => {
                console.log(res)
                this.setState({
                    list_product:res
                })
            })
        }
    }
    
    render() {
        return (
            // <div>
            //     <h1>SEARCH PAGE</h1>
            //     <h2>{this.props.location.q}</h2>
            // </div>
            <div className="container">
                {/* Title */}
                <Helmet>
                <meta charSet="utf-8" />
                <title>Produk - Necis</title>
                </Helmet>
                <div className="row mt-4 popular-items">
                    {this.state.list_product.map((u, index) =>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 mt-2 mb-2">
                            <div className="single-popular-items mb-50 text-center">
                                <div className="popular-img">
                                    <img src={u.cover} alt="Image" className="img-fluid"></img>
                                    <div className="img-cap">
                                        <span><Link to={`/product/detail/${u.slug}`} className="link-custom-2">Detail</Link></span>
                                    </div>
                                    {/* <div className="favorit-items">
                                        <span className="flaticon-heart"></span>
                                    </div> */}
                                </div>
                                <div className="popular-caption">
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
        );
    }
}

export default Search;