import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import './css/profile-style.css';
import CoverA from '../../layout/component/CoverA/CoverA';
import abdul from './assets/abdul.jpg';
import aris from './assets/aris.jpg';
import eca from './assets/eca.jpg';
import lisa from './assets/lisa.jpg';
import renol from './assets/renol.jpg';
import ropik from './assets/ropik.jpg';
import winda from './assets/winda.jpg';

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            history : "Need Acis atau yang lebih dikenal dengan necis adalah salah satu web yang dibuat oleh tim LoudEv JTK POLBAN 2018. Web ini diperuntukan bagi mahasiswa/i polban yang memiliki danus (dana usaha), baik danus organisasi maupun danus pribadi. Dengan adanya web ini, mahasiswa POLBAN dapat mengetahui produk apa saja yang dijual di POLBN, selauin itu para dosen POLBAN serta mahasiswa polban dapat membeli produk-produk yang dijual melalui NECIS.",

        }
    }
    render() {
        return (
            <div>
                {/* Title */}
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>About - Necis</title>
                </Helmet>

                <CoverA name="About Us" info="Know us better!"/>

                {/* Content */}
                {/* <h1>Profile NECIS</h1> */}
                <section className="site-section">
                    <div className="container">
                        <div className="row mb-2 justify-content-center">
                            <div className="col-md-8 text-center">
                                {/* <h2 className="h2 text-black site-section-heading text-center"><b>{this.state.title}</b></h2> */}
                                <h2 className="h2 text-black site-section-heading text-center"><b>HISTORY</b> OF NECIS</h2>
                                <hr />
                            </div>
                            <div className="col-md-10 text-justify">
                                <p className="lead p-custom">{this.state.history}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* MEMBER */}
                <section className="site-section">
                    <div className="container">
                        <div className="row mb-2 justify-content-center">
                            <div className="col-md-8 text-center">
                                {/* <h2 className="h2 text-black site-section-heading text-center"><b>{this.state.title}</b></h2> */}
                                <h2 className="h2 text-black site-section-heading text-center">MEET OUR <b>TEAM</b></h2>
                                <hr />
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-4 col-6 text-center mb-2" data-aos="fade-up" data-aos-delay="100">
                                <img src={aris} alt="Image" className="img-fluid rounded w-50 mb-3"></img>
                                <h4 className="text-uppercase member-name">Aris Purnomo</h4>
                                <span className="d-block mb-4 member-pos">Chief Technology Officer</span>
                            </div>
                            <div className="col-md-4 col-6 text-center mb-2" data-aos="fade-up" data-aos-delay="200">
                                <img src={eca} alt="Image" className="img-fluid rounded w-50 mb-3"></img>
                                <h4 className="text-uppercase member-name">Elza Esterina</h4>
                                <span className="d-block mb-4 member-pos">Chief Executive Officer</span>
                            </div>
                            <div className="col-md-4 col-6 text-center mb-2" data-aos="fade-up" data-aos-delay="300">
                                <img src={lisa} alt="Image" className="img-fluid rounded w-50 mb-3"></img>
                                <h4 className="text-uppercase member-name">Nurallisha Rahmanda</h4>
                                <span className="d-block mb-4 member-pos">Chief Marketing Officer</span>
                            </div>
                            <div className="col-md-3 col-6 text-center mb-2" data-aos="fade-up" data-aos-delay="400">
                                <img src={winda} alt="Image" className="img-fluid rounded w-50 mb-3"></img>
                                <h4 className="text-uppercase member-name">Winda Hidayat</h4>
                                <span className="d-block mb-4 member-pos">Chief Technology Officer</span>
                            </div>
                            <div className="col-md-3 col-6 text-center mb-2" data-aos="fade-up" data-aos-delay="400">
                                <img src={renol} alt="Image" className="img-fluid rounded w-50 mb-3"></img>
                                <h4 className="text-uppercase member-name">Renol Hanafi</h4>
                                <span className="d-block mb-4 member-pos">Chief Technology Officer</span>
                            </div>
                            <div className="col-md-3 col-6 text-center mb-2" data-aos="fade-up" data-aos-delay="400">
                                <img src={ropik} alt="Image" className="img-fluid rounded w-50 mb-3"></img>
                                <h4 className="text-uppercase member-name">Rofiq Suhayana</h4>
                                <span className="d-block mb-4 member-pos">Chief Marketing Officer</span>
                            </div>
                            <div className="col-md-3 col-6 text-center mb-2" data-aos="fade-up" data-aos-delay="400">
                                <img src={abdul} alt="Image" className="img-fluid rounded w-50 mb-3"></img>
                                <h4 className="text-uppercase member-name">Abdul Hadi</h4>
                                <span className="d-block mb-4 member-pos">Chief Marketing Officer</span>
                            </div>
                            </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Profile;