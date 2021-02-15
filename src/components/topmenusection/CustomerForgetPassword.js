import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { customerHttp } from '../../ApiServices/customer_http_service'
import FooterWebSection from '../allsections/footerwebsection/FooterWebSection'
import TopMenuSection from './TopMenuSection'
import Swal from 'sweetalert2';

class CustomerForgetPassword extends Component {

    constructor(props){
        super(props)

        this.state = {
            email: '',
            loading:false,
        }
    }

    handleForm = (e) => {
        e.preventDefault();

        let formData = new FormData();
        formData.append('email', this.state.email);

        customerHttp().post('/customerauth/forgetPassword', formData).then(res => {
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
                <div className="orponbd-womens-fashion-category-page-web-top-menu">
                   <TopMenuSection />
                </div>

                <div className="obd-contact-us-pages-main-section-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="obd-contact-us-pages-main-section-box-inner-content">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="obd-contact-us-pages-main-section-box-inner-input-field-box mx-auto">
                                                <div className="obd-contact-us-pages-main-section-box-inner-cont-hdd text-center">
                                                    <h3>Forget Password</h3>
                                                </div>
                                                <div className="obd-contact-us-pages-main-section-box-inner-input-field-content-mn">
                                                    <form onSubmit={this.handleForm}>
                                                        <div className="obd-contact-us-pages-main-section-box-inner-input-field-all">
                                                            <input type="email" name="email" value={this.state.email} onChange={this.handleInput} placeholder="Email Address" required/>
                                                        </div>

                                                        <div className="user-obd-otp-wv-main-section-box-sec-inppt-confrn-btn text-center">
                                                            <ul>
                                                                <li><Link to="/">Back</Link></li>
                                                                <li><button type="submit" >Submit</button></li>
                                                            </ul>
                                                        </div>
                                                    </form>
                                                
                                                </div>
                                            </div>
                                        </div>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="orponbd-womens-fashion-category-page-web-top-menu">
                    <FooterWebSection />
                </div>
            </>
        )
    }
}

export default CustomerForgetPassword
