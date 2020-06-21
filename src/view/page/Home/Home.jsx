import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Helmet} from "react-helmet";
import { GET_LIST_PRODUCT, GET_IMAGE_PRODUCT } from '../../../controller/ProductController';
import { GET_LIST_EVENT, GET_IMAGE_EVENT } from '../../../controller/EventController';
import './css/home-style.css';
import Truncate from 'react-truncate';
import tisi from './assets/tisi.png';
import ghks from './assets/ghks.png';
import kmli from './assets/kmli.png';
import chemfair from './assets/chemfair.png';
import ppkk from './assets/ppkk.png';
import anbition from './assets/anbition.png';
import thaitea from './assets/products/thaitea.jpg';
import kripca from './assets/products/kripca.png';
import risol from './assets/products/risol.jpg';
import darvla from './assets/products/darvla.jpg';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list_event:[],
            list_product:[],
            pict_event : GET_IMAGE_EVENT,
            pict_product : GET_IMAGE_PRODUCT
        }
    }
    
    componentDidMount(){
        GET_LIST_EVENT().then(res => {
            this.setState({
                list_event:res
            })
        })
        GET_LIST_PRODUCT().then(res => {
            // console.log(res)
            this.setState({
                list_product:res
            })
        })
    }
    
    render() {
        return (
            <div>
                {/* Title */}
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Home - Necis</title>
                </Helmet>

                {/* Judul biasa */}
                {/* <div className="masthead">
                    <div className="container">
                        <div id="overlay"></div>
                            <div className="masthead-subheading lead" data-aos="fade-up">Selamat datang di Website <b>Alyamin Corporation</b></div>
                            <div className="masthead-heading text-uppercase lead" data-aos="fade-up" data-aos-delay="400">CONTRACTOR | CUT & FILL | GENERAL SUPPLIE</div>
                            <div className="col-12 text-center mt-5" data-aos="fade-up">
                                <a href="#" className="btn btn-primary btn-md">Lihat Tentang Kami</a>
                            </div> 
                    </div>
                </div> */}

                <div className="masthead inner-page-cover overlay" data-aos="fade" data-stellar-background-ratio="0.5">
                    <div className="row align-items-center justify-content-center text-center">
                        <div className="col-lg-12 col-12"  data-aos="fade-up" data-aos-delay="400">
                            <div className="col-md-12 text-center text-judul">
                                <div className="masthead-subheading lead" data-aos="fade-up"><b>Welcome to NECIS</b></div>
                                <div className="masthead-heading text-uppercase lead" data-aos="fade-up" data-aos-delay="400">DANUS FOR LYFE</div>
                                <div className="col-12 text-center mt-5" data-aos="fade-up">
                                    {/* <a href="#" className="btn btn-secondary btn-md">SHOP NOW</a> */}
                                    <Link to='/product' className='btn btn-secondary px-4'>SHOP NOW !</Link>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
                
                
                {/* Nearest Event Title */}
                <section className="site-section mt-3">
                    <div className="container">
                        <div className="row mb-2 justify-content-center">
                            <div className="col-md-8 text-center">
                                {/* <h2 className="h2 text-black site-section-heading text-center"><b>{this.state.title}</b></h2> */}
                                <h2 className="h2 text-black site-section-heading text-center"><b>NEAREST</b> EVENT</h2>
                                <hr />
                                <p className="lead">Six nearest event to come!</p>
                            </div>
                        </div>
                        <div className="row mb-3 justify-content-center">
                            {/* Nearest Event Content */}
                            {/* <div className="col-md-6 col-lg-4 col-6" data-aos="fade-up">
                                <a href="#" className="media-1" data-toggle="modal" data-target="{{'#projectModal'.$key}}">
                                    <img src={tisi} alt="Image" className="img-fluid"></img>
                                    <div className="media-1-content">
                                        <h3 className="mb-2">Tisigram</h3>
                                        <span className="category">Event ini diselenggarakan oleh HIMAKOM</span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-6 col-lg-4 col-6" data-aos="fade-up">
                                <a href="#" className="media-1" data-toggle="modal" data-target="{{'#projectModal'.$key}}">
                                    <img src={ghks} alt="Image" className="img-fluid"></img>
                                    <div className="media-1-content">
                                        <h3 className="mb-2">GHKS</h3>
                                        <span className="category">Event ini diselenggarakan di Dago</span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-6 col-lg-4 col-6" data-aos="fade-up">
                                <a href="#" className="media-1" data-toggle="modal" data-target="{{'#projectModal'.$key}}">
                                    <img src={kmli} alt="Image" className="img-fluid"></img>
                                    <div className="media-1-content">
                                        <h3 className="mb-2">KMLI</h3>
                                        <span className="category">Event ini diselenggarakan pada 2019</span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-6 col-lg-4 col-6" data-aos="fade-up">
                                <a href="#" className="media-1" data-toggle="modal" data-target="{{'#projectModal'.$key}}">
                                    <img src={chemfair} alt="Image" className="img-fluid"></img>
                                    <div className="media-1-content">
                                        <h3 className="mb-2">Chemfair</h3>
                                        <span className="category">Event ini diselenggarakan pada 2019</span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-6 col-lg-4 col-6" data-aos="fade-up">
                                <a href="#" className="media-1" data-toggle="modal" data-target="{{'#projectModal'.$key}}">
                                    <img src={ppkk} alt="Image" className="img-fluid"></img>
                                    <div className="media-1-content">
                                        <h3 className="mb-2">PPKK</h3>
                                        <span className="category">Event ini diselenggarakan oleh BEM</span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-6 col-lg-4 col-6" data-aos="fade-up">
                                <a href="#" className="media-1" data-toggle="modal" data-target="{{'#projectModal'.$key}}">
                                    <img src={anbition} alt="Image" className="img-fluid"></img>
                                    <div className="media-1-content">
                                        <h3 className="mb-2">Anbition</h3>
                                        <span className="category">Event ini diselenggarakan oleh HMAN</span>
                                    </div>
                                </a>
                            </div> */}
                            {/* END Nearest Event Content */}
                            {this.state.list_event.map((u, index) =>
                                index < 6 &&
                                <div className="col-md-6 col-lg-4 col-6" data-aos="fade-up">
                                    <a href="#" className="media-1" data-toggle="modal" data-target="{{'#projectModal'.$key}}">
                                        <img src={this.state.pict_event + u.cover} alt="Image" className="img-fluid"></img>
                                        <div className="media-1-content">
                                            <h3 className="mb-2">{u.name}</h3>
                                            <span className="category">
                                                <Truncate lines={1} ellipsis={""}>
                                                    {u.description}
                                                </Truncate></span>
                                        </div>
                                    </a>
                                </div>
                            )}
                            <div className="col-12 text-center mt-2" data-aos="fade-up">
                                {/* <a href="#" className="btn btn-primary btn-md">Show All Events</a> */}
                                <Link to='/event' className='btn btn-primary px-4'>Show All Events</Link>
                            </div> 
                        </div>
                    </div>
                </section>

                {/* Best Seller */}
                <section className="site-section popular-items">
                    <div className="container">
                        <div className="row mb-2 justify-content-center">
                            <div className="col-md-8 text-center">
                                <h2 className="h2 text-black site-section-heading text-center"><b>BEST</b> SELLER</h2>
                                <hr />
                                <p className="lead">Best selling products this week!</p>
                            </div>
                        </div>
                        <div className="row">
                            {/* BEST SELLER */}
                            {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                                <div className="single-popular-items mb-50 text-center">
                                    <div className="popular-img">
                                        <img src={kripca} alt=""></img>
                                        <div className="img-cap">
                                            <span>Add to cart</span>
                                        </div>
                                    </div>
                                    <div className="popular-caption">
                                        <h3><a href="product_details.html">Kripik Kaca</a></h3>
                                        <span>Rp5.000</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                                <div className="single-popular-items mb-50 text-center">
                                    <div className="popular-img">
                                        <img src={thaitea} alt=""></img>
                                        <div className="img-cap">
                                            <span>Add to cart</span>
                                        </div>
                                    </div>
                                    <div className="popular-caption">
                                        <h3><a href="product_details.html">Thai Tea</a></h3>
                                        <span>Rp7.000</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                                <div className="single-popular-items mb-50 text-center">
                                    <div className="popular-img">
                                        <img src={risol} alt=""></img>
                                        <div className="img-cap">
                                            <span>Add to cart</span>
                                        </div>
                                    </div>
                                    <div className="popular-caption">
                                        <h3><a href="product_details.html">Risoles</a></h3>
                                        <span>Rp1.500</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                                <div className="single-popular-items mb-50 text-center">
                                    <div className="popular-img">
                                        <img src={darvla} alt=""></img>
                                        <div className="img-cap">
                                            <span>Add to cart</span>
                                        </div>
                                    </div>
                                    <div className="popular-caption">
                                        <h3><a href="product_details.html">Dadar Vla</a></h3>
                                        <span>Rp2.000</span>
                                    </div>
                                </div>
                            </div> */}
                            {/* END BEST SELLER */}
                            {this.state.list_product.map((u, index) =>
                                index < 4 &&
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 mt-2 mb-2">
                                    <div className="single-popular-items mb-50 text-center">
                                        <div className="popular-img">
                                            <img src={this.state.pict_product + u.cover} alt="Image" className="img-fluid"></img>
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
                            <div className="col-12 text-center mt-2" data-aos="fade-up">
                                {/* <a href="#" className="btn btn-primary btn-md">Show All Products</a> */}
                                <Link to='/product' className='btn btn-primary px-4'>Show All Products</Link>
                            </div> 
                        </div>
                    </div>
                </section>
            </div>
            
        );
    }
}

export default Home;