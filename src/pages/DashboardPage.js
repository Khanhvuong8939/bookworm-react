import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ServerMessage from './../components/messages/ServerMessage';

class DashboardPage extends Component {

    render() {
        var { isConfirmed } = this.props;
        return (
            <div>
                {isConfirmed ? this.verifyEmail(isConfirmed) : ''}
                abc
            </div>
        );
    }

    verifyEmail = (isConfirmed) => {
        var message = { header: 'Warning', content: 'Please verify your email to unlock this page', class:'warning' }
        if (!isConfirmed) {
            return <ServerMessage message={message} />
        }
    }
}

DashboardPage.propTypes = {
    isConfirmed: PropTypes.bool.isRequired,
};

const mapStateToProps = state => {
    return {
        isConfirmed: !!state.user.confirmed
    }
}

export default connect(mapStateToProps, null)(DashboardPage);