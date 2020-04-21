import React, { Component } from 'react';
import './css/footer_a-style.css';

class FooterA extends Component {
    render() {
        return (
            <div>
                <div className="bg-custom footer-custom mb-0">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <p></p>
                                <h3>Contact Us</h3>
                                <h5 className="h-custom"><i class="fa fa-whatsapp" aria-hidden="true"></i> +62 857-2213-5734 (Lisa)</h5>
                                <h5 className="h-custom"><i class="fa fa-instagram" aria-hidden="true"></i> necis.po</h5>
                            </div>
                            <div className="col-lg-12">
                                <p></p>
                                <h6 className="h-custom text-center"><i class="fa fa-copyright" aria-hidden="true"></i> Copyright necis 2020</h6>
                            </div>
                        </div>   
                    </div>
                </div>
            </div>
        );
    }
}

export default FooterA;