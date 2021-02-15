import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './contactuspage.css'

import TopMenuSection from '../../topmenusection/TopMenuSection';
import FooterWebSection from '../../allsections/footerwebsection/FooterWebSection';
import { customerHttp } from '../../../ApiServices/customer_http_service';

import Swal from 'sweetalert2';

export default class ContactUsPage extends Component {

    state = {
        first_name: '',
        last_name: '',
        mobile: '',
        email: '',
        message: '',
        receive_email_different_offer: '',
    }

    handleForm = (e) => {
        e.preventDefault();

        let formData = new FormData();
        formData.append('first_name', this.state.first_name);
        formData.append('last_name', this.state.last_name);
        formData.append('mobile', this.state.mobile);
        formData.append('email', this.state.email);
        formData.append('message', this.state.message);
        formData.append('receive_email_different_offer', this.state.receive_email_different_offer);

        customerHttp().post('/front/contactUs', formData).then(res => {
            Swal.fire({
                toast: true,
                position: 'top-end',
                icon: 'success',
                title: res.data.message,
                showConfirmButton: false,
                timer: 2500
            });

            this.setState({
                first_name: '',
                last_name: '',
                mobile: '',
                email: '',
                message: '',
                receive_email_different_offer: '',
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
                <TopMenuSection/>
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
                                                <h3>Contact Us</h3>
                                            </div>
                                            <form onSubmit={this.handleForm}>
                                                <div className="obd-contact-us-pages-main-section-box-inner-input-field-content-mn">
                                                    <div className="obd-contact-us-pages-main-section-box-inner-input-field-fst-nm-lst-nm">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="obd-contact-us-pages-main-section-box-inner-input-field-fst-nm-ex">
                                                                    <input type="text" name="first_name" value={this.state.first_name} onChange={this.handleInput} placeholder="First Name" required/>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="obd-contact-us-pages-main-section-box-inner-input-field-fst-nm-ex">
                                                                    <input type="text" name="last_name" value={this.state.last_name} onChange={this.handleInput} placeholder="Last Name" required/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="obd-contact-us-pages-main-section-box-inner-input-field-all">
                                                        <input type="text" name="mobile" value={this.state.mobile} onChange={this.handleInput} placeholder="Mobile Number" required/>
                                                    </div>
                                                    <div className="obd-contact-us-pages-main-section-box-inner-input-field-all">
                                                        <input type="email" name="email" value={this.state.email} onChange={this.handleInput} placeholder="Email Address" required/>
                                                    </div>
                                                    <div className="obd-contact-us-pages-main-section-box-inner-input-field-all">
                                                        <textarea name="message" value={this.state.message} id="" cols="30" rows="10" onChange={this.handleInput} placeholder="Write your message here...."></textarea>
                                                    </div>
                                                    <div className="obd-contact-us-pages-main-section-box-inner-input-field-all-check-bxx">
                                                        <input type="checkbox" value={this.state.receive_email_different_offer} name="receive_email_different_offer" onChange={this.handleInput}/> <span>I want to receive email regarding different offers and discount.</span>
                                                    </div>
                                                    <div className="obd-contact-us-pages-main-section-box-inner-input-field-all-buttonn text-center">
                                                        <button type="submit">Send</button>
                                                    </div>
                                                </div>
                                            </form>
                                            
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="obd-contact-us-pages-main-section-box-inner-right-image-info-main-box">
                                            <div className="obd-contact-us-pages-main-section-box-inner-right-image-onlly">
                                                <img src={require('../../../assets/contuct-us-banner.png')} alt="OrponBD Online shop"/>
                                            </div>
                                            
                                            <div className="obd-contact-us-pages-main-section-box-inner-right-only-info-box">
                                                <div className="obd-contact-us-pages-main-section-box-inner-right-only-img-logo text-center">
                                                    <img src={require('../../../assets/contact-us-obd-logo.png')} alt="OrponBD Online shop"/>
                                                </div>

                                                {/* Address */}
                                                <div className="orpon-bd-ecommrc-wev-vrsn-contact-page-contact-uss">
                                                    <div className="orpon-bd-ecommrc-wev-vrsn-contact-page-contact-uss-extt">
                                                        <ul>
                                                            <li className="orpon-bbdd-eccmr-contact-pg-locatn-reltv">
                                                                <img src={require('../../../assets/contact-page-addrs.svg')} alt="orponbd online shop"/>
                                                                <span className="footerrr-locctn-abbstlt-contact-pgg">House-08, Avenue-1, Block-A, <br/> Section-10, Mirpur Dhaka-1216 </span>
                                                            </li>
                                                            <li>
                                                                <img src={require('../../../assets/contact-page-call.svg')} alt="orponbd online shop"/>
                                                                <span>09638-333000</span>
                                                            </li>
                                                            <li>
                                                                <img src={require('../../../assets/contact-pagge-gml.svg')} alt="orponbd online shop"/>
                                                                <span>orponbdcom@gmail.com</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Address */}

                                                {/* Social Share */}
                                                <div className="obd-contact-pagg-itxm-web-version-social-icon-section text-center">
                                                    <p>Follow Us:</p>
                                                    <ul>
                                                        <li className="obd-contact-pgg-itxm-details-share-social-icon">
                                                            <li className="obd-contact-pggg-itxm-details-facbk"><Link to=""><i class="fab fa-facebook-f"></i></Link></li>
                                                            <li className="obd-contact-pggg-itxm-details-twittr"><Link to=""><i class="fab fa-twitter"></i></Link></li>
                                                            <li className="obd-contact-pggg-itxm-details-instag"><Link to=""><i class="fab fa-instagram"></i></Link></li>
                                                        </li>
                                                    </ul>
                                                </div>
                                                {/* Social Share */}
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
                <FooterWebSection/>
            </div>
            </>
        )
    }
}
