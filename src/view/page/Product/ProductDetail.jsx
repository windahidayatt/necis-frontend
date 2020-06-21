import React, { Component } from 'react';
import './css/product_detail-style.css';
import { GET_PRODUCT, GET_IMAGE_PRODUCT } from '../../../controller/ProductController';

class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // title:'',
            // body:'',
            // nyoba dari aris
            name:'',
            price:'',
            description:'',
            pict : GET_IMAGE_PRODUCT
        }
    }
    
    componentDidMount(){
        GET_PRODUCT(this.props.match.params.slug).then(res => {
            console.log(res)
            this.setState({
                // id:res.id,
                // title:res.title,
                // body:res.body
                // nyoba dari aris
                name:res.name,
                price:res.price,
                description:res.description,
                cover:res.cover
            })
        })
    }

    render() {
        return (
            <div>
                {/* <h4>{this.state.title}</h4>
                <hr/>
                <p>{this.state.body}</p> */}
                <div className="product_image_area">
                    <div className="container">
                        <div className="row s_product_inner">
                            <div className="col-md-6 mt-5">
                                <div className="owl-carousel owl-theme s_Product_carousel">
                                    <div className="single-prd-item">
                                        {/* <img className="img-fluid" src="https://via.placeholder.com/500x500" alt=""></img> */}
                                        <img className="img-fluid w-100" src={this.state.pict+this.state.cover} alt=""></img>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mt-4">
                                <div className="s_product_text">
                                    <h3>{this.state.name}</h3>
                                    <h2>Rp{this.state.price}</h2>
                                    <h6>Category : Food & Beverage</h6>
                                    <h6>Availability : Ready Stock</h6>
                                    <p>{this.state.description}</p>
                                    <div className="product_count mt-3">
                                        <label for="qty">Quantity:</label>
                                        <div className="mb-5">
                                            <div className="input-group mb-3" style={{maxWidth: "200px"}}>
                                                <div className="input-group-prepend">
                                                <button className="btn btn-primary js-btn-minus" type="button">&#8722;</button>
                                                </div>
                                                <input type="text" className="form-control text-center border mr-0" value="1" placeholder=""
                                                aria-label="Example text with button addon" aria-describedby="button-addon1"></input>
                                                <div className="input-group-append">
                                                    <button className="btn btn-primary js-btn-plus" type="button">&#43;</button>
                                                </div>
                                            </div>
                                    
                                        </div>
                                        <a className="btn btn-primary" href="#">Add to Cart</a>               
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductDetail;