import React, { Component } from 'react';
import LoginForm from './../components/forms/LoginForm'
import { login } from './../actions/auth.js';
import { connect } from 'react-redux';

class LoginPage extends Component {

    submit = data => this.props.login(data).then(console.log('success'))

    render() {
        return (
            <div>
                <h1>Login Page</h1>
                <LoginForm submit={this.submit} />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        login: (data) => { dispatch(login(data)) }
    }

}

export default connect(null, mapDispatchToProps)(LoginPage);