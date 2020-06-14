import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import { Link } from 'react-router-dom';
import { GET_LIST_EVENT } from '../../../controller/EventController';
import Truncate from 'react-truncate';
import './css/event-style.css';
import CoverA from '../../layout/component/CoverA/CoverA';

class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list_product:[]
        }
    }
    
    componentDidMount(){
        GET_LIST_EVENT().then(res => {
            // console.log(res)
            this.setState({
                list_product:res
            })
        })
    }

    render() {
        return (
            <div>
                {/* Title */}
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Event - Necis</title>
                </Helmet>

                <CoverA name="Events" info="Nearest events this year!"/>

                <div className="container-fluid">
                    <div className="row mt-4">
                        {/* {this.state.list_product.map((u, index) =>
                            <div className="col-lg-3">
                                <div class="card card-custom h-10">
                                    <img class="card-img-top img-fluid" src="https://via.placeholder.com/150x60" alt={`Card${index}`}></img>
                                        <div class="card-body">
                                            
                                            <h5 class="card-title">{u.id}</h5>
                                            <p class="card-text">
                                                <Truncate lines={1} ellipsis={""}>
                                                    {u.title}
                                                </Truncate>
                                            </p>
                                            <Link to={`/event/detail/${u.id}`} class="btn btn-primary btn-block" role="button">Detail</Link>
                                        </div>
                                </div>
                            </div>
                        )} */}
                        {this.state.list_product.map((u, index) =>
                            <div class="col-md-6 col-lg-4 col-6" data-aos="fade-up">
                                <a href="#" class="media-1" data-toggle="modal" data-target="{{'#projectModal'.$key}}">
                                    <img src="https://via.placeholder.com/750x500" alt="Image" class="img-fluid"></img>
                                    <div class="media-1-content">
                                        <h3 class="mb-2">{u.id}</h3>
                                        <span class="category">
                                            <Truncate lines={1} ellipsis={""}>
                                                {u.title}
                                            </Truncate></span>
                                    </div>
                                </a>
                            </div>
                        )}
                        
                    </div>
                </div>

                {/* Content */}
                {/* <h3>ini list event</h3> */}

            </div>
        );
    }
}

export default Event;