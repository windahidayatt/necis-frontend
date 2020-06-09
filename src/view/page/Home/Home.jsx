import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import './css/home-style.css';
import pict from './assets/1.png';
import tisi from './assets/tisi.png';
import ghks from './assets/ghks.png';

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
                {/* Carousel */}
                {/* <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner ">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={pict} alt="First slide"></img>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={pict} alt="Second slide"></img>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={pict} alt="Third slide"></img>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
                </div> */}

                {/* Judul biasa */}
                <div class="site-blocks-cover inner-page-cover overlay img-judul" data-aos="fade" data-stellar-background-ratio="0.5">
                    <div class="row align-items-center justify-content-center text-center">
                        <div class="col-lg-6 col-4"  data-aos="fade-up" data-aos-delay="400">
                            <div class="row justify-content-center mb-4 mt-5" >
                                <div class="col-md-8 text-center text-judul">
                                <h1 class="h1 site-section-heading text-center"><b>WELCOME</b> !</h1>
                                <p class="lead mb-5">Welcome to necis web!</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-8">       
                            
                        </div>
                    </div>
                </div>
                
                
                {/* Nearest Event Title */}
                <section class="site-section">
                    <div class="container">
                        <div class="row mb-2 justify-content-center">
                            <div class="col-md-8 text-center">
                                <h2 class="h2 text-black site-section-heading text-center"><b>{this.state.title}</b></h2>
                                <hr />
                                <p class="lead">Six nearest event to come!</p>
                            </div>
                        </div>
                        <div class="row mb-3 justify-content-center">
                            {/* Nearest Event Content */}
                            <div id="carouselExampleIndicators2" className="carousel slide mb-4" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    {/* Nearest Event - 1 */}
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="card h-100">
                                                <img className="card-img-top" src={tisi} alt="Tisigram"></img>
                                                <div className="card-body">
                                                    <h5 className="card-title">Tisigram 2020</h5>
                                                    <p className="card-text">Tisigram adalah kompetisi yang menguji kemampuan berpikir secara logis dan analitis dalam memecahkan suatu masalah. Terdapat dua bidang yang dilombakan, yakni Computational Thinking dan Competitive Programming.</p>
                                                </div>
                                                <div class="card-footer">
                                                    <small class="text-muted">20 Oktober 2020</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card h-100">
                                                <img className="card-img-top" src={ghks} alt="GHKS"></img>
                                                <div className="card-body">
                                                    <h5 className="card-title">GHKS 2020</h5>
                                                    <p className="card-text">Dengan bangga mempersembahkan drama fiksi yang berjudul “PAMALI” yang menceritakan kisah tentang bagaimana kehidupan masyarakat zaman dulu!</p>
                                                </div>
                                                <div class="card-footer">
                                                    <small class="text-muted">November 2020</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card h-100">
                                                <img className="card-img-top" src={tisi} alt="Tisigram"></img>
                                                <div className="card-body">
                                                    <h5 className="card-title">Tisigram 2020</h5>
                                                    <p className="card-text">Tisigram adalah kompetisi yang menguji kemampuan berpikir secara logis dan analitis dalam memecahkan suatu masalah. Terdapat dua bidang yang dilombakan, yakni Computational Thinking dan Competitive Programming.</p>
                                                </div>
                                                <div class="card-footer">
                                                    <small class="text-muted">20 Oktober 2020</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    {/* Nearest Event - 2 */}
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="card h-100">
                                                <img className="card-img-top" src={ghks} alt="GHKS"></img>
                                                <div className="card-body">
                                                    <h5 className="card-title">GHKS 2020</h5>
                                                    <p className="card-text">Dengan bangga mempersembahkan drama fiksi yang berjudul “PAMALI” yang menceritakan kisah tentang bagaimana kehidupan masyarakat zaman dulu!</p>
                                                </div>
                                                <div class="card-footer">
                                                    <small class="text-muted">November 2020</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card h-100">
                                                <img className="card-img-top" src={tisi} alt="Tisigram"></img>
                                                <div className="card-body">
                                                    <h5 className="card-title">Tisigram 2020</h5>
                                                    <p className="card-text">Tisigram adalah kompetisi yang menguji kemampuan berpikir secara logis dan analitis dalam memecahkan suatu masalah. Terdapat dua bidang yang dilombakan, yakni Computational Thinking dan Competitive Programming.</p>
                                                </div>
                                                <div class="card-footer">
                                                    <small class="text-muted">20 Oktober 2020</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card h-100">
                                                <img className="card-img-top" src={ghks} alt="GHKS"></img>
                                                <div className="card-body">
                                                    <h5 className="card-title">GHKS 2020</h5>
                                                    <p className="card-text">Dengan bangga mempersembahkan drama fiksi yang berjudul “PAMALI” yang menceritakan kisah tentang bagaimana kehidupan masyarakat zaman dulu!</p>
                                                </div>
                                                <div class="card-footer">
                                                    <small class="text-muted">November 2020</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators2" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                            </div>
                            {/* END Nearest Event Content */}
                        </div>
                    </div>
                </section>
            </div>
            
        );
    }
}

export default Home;