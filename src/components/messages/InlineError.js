import React, { Component } from 'react';
import PropTypes from 'prop-types'


class InlineError extends Component {
    render() {
        var { message } = this.props;
        console.log(message);
        return (
            <span class="help-block">{message}</span>
        );
    }
}

InlineError.propTypes = {
    message: PropTypes.string.isRequired
}

export default InlineError;