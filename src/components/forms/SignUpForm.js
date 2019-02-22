import React, { Component } from 'react';
import PropTypes from 'prop-types';

import isEmail from 'validator/lib/isEmail';
import InlineError from '../messages/InlineError';
import ServerMessage from '../messages/ServerMessage';

class SignUpForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            data: {
                email: '',
                password: ''
            },
            loading: false,
            errors: {}
        }
    }
    onChange = event => {
        this.setState({
            ...this.state, data: {
                [event.target.name]: event.target.value
            }
        })
    }

    onSubmit = event => {
        event.preventDefault();
        var errors = this.validate(this.state.data);
        this.setState({ errors })
        if (Object.keys(errors).length === 0) {
            this.setState({ loading: true })
            this.props.submit(this.state.data)
                .catch(err => this.setState({ errors: err.response.data.errors, loading: false }))
        }
    }

    validate = data => {
        const errors = {};
        if (!isEmail(data.email)) errors.email = 'invalid Email'
        if (!data.password) errors.password = 'Password must not be blank'
        return errors;
    }


    render() {
        var { data, loading, errors } = this.state
        return (
            <div>
                {errors.global ? this.showServerErr('') : ''}
                <form onSubmit={this.onSubmit} load={`${loading}`}>
                    <legend>Sign Up</legend>
                    <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
                        <label >Email: </label>
                        <input type="text"
                            className="form-control"
                            name='email'
                            value={data.email}
                            onChange={this.onChange}
                            placeholder="Enter your email" />
                        {errors.email && <InlineError message={errors.email} />}
                    </div>
                    <div className={`form-group ${errors.password ? 'has-error' : ''}`}>
                        <label >Password: </label>
                        <input type="password"
                            className="form-control"
                            name='password'
                            value={data.password}
                            onChange={this.onChange}
                            placeholder="Enter your email" />
                        {errors.password && <InlineError message={errors.password} />}
                    </div>
                    <button className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }

    showServerErr = msg => (
        <ServerMessage errStyle='danger' header='Something went wrong' content={msg} />
    )
}

SignUpForm.propTypes = {
    submit: PropTypes.func.isRequired
};

export default SignUpForm;