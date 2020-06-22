import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './css/footer_a-style.css';

class FooterA extends Component {
    constructor(props) {
        super(props);
        this.state={
            about : "Need Acis atau yang lebih dikenal dengan necis adalah salah satu web yang dibuat oleh tim LoudEv JTK POLBAN 2018. Web ini diperuntukan bagi mahasiswa/i polban yang memiliki danus (dana usaha), baik danus organisasi maupun danus pribadi."
        }
    }
    
    render() {
        return (
            // <div>
            //     <div classNameName="bg-custom footer-custom mb-0">
            //         <div classNameName="container-fluid">
            //             <div classNameName="row">
            //                 <div classNameName="col-lg-12">
            //                     <p></p>
            //                     <h3>Contact Us</h3>
            //                     <h5 classNameName="h-custom"><i className="fa fa-whatsapp" aria-hidden="true"></i> +62 857-2213-5734 (Lisa)</h5>
            //                     <h5 classNameName="h-custom"><i className="fa fa-instagram" aria-hidden="true"></i> necis.po</h5>
            //                 </div>
            //                 <div classNameName="col-lg-12">
            //                     <p></p>
            //                     <h6 classNameName="h-custom text-center"><i className="fa fa-copyright" aria-hidden="true"></i> Copyright necis 2020</h6>
            //                 </div>
            //             </div>   
            //         </div>
            //     </div>
            // </div>
            <div className="container-fluid site-footer">
            <div className="row">
                <div className="col-md-6 mb-md-0">
                    <h3 className="footer-heading mb-4 text-white">ABOUT NECIS</h3>
                    <p>{this.state.about}</p>
                    {/* <p><a href="{{route('about')}}" className="btn btn-secondary px-4">Read more...</a></p> */}
                    <p><Link to='/profile' className='btn btn-secondary px-4'>Read more...</Link></p>
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-4">
                    <div className="row">
                        <div className="col-md-12"><h3 className="footer-heading mb-4 text-white">CONTACT</h3></div>
                            <div className="col-md-12">
                                <div className="p">
                                    <p className="mb-0 font-weight-bold">Address</p>
                                    <p className="mb-4">Gegerkalong Hilir Street, Ciwaruga.</p>
                    
                                    <p className="mb-0 font-weight-bold">Telephone</p>
                                    <p className="mb-4">+62 877-1424-8000 (Lisa)</p>
                    
                                    <p className="mb-0 font-weight-bold">E-mail</p>
                                    <p className="mb-0">necis.po@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="row mt-5 text-center">
                <div className="col-md-12">
                    <p>
                    {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                    Copyright &copy; Necis 2020 <script>document.write(new Date().getFullYear());</script> 
                    {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                    </p>
                </div>
            </div>
        </div>
        );
    }
}

export default FooterA;