import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import withSizes from 'react-sizes';
import {Link} from 'react-router-dom';
import { GET_LIST_CART } from '../../../controller/CartController';
import './css/checkout-style.css'


const mapSizesToProps = ({ width }) => ({
    isTab: width <= 768,
})

class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list_cart:[],
            total : ''
        }
    }

    componentDidMount(){
        GET_LIST_CART().then(res => {
            // console.log(res[0])
            this.setState({
                list_cart:res[0],
                total : res[1]
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
                    {this.props.isTab ?
                        <div className="container">
                            {/* <div className="row mb-2 justify-content-center">
                                <div className="col-md-8 text-center">
                                    <h2 className="h2 text-black site-section-heading text-center"><b>KERANJANG</b></h2>
                                    <hr />
                                </div>
                            </div> */}
                            {this.state.list_cart.map((u, index) =>
                            <div className="row mt-2">
                                <div className="col-6">
                                    <img src={u.cover}alt="Image" className="img-fluid"></img>
                                </div>
                                <div className="col-6">
                                    <h5 className="cart-product-title text-black">{u.name}</h5>
                                    <p>Rp{u.price}.00</p>
                                    <p>Kuantitas : {u.qty}</p>
                                </div>
                            </div>
                            )} 
                        </div>
                        :
                        <div className="container">
                            <div className="row mb-4 row-co-custom-1">
                                <div className="col-md-12">
                                    <h3 className="h3-co-custom">ALAMAT PENERIMA</h3>
                                    <hr/>

                                    <div className="row">
                                    <div className="col-2">
                                        <p className="p-co-custom">Winda</p>
                                    </div>
                                    <div className="col-6">
                                        <p className="p-co-custom">Gedung A (08231241434)</p>
                                    </div>
                                    <div className="col-2">
                                        <p className="p-co-custom">Kantor</p>
                                    </div>
                                    <div className="col-2">
                                        <button className="btn btn-secondary">UBAH</button>
                                    </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="row mb-4 row-co-custom-1">
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
                            <div className="row row-co-custom-1">
                                <div className="col-md-12 pl-5">
                                    <div className="row justify-content-end">
                                        <div className="col-md-12">
                                            <hr/>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="row mb-3">
                                                <div className="col-md-6">
                                                    <span className="text-black">Subtotal untuk Produk</span>
                                                </div>
                                                <div className="col-md-6 text-right">
                                                    <strong className="text-black">Rp{this.state.total}</strong>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-md-6">
                                                    <span className="text-black">Biaya Ongkir</span>
                                                </div>
                                                <div className="col-md-6 text-right">
                                                    <strong className="text-black">Rp0</strong>
                                                </div>
                                            </div>
                                            <div className="row mb-5">
                                                <div className="col-md-6">
                                                    <span className="text-black">Total</span>
                                                </div>
                                                <div className="col-md-6 text-right">
                                                    <strong className="text-black">Rp{this.state.total}</strong>
                                                </div>
                                            </div>
                                
                                            <div className="row mb-3">
                                                <div className="col-md-12">
                                                    {/* <button className="btn btn-primary btn-lg btn-block" onClick='/checkout'>Proceed To
                                                    Checkout</button> */}
                                                    <Link to='/checkout' className='btn btn-primary btn-lg btn-block'>Buat Pesanan</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </section>
            </div>
        );
    }
}

export default  withSizes(mapSizesToProps)(Checkout);