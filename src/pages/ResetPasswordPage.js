import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ServerMessage from '../components/messages/ServerMessage';
import ResetPasswordForm from '../components/forms/ResetPasswordForm';
import { connect } from 'react-redux';
import { resetPassword } from '../actions/users'
import { validateToken } from '../actions/users'

class ResetPasswordPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: true,
            success: false
        }
    }

    componentDidMount() {
        this.props.validateToken(this.props.match.params.token)
        .then(()=>{
            this.setState({loading: false, success: true})
        })
        .catch((err)=>{
            this.setState({loading: false, success: false})
        })
    }

    submit = data => this.props.resetPassword(data)
        .then(()=>this.props.history.push('/login'))

    render() {
        var { loading, success } = this.state
        var {token} = this.props.match.params;
        return (
            <div>
                {loading && <ServerMessage errStyle='warning' header='Loading' content='Checking token...' />}
                {!loading && success && <ResetPasswordForm submit={this.submit} token={token} />}
                {!loading && !success && <ServerMessage errStyle='danger' header='Warning' content='Invalid token' /> }
            </div>
        );
    }
}

ResetPasswordPage.propTypes = {
    submit: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        validateToken: token => dispatch(validateToken(token)),
        resetPassword: data => dispatch(resetPassword(data))
    }
}

export default connect(null, mapDispatchToProps)(ResetPasswordPage);