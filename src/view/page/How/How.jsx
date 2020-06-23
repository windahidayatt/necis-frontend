import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import './css/how-style.css';
import {Link} from 'react-router-dom';
import CoverA from '../../layout/component/CoverA/CoverA';
import how1 from './assets/1.jpg';
import how2 from './assets/2.jpg';
import how3 from './assets/3.jpg';
import how4 from './assets/4.jpg';

class How extends Component {
    constructor(props) {
        super(props);
        this.state={
            question : ["How to sign up?", "How to login?", "How to reset password account?"],
            answer : [
                "1. Klik tulisan Register yang berada di sebelah kanan atas layar\n2. Masukkan identitas berupa nama, email aktif, dan password yang akan dipakai\n3. Pada kolom Confirm Password, masukkan ulang password yang akan dipakai\n4. Klik tombol biru yang bertuliskan Register\n5. Selamat! Kamu sudah terdaftar di NECIS",
                "1. Klik Login yang berada di sebelah kanan atas layar\n2. Masukkan email dan password yang telah didaftarkan\n3. Klik Login Now\n4. Selamat! anda dapat berbelanja di NECIS",
                "1. Pada tampilan login, dibawah tombol Login now terdapat tulisan I forgot my password\n2. Klik tulisan tersebut\n3. Setelah itu akan ada perintah untuk memasukkan email\n4. Masukkan email anda yang telah terdaftar\n5. Klik tombol Send Password Reset Link\n6. Ikuti langkah-langkah pada pesan yang telah dikirim melalui email."
            ],
            howModalCall : "#howModal",
            howModal : "howModal"
        }
    }
    
    render() {
        return (
            <div>
                {/* Title */}
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>How? - Necis</title>
                </Helmet>

                <CoverA name="How" info="Frequently Asked Question"/>

                {/* Content */}
                {/* <h3>How necis deliver your danus?</h3> */}
                <section className="site-section">
                    <div className="container">
                        {this.state.question.map((u, index) =>
                            <div className="row mb-2 justify-content-center mt-3">
                                {index % 2 === 0 && 
                                    
                                    <div className="col-md-12 text-center how-custom" data-toggle="modal" data-target={this.state.howModalCall+index}>
                                        <Link className="">
                                            <h3 className="h3-how">{u}</h3>
                                        </Link>
                                    </div>
                                }
                                {index % 2 !== 0 &&
                                    <div className="col-md-12 text-center how-custom-2" data-toggle="modal" data-target={this.state.howModalCall+index}>
                                        <Link className="">
                                            <h3 className="h3-how">{u}</h3>
                                        </Link>
                                    </div>
                                }
                                {/* <!-- Modal --> */}
                                <div class="modal fade" id={this.state.howModal+index} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog" role="document">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">{u}</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            {this.state.answer[index]}
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className="row justify-content-center mt-5">
                            <nav aria-label="Page navigation example bg-dark">
                                <ul class="pagination">
                                    <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </section>
                

                
            </div>
        );
    }
}

export default How;