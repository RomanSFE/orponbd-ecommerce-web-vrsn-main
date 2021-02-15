import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './congratulationpage.css';

import TopMenuSection from '../../topmenusection/TopMenuSection';
import FooterWebSection from '../../allsections/footerwebsection/FooterWebSection';
import YouAlsoLikeSlider from '../youalsolikeslider/YouAlsoLikeSlider';

export default class CongratulationPage extends Component {

    render() {
        return (
            <>
            <div className="orponbd-womens-fashion-category-page-web-top-menu">
                <TopMenuSection/>
            </div>

            {/* Secure text and Timeline start */}
            <div className="my-cart-wv-secute-check-time-line-section-main-box">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="my-cart-wvsecure-txt-check-time-line-color-boox">
                                <div className="row">
                                    <div className="col-md-5">
                                        <div className="my-cart-wv-secute-check-time-line-section-sec-txt">
                                            <img src={require('../../../assets/cart-secure-check-icon.svg')} alt="orponbd online shop"/>
                                            <span>Secere Checkout</span>
                                        </div>
                                    </div>
                                    <div className="col-md-7">
                                        <div className="my-cart-wv-secure-timeline-section-timeline-sec">
                                            {/* Timeline */}
                                            <div className="my-cart-wv-secure-timeline-section-bbox">
                                                <div className="my-cart-wv-secure-timeline-section-bordr proceedto-pay-congrat"></div>
                                            </div>
                                            <div className="my-cart-wv-secure-timeline-section-bbox-color-box text-center">
                                                <ul>
                                                    <li>
                                                        <div className="my-cart-shoppingg-cart-icon-bbggg shoppinf-color">
                                                            <i className="fas fa-check"></i>
                                                        </div>
                                                        <p className="my-cart-shoppingg-cart-icon-tzxt">Shopping Cart</p>
                                                    </li>
                                                    <li>
                                                        <div className="my-cart-shoppingg-cart-icon-bbggg shoppinf-color">
                                                            <i className="fas fa-check"></i>
                                                        </div>
                                                        <p className="my-cart-shoppingg-cart-icon-tzxt">Place Order</p>
                                                    </li>
                                                    <li>
                                                        <div className="my-cart-shoppingg-cart-icon-bbggg shoppinf-color">
                                                            <i className="fas fa-check"></i>
                                                        </div>
                                                        <p className="my-cart-shoppingg-cart-icon-tzxt">Pay</p>
                                                    </li>
                                                    <li>
                                                        <div className="my-cart-shoppingg-cart-icon-bbggg shoppinf-color">
                                                            <i className="fas fa-check"></i>
                                                        </div>
                                                        <p className="my-cart-shoppingg-cart-icon-tzxt">Completed</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            {/* Timeline */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Secure text and Timeline End */}

            <div className="my-cart-wv-shoppingcart-order-congratulation-page-main-sec-wv">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="my-cart-wv-shoppingcart-order-congratulation-cong-mainx-bx">
                                <div className="my-cart-wv-shoppingcart-order-congratulation-cong-txt text-center">
                                    <h3>Congratulations !</h3>
                                    <p>
                                        You have successfully place an order to Orpon BD <br/>
                                        Thank you for ordering in our shop. You will receive a confirmation e-mail shortly.
                                    </p>
                                </div>
                                <div className="my-cart-wv-shoppingcart-order-congratulation-banner-img-sec text-center">
                                    <img src={require('../../../assets/cart-page-congratulation-page.png')} alt="orponbd online shop"/>
                                </div>
                                <div className="my-cart-wv-shoppingcart-order-congratulation-con-shop-btn text-center">
                                    <Link to="/">Continue Shopping</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="youmayalso-like-slider-cart-page-main-box-wv">
                <div className="container">
                    <YouAlsoLikeSlider/>
                </div>
            </div>

            <div className="orponbd-womens-fashion-category-page-web-top-menu">
                <FooterWebSection/>
            </div>
            </>
        )
    }
}
