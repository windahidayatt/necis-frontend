import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import { GET_LIST_CART } from '../../../controller/CartController';
import withSizes from 'react-sizes';
import './css/cart-style.css';
import kripca from './assets/kripca.png';
import risol from './assets/risol.jpg';

const mapSizesToProps = ({ width }) => ({
    isTab: width <= 768,
})

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list_cart:[],
            // pict : GET_IMAGE_PRODUCT
        }
    }

    componentDidMount(){
        GET_LIST_CART().then(res => {
            // console.log(res)
            // this.setState({
            //     list_cart:res
            // })
        })
    }
    
    render() {
        // return <div>{this.props.isMobile ? 'Is Mobile' : 'Is Not Mobile'}</div>
        return (
            <div>
                {/* Title */}
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Cart - Necis</title>
                </Helmet>

                
                <section className="site-section  pb-0">
                    {this.props.isTab ?
                        <div className="container">
                            <div className="row mb-2 justify-content-center">
                                <div className="col-md-8 text-center">
                                    {/* <h2 className="h2 text-black site-section-heading text-center"><b>{this.state.title}</b></h2> */}
                                    <h2 className="h2 text-black site-section-heading text-center"><b>CART</b></h2>
                                    <hr />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <img src={kripca}alt="Image" className="img-fluid"></img>
                                </div>
                                <div className="col-6">
                                    <h5 className="cart-product-title text-black">Trius Cabernet France 2011</h5>
                                    <p>$55.00</p>
                                    <div className="row mt-4">
                                        <div className="col-8">
                                            <div className="input-group mb-3 quantity-td">
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
                                        <div className="col-4">
                                            <a href="#" className="btn btn-secondary">X</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        <div className="container">
                            <div className="row mb-2 justify-content-center">
                                <div className="col-md-8 text-center">
                                    {/* <h2 className="h2 text-black site-section-heading text-center"><b>{this.state.title}</b></h2> */}
                                    <h2 className="h2 text-black site-section-heading text-center"><b>CART</b></h2>
                                    <hr />
                                </div>
                            </div>
                            <div className="row mb-5">
                            <form className="col-md-12" method="post">
                                <div className="site-blocks-table">
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th className="product-thumbnail">Image</th>
                                        <th className="product-name">Product</th>
                                        <th className="product-price">Price</th>
                                        <th className="product-quantity">Quantity</th>
                                        <th className="product-total">Total</th>
                                        <th className="product-remove">Remove</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td className="product-thumbnail">
                                            <img src={kripca}alt="Image" className="img-fluid"></img>
                                        </td>
                                        <td className="product-name">
                                            <h5 className="cart-product-title text-black">Trius Cabernet France 2011</h5>
                                        </td>
                                        <td>$55.00</td>
                                        <td>
                                            <div className="input-group quantity-td">
                                                <div className="input-group-prepend">
                                                <button className="btn btn-primary js-btn-minus" type="button">&#8722;</button>
                                                </div>
                                                <input type="text" className="form-control text-center border mr-0" value="1" placeholder=""
                                                aria-label="Example text with button addon" aria-describedby="button-addon1"></input>
                                                <div className="input-group-append">
                                                <button className="btn btn-primary js-btn-plus" type="button">&#43;</button>
                                                </div>
                                            </div>
                                        </td>
                                        <td>$49.00</td>
                                        <td><a href="#" className="btn btn-primary height-auto btn-sm">X</a></td>
                                    </tr>
                        
                                    <tr>
                                        <td className="product-thumbnail">
                                        <img src={risol} alt="Image" className="img-fluid"></img>
                                        </td>
                                        <td className="product-name">
                                        <h5 className="cart-product-title text-black">Trius Cabernet France 2011</h5>
                                        </td>
                                        <td>$49.00</td>
                                        <td>
                                        <div className="input-group quantity-td">
                                            <div className="input-group-prepend">
                                            <button className="btn btn-primary js-btn-minus" type="button">&#8722;</button>
                                            </div>
                                            <input type="text" className="form-control text-center border mr-0" value="1" placeholder=""
                                            aria-label="Example text with button addon" aria-describedby="button-addon1"></input>
                                            <div className="input-group-append">
                                            <button className="btn btn-primary js-btn-plus" type="button">&#43;</button>
                                            </div>
                                        </div>
                        
                                        </td>
                                        <td>$49.00</td>
                                        <td><a href="#" className="btn btn-primary height-auto btn-sm">X</a></td>
                                    </tr>
                                    </tbody>
                                </table>
                                </div>
                            </form>
                            </div>
                        </div>
                    }
                </section>
                <div className="site-section pt-3">
                    <div className="container">
                        <div className="row">
                        <div className="col-md-12 pl-5">
                            <div className="row justify-content-end">
                                <div className="col-md-12 text-right border-bottom mb-5">
                                    <h3 className="text-black h4 text-uppercase">Cart Totals</h3>
                                </div>
                            <div className="col-md-4">
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <span className="text-black">Subtotal</span>
                                    </div>
                                    <div className="col-md-6 text-right">
                                        <strong className="text-black">$230.00</strong>
                                    </div>
                                </div>
                                <div className="row mb-5">
                                    <div className="col-md-6">
                                        <span className="text-black">Total</span>
                                    </div>
                                    <div className="col-md-6 text-right">
                                        <strong className="text-black">$230.00</strong>
                                    </div>
                                </div>
                    
                                <div className="row mb-5">
                                    <div className="col-md-12">
                                        <button className="btn btn-primary btn-lg btn-block" onClick='/'>Proceed To
                                        Checkout</button>
                                    </div>
                                </div>
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

// export default Cart;
export default withSizes(mapSizesToProps)(Cart);