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
                <p></p>

                {/* Carousel */}
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
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
                </div>

                {/* Nearest Event Title */}
                <div className="text-center mt-4">
                    <h1>{this.state.title}</h1>
                    <p>Six nearest event to come!</p>
                </div>
                
                
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
        );
    }
}

export default Home;