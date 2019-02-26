import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ServerMessage from './../components/messages/ServerMessage';

class DashboardPage extends Component {

    render() {
        var { isConfirmed } = this.props;
        return (
            <div>
                {!isConfirmed && <ServerMessage errStyle='warning' header='Warning' content='Please verify your email to unlock this page'/>}
                abc
            </div>
        );
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