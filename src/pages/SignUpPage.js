import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SignUpForm from '../components/forms/SignUpForm';
import { signup } from './../actions/users';

import { connect } from 'react-redux';

class SignUpPage extends Component {

    submit = data =>
        this.props.signup(data).then(() => this.props.history.push('/dashboard'));

    render() {
        return (
            <SignUpForm submit={this.submit} />
        )
    }
}

SignUpPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    signup: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        signup: data => dispatch(signup(data))
    }
}

export default connect(null, mapDispatchToProps)(SignUpPage);