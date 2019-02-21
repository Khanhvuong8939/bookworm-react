import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { logout } from './../actions/auth'

class HomePage extends Component {

    render() {
        const { isAuthenticated } = this.props;
        return (
            <div>
                Home Page
                <br />
                {isAuthenticated ?
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => this.logout()}
                    >logout</button>
                    :
                    <Link
                        to='/login'
                        className="btn btn-success">login</Link>}

            </div>
        );
    }

    logout = () => {
        this.props.logout();
    }


}

const mapStateToProps = state => {
    return {
        isAuthenticated: !!state.user.token
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        logout: () => dispatch(logout())
    }
}

HomePage.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);