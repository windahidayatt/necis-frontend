import React, { Component } from 'react';
import { GET_EVENT } from '../../../controller/EventController';

class EventDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:'',
            body:'',
        }
    }
    
    componentDidMount(){
        GET_EVENT(this.props.match.params.id).then(res => {
            this.setState({
                title:res.title,
                body:res.body
            })
        })
    }

    render() {
        return (
            <div>
                <h4>{this.state.title}</h4>
                <hr/>
                <p>{this.state.body}</p>
            </div>
        );
    }
}

export default EventDetail;