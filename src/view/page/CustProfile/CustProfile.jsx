import React, { Component } from 'react';
import { GET_ACCOUNT, POST_ADDRESS} from '../../../controller/CustProfileController';
import {Helmet} from 'react-helmet';
import CoverA from '../../layout/component/CoverA/CoverA';
import './css/cust_profile-style.css';

class CustProfile extends Component {
    constructor() {
        super();
        
        this.state = {
            account:"",
            list_addresses:[],
            _token : "",
            status : "1",
            alias : "",
            address_1 : "",
            address_2 : "",
            country_id : "100",
            zip : "",
            phone : "",
            CustAddress : [{alamat : "Gedung C", telepon : "081234324324"}, {alamat : "Gedung D", telepon : "089732646325"}]
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit(event){
        console.log("Form submitted" + this.state.address_1);
        event.preventDefault();
        // console.log("Form submitted" + this.state.name + "" + this.state.email);

        const newAddress = {
            _token : this.state._token,
            status : this.state.status,
            alias : this.state.alias,
            address_1 : this.state.address_1,
            address_2 : this.state.address_2,
            country_id : this.state.country_id,
            zip : this.state.zip,
            phone : this.state.phone,
        }

        POST_ADDRESS(this.state.account.id,newAddress).then(res =>{
            // this.props.history.push('/profile');
            window.location.reload(false);
        })
    }

    componentDidMount(){
        const jwt = localStorage.getItem('custtoken');
        // console.log(jwt);
        if(!jwt){
            this.props.history.push('/login');
        }
        GET_ACCOUNT().then(res => {
            console.log(res)
            this.setState({
                account:res[0],
                _token:res[3],
                list_addresses : res[0].addresses
            })
        }).catch(err => {
            this.props.history.push('/login');
        })
    }
    render() {
        return (
            <div>
                {/* Title */}
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Profil - Necis</title>
                </Helmet>
            
                <CoverA name="Profil" info="Infomasi akun dan Pesanan Kamu!"/>

                <section id="tabs" className="site-section  pb-0">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-10 text-center">
                                <nav>
                                    <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                                        <a className="nav-item nav-link active" id="nav-all-tab" data-toggle="tab" href="#nav-all" role="tab" aria-controls="nav-all" aria-selected="true">Detail Akun</a>
                                        <a className="nav-item nav-link" id="nav-fnb-tab" data-toggle="tab" href="#nav-fnb" role="tab" aria-controls="nav-fnb" aria-selected="false">Pesanan</a>
                                    </div>
                                </nav>
                                <div className="tab-content py-3 px-3 px-sm-0 popular-items" id="nav-tabContent">
                                    <div className="tab-pane fade show active" id="nav-all" role="tabpanel" aria-labelledby="nav-all-tab">
                                        <div className="container">
                                            <div className="row mt-4 row-profile">
                                                <div className="col-lg-4 col-6 text-left">
                                                    <h5 className="h5-profile-title">Nama</h5>
                                                    <hr style={{margin:0}}/>
                                                    <h4 className="h4-profile-value">{this.state.account.name}</h4>
                                                    <h5 className="h5-profile-title mt-3">E-mail</h5>
                                                    <hr style={{margin:0}}/>
                                                    <h4 className="h4-profile-value">{this.state.account.email}</h4>
                                                </div>
                                                <div className="col-lg-2 col-0 text-left">
                                                    
                                                </div>  
                                                <div className="col-lg-6 col-12 text-left">
                                                    <h5 className="h5-profile-title">Alamat</h5>
                                                    <hr style={{marginTop:0}}/>
                                                    {this.state.list_addresses.map((u, index) =>
                                                        <div>
                                                            <div className="row">
                                                                <div className="col-2">
                                                                    <p style={{margin:0}}>Alias</p>
                                                                    <p style={{margin:0}}>Alamat</p>
                                                                    <p style={{margin:0}}>Telepon</p>
                                                                </div>
                                                                <div className="col-1">
                                                                    <p style={{margin:0}}>:</p>
                                                                    <p style={{margin:0}}>:</p>
                                                                    <p style={{margin:0}}>:</p>
                                                                </div>
                                                                <div className="col-lg-9 col-8">
                                                                    <p style={{margin:0}}>{u.alias}</p>
                                                                    <p style={{margin:0}}>{u.address_1}</p>
                                                                    <p style={{margin:0}}>{u.phone}</p>
                                                                </div>
                                                            </div>
                                                            <hr/>
                                                        </div>
                                                    )}
                                                    
                                                    
                                                    {/* <div className="row">
                                                        <div className="col-2">
                                                            <p style={{margin:0}}>Alamat</p>
                                                            <p style={{margin:0}}>Telepon</p>
                                                        </div>
                                                        <div className="col-1">
                                                            <p style={{margin:0}}>:</p>
                                                            <p style={{margin:0}}>:</p>
                                                        </div>
                                                        <div className="col-lg-9 col-6">
                                                            <p style={{margin:0}}>Gedung C</p>
                                                            <p style={{margin:0}}>08122203012443</p>
                                                        </div>
                                                    </div>
                                                    <hr/> */}
                                                    <form onSubmit={this.handleSubmit}>
                                                        <div className="form-group">
                                                            <input type="hidden" name="_token" value={this.state._token} />
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="hidden" name="status" className="form-control" value={this.state.status}></input>
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="text" name="alias" className="form-control" placeholder="Alias (Gedung Kuliah/ Asrama)" value={this.state.alias} onChange={this.handleChange} required></input>
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="text" name="address_1" className="form-control" placeholder="Alamat" value={this.state.address_1} onChange={this.handleChange} required></input>
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="hidden" name="address_2" className="form-control" value={this.state.address_2}></input>
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="hidden" name="country_id" className="form-control" value={this.state.country_id}></input>
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="hidden" name="zip" className="form-control" value={this.state.zip}></input>
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="text" name="phone" className="form-control" placeholder="Telepon" value={this.state.phone} onChange={this.handleChange} required></input>
                                                        </div>
                                                        {/* <button type="submit" className="btn btn-primary btn-lg btn-block mt-4 mb-2">Masuk</button> */}
                                                        <button type="submit" className="btn btn-primary mb-3">+Tambah Alamat</button>          
                                                        {/* <Link to='/login' className="link-custom link1-custom mt-3">Masuk sebagai Toko</Link>
                                                        <Link to='/login' className="link-custom link2-custom mt-3">Lupa Kata Sandi</Link> */}
                                                    </form>
                                                    {/* <button className="btn btn-primary mb-3">+Tambah Alamat</button>           */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="nav-fnb" role="tabpanel" aria-labelledby="nav-fnb-tab">       
                                        <div className="container">
                                            <div className="row mt-4 row-profile text-center">
                                                <div className="col-lg-6 col-12 text-left">
                                                    <h5 className="h5-profile-title">Hari Ini (9 Juli 2020)</h5>
                                                    <hr style={{marginTop:0}}/>
                                                    <div className="row">
                                                        <div className="col-lg-4 col-2">
                                                            <p style={{margin:0}}>Alamat</p>
                                                            <p style={{margin:0}}>Total</p>
                                                            <p style={{margin:0}}>Produk</p>
                                                        </div>
                                                        <div className="col-lg-1 col-1">
                                                            <p style={{margin:0}}>:</p>
                                                            <p style={{margin:0}}>:</p>
                                                            <p style={{margin:0}}>:</p>
                                                        </div>
                                                        <div className="col-lg-7 col-8">
                                                            <p style={{margin:0}}>Gedung A (0892314333)</p>
                                                            <p style={{margin:0}}>Rp11000.00</p>
                                                            <p style={{margin:0}}>Dadar Vla x2 Rp4000.00</p>
                                                            <p style={{margin:0}}>Thai Tea x1 Rp7000.00</p>
                                                        </div>
                                                    </div>
                                                    <hr/>
                                                </div>
                                                <div className="col-lg-6 col-12 text-left">
                                                    <h5 className="h5-profile-title">Yang Lalu</h5>
                                                    <hr style={{marginTop:0}}/>
                                                    <div className="row">
                                                        <div className="col-lg-4 col-2">
                                                            <p style={{margin:0}}>Tanggal</p>
                                                            <p style={{margin:0}}>Alamat</p>
                                                            <p style={{margin:0}}>Total</p>
                                                            <p style={{margin:0}}>Produk</p>
                                                        </div>
                                                        <div className="col-lg-1 col-1">
                                                            <p style={{margin:0}}>:</p>
                                                            <p style={{margin:0}}>:</p>
                                                            <p style={{margin:0}}>:</p>
                                                            <p style={{margin:0}}>:</p>
                                                        </div>
                                                        <div className="col-lg-7 col-8">
                                                            <p style={{margin:0}}>12 Juni 2020</p>
                                                            <p style={{margin:0}}>Gedung A (0892314333)</p>
                                                            <p style={{margin:0}}>Rp11000.00</p>
                                                            <p style={{margin:0}}>Dadar Vla x2 Rp4000.00</p>
                                                            <p style={{margin:0}}>Thai Tea x1 Rp7000.00</p>
                                                        </div>
                                                    </div>
                                                    <hr/>
                                                    <div className="row">
                                                        <div className="col-lg-4 col-2">
                                                            <p style={{margin:0}}>Tanggal</p>
                                                            <p style={{margin:0}}>Alamat</p>
                                                            <p style={{margin:0}}>Total</p>
                                                            <p style={{margin:0}}>Produk</p>
                                                        </div>
                                                        <div className="col-lg-1 col-1">
                                                            <p style={{margin:0}}>:</p>
                                                            <p style={{margin:0}}>:</p>
                                                            <p style={{margin:0}}>:</p>
                                                            <p style={{margin:0}}>:</p>
                                                        </div>
                                                        <div className="col-lg-7 col-8">
                                                            <p style={{margin:0}}>10 Juni 2020</p>
                                                            <p style={{margin:0}}>Gedung B (08324733112)</p>
                                                            <p style={{margin:0}}>Rp5000.00</p>
                                                            <p style={{margin:0}}>Kripik Kaca x1 Rp5000.00</p>
                                                        </div>
                                                    </div>
                                                    <hr/>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </section>
                {/* {this.state.account.name} */}
            </div>
        );
    }
}

export default CustProfile;