import React, { Component } from 'react';
import validator from 'validator';
import InlineError from './../messages/InlineError';

class LoginPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: {
                txtEmail: '',
                txtPassword: '',
                chkbRememberMe: false
            },
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
        const errors = this.validate(this.state.data);
        this.setState({ errors })
        if (!errors) {
            console.log('okay')
        }
    }

    validate = data => {
        const errors = {};
        console.log(data)
        if (!validator.isEmail(data.txtEmail)) errors.txtEmail = 'Invalid email';
        if (!data.txtPassword) errors.txtPassword = 'Password cannot be blank';
        return errors;
    }

    render() {
        let { txtEmail, txtPassword, chkbRememberMe } = this.state.data;
        let { errors } = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <legend><h1>Login</h1></legend>
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
}

export default LoginPage;