import React, { Component } from 'react';
import './css/product_detail-style.css';
import { GET_PRODUCT, GET_IMAGE_PRODUCT } from '../../../controller/ProductController';
import {ADD_TO_CART} from '../../../controller/CartController';

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
            pict : GET_IMAGE_PRODUCT,
            stock : '',
            qty : '1'
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleAddtoCart = this.handleAddtoCart.bind(this);
        this.js_btn_minus = this.js_btn_minus.bind(this);
        this.js_btn_plus = this.js_btn_plus.bind(this);

    }
    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleAddtoCart(event){
        // console.log("Form submitted" + this.state.name + "" + this.state.email);
        event.preventDefault();

        const newItem = {
            id : this.state.id,
            qty : this.state.qty
        }

        ADD_TO_CART(newItem).then(res =>{
            this.props.history.push('/cart');
        })
    }

    js_btn_minus(){
        if(this.state.qty > 1){
            this.setState({
                qty : this.state.qty-1
            });
        }
    }
    js_btn_plus(){
        if(this.state.qty < this.state.stock){
            this.setState({
                qty : parseInt(this.state.qty)+parseInt('1')
            });
        }
    }

    componentDidMount(){
        GET_PRODUCT(this.props.match.params.slug).then(res => {
            console.log(res)
            this.setState({
                id:res.id,
                // title:res.title,
                // body:res.body
                // nyoba dari aris
                name:res.name,
                price:res.price,
                description:res.description,
                cover:res.cover,
                stock : res.quantity
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
                                                <button className="btn btn-primary" type="button" onClick={this.js_btn_minus}>&#8722;</button>
                                                </div>
                                                <input type="text" name="qty" className="form-control text-center border mr-0" placeholder=""
                                                aria-label="Example text with button addon" aria-describedby="button-addon1" value={this.state.qty} onChange={this.handleChange}></input>
                                                <div className="input-group-append">
                                                    <button className="btn btn-primary" type="button" onClick={this.js_btn_plus}>&#43;</button>
                                                </div>
                                            </div>
                                    
                                        </div>
                                        <button className="btn btn-primary" onClick={this.handleAddtoCart}>Add to Cart</button>          
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