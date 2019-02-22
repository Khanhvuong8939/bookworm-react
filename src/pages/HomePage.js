import React, { Component } from 'react';

class HomePage extends Component {

    render() {
        const { isAuthenticated } = this.props;
        return (
            <div>
                Home Page
            </div>
        );
    }

}


export default HomePage;