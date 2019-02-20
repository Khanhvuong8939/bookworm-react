import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

class HomePage extends Component {

    render() {
        const {isAuthenticated} = this.props;
        return (
            <div>
                Home Page
                <br/>
                {isAuthenticated ? <button type="button" className="btn btn-danger">logout</button> : <Link to='/login' className="btn btn-success">login</Link>}
                
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: !!state.user.token
    }
}

export default connect(mapStateToProps, null)(HomePage);