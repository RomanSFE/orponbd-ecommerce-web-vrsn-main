import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';
import { http } from '../../ApiServices/http_services';
import './adminusersignin.css';

class ForgetPassword extends Component {

    constructor(props){
        super(props)

        this.state = {
            email: '',
            loading:false,
        }
    }

     handleFrom = (e) => {
        e.preventDefault();

        let formData = new FormData();
        formData.append('email', this.state.email);

        http().post('/auth/forgetPassword', formData).then(res => {
            Swal.fire({
                toast: true,
                position: 'top-end',
                icon: 'success',
                title: res.data.message,
                showConfirmButton: false,
                timer: 1500
            });

            this.setState({
                email: ''
            })
        }).catch(e => {
            console.log(e);

            if (e.response.status === 404)
            {
                Swal.fire({
                    toast: true,
                    position: 'top-end',
                    icon: 'error',
                    title: e.response.data.error,
                    showConfirmButton: false,
                    timer: 2500
                });
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
                                            <input type="email" name="email" value={this.state.email} onChange={this.handleInput} placeholder="Enter your email"/>
                                            {/* <Error error={this.state.errors['email'] ? this.state.errors['email'] : null}/> */}
                                        </div>

                                        <div className="user-obd-otp-wv-main-section-box-sec-inppt-confrn-btn text-center">
                                            <ul>
                                                <li><Link to="/admin-signin">Back</Link></li>
                                                <li><button type="submit" >Submit</button></li>
                                            </ul>
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

export default ForgetPassword
