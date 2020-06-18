import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './css/footer_a-style.css';

class FooterA extends Component {
    render() {
        return (
            // <div>
            //     <div className="bg-custom footer-custom mb-0">
            //         <div className="container-fluid">
            //             <div className="row">
            //                 <div className="col-lg-12">
            //                     <p></p>
            //                     <h3>Contact Us</h3>
            //                     <h5 className="h-custom"><i class="fa fa-whatsapp" aria-hidden="true"></i> +62 857-2213-5734 (Lisa)</h5>
            //                     <h5 className="h-custom"><i class="fa fa-instagram" aria-hidden="true"></i> necis.po</h5>
            //                 </div>
            //                 <div className="col-lg-12">
            //                     <p></p>
            //                     <h6 className="h-custom text-center"><i class="fa fa-copyright" aria-hidden="true"></i> Copyright necis 2020</h6>
            //                 </div>
            //             </div>   
            //         </div>
            //     </div>
            // </div>
            <div class="container-fluid site-footer">
            <div class="row">
                <div class="col-md-6 mb-md-0">
                    <h3 class="footer-heading mb-4 text-white">ABOUT NECIS</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    {/* <p><a href="{{route('about')}}" class="btn btn-secondary px-4">Read more...</a></p> */}
                    <p><Link to='/profile' className='btn btn-secondary px-4'>Read more...</Link></p>
                </div>
                <div class="col-md-2"></div>
                <div class="col-md-4">
                    <div class="row">
                        <div class="col-md-12"><h3 class="footer-heading mb-4 text-white">CONTACT</h3></div>
                            <div class="col-md-12">
                                <div class="p">
                                    <p class="mb-0 font-weight-bold">Address</p>
                                    <p class="mb-4">Gegerkalong Hilir Street, Ciwaruga.</p>
                    
                                    <p class="mb-0 font-weight-bold">Telephone</p>
                                    <p class="mb-4">+62 877-1424-8000 (Lisa)</p>
                    
                                    <p class="mb-0 font-weight-bold">E-mail</p>
                                    <p class="mb-0">necis.po@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div class="row mt-5 text-center">
                <div class="col-md-12">
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