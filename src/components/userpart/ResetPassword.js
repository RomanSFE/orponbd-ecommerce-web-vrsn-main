import React, { Component } from 'react';
import Swal from 'sweetalert2';
import { http } from '../../ApiServices/http_services';
import Error from "../../ApiServices/ErrorService";
import { Redirect } from "react-router-dom";
import './adminusersignin.css';

class ResetPassword extends Component {

    state = {
        email: '',
        password: '',
        password_confirmation: '',
        resetToken: null,
        redirect: false,

        errors: {}
    }

    handleFrom = (e) => {
        e.preventDefault();

        const query = new URLSearchParams(this.props.location.search);
        const token = query.get('token')

        let formData = new FormData();
        formData.append('email', this.state.email);
        formData.append('password', this.state.password);
        formData.append('password_confirmation', this.state.password_confirmation);
        formData.append('resetToken', token);

        http().post('/auth/changePassword', formData).then(res => {
            Swal.fire({
                toast: true,
                position: 'top-end',
                icon: 'success',
                title: res.data.message,
                showConfirmButton: false,
                timer: 1500
            });

            this.setState({
                email: '',
                password: '',
                password_confirmation: '',
                redirect: true
            });

        }).catch(e => {
            if(e.response.status === 422)
            {
                switch (e.response.status)
                {
                    case 422:
                        this.setState({
                            errors: e.response.data.errors
                        })
                        break;
                    default:
                        this.$swal.fire({
                            icon: 'error',
                            text: 'Oops',
                            title: e.response.data.error,
                        });
                        break;
                }
            }
            
        })
    }

    handleInput = (e) => {
        e.preventDefault();

        const name = e.target.name;

        const value = e.target.value;

        this.setState({
            [name]:value
        });
    };

    render() {

        if (this.state.redirect === true) {
            return <Redirect to={'/admin-signin'} />
        }

        return (
            <>
            <div className="obd-admin-dashboard-user-login-main-box text-center mx-auto">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="obd-admin-dashboard-user-login-logo-img">
                                <img src={require('../../assets/signin-logo-img.png')} alt="OrponBD Online shop"/>
                            </div>
                            <div className="obd-admin-dashboard-user-login-form-main-sec">
                                <form onSubmit={this.handleFrom}>

                                    <div className="obd-admin-dashboard-user-login-form-main-sec-content">

                                        <div className="obd-admin-dashboard-user-login-form-input-field">
                                            <input type="email" name="email" onChange={this.handleInput} placeholder="Enter your email"/>
                                            <Error error={this.state.errors['email'] ? this.state.errors['email'] : null}/>
                                        </div>

                                        <div className="obd-admin-dashboard-user-login-form-input-field">
                                            <input type="password" name="password" onChange={this.handleInput} placeholder="Enter your password"/>
                                            <Error error={this.state.errors['password'] ? this.state.errors['password'] : null} />
                                        </div>

                                        <div className="obd-admin-dashboard-user-login-form-input-field">
                                            <input type="password" name="password_confirmation" onChange={this.handleInput} placeholder="ReType password"/>
                                            <Error error={this.state.errors['password'] ? this.state.errors['password'] : null} />
                                        </div>

                                        <div className="obd-admin-dashboard-user-login-form-signin-btn">
                                            <button type="submit">Reset Confirm</button>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="obd-admin-dashboard-user-login-main-box-footer text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="obd-admin-dashboard-user-login-main-box-footer-content">
                                <p>© 2018 - 2021 <span>ORPON BD</span>. All right reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default ResetPassword
