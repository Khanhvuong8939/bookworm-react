import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InlineError from '../messages/InlineError';

class ResetPasswordForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: {
                token: this.props.token,
                password: '',
                passwordConfirm: ''
            },
            loading: false,
            errors: {}
        }
    }

    onChange = event => {
        this.setState({
            data: {
                ...this.state.data, [event.target.name]: event.target.value
            }
        })
        // if (event.target.name === 'passwordConfirm') {
        //     if (this.state.data.password !== this.state.data.passwordConfirm) this.setState({ errors: { passwordConfirm: 'Password confirm must not be difference with password' } })
        //     else this.setState({ errors: {} })
        // }
    }

    onSubmit = event => {
        event.preventDefault();
        var errors = this.validate(this.state.data);
        this.setState({ errors });
        if (Object.keys(errors).length === 0) {
            var {token, password} = this.state.data;
            var data = {
                token,
                password
            }
            this.props.submit(data)
                .catch(err => this.setState({ errors: err.response.data.global }))
        }
    }

    validate = data => {
        var errors = {};
        if (!data.password) errors.password = 'Password must not be blank!';
        if (!data.passwordConfirm) errors.passwordConfirm = 'Password confirm must not be blank!';
        if (data.password !== data.passwordConfirm) errors.passwordConfirm = 'Password and password Confirm must not difference';
        return errors;
    }

    render() {
        var { data, errors } = this.state;
        return (
            <div className="panel panel-success">
                <div className="panel-heading">
                    <h3 className="panel-title">Reset Password</h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onSubmit}>
                        <div className={`form-group ${errors.password ? 'has-error' : ''} `}>
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name='password'
                                onChange={this.onChange}
                                value={data.password}
                                placeholder="Enter new password" />
                            {errors.password && <InlineError message={errors.password} />}
                        </div>
                        <div className={`form-group ${errors.passwordConfirm ? 'has-error' : ''} `}>
                            <label>Password Confirm</label>
                            <input
                                type="password"
                                className="form-control"
                                name='passwordConfirm'
                                onChange={this.onChange}
                                value={data.passwordConfirm}
                                placeholder="Enter password confirm" />
                            {errors.passwordConfirm && <InlineError message={errors.passwordConfirm} />}

                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>

                </div>
            </div >
        );
    }
}

ResetPasswordForm.propTypes = {
    token: PropTypes.string.isRequired,
    submit: PropTypes.func.isRequired,
};

export default ResetPasswordForm;