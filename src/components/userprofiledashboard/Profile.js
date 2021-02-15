import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './profileonly.css';

import FooterWebSection from '../allsections/footerwebsection/FooterWebSection';
import YouAlsoLikeSlider from '../cart/youalsolikeslider/YouAlsoLikeSlider';
import ProfileTopMenuSection from './ProfileTopMenuSection';

export default class Profile extends Component {

    render() {
        return (
            <>
            <div className="orponbd-womens-fashion-category-page-web-top-menu">
                <ProfileTopMenuSection/>
            </div>

           <div className="obd-profile-account-section-main-profile-section">
               <div className="container">
                   <div className="row">
                       <div className="col-md-2">
                           <div className="obd-profile-account-section-main-profile-left-menu-section-box">
                               <div className="obd-profile-account-section-main-profile-left-menu-sect-itm">
                                    <ul>
                                        <li className="womennsss-main-cattt-wbv">
                                            <NavLink 
                                                tag={Link}
                                                d="navResume"
                                                className="inactive resumeImageHome"
                                                activeClassName="activestyleclasshome"
                                                to="/my-orders"
                                                activeStyle={{
                                                    fontWeight: "normal",
                                                    color: "#fb4c2c"
                                                }}>
                                                    <span className="profile-imggg-none-img"><img src={require('../../assets/profile-my-order-red.svg')} alt=""/></span>
                                                    <span>My Orders</span>
                                            </NavLink>
                                        </li>
                                        <li className="womennsss-main-cattt-wbv">
                                            <NavLink 
                                                tag={Link}
                                                d="navResume"
                                                className="inactive resumeImageWishlist"
                                                activeClassName="activestyleclassWishlist"
                                                to="/my-wishlist"
                                                activeStyle={{
                                                    fontWeight: "normal",
                                                    color: "#fb4c2c"
                                                }}>
                                                    <span className="profile-imggg-none-img-wishlst"><img src={require('../../assets/profile-my-wishlist-red.svg')} alt=""/></span>
                                                    <span>Wishlist</span>
                                            </NavLink>
                                        </li>
                                        <li className="womennsss-main-cattt-wbv">
                                            <NavLink 
                                                tag={Link}
                                                d="navResume"
                                                className="inactive resumeImagePreorder"
                                                activeClassName="activestyleclassPreorder"
                                                to="/my-preorders"
                                                activeStyle={{
                                                    fontWeight: "normal",
                                                    color: "#fb4c2c"
                                                }}>
                                                    <span className="profile-imggg-none-img-wishlst-pre-ordr"><img src={require('../../assets/profile-preorder-red.svg')} alt=""/></span>
                                                    <span>Preorders</span>
                                            </NavLink>
                                        </li>
                                        <li className="womennsss-main-cattt-wbv">
                                            <NavLink 
                                                tag={Link}
                                                d="navResume"
                                                className="inactive resumeImageCoupons"
                                                activeClassName="activestyleclassCoupons"
                                                to="/my-coupons"
                                                activeStyle={{
                                                    fontWeight: "normal",
                                                    color: "#fb4c2c"
                                                }}>
                                                    <span className="profile-imggg-none-img-wishlst-copn"><img src={require('../../assets/profile-coupon-red.svg')} alt=""/></span>
                                                    <span>Coupons</span>
                                            </NavLink>
                                        </li>
                                        <li className="womennsss-main-cattt-wbv">
                                            <NavLink 
                                                tag={Link}
                                                d="navResume"
                                                className="inactive resumeImageWallet"
                                                activeClassName="activestyleclassWallet"
                                                to="/my-wallet"
                                                activeStyle={{
                                                    fontWeight: "normal",
                                                    color: "#fb4c2c"
                                                }}>
                                                    <span className="profile-imggg-none-img-wishlst-mm-wlt"><img src={require('../../assets/profile-wallet-red.svg')} alt=""/></span>
                                                    <span>My Wallet</span>
                                            </NavLink>
                                        </li>
                                        <li className="womennsss-main-cattt-wbv">
                                            <NavLink 
                                                tag={Link}
                                                d="navResume"
                                                className="inactive resumeImageManageReview"
                                                activeClassName="activestyleclassManageReview"
                                                to="/manage-reviews"
                                                activeStyle={{
                                                    fontWeight: "normal",
                                                    color: "#fb4c2c"
                                                }}>
                                                    <span className="profile-imggg-none-img-wishlst"><img src={require('../../assets/profile-manage-rev-red.svg')} alt=""/></span>
                                                    <span>Manage Reviews</span>
                                            </NavLink>
                                        </li>
                                        <li className="womennsss-main-cattt-wbv">
                                            <NavLink 
                                                tag={Link}
                                                d="navResume"
                                                className="inactive resumeImageAddreBook"
                                                activeClassName="activestyleclassAddreBook"
                                                to="/my-address-book"
                                                activeStyle={{
                                                    fontWeight: "normal",
                                                    color: "#fb4c2c"
                                                }}>
                                                    <span className="profile-imggg-none-img-wishlst-addrs"><img src={require('../../assets/profile-address-book-red.svg')} alt=""/></span>
                                                    <span>Address Book</span>
                                            </NavLink>
                                        </li>
                                        <li className="womennsss-main-cattt-wbv">
                                            <NavLink 
                                                tag={Link}
                                                d="navResume"
                                                className="inactive resumeImageAccSettings"
                                                activeClassName="activestyleclassAccSettings"
                                                to="/my-account-settings"
                                                activeStyle={{
                                                    fontWeight: "normal",
                                                    color: "#fb4c2c"
                                                }}>
                                                    <span className="profile-imggg-none-img-wishlst-acc-set"><img src={require('../../assets/profile-setting-red.svg')} alt=""/></span>
                                                    <span>Account Setting</span>
                                            </NavLink>
                                        </li>
                                    </ul>
                               </div>
                               <div className="obd-profile-account-section-main-profile-left-menu-sect-itm-scanner-img-bx">
                                   <div className="obd-profile-account-section-main-profile-left-menu-sxc-scanner-img text-center">
                                       <h4>Download Our App</h4>
                                        <img src={require('../../assets/profile-down-scanner-wv.png')} alt="orponbd online shop"/>
                                        <p>Scan Me</p>
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div className="col-md-10">
                           <div className="obd-profile-account-section-main-profile-section-right-main-box">

                                {/* Profile Image Box start */}
                               <div className="obd-profile-account-section-main-profile-section-right-info-box">
                                    <div className="row obd-profile-account-section-main-profile-section-right-excd-pdd">
                                        <div className="col-md-2">
                                            <div className="obd-profile-account-section-main-profile-section-right-prf-img text-center">
                                                <img src={require('../../assets/user-profile-wv-pic.png')} alt="orponbd online shop"/>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="obd-profile-account-section-main-profile-section-right-prf-nm-cnnt">
                                                <h4>Abdulla Al Roman</h4>
                                                <p><span><i class="fas fa-envelope"></i></span> example@gmail.com</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="obd-profile-account-section-main-profile-section-right-prf-my-wlltx">
                                                <h4>My Wallet</h4>
                                                <p>Balance: <span>1750 TK</span></p>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="obd-profile-account-section-main-profile-section-right-prf-coupnxs">
                                                <Link to="">My Coupons (<span> 7 </span>)</Link>
                                            </div>
                                        </div>
                                    </div>
                               </div>
                               {/* Profile Image Box end */}

                                {/* Profile Order Awaiting Box start */}
                                <div className="obd-profile-account-section-main-profile-section-right-order-ccount-box">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="obd-profile-account-section-main-profile-section-right-order-ccnxt text-center">
                                                <h4>5</h4>
                                                <p>All Orders</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="obd-profile-account-section-main-profile-section-right-order-ccnxt text-center">
                                                <h4>2</h4>
                                                <p>Awaiting Payment</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="obd-profile-account-section-main-profile-section-right-order-ccnxt text-center">
                                                <h4>1</h4>
                                                <p>Delivery Pending</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="obd-profile-account-section-main-profile-section-right-order-ccnxt right-order-ccnxt-brdr-non text-center">
                                                <h4>2</h4>
                                                <p>Delivered</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Profile Order Awaiting Box end */}

                                {/* Profile All Order Main Box start*/}
                                <div className="obd-profile-account-section-main-profile-section-right-all-order-main-bbox">
                                    <div className="row obd-profile-account-section-main-profile-right-exccv-pxfdd">
                                        <div className="col-md-7">
                                            <div className="obd-profile-account-section-main-profile-section-right-all-order-content-boxx">
                                                <div className="obd-profile-account-section-main-profil-right-all-order-content-heedd">
                                                    <h4>My Orders</h4>
                                                </div>
                                                <div className="obd-profile-account-section-main-profile-section-right-all-order-content-img-sec text-center">
                                                    <img src={require('../../assets/my-order-profile-empty-order.png')} alt="orponbd online shop"/>
                                                    <div className="obd-profile-account-section-main-profile-section-right-all-order-content-img-txt text-center">
                                                        <p>No Order Yet</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-5">

                                            {/* WishList Box Start */}
                                            <div className="obd-profile-account-section-main-profile-section-right-wishlst-his">
                                                <div className="obd-profile-account-section-main-profile-section-right-bb-web-verrsn">
                                                    <p> Wishlist</p>
                                                    <div className="obd-profile-account-section-brdrrx-wish"></div>
                                                    <Link to="/my-wishlist"><span>See More <i className="fa fa-angle-right"></i></span></Link>
                                                </div>

                                                <div className="row obd-profile-main-profile-section-right-delproj-rww-webb-versnn">
                                                    <div className="col-md-12">
                                                        <div className="row obd-pro-right-rro-global-shopping-item-bbox">
                                                            <div className="col-md-12">
                                                                <div className="obd-profile-account-section-main-profile-section-right-small-boxc">
                                                                    <div className="row obd-profile-main-profile-section-right-exx-paddng">
                                                                        <div className="col-md-4 obd-profile-exx-paddng-only-colmm">
                                                                            <div className="obd-pro-right-shopping-item-web-single-item">
                                                                                <Link to="/">
                                                                                    <div className="obd-profile-account-right-item-web-single-item-img">
                                                                                        <img src={require('../../assets/cart-product-1.png')} alt="orponbd online shop"/>
                                                                                        <div className="obd-profile-account-right-web-single-item-price-txt">
                                                                                            <h4><span>৳</span> 1200</h4>
                                                                                        </div>
                                                                                    </div>
                                                                                </Link>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-4 obd-profile-exx-paddng-only-colmm">
                                                                            <div className="obd-pro-right-shopping-item-web-single-item">
                                                                                <Link to="">
                                                                                    <div className="obd-profile-account-right-item-web-single-item-img">
                                                                                        <img src={require('../../assets/cart-product-2.png')} alt="orponbd online shop"/>
                                                                                        <div className="obd-profile-account-right-web-single-item-price-txt">
                                                                                            <h4><span>৳</span> 1200</h4>
                                                                                        </div>
                                                                                    </div>
                                                                                </Link>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-4 obd-profile-exx-paddng-only-colmm">
                                                                            <div className="obd-pro-right-shopping-item-web-single-item">
                                                                                <Link to="">
                                                                                    <div className="obd-profile-account-right-item-web-single-item-img">
                                                                                        <img src={require('../../assets/cart-product-3.png')} alt="orponbd online shop"/>
                                                                                        <div className="obd-profile-account-right-web-single-item-price-txt">
                                                                                            <h4><span>৳</span> 1200</h4>
                                                                                        </div>
                                                                                    </div>
                                                                                </Link>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* WishList Box End -------------------------- */}

                                            {/* History Box Start */}
                                            <div className="obd-profile-account-section-main-profile-section-right-wishlst-his">
                                                <div className="obd-profile-account-section-main-profile-section-right-bb-web-verrsn">
                                                    <p> History</p>
                                                    <div className="obd-profile-account-section-brdrrx"></div>
                                                    <Link to="/flash-deal-all-products"><span>See More <i className="fa fa-angle-right"></i></span></Link>
                                                </div>

                                                <div className="row obd-profile-main-profile-section-right-delproj-rww-webb-versnn">
                                                    <div className="col-md-12">
                                                        <div className="row obd-pro-right-rro-global-shopping-item-bbox">
                                                            <div className="col-md-12">
                                                                <div className="obd-profile-account-section-main-profile-section-right-small-boxc">
                                                                    <div className="row obd-profile-main-profile-section-right-exx-paddng">
                                                                        <div className="col-md-4 obd-profile-exx-paddng-only-colmm">
                                                                            <div className="obd-pro-right-shopping-item-web-single-item">
                                                                                <Link to="/">
                                                                                    <div className="obd-profile-account-right-item-web-single-item-img">
                                                                                        <img src={require('../../assets/global-shoppng-11.png')} alt="orponbd online shop"/>
                                                                                        <div className="obd-profile-account-right-web-single-item-price-txt">
                                                                                            <h4><span>৳</span> 1200</h4>
                                                                                        </div>
                                                                                    </div>
                                                                                </Link>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-4 obd-profile-exx-paddng-only-colmm">
                                                                            <div className="obd-pro-right-shopping-item-web-single-item">
                                                                                <Link to="">
                                                                                    <div className="obd-profile-account-right-item-web-single-item-img">
                                                                                        <img src={require('../../assets/global-shoppng-12.png')} alt="orponbd online shop"/>
                                                                                        <div className="obd-profile-account-right-web-single-item-price-txt">
                                                                                            <h4><span>৳</span> 1200</h4>
                                                                                        </div>
                                                                                    </div>
                                                                                </Link>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-4 obd-profile-exx-paddng-only-colmm">
                                                                            <div className="obd-pro-right-shopping-item-web-single-item">
                                                                                <Link to="">
                                                                                    <div className="obd-profile-account-right-item-web-single-item-img">
                                                                                        <img src={require('../../assets/global-shoppng-13.png')} alt="orponbd online shop"/>
                                                                                        <div className="obd-profile-account-right-web-single-item-price-txt">
                                                                                            <h4><span>৳</span> 1200</h4>
                                                                                        </div>
                                                                                    </div>
                                                                                </Link>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* History Box End -------------------------- */}
                                        </div>
                                    </div>
                                </div>
                                {/* Profile All Order Main Box end */}
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
