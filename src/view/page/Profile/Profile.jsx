import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import './css/profile-style.css';
import CoverA from '../../layout/component/CoverA/CoverA';
import member1 from './assets/person_1.jpg';
import member2 from './assets/person_2.jpg';
import member3 from './assets/person_3.jpg';
import member4 from './assets/person_4.jpg';
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
            history : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",

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
                <section class="site-section">
                    <div class="container">
                        <div class="row mb-2 justify-content-center">
                            <div class="col-md-8 text-center">
                                {/* <h2 class="h2 text-black site-section-heading text-center"><b>{this.state.title}</b></h2> */}
                                <h2 class="h2 text-black site-section-heading text-center"><b>HISTORY</b> OF NECIS</h2>
                                <hr />
                            </div>
                            <div class="col-md-10 text-justify">
                                <p class="lead p-custom">{this.state.history}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* MEMBER */}
                <section class="site-section">
                    <div class="container">
                        <div class="row mb-2 justify-content-center">
                            <div class="col-md-8 text-center">
                                {/* <h2 class="h2 text-black site-section-heading text-center"><b>{this.state.title}</b></h2> */}
                                <h2 class="h2 text-black site-section-heading text-center">MEET OUR <b>TEAM</b></h2>
                                <hr />
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-lg-4 text-center mb-2" data-aos="fade-up" data-aos-delay="100">
                                <img src={aris} alt="Image" class="img-fluid rounded w-50 mb-4"></img>
                                <h4 class="text-uppercase member-name">Aris Purnomo</h4>
                                <span class="d-block mb-4 member-pos">Chief Technology Officer</span>
                            </div>
                            <div class="col-lg-4 text-center mb-2" data-aos="fade-up" data-aos-delay="200">
                                <img src={eca} alt="Image" class="img-fluid rounded w-50 mb-4"></img>
                                <h4 class="text-uppercase member-name">Elza Esterina</h4>
                                <span class="d-block mb-4 member-pos">Chief Executive Officer</span>
                            </div>
                            <div class="col-lg-4 text-center mb-2" data-aos="fade-up" data-aos-delay="300">
                                <img src={lisa} alt="Image" class="img-fluid rounded w-50 mb-4"></img>
                                <h4 class="text-uppercase member-name">Nurallisha Rahmanda</h4>
                                <span class="d-block mb-4 member-pos">Chief Marketing Officer</span>
                            </div>
                            <div class="col-lg-3 text-center mb-2" data-aos="fade-up" data-aos-delay="400">
                                <img src={winda} alt="Image" class="img-fluid rounded w-50 mb-4"></img>
                                <h4 class="text-uppercase member-name">Winda Hidayat</h4>
                                <span class="d-block mb-4 member-pos">Chief Technology Officer</span>
                            </div>
                            <div class="col-lg-3 text-center mb-2" data-aos="fade-up" data-aos-delay="400">
                                <img src={renol} alt="Image" class="img-fluid rounded w-50 mb-4"></img>
                                <h4 class="text-uppercase member-name">Renol Hanafi</h4>
                                <span class="d-block mb-4 member-pos">Chief Technology Officer</span>
                            </div>
                            <div class="col-lg-3 text-center mb-2" data-aos="fade-up" data-aos-delay="400">
                                <img src={ropik} alt="Image" class="img-fluid rounded w-50 mb-4"></img>
                                <h4 class="text-uppercase member-name">Rofiq Suhayana</h4>
                                <span class="d-block mb-4 member-pos">Chief Marketing Officer</span>
                            </div>
                            <div class="col-lg-3 text-center mb-2" data-aos="fade-up" data-aos-delay="400">
                                <img src={abdul} alt="Image" class="img-fluid rounded w-50 mb-4"></img>
                                <h4 class="text-uppercase member-name">Abdul Hadi</h4>
                                <span class="d-block mb-4 member-pos">Chief Marketing Officer</span>
                            </div>
                            </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Profile;