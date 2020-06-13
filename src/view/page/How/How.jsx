import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import './css/how-style.css';
import CoverA from '../../layout/component/CoverA/CoverA';
import how1 from './assets/1.jpg';
import how2 from './assets/2.jpg';
import how3 from './assets/3.jpg';
import how4 from './assets/4.jpg';

class How extends Component {
    render() {
        return (
            <div>
                {/* Title */}
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>How? - Necis</title>
                </Helmet>

                <CoverA name="How" info="How to ... ?"/>

                {/* Content */}
                {/* <h3>How necis deliver your danus?</h3> */}
                <section class="site-section">
                    <div class="container">
                        <div class="row mb-2 justify-content-center">
                            <div class="col-md-8 text-center">
                                {/* <h2 class="h2 text-black site-section-heading text-center"><b>{this.state.title}</b></h2> */}
                                <h2 class="h2 text-black site-section-heading text-center"><b>HOW</b> ?</h2>
                                <hr />
                                <p class="lead">How can I order something from necis?</p>
                            </div>
                        </div>
                        <ul class="timeline">
                            <li>
                                <div class="timeline-image"><img class="rounded-circle img-fluid" src={how1} alt="" /></div>
                                <div class="timeline-panel">
                                    <div class="timeline-heading">
                                        <h4 class="subheading">Choose your products</h4>
                                    </div>
                                    <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                                </div>
                            </li>
                            <li class="timeline-inverted">
                                <div class="timeline-image"><img class="rounded-circle img-fluid" src={how2} alt="" /></div>
                                <div class="timeline-panel">
                                    <div class="timeline-heading">
                                        <h4 class="subheading">An Agency is Born</h4>
                                    </div>
                                    <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                                </div>
                            </li>
                            <li>
                                <div class="timeline-image"><img class="rounded-circle img-fluid" src={how3} alt="" /></div>
                                <div class="timeline-panel">
                                    <div class="timeline-heading">
                                        <h4 class="subheading">Transition to Full Service</h4>
                                    </div>
                                    <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                                </div>
                            </li>
                            <li class="timeline-inverted">
                                <div class="timeline-image"><img class="rounded-circle img-fluid" src={how4}alt="" /></div>
                                <div class="timeline-panel">
                                    <div class="timeline-heading">
                                        <h4 class="subheading">Phase Two Expansion</h4>
                                    </div>
                                    <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                                </div>
                            </li>
                            <li class="timeline-inverted">
                                <div class="timeline-image">
                                    <h4>Be Part<br />Of Our<br />Story!</h4>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        );
    }
}

export default How;