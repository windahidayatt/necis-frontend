import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Helmet} from "react-helmet";
import './css/home-style.css';
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
            title : 'Nearest Event'
        }
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
                {/* <div class="masthead">
                    <div class="container">
                        <div id="overlay"></div>
                            <div class="masthead-subheading lead" data-aos="fade-up">Selamat datang di Website <b>Alyamin Corporation</b></div>
                            <div class="masthead-heading text-uppercase lead" data-aos="fade-up" data-aos-delay="400">CONTRACTOR | CUT & FILL | GENERAL SUPPLIE</div>
                            <div class="col-12 text-center mt-5" data-aos="fade-up">
                                <a href="#" class="btn btn-primary btn-md">Lihat Tentang Kami</a>
                            </div> 
                    </div>
                </div> */}

                <div class="masthead inner-page-cover overlay" data-aos="fade" data-stellar-background-ratio="0.5">
                    <div class="row align-items-center justify-content-center text-center">
                        <div class="col-lg-12 col-12"  data-aos="fade-up" data-aos-delay="400">
                            <div class="col-md-12 text-center text-judul">
                                <div class="masthead-subheading lead" data-aos="fade-up"><b>Welcome to NECIS</b></div>
                                <div class="masthead-heading text-uppercase lead" data-aos="fade-up" data-aos-delay="400">DANUS FOR LYFE</div>
                                <div class="col-12 text-center mt-5" data-aos="fade-up">
                                    {/* <a href="#" class="btn btn-secondary btn-md">SHOP NOW</a> */}
                                    <Link to='/product' className='btn btn-secondary px-4'>SHOP NOW !</Link>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
                
                
                {/* Nearest Event Title */}
                <section class="site-section mt-3">
                    <div class="container">
                        <div class="row mb-2 justify-content-center">
                            <div class="col-md-8 text-center">
                                {/* <h2 class="h2 text-black site-section-heading text-center"><b>{this.state.title}</b></h2> */}
                                <h2 class="h2 text-black site-section-heading text-center"><b>NEAREST</b> EVENT</h2>
                                <hr />
                                <p class="lead">Six nearest event to come!</p>
                            </div>
                        </div>
                        <div class="row mb-3 justify-content-center">
                            {/* Nearest Event Content */}
                            <div class="col-md-6 col-lg-4 col-6" data-aos="fade-up">
                                <a href="#" class="media-1" data-toggle="modal" data-target="{{'#projectModal'.$key}}">
                                    <img src={tisi} alt="Image" class="img-fluid"></img>
                                    <div class="media-1-content">
                                        <h3 class="mb-2">Tisigram</h3>
                                        <span class="category">Event ini diselenggarakan oleh HIMAKOM</span>
                                    </div>
                                </a>
                            </div>
                            <div class="col-md-6 col-lg-4 col-6" data-aos="fade-up">
                                <a href="#" class="media-1" data-toggle="modal" data-target="{{'#projectModal'.$key}}">
                                    <img src={ghks} alt="Image" class="img-fluid"></img>
                                    <div class="media-1-content">
                                        <h3 class="mb-2">GHKS</h3>
                                        <span class="category">Event ini diselenggarakan di Dago</span>
                                    </div>
                                </a>
                            </div>
                            <div class="col-md-6 col-lg-4 col-6" data-aos="fade-up">
                                <a href="#" class="media-1" data-toggle="modal" data-target="{{'#projectModal'.$key}}">
                                    <img src={kmli} alt="Image" class="img-fluid"></img>
                                    <div class="media-1-content">
                                        <h3 class="mb-2">KMLI</h3>
                                        <span class="category">Event ini diselenggarakan pada 2019</span>
                                    </div>
                                </a>
                            </div>
                            <div class="col-md-6 col-lg-4 col-6" data-aos="fade-up">
                                <a href="#" class="media-1" data-toggle="modal" data-target="{{'#projectModal'.$key}}">
                                    <img src={chemfair} alt="Image" class="img-fluid"></img>
                                    <div class="media-1-content">
                                        <h3 class="mb-2">Chemfair</h3>
                                        <span class="category">Event ini diselenggarakan pada 2019</span>
                                    </div>
                                </a>
                            </div>
                            <div class="col-md-6 col-lg-4 col-6" data-aos="fade-up">
                                <a href="#" class="media-1" data-toggle="modal" data-target="{{'#projectModal'.$key}}">
                                    <img src={ppkk} alt="Image" class="img-fluid"></img>
                                    <div class="media-1-content">
                                        <h3 class="mb-2">PPKK</h3>
                                        <span class="category">Event ini diselenggarakan oleh BEM</span>
                                    </div>
                                </a>
                            </div>
                            <div class="col-md-6 col-lg-4 col-6" data-aos="fade-up">
                                <a href="#" class="media-1" data-toggle="modal" data-target="{{'#projectModal'.$key}}">
                                    <img src={anbition} alt="Image" class="img-fluid"></img>
                                    <div class="media-1-content">
                                        <h3 class="mb-2">Anbition</h3>
                                        <span class="category">Event ini diselenggarakan oleh HMAN</span>
                                    </div>
                                </a>
                            </div>
                            {/* END Nearest Event Content */}
                            <div class="col-12 text-center mt-2" data-aos="fade-up">
                                {/* <a href="#" class="btn btn-primary btn-md">Show All Events</a> */}
                                <Link to='/event' className='btn btn-primary px-4'>Show All Events</Link>
                            </div> 
                        </div>
                    </div>
                </section>

                {/* Best Seller */}
                <section class="site-section popular-items">
                    <div class="container">
                        <div class="row mb-2 justify-content-center">
                            <div class="col-md-8 text-center">
                                <h2 class="h2 text-black site-section-heading text-center"><b>BEST</b> SELLER</h2>
                                <hr />
                                <p class="lead">Best selling products this week!</p>
                            </div>
                        </div>
                        <div class="row">
                            {/* BEST SELLER */}
                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                                <div class="single-popular-items mb-50 text-center">
                                    <div class="popular-img">
                                        <img src={kripca} alt=""></img>
                                        <div class="img-cap">
                                            <span>Add to cart</span>
                                        </div>
                                        {/* <div class="favorit-items">
                                            <span class="flaticon-heart"></span>
                                        </div> */}
                                    </div>
                                    <div class="popular-caption">
                                        <h3><a href="product_details.html">Kripik Kaca</a></h3>
                                        <span>Rp5.000</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                                <div class="single-popular-items mb-50 text-center">
                                    <div class="popular-img">
                                        <img src={thaitea} alt=""></img>
                                        <div class="img-cap">
                                            <span>Add to cart</span>
                                        </div>
                                        {/* <div class="favorit-items">
                                            <span class="flaticon-heart"></span>
                                        </div> */}
                                    </div>
                                    <div class="popular-caption">
                                        <h3><a href="product_details.html">Thai Tea</a></h3>
                                        <span>Rp7.000</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                                <div class="single-popular-items mb-50 text-center">
                                    <div class="popular-img">
                                        <img src={risol} alt=""></img>
                                        <div class="img-cap">
                                            <span>Add to cart</span>
                                        </div>
                                        {/* <div class="favorit-items">
                                            <span class="flaticon-heart"></span>
                                        </div> */}
                                    </div>
                                    <div class="popular-caption">
                                        <h3><a href="product_details.html">Risoles</a></h3>
                                        <span>Rp1.500</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                                <div class="single-popular-items mb-50 text-center">
                                    <div class="popular-img">
                                        <img src={darvla} alt=""></img>
                                        <div class="img-cap">
                                            <span>Add to cart</span>
                                        </div>
                                        {/* <div class="favorit-items">
                                            <span class="flaticon-heart"></span>
                                        </div> */}
                                    </div>
                                    <div class="popular-caption">
                                        <h3><a href="product_details.html">Dadar Vla</a></h3>
                                        <span>Rp2.000</span>
                                    </div>
                                </div>
                            </div>
                            {/* END BEST SELLER */}
                            <div class="col-12 text-center mt-2" data-aos="fade-up">
                                {/* <a href="#" class="btn btn-primary btn-md">Show All Products</a> */}
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