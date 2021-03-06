import React from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

const GuestRoute = ({ isAuthenticated, component: Component, ...rest }) => (
    < Route
        {...rest} render={
            props => !isAuthenticated ? <Component {...props} /> : ''
        }
    />
)

GuestRoute.propTypes = {
    component: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        isAuthenticated: !!state.user.token
    }
}
export default connect(mapStateToProps, null)(GuestRoute);


