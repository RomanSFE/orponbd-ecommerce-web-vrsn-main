import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './footerweb.css';

export default class FooterWebSection extends Component {
    render() {
        return (
            <div className="orpon-bd-ecommerce-web-version-footer-main-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-12">
                            <div className="orpon-bd-ecommerce-web-version-footer-logo-lft-box">
                                <div className="orpon-bd-ecommerce-web-version-footer-logo-img">
                                    <img src={require('../../../assets/footer-logo-web.svg')} alt="orponbd online shop"/>
                                </div>
                                <div className="orpon-bd-ecommrc-wev-vrsn-footr-about">
                                    <h5>About Us</h5>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard dummy text ever since the 1500s
                                    </p>
                                </div>
                                <div className="orpon-bd-ecommrc-wev-vrsn-footr-contact-uss">
                                    <h5>Contact Us</h5>
                                    <div className="orpon-bd-ecommrc-wev-vrsn-footr-contact-uss-extt">
                                        <ul>
                                            <li className="orpon-bbdd-eccmr-fotr-locatn-reltv">
                                                <img src={require('../../../assets/footer-location-web.svg')} alt="orponbd online shop"/>
                                                <span className="footerrr-locctn-abbstlt">House-08, Avenue-1, Block-A, <br/> Section-10, Mirpur Dhaka-1216 </span>
                                            </li>
                                            <li>
                                                <img src={require('../../../assets/footer-phone-web.svg')} alt="orponbd online shop"/>
                                                <span>09638-333000</span>
                                            </li>
                                            <li>
                                                <img src={require('../../../assets/footer-mail-web.svg')} alt="orponbd online shop"/>
                                                <span>orponbdcom@gmail.com</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 col-12">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="orpon-bd-ecommrc-single-footer-menu-part-boox">
                                        <div className="orpon-bd-ecommrc-single-footer-menu-part-hedd">
                                            <h4>My Account</h4>
                                        </div>
                                        <div className="orpon-bd-ecommrc-single-footer-menu-part-itm">
                                            <ul>
                                                <li><Link to="">Sign In</Link></li>
                                                <li><Link to="">View Cart</Link></li>
                                                <li><Link to="">Order Status</Link></li>
                                                <li><Link to="">Help</Link></li>
                                                <li><Link to="">Returns</Link></li>
                                                <li><Link to="">Blog</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="orpon-bd-ecommrc-single-footer-menu-part-boox">
                                        <div className="orpon-bd-ecommrc-single-footer-menu-part-hedd">
                                            <h4>Information</h4>
                                        </div>
                                        <div className="orpon-bd-ecommrc-single-footer-menu-part-itm">
                                            <ul>
                                                <li><Link to="">About Us</Link></li>
                                                <li><Link to="">Privacy Policy</Link></li>
                                                <li><Link to="">Customer Service</Link></li>
                                                <li><Link to="">Orders And Returns</Link></li>
                                                <li><Link to="">Contact</Link></li>
                                                <li><Link to="">Disclaimer</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="orpon-bd-ecommrc-single-footer-menu-part-boox">
                                        <div className="orpon-bd-ecommrc-single-footer-menu-part-hedd">
                                            <h4>Customer Care</h4>
                                        </div>
                                        <div className="orpon-bd-ecommrc-single-footer-menu-part-itm">
                                            <ul>
                                                <li><Link to="">Terms Of Use</Link></li>
                                                <li><Link to="">Payment Methods</Link></li>
                                                <li><Link to="">Shipping Guide</Link></li>
                                                <li><Link to="">Locations We Ship To</Link></li>
                                                <li><Link to="">Estimated Delivery Time</Link></li>
                                                <li><Link to="">Sitemap</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="orpon-bd-ecommrc-single-footer-menu-part-boox">
                                        <div className="orpon-bd-ecommrc-single-footer-menu-part-hedd text-center">
                                            <h4>Download<br/> Our App</h4>
                                        </div>
                                        <div className="orpon-bd-ecommrc-single-footer-menu-part-itm">
                                            <div className="orpon-bbddd-scanner-sec-web-vvrsn text-center">
                                                <img src={require('../../../assets/footer-scanner-img.svg')} alt="orponbd online shop"/>
                                                <h5>Scan Me</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="orponbd-ecommerce-web-versionn-footer-ssubscribe-section">
                                        <span className="orponbd-ecommerce-web-versionn-subscrive-txt">Subscribe Us:</span>
                                        <input type="search" placeholder="Enter your email address..."/>
                                        <span className="orpon-bd-footer-ssubscribe-web-btn"><button type="submit">Subscribe <span><i className="fas fa-angle-right"></i></span></button></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row orpon-bbd-footer-border-secction-web">
                        <div className="col-md-4">
                            <div className="orpon-bd-footer-bottom-web-version-payment-txt">
                                <ul>
                                    <li>
                                        <img src={require('../../../assets/bkash-web-icon.svg')} alt="orponbd online shop"/>
                                    </li>
                                    <li>
                                        <img src={require('../../../assets/nagad-web-icon.svg')} alt="orponbd online shop"/>
                                    </li>
                                    <li>
                                        <img src={require('../../../assets/visa-card-web-icon.svg')} alt="orponbd online shop"/>
                                    </li>
                                    <li>
                                        <img src={require('../../../assets/master-card-web-icon.svg')} alt="orponbd online shop"/>
                                    </li>
                                    <li>
                                        <img src={require('../../../assets/american-exp-icon.svg')} alt="orponbd online shop"/>
                                    </li>
                                    <li>
                                        <img src={require('../../../assets/union-pay-paymnt-icon-ftr.svg')} alt="orponbd online shop"/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="orpon-bd-footer-bottom-web-version-social-icon-section text-center">
                                <ul>
                                    <li><span>Follow Us :</span></li>
                                    <li><Link to=""><i class="fab fa-facebook-f"></i></Link></li>
                                    <li><Link to=""><i class="fab fa-twitter"></i></Link></li>
                                    <li><Link to=""><i class="fab fa-instagram"></i></Link></li>
                                    <li><Link to=""><i class="fab fa-whatsapp"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="orpon-bd-footer-bottom-web-version-all-right-resrv-txt text-right">
                                <p>© 2020 Orpon BD. All Right Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
