import React, { Component } from 'react';
import validator from 'validator';
import InlineError from './../messages/InlineError';
import PropTypes from 'prop-types';
import ServerMessage from '../messages/ServerMessage';

class LoginForm
    extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: {
                email: '',
                password: '',
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
        var data = {
            email: this.state.data.email,
            password: this.state.data.password
        }
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
        if (!validator.isEmail(data.email)) errors.email = 'Invalid email';
        if (!data.password) errors.password = 'Password cannot be blank';
        return errors;
    }

    render() {
        let { email, password, chkbRememberMe } = this.state.data;
        let { errors, loading } = this.state;
        return (
            <form onSubmit={this.onSubmit} load={`${loading}`}>
                {errors.global ? this.showServerAlert(errors) : ''}
                <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
                    <label>Username: </label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Email"
                        name='email'
                        value={email}
                        onChange={this.onChange}
                    />
                    {errors.email && <InlineError message={errors.email} />}
                </div>

                <div className={`form-group ${errors.password ? 'has-error' : ''}`}>
                    <br />
                    <label>Password: </label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Make it secure"
                        name='password'
                        value={password}
                        onChange={this.onChange}
                    />
                    {errors.password && <InlineError message={errors.password} />}
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
                <button className="btn btn-danger mr-5" onClick={() => this.onReset}>Reset</button>
                
                
            </form>
            


        );
    }

    showServerAlert = messages => <ServerMessage errStyle='danger' header='Something went wrong: ' content={messages.global} />

}

LoginForm.propTypes = {
    submit: PropTypes.func.isRequired
}

export default LoginForm;