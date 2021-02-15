import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { NavLink } from 'react-router-dom'

import FooterWebSection from '../../allsections/footerwebsection/FooterWebSection'
import YouAlsoLikeSlider from '../../cart/youalsolikeslider/YouAlsoLikeSlider'
import ProfileTopMenuSection from '../ProfileTopMenuSection'

export default class PreOrderList extends Component {
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
                                                    <span className="profile-imggg-none-img"><img src={require('../../../assets/profile-my-order-red.svg')} alt=""/></span>
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
                                                    <span className="profile-imggg-none-img-wishlst"><img src={require('../../../assets/profile-my-wishlist-red.svg')} alt=""/></span>
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
                                                    <span className="profile-imggg-none-img-wishlst-pre-ordr"><img src={require('../../../assets/profile-preorder-red.svg')} alt=""/></span>
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
                                                    <span className="profile-imggg-none-img-wishlst-copn"><img src={require('../../../assets/profile-coupon-red.svg')} alt=""/></span>
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
                                                    <span className="profile-imggg-none-img-wishlst-mm-wlt"><img src={require('../../../assets/profile-wallet-red.svg')} alt=""/></span>
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
                                                    <span className="profile-imggg-none-img-wishlst"><img src={require('../../../assets/profile-manage-rev-red.svg')} alt=""/></span>
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
                                                    <span className="profile-imggg-none-img-wishlst-addrs"><img src={require('../../../assets/profile-address-book-red.svg')} alt=""/></span>
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
                                                    <span className="profile-imggg-none-img-wishlst-acc-set"><img src={require('../../../assets/profile-setting-red.svg')} alt=""/></span>
                                                    <span>Account Setting</span>
                                            </NavLink>
                                        </li>
                                    </ul>
                               </div>
                           </div>
                       </div>
                       <div className="col-md-10">
                           <h2>Pre Orders List</h2>
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
