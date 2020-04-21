import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import { Link } from 'react-router-dom';
import { GET_LIST_EVENT } from '../../../controller/EventController';
import Truncate from 'react-truncate';
import './css/event-style.css';


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

                <div className="container-fluid">
                    <div className="row" style={{ marginTop : "10px" }}>
                        {this.state.list_product.map((u, index) =>
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