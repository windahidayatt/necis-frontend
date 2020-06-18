import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import withSizes from 'react-sizes';
import './css/cart-style.css';
import kripca from './assets/kripca.png';
import risol from './assets/risol.jpg';

const mapSizesToProps = ({ width }) => ({
    isTab: width <= 768,
})

class Cart extends Component {
    render() {
        // return <div>{this.props.isMobile ? 'Is Mobile' : 'Is Not Mobile'}</div>
        return (
            <div>
                {/* Title */}
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Cart - Necis</title>
                </Helmet>

                
                <section class="site-section  pb-0">
                    {this.props.isTab ?
                        <div class="container">
                            <div class="row mb-2 justify-content-center">
                                <div class="col-md-8 text-center">
                                    {/* <h2 class="h2 text-black site-section-heading text-center"><b>{this.state.title}</b></h2> */}
                                    <h2 class="h2 text-black site-section-heading text-center"><b>CART</b></h2>
                                    <hr />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-6">
                                    <img src={kripca}alt="Image" class="img-fluid"></img>
                                </div>
                                <div class="col-6">
                                    <h5 class="cart-product-title text-black">Trius Cabernet France 2011</h5>
                                    <p>$55.00</p>
                                    <div class="row mt-4">
                                        <div class="col-8">
                                            <div class="input-group mb-3 quantity-td">
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
                                        <div class="col-4">
                                            <a href="#" class="btn btn-secondary">X</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        <div class="container">
                            <div class="row mb-2 justify-content-center">
                                <div class="col-md-8 text-center">
                                    {/* <h2 class="h2 text-black site-section-heading text-center"><b>{this.state.title}</b></h2> */}
                                    <h2 class="h2 text-black site-section-heading text-center"><b>CART</b></h2>
                                    <hr />
                                </div>
                            </div>
                            <div class="row mb-5">
                            <form class="col-md-12" method="post">
                                <div class="site-blocks-table">
                                <table class="table">
                                    <thead>
                                    <tr>
                                        <th class="product-thumbnail">Image</th>
                                        <th class="product-name">Product</th>
                                        <th class="product-price">Price</th>
                                        <th class="product-quantity">Quantity</th>
                                        <th class="product-total">Total</th>
                                        <th class="product-remove">Remove</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td class="product-thumbnail">
                                            <img src={kripca}alt="Image" class="img-fluid"></img>
                                        </td>
                                        <td class="product-name">
                                            <h5 class="cart-product-title text-black">Trius Cabernet France 2011</h5>
                                        </td>
                                        <td>$55.00</td>
                                        <td>
                                            <div class="input-group quantity-td">
                                                <div class="input-group-prepend">
                                                <button class="btn btn-primary js-btn-minus" type="button">&#8722;</button>
                                                </div>
                                                <input type="text" class="form-control text-center border mr-0" value="1" placeholder=""
                                                aria-label="Example text with button addon" aria-describedby="button-addon1"></input>
                                                <div class="input-group-append">
                                                <button class="btn btn-primary js-btn-plus" type="button">&#43;</button>
                                                </div>
                                            </div>
                                        </td>
                                        <td>$49.00</td>
                                        <td><a href="#" class="btn btn-primary height-auto btn-sm">X</a></td>
                                    </tr>
                        
                                    <tr>
                                        <td class="product-thumbnail">
                                        <img src={risol} alt="Image" class="img-fluid"></img>
                                        </td>
                                        <td class="product-name">
                                        <h5 class="cart-product-title text-black">Trius Cabernet France 2011</h5>
                                        </td>
                                        <td>$49.00</td>
                                        <td>
                                        <div class="input-group quantity-td">
                                            <div class="input-group-prepend">
                                            <button class="btn btn-primary js-btn-minus" type="button">&#8722;</button>
                                            </div>
                                            <input type="text" class="form-control text-center border mr-0" value="1" placeholder=""
                                            aria-label="Example text with button addon" aria-describedby="button-addon1"></input>
                                            <div class="input-group-append">
                                            <button class="btn btn-primary js-btn-plus" type="button">&#43;</button>
                                            </div>
                                        </div>
                        
                                        </td>
                                        <td>$49.00</td>
                                        <td><a href="#" class="btn btn-primary height-auto btn-sm">X</a></td>
                                    </tr>
                                    </tbody>
                                </table>
                                </div>
                            </form>
                            </div>
                        </div>
                    }
                </section>
                <div class="site-section pt-3">
                    <div class="container">
                        <div class="row">
                        <div class="col-md-12 pl-5">
                            <div class="row justify-content-end">
                                <div class="col-md-12 text-right border-bottom mb-5">
                                    <h3 class="text-black h4 text-uppercase">Cart Totals</h3>
                                </div>
                            <div class="col-md-4">
                                <div class="row mb-3">
                                    <div class="col-md-6">
                                        <span class="text-black">Subtotal</span>
                                    </div>
                                    <div class="col-md-6 text-right">
                                        <strong class="text-black">$230.00</strong>
                                    </div>
                                </div>
                                <div class="row mb-5">
                                    <div class="col-md-6">
                                        <span class="text-black">Total</span>
                                    </div>
                                    <div class="col-md-6 text-right">
                                        <strong class="text-black">$230.00</strong>
                                    </div>
                                </div>
                    
                                <div class="row mb-5">
                                    <div class="col-md-12">
                                        <button class="btn btn-primary btn-lg btn-block" onclick="window.location='checkout.html'">Proceed To
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