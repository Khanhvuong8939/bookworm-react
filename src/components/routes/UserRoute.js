import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

const UserRoute = ({ isAuthenticated, component: Component, ...rest }) => (
    <Route
        {...rest} render={
            props => isAuthenticated ? <Component {...props} /> : <Redirect to='/login' />
        }
/>
)

UserRoute.propTypes = {
    component: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        isAuthenticated: !!state.user.token
    }
}
export default connect(mapStateToProps, null)(UserRoute);


