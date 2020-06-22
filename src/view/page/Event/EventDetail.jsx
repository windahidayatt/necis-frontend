import React, { Component } from 'react';
import { GET_EVENT,GET_IMAGE_EVENT } from '../../../controller/EventController';

class EventDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            description:'',
            cover:'',
            pict : GET_IMAGE_EVENT
        }
    }
    
    componentDidMount(){
        GET_EVENT(this.props.match.params.slug).then(res => {
            console.log(res);
            this.setState({
                name:res.name,
                description:res.description,
                cover:res.cover
            })
        })
    }

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row mb-2 justify-content-center mt-4">
                        <div className="col-md-8 text-center">
                            {/* <h2 className="h2 text-black site-section-heading text-center"><b>{this.state.title}</b></h2> */}
                            <h2 className="h2 text-black site-section-heading text-center"><b>{this.state.name}</b></h2>
                            <hr />
                        </div>
                    </div>
                    <div className="row justify-content-center mt-3">
                        <div className="col-md-6">
                            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                                <ol class="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                </ol>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img className="img-fluid w-100" src={this.state.pict+this.state.cover} alt=""></img>
                                    </div>
                                    <div class="carousel-item">
                                        <img className="img-fluid w-100" src={this.state.pict+this.state.cover} alt=""></img>
                                    </div>
                                    <div class="carousel-item">
                                        <img className="img-fluid w-100" src={this.state.pict+this.state.cover} alt=""></img>
                                    </div>
                                </div>
                                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-3">
                        <div className="col-md-8">
                            <hr/>
                            <p>{this.state.description}</p>
                        </div>
                    </div>
                </div>

                
            </div>
        );
    }
}

export default EventDetail;