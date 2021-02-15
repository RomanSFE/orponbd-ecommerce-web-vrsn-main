import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './proceedtopay.css';

// Tabs
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// Tabs

import TopMenuSection from '../../topmenusection/TopMenuSection';
import FooterWebSection from '../../allsections/footerwebsection/FooterWebSection';
import YouAlsoLikeSlider from '../youalsolikeslider/YouAlsoLikeSlider';

export default class ProceedToPay extends Component {

    // Add New Card
    constructor(props) {
		super(props);

        this.state = {
            showAddCard: false,
        };
    }


    // For Select cart product
    toggleAddCard= () => {
      var res = this.state.showAddCard;
      this.setState({ showAddCard: !res });
    };
    // For Select cart product

    // Add New Card

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
                                                <div className="my-cart-wv-secure-timeline-section-bordr proceedto-pay-noww-wvv"></div>
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
                                                        <div className="my-cart-shoppingg-cart-icon-bbggg">
                                                            <i className="fas fa-check"></i>
                                                        </div>
                                                        <p>Completed</p>
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

            {/* Shopping Cart and Order Summary section start */}
            <div className="my-cart-wv-shoppingcart-order-summary-section-main-box">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="my-cart-wv-shoppingcart-order-summary-section-content-main-sec">
                                <div className="row">
                                    <div className="col-md-9">
                                        <div className="my-cart-wv-shoppingcart-order-summary-section-content-left-product-lst">
                                           
                                            {/* Shopping Cart color */}
                                            <div className="my-cart-wv-shoppingcart-order-summary-section-content-color-txtt">
                                                <h4>Select Payment Method</h4>
                                                <div className="my-cart-wv-shoppingcart-order-summary-ttxt">
                                                    {/* <span className="my-cart-wv-shoppingcart-order-sum-itm"><span><p><span>7</span> Items</p></span></span> */}
                                                </div>
                                                <div className="my-cart-wv-shoppingcart-order-summary-section-brdrr"></div>
                                            </div>

                                            {/* Shopping Cart Preorder Start ---------------------------PreOrder*/}
                                            <Tabs className="my-cart-wv-shoppingcart-order-payment-method-tabs">
                                                <TabList>
                                                    <Tab>
                                                        <div className="my-cart-wv-shoppingcart-order-payment-method-logo">
                                                            <img src={require('../../../assets/payment-option-credit-card.svg')} alt="orponbd online shop"/>
                                                            <p>Credit/Debit Cards</p>
                                                        </div>
                                                    </Tab>
                                                    <Tab>
                                                        <div className="my-cart-wv-shoppingcart-order-payment-method-logo">
                                                            <img src={require('../../../assets/payment-option-bkash.svg')} alt="orponbd online shop"/>
                                                            <p>Bkash</p>
                                                        </div>
                                                    </Tab>
                                                    <Tab>
                                                        <div className="my-cart-wv-shoppingcart-order-payment-method-logo">
                                                            <img src={require('../../../assets/payment-option-nagad.svg')} alt="orponbd online shop"/>
                                                            <p>Nagad</p>
                                                        </div>
                                                    </Tab>
                                                    <Tab>
                                                        <div className="my-cart-wv-shoppingcart-order-payment-method-logo">
                                                            <img src={require('../../../assets/payment-option-cash-on-delivery.svg')} alt="orponbd online shop"/>
                                                            <p>Cash on Delivery</p>
                                                        </div>
                                                    </Tab>
                                                </TabList>

                                                <TabPanel>
                                                    <div className="my-cart-wv-order-payment-method-input-field-credit-cardd-main-box">
                                                        <div className="my-cart-wv-order-payment-method-input-field-credit-cardd-top-inpt">
                                                            <img src={require('../../../assets/payment-method-american-exp.svg')} alt=""/>
                                                            <span><input type="text" placeholder="125478***454**421"/></span>
                                                            <span><i className="fas fa-check"></i></span>

                                                            <div className="my-cart-wv-order-payment-method-input-field-cvv-crd">
                                                                <input type="text" placeholder="CVV"/>
                                                            </div>
                                                        </div>

                                                        <div className="my-shopping-cart-proceed-to-pay-add-newcard-sec">
                                                            <div className="my-shopping-cart-proceed-to-pay-add-newcard-btn">
                                                                <button onClick={ this.toggleAddCard }>
                                                                    Add New Card <span><i className="fas fa-angle-down"></i></span>
                                                                </button>
                                                                {
                                                                    this.state.showAddCard
                                                                        ? (
                                                                        <div className="my-shopping-cart-proceed-to-payu-input-add-crd-box">
                                                                            <div className="my-shopping-cart-proceed-to-payu-input-add-crd-img">
                                                                                <ul>
                                                                                    <li><img src={require('../../../assets/add-card-visaa.svg')} alt=""/></li>
                                                                                    <li><img src={require('../../../assets/add-card-american-exp.svg')} alt=""/></li>
                                                                                    <li><img src={require('../../../assets/add-card-union-pay.svg')} alt=""/></li>
                                                                                    <li><img src={require('../../../assets/add-new-card-master.svg')} alt=""/></li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="my-shopping-cart-proceed-to-payu-input-add-crd-input-flld">
                                                                                <div className="my-shopping-cart-proceed-to-payu-input-add-crd-sngl-inpt add-crd-input-immg">
                                                                                    <label htmlFor=""><span><i className="fas fa-star"></i></span>  Card Number</label>
                                                                                    <input type="text" placeholder="Enter card number"/>
                                                                                    <span className="add-crd-input-immg-abslt">
                                                                                        <img src={require('../../../assets/add-card-american-exp.svg')} alt=""/>
                                                                                    </span>
                                                                                </div>
                                                                                <div className="my-shopping-cart-proceed-to-payu-input-add-crd-sngl-inpt">
                                                                                    <label htmlFor=""><span><i className="fas fa-star"></i></span>  Name on Card</label>
                                                                                    <input type="text" placeholder="Enter Your Name"/>
                                                                                </div>
                                                                                <div className="my-shopping-cart-proceed-to-payu-input-add-crd-sngl-inpt-cvv-sec">
                                                                                    <ul>
                                                                                        <li>
                                                                                            <div className="my-shopping-cart-proceed-to-payu-input-add-crd-snglv-inpt-cvv">
                                                                                                <label htmlFor=""><span><i className="fas fa-star"></i></span>  Expiration Date</label>
                                                                                                <input type="text" placeholder="MM/YY"/>
                                                                                            </div>
                                                                                        </li>
                                                                                        <li>
                                                                                            <div className="my-shopping-cart-proceed-to-payu-input-add-crd-snglv-inpt-cvv onlycxxvvx">
                                                                                                <label htmlFor=""><span><i className="fas fa-star"></i></span>  CVV</label>
                                                                                                <input type="text" placeholder="CVV"/>
                                                                                            </div>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div className="my-shopping-cart-proceed-to-payu-save-card-ck">
                                                                                    <input type="checkbox"/> <span>Save this card</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        )
                                                                        : (
                                                                        null
                                                                        )
                                                                    }
                                                            </div>
                                                        </div>
                                                        <div className="my-cart-wv-shoppingcart-order-total-proceed-to-ckout-btn-wv">
                                                            <Link to="/congratulation">Pay Now</Link>
                                                        </div>
                                                    </div>
                                                </TabPanel>
                                                <TabPanel>
                                                    <div className="my-cart-wv-order-payment-method-input-field-credit-cardd-main-box">
                                                        <div className="my-cart-wv-order-payment-method-input-field-bkasshh">
                                                            <input type="text" placeholder="Bkash account number"/>
                                                        </div>
                                                        <div className="my-cart-wv-shoppingcart-order-total-proceed-to-ckout-btn-wv">
                                                            <Link to="/congratulation">Pay Now</Link>
                                                        </div>
                                                    </div>
                                                </TabPanel>
                                                <TabPanel>
                                                    <div className="my-cart-wv-order-payment-method-input-field-credit-cardd-main-box">
                                                        <div className="my-cart-wv-order-payment-method-input-field-bkasshh">
                                                            <input type="text" placeholder="Nagad account number"/>
                                                        </div>
                                                        <div className="my-cart-wv-shoppingcart-order-total-proceed-to-ckout-btn-wv">
                                                            <Link to="/congratulation">Pay Now</Link>
                                                        </div>
                                                    </div>
                                                </TabPanel>
                                                <TabPanel>
                                                    <div className="my-cart-wv-order-payment-method-input-field-credit-cardd-main-box">
                                                        <div className="claddgsg">
                                                            <p>Cash On Delivery</p>
                                                        </div>
                                                        <div className="my-cart-wv-shoppingcart-order-total-proceed-to-ckout-btn-wv">
                                                            <Link to="/congratulation">Pay Now</Link>
                                                        </div>
                                                    </div>
                                                </TabPanel>
                                            </Tabs>
                                            {/* Shopping Cart Preorder End ---------------------------PreOrder End*/}
                                            
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="my-cart-wv-shoppingcart-order-summary-section-content-right-sidebar-fixed">
                                            {/* Order Summary Color */}
                                            <div className="my-cart-wv-shoppingcart-order-summary-section-content-color-txtt-right">
                                                <h4>Order Summary</h4>
                                                <div className="my-cart-wv-shoppingcart-order-summary-section-brdrr-right"></div>
                                            </div>
                                            {/* Order Summary Color */}

                                            {/* Total Subtotal start */}
                                            <div className="my-cart-wv-shoppingcart-order-total-subtotal-main-box">
                                                <div className="my-cart-wv-shoppingcart-order-total-subtotal-single-itm">
                                                    <p>Subtotal</p>
                                                    <span className="my-cart-wv-shoppingcart-order-total-subtotal-amnt-ab"><h3><span>৳</span> 1200</h3></span>
                                                </div>
                                                <div className="my-cart-wv-shoppingcart-order-total-subtotal-single-itm">
                                                    <p>Discount (-)</p>
                                                    <span className="my-cart-wv-shoppingcart-order-total-subtotal-amnt-ab"><h3><span>৳</span> 50</h3></span>
                                                </div>
                                                <div className="my-cart-wv-shoppingcart-order-total-subtotal-single-itm total-itemxs">
                                                    <p>Total <span>(4 Items)</span></p>
                                                    <span className="my-cart-wv-shoppingcart-order-total-subtotal-amnt-ab total-itemxspz"><h3><span>৳</span> 450</h3></span>
                                                </div>
                                            </div>
                                            {/* Total Subtotal end */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Shopping Cart and Order Summary section end */}

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
