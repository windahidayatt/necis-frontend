import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import { Link } from 'react-router-dom';
import { GET_LIST_EVENT, GET_IMAGE_EVENT } from '../../../controller/EventController';
import Truncate from 'react-truncate';
import './css/event-style.css';
import CoverA from '../../layout/component/CoverA/CoverA';

class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list_event:[],
            pict : GET_IMAGE_EVENT
        }
    }
    
    componentDidMount(){
        GET_LIST_EVENT().then(res => {
            this.setState({
                list_event:res
            })
        })
    }

    render() {
        return (
            <div>
                {/* Title */}
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Acara - Necis</title>
                </Helmet>

                <CoverA name="Acara" info="Acara terdekat di tahun ini!"/>

                <div className="container-fluid">
                    <div className="row mt-4">
                        {/* {this.state.list_product.map((u, index) =>
                            <div className="col-lg-3">
                                <div className="card card-custom h-10">
                                    <img className="card-img-top img-fluid" src="https://via.placeholder.com/150x60" alt={`Card${index}`}></img>
                                        <div className="card-body">
                                            
                                            <h5 className="card-title">{u.id}</h5>
                                            <p className="card-text">
                                                <Truncate lines={1} ellipsis={""}>
                                                    {u.title}
                                                </Truncate>
                                            </p>
                                            <Link to={`/event/detail/${u.id}`} className="btn btn-primary btn-block" role="button">Detail</Link>
                                        </div>
                                </div>
                            </div>
                        )} */}
                        {this.state.list_event.map((u, index) =>
                            <div className="col-md-6 col-lg-4 col-6" data-aos="fade-up">
                                <Link to={`/event/detail/${u.slug}`} className="media-1">
                                    <img src={this.state.pict + u.cover} alt="Image" className="img-fluid"></img>
                                    <div className="media-1-content">
                                        <h3 className="mb-2">{u.name}</h3>
                                        <span className="category">
                                            <Truncate lines={1} ellipsis={""}>
                                                {u.description}
                                            </Truncate></span>
                                    </div>
                                </Link>
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