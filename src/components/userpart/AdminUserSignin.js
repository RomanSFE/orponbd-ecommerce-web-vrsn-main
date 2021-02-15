import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './adminusersignin.css';
import {http} from "../../ApiServices/http_services";
import Error from "../../ApiServices/ErrorService";

class AdminUserSignin extends Component {

    constructor(props){
        super(props);

        this.state = {email: '', password: '', errors: {}}
    }

    handleFrom = (e) => {
        e.preventDefault();

        const data = {
            email: this.state.email,
            password:this.state.password
        };

        http().post('/auth/signin', data).then(res => {

            localStorage.setItem('token', res.data.access_token);

            this.props.setLogin(res.data.user);

            this.props.history.push('/admin-dashboard');
        }).catch(e => {
            this.setState({
                errors: e.response.data.errors
            })
        });

        //console.log(data);
    };

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

                                    <div className="text-center">
                                        <Error error={this.state.errors['result'] ? this.state.errors['result'] : null}/>
                                    </div>


                                    <div className="obd-admin-dashboard-user-login-form-main-sec-content">

                                        <div className="obd-admin-dashboard-user-login-form-input-field">
                                            <input type="email" name="email" onChange={this.handleInput} placeholder="Enter your email"/>
                                            <Error error={this.state.errors['email'] ? this.state.errors['email'] : null}/>
                                        </div>
                                        <div className="obd-admin-dashboard-user-login-form-input-field">
                                            <input type="password" name="password" onChange={this.handleInput} placeholder="Enter your password"/>
                                            <Error error={this.state.errors['password'] ? this.state.errors['password'] : null} />
                                        </div>

                                        <div className="obd-admin-dashboard-user-login-form-remember-and-forget-sec text-left">
                                            <input type="checkbox"/><span>Remember Me</span>
                                            <Link to="/admin-forget-password">Forget your password?</Link>
                                        </div>

                                        <div className="obd-admin-dashboard-user-login-form-signin-btn">
                                            <button type="submit">Sign In</button>
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

const mapDispatchToProps = (dispatch) => {
    return{
        setLogin: (user) => dispatch({type: "SET_LOGIN", payload: user})
    }
};


export default connect(null,mapDispatchToProps)(AdminUserSignin);