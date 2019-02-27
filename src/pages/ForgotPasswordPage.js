import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ServerMessage from '../components/messages/ServerMessage';
import ForgotPasswordForm from '../components/forms/ForgotPasswordForm';
import { connect } from 'react-redux';
import { resetPasswordRequest } from '../actions/auth';


class ForgotPasswordPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            success: false
        }
    }

    submit = data =>
        this.props.resetPasswordRequest(data)
            .then(() => {
                this.setState({ success: true })
            })


    render() {
        var { success } = this.state;
        return (
            <div>
                {success ? (<ServerMessage errStyle='success' header='Sent' content='Email has been sent!!!' />) : (<ForgotPasswordForm submit={this.submit} />)}
            </div>
        );
    }
}

ForgotPasswordPage.propTypes = {
    resetPasswordRequest: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        resetPasswordRequest: data => dispatch(resetPasswordRequest(data))
    }
}

export default connect(null, mapDispatchToProps)(ForgotPasswordPage);