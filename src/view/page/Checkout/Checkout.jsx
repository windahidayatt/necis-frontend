import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import withSizes from 'react-sizes';
import {Link} from 'react-router-dom';
import { GET_LIST_CART } from '../../../controller/CartController';
import { GET_CHECKOUT, POST_CHECKOUT } from '../../../controller/CheckoutController';
import './css/checkout-style.css'


const mapSizesToProps = ({ width }) => ({
    isTab: width <= 768,
})

class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : '',
            mainAddress : {
                alias : '',
                address : '',
                phone : ''
            },
            list_address : [],
            selectedAddress : '',
            list_cart:[],
            total : ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleClick(event){
        console.log(this.state.list_address);
        {this.state.list_address.map((u, index) =>
            ((u.id).toString() === (this.state.selectedAddress).toString() &&
                this.setState({
                    mainAddress : {
                        alias : u.alias,
                        address : u.address_1,
                        phone : u.phone
                    }
                })
            )
        )}
    }
    
    handleSubmit(event){
        // console.log("Form submitted" + this.state.name + "" + this.state.email);
        event.preventDefault();

        const newOrder = {
            billing_address : this.state.selectedAddress,
            rate : "",
            shipment_obj_id : ""
        }

        POST_CHECKOUT(newOrder).then(res =>{
            console.log(res);
            // this.props.history.push('/login');
        })
    }

    componentDidMount(){
        const jwt = localStorage.getItem('custtoken');
        // console.log(jwt);
        if(!jwt){
            this.props.history.push('/login');
        }
        GET_LIST_CART().then(res => {
            // console.log(res)
            this.setState({
                list_cart:res[0],
                total : res[1]
            })
        })
        GET_CHECKOUT().then(res => {
            this.setState({
                name : res[0].name,
                mainAddress : {
                    alias : res[1].alias,
                    address : res[1].address_1,
                    phone : res[1].phone
                },
                list_address : res[2],
                selectedAddress : res[2][0].id
            })
        })
    }
    
    render() {
        return (
            <div>
                {/* Title */}
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Checkout - Necis</title>
                </Helmet>

                <section className="site-section  pb-0">
                    <div className="container">
                        <div className="row mb-4 mt-2 row-co-custom-1">
                            <div className="col-md-12 col-12">
                                <h3 className="h3-co-custom">ALAMAT PENERIMA</h3>
                                <hr/>
                                <div className="row">
                                <div className="col-md-2 col-6">
                                    <p className="p-co-custom">{this.state.name}</p>
                                </div>
                                <div className="col-md-6 col-6">
                                    <p className="p-co-custom">{this.state.mainAddress.address} ({this.state.mainAddress.phone})</p>
                                </div>
                                <div className="col-md-2 col-6">
                                    <p className="p-co-custom">{this.state.mainAddress.alias}</p>
                                </div>
                                <div className="col-md-2 col-6">
                                    <button className="btn btn-secondary" data-toggle="modal" data-target="#CoModal">UBAH</button>
                                </div>
                                </div>
                            </div>
                            {/* <!-- Modal --> */}
                            <div className="modal fade" id="CoModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Pilih Alamat</h5>
                                    </div>
                                    <div className="modal-body">
                                    {this.state.list_address.map((u, index) =>
                                        <div className="form-check">
                                            {this.state.selectedAddress === u.id ?
                                                <input className="form-check-input" type="radio" name="selectedAddress" value={u.id} onChange={this.handleChange} checked></input>
                                                :
                                                <input className="form-check-input" type="radio" name="selectedAddress" value={u.id} onChange={this.handleChange}></input>
                                            }
                                            <label className="form-check-label">
                                                {u.alias} | {u.address_1} | {u.phone}
                                            </label>
                                        </div>
                                    )}
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal"  onClick={this.handleClick}>Tutup</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {this.props.isTab ?
                            <div>
                                {this.state.list_cart.map((u, index) =>
                                <div className="row row-co-custom-1">
                                    <div className="col-12">
                                        <h3 className="h3-co-custom">PRODUK DIPESAN</h3>
                                        <hr/>
                                    </div>
                                    <div className="col-6">
                                        <img src={u.cover}alt="Image" className="img-fluid"></img>
                                    </div>
                                    <div className="col-6">
                                        <h5 className="cart-product-title text-black">{u.name}</h5>
                                        <p>Rp{u.price}.00</p>
                                        <p>Kuantitas : {u.qty}</p>
                                        <p>Total : Rp{u.qty * u.price}.00</p>
                                    </div>
                                </div>
                                )} 
                            </div>
                            :
                            <div>
                                <div className="row row-co-custom-1">
                                    <div className="col-md-12">
                                        <h3 className="h3-co-custom">PRODUK DIPESAN</h3>
                                        <div className="site-blocks-table">
                                        <table className="table">
                                            <thead>
                                            <tr>
                                                <th className="product-thumbnail">Gambar</th>
                                                <th className="product-name">Produk</th>
                                                <th className="product-price">Harga</th>
                                                <th className="product-quantity">Kuantitas</th>
                                                <th className="product-total">Total</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {this.state.list_cart.map((u, index) =>
                                            <tr>
                                                <td className="product-thumbnail">
                                                    <img src={u.cover}alt="Image" className="img-fluid"></img>
                                                </td>
                                                <td className="product-name">
                                                    <h5 className="cart-product-title text-black">{u.name}</h5>
                                                </td>
                                                <td>Rp{u.price}.00</td>
                                                <td>
                                                    {u.qty}
                                                </td>
                                                <td>Rp{u.price*u.qty}.00</td>
                                            </tr>
                                            )}
                                            </tbody>
                                        </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                        <div className="row mt-4 row-co-custom-1">
                            <div className="col-md-12 pl-5">
                                <div className="row justify-content-end">
                                    <div className="col-md-12">
                                        <hr/>
                                    </div>
                                    <div className="col-md-7 col-12 mb-4">
                                        <p><b>PEMBAYARAN</b></p>
                                        <div class="form-check">
                                        <input class="form-check-input" type="radio" name="radio-payment" id="radio-payment1" value="option1" checked></input>
                                        <label class="form-check-label" for="radio-payment1">
                                            COD (Cash on Delivery)
                                        </label>
                                        </div>
                                        <div class="form-check">
                                        <input class="form-check-input" type="radio" name="radio-payment" id="radio-payment2" value="option2" disabled></input>
                                        <label class="form-check-label" for="radio-payment2">
                                            Bank Transfer
                                        </label>
                                        </div>
                                    </div>
                                    <div className="col-md-5 col-12">
                                        <div className="row mb-3">
                                            <div className="col-6">
                                                <span className="text-black">Subtotal untuk Produk</span>
                                            </div>
                                            <div className="col-6 text-right">
                                                <strong className="text-black">Rp{this.state.total}</strong>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-6">
                                                <span className="text-black">Biaya Ongkir</span>
                                            </div>
                                            <div className="col-6 text-right">
                                                <strong className="text-black">Rp0</strong>
                                            </div>
                                        </div>
                                        <div className="row mb-5">
                                            <div className="col-6">
                                                <span className="text-black">Total</span>
                                            </div>
                                            <div className="col-6 text-right">
                                                <strong className="text-black">Rp{this.state.total}</strong>
                                            </div>
                                        </div>
                            
                                        <div className="row mb-3">
                                            <div className="col-md-12">
                                                {/* <button className="btn btn-primary btn-lg btn-block" onClick='/checkout'>Proceed To
                                                Checkout</button> */}
                                                <form onSubmit={this.handleSubmit}>
                                                    <div className="form-group">
                                                        <input type="hidden" name="billing_address" className="form-control" value={this.state.selectedAddress}></input>
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="hidden" name="rate" className="form-control" value=""></input>
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="hidden" name="shipment_obj_id" className="form-control" value=""></input>
                                                    </div>
                                                    <button type="submit" className="btn btn-primary btn-lg btn-block">Daftar</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default  withSizes(mapSizesToProps)(Checkout);