import React, { Component } from 'react';
import {Helmet} from "react-helmet";

class Profile extends Component {
    render() {
        return (
            <div>
                {/* Title */}
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Profile - Necis</title>
                </Helmet>

                {/* Content */}
                <h1>Profile</h1>
            </div>
        );
    }
}

export default Profile;