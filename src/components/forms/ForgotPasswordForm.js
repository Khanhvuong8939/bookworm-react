import React, { Component } from 'react'
import PropTypes from 'prop-types'
import isEmail from 'validator/lib/isEmail';
import InlineError from '../messages/InlineError';
import ServerMessage from '../messages/ServerMessage';


class ForgotPasswordForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: {
                email: ''
            },
            loading: false,
            errors: {},
        }
    }

    onChange = event => {
        this.setState({
            data: {
                ...this.state.data, [event.target.name]: event.target.value
            }
        })
    }

    onSubmit = event => {
        event.preventDefault();
        var errors = this.validate(this.state.data);
        this.setState({ errors })
        if (Object.keys(errors).length === 0) {
            var data = {
                email: this.state.data.email
            }
            this.props.submit(data)
                .catch(err => {
                    this.setState({ errors: err.response.data.errors, loading: false })
                });
        }
    }

    validate = data => {
        var errors = {}
        if (!isEmail(data.email)) errors.email = 'Invalid Email!!!';
        return errors;
    }


    render() {
        var { data, errors } = this.state;
        console.log(errors)
        return (
            <div className="panel panel-success">
                <div className="panel-heading">
                    <h3 className="panel-title">Forgot Password</h3>
                </div>
                <div className="panel-body">
                    {!!errors.global && <ServerMessage errStyle='warning' header='404' content={errors.global} />}
                    <form onSubmit={this.onSubmit}>
                        <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
                            <label>Email</label>
                            <input
                                type="text"
                                className="form-control"
                                name='email'
                                onChange={this.onChange}
                                value={data.email}
                                placeholder="Input field" />
                            {errors.email && <InlineError message={errors.email} />}
                        </div>
                        <button className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

ForgotPasswordForm.propTypes = {
    submit: PropTypes.func.isRequired,
}

export default ForgotPasswordForm;