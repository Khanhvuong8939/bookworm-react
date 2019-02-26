import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ServerMessage from '../components/messages/ServerMessage';
import { connect } from 'react-redux'
import { confirm } from './../actions/auth';

class ConfirmationPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            loading: false,
            success: true
        }
    }

    componentDidMount() {
        this.props.confirm(this.props.match.params.token)
            .then(() => {
                this.setState({ loading: false, success: true })
            })
            .catch(() => this.setState({ loading: false, success: false }))
    }


    render() {
        var { loading, success } = this.state;
        console.log(loading, success)
        return (
            <div>
                {loading && <ServerMessage errStyle='warning' header='Warning' content='Confirm your email' />}
                {!loading && success && <ServerMessage errStyle='success' header='Confirmated' content='Thank you. Your account has been verified' />}
                {!loading && !success && <ServerMessage errStyle='danger' header='Warning' content='Oooop!. Invalid Token' />}
            </div>
        )
    }
}

ConfirmationPage.propTypes = {
    confirm: PropTypes.func.isRequired,
    match: PropTypes.shape({
        params: PropTypes.shape({
            token: PropTypes.string.isRequired
        }).isRequired
    }).isRequired
}


const mapDispatchToProps = (dispatch, props) => {
    return {
        confirm: (token) => dispatch(confirm(token))
    }
}

export default connect(null, mapDispatchToProps)(ConfirmationPage);