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
                <div class="product_image_area">
                    <div class="container">
                        <div class="row s_product_inner">
                            <div class="col-md-6 mt-5">
                                <div class="owl-carousel owl-theme s_Product_carousel">
                                    <div class="single-prd-item">
                                        {/* <img class="img-fluid" src="https://via.placeholder.com/500x500" alt=""></img> */}
                                        <img class="img-fluid w-100" src={this.state.pict+this.state.cover} alt=""></img>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 mt-4">
                                <div class="s_product_text">
                                    <h3>{this.state.name}</h3>
                                    <h2>Rp{this.state.price}</h2>
                                    <h6>Category : Food & Beverage</h6>
                                    <h6>Availability : Ready Stock</h6>
                                    <p>{this.state.description}</p>
                                    <div class="product_count mt-3">
                                        <label for="qty">Quantity:</label>
                                        <div class="mb-5">
                                            <div class="input-group mb-3" style={{maxWidth: "200px"}}>
                                                <div class="input-group-prepend">
                                                <button class="btn btn-primary js-btn-minus" type="button">&#8722;</button>
                                                </div>
                                                <input type="text" class="form-control text-center border mr-0" value="1" placeholder=""
                                                aria-label="Example text with button addon" aria-describedby="button-addon1"></input>
                                                <div class="input-group-append">
                                                    <button class="btn btn-primary js-btn-plus" type="button">&#43;</button>
                                                </div>
                                            </div>
                                    
                                        </div>
                                        <a class="btn btn-primary" href="#">Add to Cart</a>               
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