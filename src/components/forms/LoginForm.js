import React, { Component } from 'react';
import validator from 'validator';
import InlineError from './../messages/InlineError';
import PropTypes from 'prop-types';

class LoginForm
    extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: {
                txtEmail: '',
                txtPassword: '',
                chkbRememberMe: false
            },
            loading: false,
            errors: {}
        }
    }

    onChange = e => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            data: { ...this.state.data, [name]: value }
        })
    }

    onSubmit = e => {
        e.preventDefault();
        var { data } = this.state;
        const errors = this.validate(data);
        this.setState({ errors })
        if (Object.keys(errors).length === 0) {
            this.setState({ loading: true })
            this.props
                .submit(data)
                .catch(err => this.setState({ errors: err.response.data.errors, loading: false }))
        }
    }

    validate = data => {
        const errors = {};
        if (!validator.isEmail(data.txtEmail)) errors.txtEmail = 'Invalid email';
        if (!data.txtPassword) errors.txtPassword = 'Password cannot be blank';
        return errors;
    }

    render() {
        let { txtEmail, txtPassword, chkbRememberMe } = this.state.data;
        let { errors, loading } = this.state;
        return (
            <form onSubmit={this.onSubmit} loading={loading}>
                {errors.global ? this.showServerAlert(errors) : ''}
                <div className={`form-group ${errors.txtEmail ? 'has-error' : ''}`}>
                    <label>Username: </label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Email"
                        name='txtEmail'
                        value={txtEmail}
                        onChange={this.onChange}
                    />
                    {errors.txtEmail && <InlineError message={errors.txtEmail} />}
                </div>

                <div className={`form-group ${errors.txtPassword ? 'has-error' : ''}`}>
                    <br />
                    <label>Password: </label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Make it secure"
                        name='txtPassword'
                        value={txtPassword}
                        onChange={this.onChange}
                    />
                    {errors.txtPassword && <InlineError message={errors.txtPassword} />}
                </div>
                <div className="form-group">
                    <div className="checkbox">
                        <label>
                            <input
                                type="checkbox"
                                value={chkbRememberMe}
                                name="chkbRememberMe"
                                checked={chkbRememberMe}
                                onChange={this.onChange}
                            />
                            Remember me:
                        </label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary mr-5">Submit</button>
                <button className="btn btn-danger" onClick={() => this.onReset}>Reset</button>
            </form>

        );
    }

    showServerAlert = messages => {
        console.log(messages)
        return (
            < div className="alert alert-danger" >
                <strong>Some thing went wrong: </strong>
                <br />
                {messages.global}
            </div >
        )

    }
}

LoginForm.propTypes = {
    submit: PropTypes.func.isRequired
}

export default LoginForm;