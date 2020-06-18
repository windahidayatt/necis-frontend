import React, { Component } from 'react';
import './css/cover_a-style.css';

class CoverA extends Component {
    render() {
        return (
            <div class="site-blocks-cover inner-page-cover overlay img-judul" data-aos="fade" data-stellar-background-ratio="0.5">
                <div class="row align-items-center justify-content-center text-center">
                    <div class="col-lg-6 col-6"  data-aos="fade-up" data-aos-delay="400">
                            <div class="col-md-8 text-center text-judul">
                                <h1 class="h1 site-section-heading text-center"><b>{this.props.name}</b> !</h1>
                                <p class="mb-5">{this.props.info}</p>
                            </div>
                    </div>
                    <div class="col-lg-6 col-6"></div>
                </div>
            </div>
        );
    }
}

export default CoverA;