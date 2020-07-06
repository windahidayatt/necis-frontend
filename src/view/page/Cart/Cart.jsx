import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import {Link} from 'react-router-dom';
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
            total : ''
        }
    }

    componentDidMount(){
        GET_LIST_CART().then(res => {
            console.log(res[0])
            if(res[0]==null){
                this.setState({
                    list_cart:[],
                    total : 0
                })
            }else{
                this.setState({
                    list_cart:res[0],
                    total : res[1]
                })
            }
            
        })
    }
    
    render() {
        // return <div>{this.props.isMobile ? 'Is Mobile' : 'Is Not Mobile'}</div>
        return (
            <div>
                {/* Title */}
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Keranjang - Necis</title>
                </Helmet>

                
                <section className="site-section  pb-0">
                    {this.props.isTab ?
                        <div className="container">
                            <div className="row mb-2 justify-content-center">
                                <div className="col-md-8 text-center">
                                    {/* <h2 className="h2 text-black site-section-heading text-center"><b>{this.state.title}</b></h2> */}
                                    <h2 className="h2 text-black site-section-heading text-center"><b>KERANJANG</b></h2>
                                    <hr />
                                </div>
                            </div>
                            {this.state.list_cart.map((u, index) =>
                            <div className="row mt-2">
                                <div className="col-6">
                                    <img src={u.cover}alt="Image" className="img-fluid"></img>
                                </div>
                                <div className="col-6">
                                    <h5 className="cart-product-title text-black">{u.name}</h5>
                                    <p>Rp{u.price}.00</p>
                                    <div className="row mt-4">
                                        <div className="col-8">
                                            <div className="input-group mb-3 quantity-td">
                                                <div className="input-group-prepend">
                                                    <button className="btn btn-primary js-btn-minus" type="button">&#8722;</button>
                                                </div>
                                                    <input type="text" className="form-control text-center border mr-0" value={u.qty} placeholder=""
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
                            )} 
                        </div>
                        :
                        <div className="container">
                            <div className="row mb-2 justify-content-center">
                                <div className="col-md-8 text-center">
                                    {/* <h2 className="h2 text-black site-section-heading text-center"><b>{this.state.title}</b></h2> */}
                                    <h2 className="h2 text-black site-section-heading text-center"><b>KERANJANG</b></h2>
                                    <hr />
                                </div>
                            </div>
                            <div className="row mb-5">
                            <form className="col-md-12" method="post">
                                <div className="site-blocks-table">
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th className="product-thumbnail">Gambar</th>
                                        <th className="product-name">Produk</th>
                                        <th className="product-price">Harga</th>
                                        <th className="product-quantity">Kuantitas</th>
                                        <th className="product-total">Total</th>
                                        <th className="product-remove">Hapus</th>
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
                                            <div className="input-group quantity-td">
                                                <div className="input-group-prepend">
                                                <button className="btn btn-primary js-btn-minus" type="button">&#8722;</button>
                                                </div>
                                                <input type="text" className="form-control text-center border mr-0" value={u.qty} placeholder=""
                                                aria-label="Example text with button addon" aria-describedby="button-addon1"></input>
                                                <div className="input-group-append">
                                                <button className="btn btn-primary js-btn-plus" type="button">&#43;</button>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Rp{u.price*u.qty}.00</td>
                                        <td><a href="#" className="btn btn-primary height-auto btn-sm">X</a></td>
                                    </tr>
                                    )}
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
                                    <h3 className="text-black h4 text-uppercase">TOTAL HARGA PRODUK DI KERANJANG</h3>
                                </div>
                            <div className="col-md-4">
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <span className="text-black">Subtotal</span>
                                    </div>
                                    <div className="col-md-6 text-right">
                                        <strong className="text-black">{this.state.total}</strong>
                                    </div>
                                </div>
                                <div className="row mb-5">
                                    <div className="col-md-6">
                                        <span className="text-black">Total</span>
                                    </div>
                                    <div className="col-md-6 text-right">
                                        <strong className="text-black">{this.state.total}</strong>
                                    </div>
                                </div>
                    
                                <div className="row mb-5">
                                    <div className="col-md-12">
                                        {/* <button className="btn btn-primary btn-lg btn-block" onClick='/checkout'>Proceed To
                                        Checkout</button> */}
                                        <Link to='/checkout' className='btn btn-primary btn-lg btn-block'>Periksa</Link>
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