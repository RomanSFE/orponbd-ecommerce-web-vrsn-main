import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import './couponslist.css'

import FooterWebSection from '../../allsections/footerwebsection/FooterWebSection'
import YouAlsoLikeSlider from '../../cart/youalsolikeslider/YouAlsoLikeSlider'
import ProfileTopMenuSection from '../ProfileTopMenuSection'

import { Tabs, Tab } from 'react-bootstrap';

export default class CouponsList extends Component {
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
                               <div className="obd-profile-account-section-main-profile-left-menu-sect-itm-scanner-img-bx">
                                   <div className="obd-profile-account-section-main-profile-left-menu-sxc-scanner-img text-center">
                                       <h4>Download Our App</h4>
                                        <img src={require('../../../assets/profile-down-scanner-wv.png')} alt="orponbd online shop"/>
                                        <p>Scan Me</p>
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div className="col-md-10">
                           <div className="obd-my-couponsx-section-main-profile-section-right-main-box">

                           <Tabs defaultActiveKey="allcoupons" id="uncontrolled-tab-example">
                                <Tab eventKey="allcoupons" title="All Coupons">
                                    <div className="obd-my-couponsx-section-main-profile-section-right-sort-by-bs">
                                        <ul>
                                            <li>Sort by:</li>
                                            <li><Link to="">Popular</Link></li>
                                            <li><Link to="">Discount</Link></li>
                                            <li><Link to="">Time</Link></li>
                                            <li><input type="checkbox"/><span>Discount</span></li>
                                            <li><input type="checkbox"/><span>Cash</span></li>
                                        </ul>
                                    </div>
                                    <div className="obd-my-couponsx-section-main-profile-section-right-coupon-main-bbox">
                                        {/* Single Row Start ------- */}
                                        <div className="row obd-my-couponsx-section-main-profile-exxx-pddxz">
                                            {/* single coupon start */}
                                            <div className="col-md-3">
                                               <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-bbox-mn">
                                                   <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-small-bx">
                                                        <img src={require('../../../assets/coupons-image-smallxs.png')} alt="orponbd online shop"/>
                                                        <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-sml-cont text-center">
                                                            <h3>15 </h3>
                                                            <span className="offerr-offff-txt">
                                                                <h4>%</h4>
                                                                Off
                                                            </span>
                                                        </div>
                                                        <div className="couponn-offerrr-small-img-bxxpp-txt text-center">
                                                            <p>27 Nov 2020 ~ 31 Mar 2021</p>
                                                        </div>
                                                   </div>
                                                   <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-large-bx">
                                                        <img src={require('../../../assets/coupons-image-largezx.png')} alt="orponbd online shop"/>
                                                        <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-lrgg-cont text-center">
                                                            <Link to="">Product Name</Link>
                                                            <p>For potential products</p>
                                                            <button type="submit">Get It</button>
                                                        </div>
                                                   </div>
                                                </div> 
                                            </div>
                                            {/* single coupon end */}
                                            {/* single coupon start */}
                                            <div className="col-md-3">
                                               <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-bbox-mn">
                                                   <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-small-bx">
                                                        <img src={require('../../../assets/coupons-image-smallxs.png')} alt="orponbd online shop"/>
                                                        <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-sml-cont text-center">
                                                            <h3>15 </h3>
                                                            <span className="offerr-offff-txt">
                                                                <h4>%</h4>
                                                                Off
                                                            </span>
                                                        </div>
                                                        <div className="couponn-offerrr-small-img-bxxpp-txt text-center">
                                                            <p>27 Nov 2020 ~ 31 Mar 2021</p>
                                                        </div>
                                                   </div>
                                                   <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-large-bx">
                                                        <img src={require('../../../assets/coupons-image-largezx.png')} alt="orponbd online shop"/>
                                                        <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-lrgg-cont text-center">
                                                            <Link to="">Product Name</Link>
                                                            <p>For potential products</p>
                                                            <button type="submit">Get It</button>
                                                        </div>
                                                   </div>
                                                </div> 
                                            </div>
                                            {/* single coupon end */}
                                            {/* single coupon start */}
                                            <div className="col-md-3">
                                               <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-bbox-mn">
                                                   <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-small-bx">
                                                        <img src={require('../../../assets/coupons-image-smallxs.png')} alt="orponbd online shop"/>
                                                        <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-sml-cont text-center">
                                                            <h3>15 </h3>
                                                            <span className="offerr-offff-txt">
                                                                <h4>%</h4>
                                                                Off
                                                            </span>
                                                        </div>
                                                        <div className="couponn-offerrr-small-img-bxxpp-txt text-center">
                                                            <p>27 Nov 2020 ~ 31 Mar 2021</p>
                                                        </div>
                                                   </div>
                                                   <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-large-bx">
                                                        <img src={require('../../../assets/coupons-image-largezx.png')} alt="orponbd online shop"/>
                                                        <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-lrgg-cont text-center">
                                                            <Link to="">Product Name</Link>
                                                            <p>For potential products</p>
                                                            <button type="submit">Get It</button>
                                                        </div>
                                                   </div>
                                                </div> 
                                            </div>
                                            {/* single coupon end */}
                                            {/* single coupon start */}
                                            <div className="col-md-3">
                                               <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-bbox-mn">
                                                   <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-small-bx">
                                                        <img src={require('../../../assets/coupons-image-smallxs.png')} alt="orponbd online shop"/>
                                                        <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-sml-cont text-center">
                                                            <h3>15 </h3>
                                                            <span className="offerr-offff-txt">
                                                                <h4>%</h4>
                                                                Off
                                                            </span>
                                                        </div>
                                                        <div className="couponn-offerrr-small-img-bxxpp-txt text-center">
                                                            <p>27 Nov 2020 ~ 31 Mar 2021</p>
                                                        </div>
                                                   </div>
                                                   <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-large-bx">
                                                        <img src={require('../../../assets/coupons-image-largezx.png')} alt="orponbd online shop"/>
                                                        <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-lrgg-cont text-center">
                                                            <Link to="">Product Name</Link>
                                                            <p>For potential products</p>
                                                            <button type="submit">Get It</button>
                                                        </div>
                                                   </div>
                                                </div> 
                                            </div>
                                            {/* single coupon end */}
                                        </div>
                                        {/* Single Row End ------- */}

                                        {/* Single Row Start ------- */}
                                        <div className="row obd-my-couponsx-section-main-profile-exxx-pddxz">
                                            {/* single coupon start */}
                                            <div className="col-md-3">
                                               <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-bbox-mn">
                                                   <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-small-bx">
                                                        <img src={require('../../../assets/coupons-image-smallxs.png')} alt="orponbd online shop"/>
                                                        <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-sml-cont text-center">
                                                            <h3>15 </h3>
                                                            <span className="offerr-offff-txt">
                                                                <h4>%</h4>
                                                                Off
                                                            </span>
                                                        </div>
                                                        <div className="couponn-offerrr-small-img-bxxpp-txt text-center">
                                                            <p>27 Nov 2020 ~ 31 Mar 2021</p>
                                                        </div>
                                                   </div>
                                                   <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-large-bx">
                                                        <img src={require('../../../assets/coupons-image-largezx.png')} alt="orponbd online shop"/>
                                                        <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-lrgg-cont text-center">
                                                            <Link to="">Product Name</Link>
                                                            <p>For potential products</p>
                                                            <button type="submit">Get It</button>
                                                        </div>
                                                   </div>
                                                </div> 
                                            </div>
                                            {/* single coupon end */}
                                            {/* single coupon start */}
                                            <div className="col-md-3">
                                               <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-bbox-mn">
                                                   <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-small-bx">
                                                        <img src={require('../../../assets/coupons-image-smallxs.png')} alt="orponbd online shop"/>
                                                        <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-sml-cont text-center">
                                                            <h3>15 </h3>
                                                            <span className="offerr-offff-txt">
                                                                <h4>%</h4>
                                                                Off
                                                            </span>
                                                        </div>
                                                        <div className="couponn-offerrr-small-img-bxxpp-txt text-center">
                                                            <p>27 Nov 2020 ~ 31 Mar 2021</p>
                                                        </div>
                                                   </div>
                                                   <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-large-bx">
                                                        <img src={require('../../../assets/coupons-image-largezx.png')} alt="orponbd online shop"/>
                                                        <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-lrgg-cont text-center">
                                                            <Link to="">Product Name</Link>
                                                            <p>For potential products</p>
                                                            <button type="submit">Get It</button>
                                                        </div>
                                                   </div>
                                                </div> 
                                            </div>
                                            {/* single coupon end */}
                                            {/* single coupon start */}
                                            <div className="col-md-3">
                                               <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-bbox-mn">
                                                   <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-small-bx">
                                                        <img src={require('../../../assets/coupons-image-smallxs.png')} alt="orponbd online shop"/>
                                                        <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-sml-cont text-center">
                                                            <h3>15 </h3>
                                                            <span className="offerr-offff-txt">
                                                                <h4>%</h4>
                                                                Off
                                                            </span>
                                                        </div>
                                                        <div className="couponn-offerrr-small-img-bxxpp-txt text-center">
                                                            <p>27 Nov 2020 ~ 31 Mar 2021</p>
                                                        </div>
                                                   </div>
                                                   <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-large-bx">
                                                        <img src={require('../../../assets/coupons-image-largezx.png')} alt="orponbd online shop"/>
                                                        <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-lrgg-cont text-center">
                                                            <Link to="">Product Name</Link>
                                                            <p>For potential products</p>
                                                            <button type="submit">Get It</button>
                                                        </div>
                                                   </div>
                                                </div> 
                                            </div>
                                            {/* single coupon end */}
                                            {/* single coupon start */}
                                            <div className="col-md-3">
                                               <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-bbox-mn">
                                                   <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-small-bx">
                                                        <img src={require('../../../assets/coupons-image-smallxs.png')} alt="orponbd online shop"/>
                                                        <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-sml-cont text-center">
                                                            <h3>15 </h3>
                                                            <span className="offerr-offff-txt">
                                                                <h4>%</h4>
                                                                Off
                                                            </span>
                                                        </div>
                                                        <div className="couponn-offerrr-small-img-bxxpp-txt text-center">
                                                            <p>27 Nov 2020 ~ 31 Mar 2021</p>
                                                        </div>
                                                   </div>
                                                   <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-large-bx">
                                                        <img src={require('../../../assets/coupons-image-largezx.png')} alt="orponbd online shop"/>
                                                        <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-lrgg-cont text-center">
                                                            <Link to="">Product Name</Link>
                                                            <p>For potential products</p>
                                                            <button type="submit">Get It</button>
                                                        </div>
                                                   </div>
                                                </div> 
                                            </div>
                                            {/* single coupon end */}
                                        </div>
                                        {/* Single Row End ------- */}
                                    </div>
                                </Tab>
                                <Tab eventKey="unusedcpn" title="Unused Coupons">
                                <div className="obd-my-couponsx-section-main-profile-section-right-sort-by-bs">
                                        <ul>
                                            <li>Sort by:</li>
                                            <li><Link to="">Popular</Link></li>
                                            <li><Link to="">Discount</Link></li>
                                            <li><Link to="">Time</Link></li>
                                            <li><input type="checkbox"/><span>Discount</span></li>
                                            <li><input type="checkbox"/><span>Cash</span></li>
                                        </ul>
                                    </div>
                                    <div className="obd-my-couponsx-section-main-profile-section-right-coupon-main-bbox">
                                        {/* Single Row Start ------- */}
                                        <div className="row obd-my-couponsx-section-main-profile-exxx-pddxz">
                                            {/* single coupon start */}
                                            <div className="col-md-3">
                                               <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-bbox-mn">
                                                   <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-small-bx">
                                                        <img src={require('../../../assets/coupons-image-smallxs.png')} alt="orponbd online shop"/>
                                                        <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-sml-cont text-center">
                                                            <h3>15 </h3>
                                                            <span className="offerr-offff-txt">
                                                                <h4>%</h4>
                                                                Off
                                                            </span>
                                                        </div>
                                                        <div className="couponn-offerrr-small-img-bxxpp-txt text-center">
                                                            <p>27 Nov 2020 ~ 31 Mar 2021</p>
                                                        </div>
                                                   </div>
                                                   <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-large-bx">
                                                        <img src={require('../../../assets/coupons-image-largezx.png')} alt="orponbd online shop"/>
                                                        <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-lrgg-cont text-center">
                                                            <Link to="">Product Name</Link>
                                                            <p>For potential products</p>
                                                            <button type="submit">Get It</button>
                                                        </div>
                                                   </div>
                                                </div> 
                                            </div>
                                            {/* single coupon end */}
                                            {/* single coupon start */}
                                            <div className="col-md-3">
                                               <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-bbox-mn">
                                                   <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-small-bx">
                                                        <img src={require('../../../assets/coupons-image-smallxs.png')} alt="orponbd online shop"/>
                                                        <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-sml-cont text-center">
                                                            <h3>15 </h3>
                                                            <span className="offerr-offff-txt">
                                                                <h4>%</h4>
                                                                Off
                                                            </span>
                                                        </div>
                                                        <div className="couponn-offerrr-small-img-bxxpp-txt text-center">
                                                            <p>27 Nov 2020 ~ 31 Mar 2021</p>
                                                        </div>
                                                   </div>
                                                   <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-large-bx">
                                                        <img src={require('../../../assets/coupons-image-largezx.png')} alt="orponbd online shop"/>
                                                        <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-lrgg-cont text-center">
                                                            <Link to="">Product Name</Link>
                                                            <p>For potential products</p>
                                                            <button type="submit">Get It</button>
                                                        </div>
                                                   </div>
                                                </div> 
                                            </div>
                                            {/* single coupon end */}
                                            {/* single coupon start */}
                                            <div className="col-md-3">
                                               <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-bbox-mn">
                                                   <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-small-bx">
                                                        <img src={require('../../../assets/coupons-image-smallxs.png')} alt="orponbd online shop"/>
                                                        <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-sml-cont text-center">
                                                            <h3>15 </h3>
                                                            <span className="offerr-offff-txt">
                                                                <h4>%</h4>
                                                                Off
                                                            </span>
                                                        </div>
                                                        <div className="couponn-offerrr-small-img-bxxpp-txt text-center">
                                                            <p>27 Nov 2020 ~ 31 Mar 2021</p>
                                                        </div>
                                                   </div>
                                                   <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-large-bx">
                                                        <img src={require('../../../assets/coupons-image-largezx.png')} alt="orponbd online shop"/>
                                                        <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-lrgg-cont text-center">
                                                            <Link to="">Product Name</Link>
                                                            <p>For potential products</p>
                                                            <button type="submit">Get It</button>
                                                        </div>
                                                   </div>
                                                </div> 
                                            </div>
                                            {/* single coupon end */}
                                            {/* single coupon start */}
                                            <div className="col-md-3">
                                               <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-bbox-mn">
                                                   <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-small-bx">
                                                        <img src={require('../../../assets/coupons-image-smallxs.png')} alt="orponbd online shop"/>
                                                        <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-sml-cont text-center">
                                                            <h3>15 </h3>
                                                            <span className="offerr-offff-txt">
                                                                <h4>%</h4>
                                                                Off
                                                            </span>
                                                        </div>
                                                        <div className="couponn-offerrr-small-img-bxxpp-txt text-center">
                                                            <p>27 Nov 2020 ~ 31 Mar 2021</p>
                                                        </div>
                                                   </div>
                                                   <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-large-bx">
                                                        <img src={require('../../../assets/coupons-image-largezx.png')} alt="orponbd online shop"/>
                                                        <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-lrgg-cont text-center">
                                                            <Link to="">Product Name</Link>
                                                            <p>For potential products</p>
                                                            <button type="submit">Get It</button>
                                                        </div>
                                                   </div>
                                                </div> 
                                            </div>
                                            {/* single coupon end */}
                                        </div>
                                        {/* Single Row End ------- */}

                                        {/* Single Row Start ------- */}
                                        <div className="row obd-my-couponsx-section-main-profile-exxx-pddxz">
                                            {/* single coupon start */}
                                            <div className="col-md-3">
                                               <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-bbox-mn">
                                                   <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-small-bx">
                                                        <img src={require('../../../assets/coupons-image-smallxs.png')} alt="orponbd online shop"/>
                                                        <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-sml-cont text-center">
                                                            <h3>15 </h3>
                                                            <span className="offerr-offff-txt">
                                                                <h4>%</h4>
                                                                Off
                                                            </span>
                                                        </div>
                                                        <div className="couponn-offerrr-small-img-bxxpp-txt text-center">
                                                            <p>27 Nov 2020 ~ 31 Mar 2021</p>
                                                        </div>
                                                   </div>
                                                   <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-large-bx">
                                                        <img src={require('../../../assets/coupons-image-largezx.png')} alt="orponbd online shop"/>
                                                        <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-lrgg-cont text-center">
                                                            <Link to="">Product Name</Link>
                                                            <p>For potential products</p>
                                                            <button type="submit">Get It</button>
                                                        </div>
                                                   </div>
                                                </div> 
                                            </div>
                                            {/* single coupon end */}
                                            {/* single coupon start */}
                                            <div className="col-md-3">
                                               <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-bbox-mn">
                                                   <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-small-bx">
                                                        <img src={require('../../../assets/coupons-image-smallxs.png')} alt="orponbd online shop"/>
                                                        <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-sml-cont text-center">
                                                            <h3>15 </h3>
                                                            <span className="offerr-offff-txt">
                                                                <h4>%</h4>
                                                                Off
                                                            </span>
                                                        </div>
                                                        <div className="couponn-offerrr-small-img-bxxpp-txt text-center">
                                                            <p>27 Nov 2020 ~ 31 Mar 2021</p>
                                                        </div>
                                                   </div>
                                                   <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-large-bx">
                                                        <img src={require('../../../assets/coupons-image-largezx.png')} alt="orponbd online shop"/>
                                                        <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-lrgg-cont text-center">
                                                            <Link to="">Product Name</Link>
                                                            <p>For potential products</p>
                                                            <button type="submit">Get It</button>
                                                        </div>
                                                   </div>
                                                </div> 
                                            </div>
                                            {/* single coupon end */}
                                            {/* single coupon start */}
                                            <div className="col-md-3">
                                               <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-bbox-mn">
                                                   <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-small-bx">
                                                        <img src={require('../../../assets/coupons-image-smallxs.png')} alt="orponbd online shop"/>
                                                        <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-sml-cont text-center">
                                                            <h3>15 </h3>
                                                            <span className="offerr-offff-txt">
                                                                <h4>%</h4>
                                                                Off
                                                            </span>
                                                        </div>
                                                        <div className="couponn-offerrr-small-img-bxxpp-txt text-center">
                                                            <p>27 Nov 2020 ~ 31 Mar 2021</p>
                                                        </div>
                                                   </div>
                                                   <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-large-bx">
                                                        <img src={require('../../../assets/coupons-image-largezx.png')} alt="orponbd online shop"/>
                                                        <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-lrgg-cont text-center">
                                                            <Link to="">Product Name</Link>
                                                            <p>For potential products</p>
                                                            <button type="submit">Get It</button>
                                                        </div>
                                                   </div>
                                                </div> 
                                            </div>
                                            {/* single coupon end */}
                                            {/* single coupon start */}
                                            <div className="col-md-3">
                                               <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-bbox-mn">
                                                   <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-small-bx">
                                                        <img src={require('../../../assets/coupons-image-smallxs.png')} alt="orponbd online shop"/>
                                                        <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-sml-cont text-center">
                                                            <h3>15 </h3>
                                                            <span className="offerr-offff-txt">
                                                                <h4>%</h4>
                                                                Off
                                                            </span>
                                                        </div>
                                                        <div className="couponn-offerrr-small-img-bxxpp-txt text-center">
                                                            <p>27 Nov 2020 ~ 31 Mar 2021</p>
                                                        </div>
                                                   </div>
                                                   <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-large-bx">
                                                        <img src={require('../../../assets/coupons-image-largezx.png')} alt="orponbd online shop"/>
                                                        <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-lrgg-cont text-center">
                                                            <Link to="">Product Name</Link>
                                                            <p>For potential products</p>
                                                            <button type="submit">Get It</button>
                                                        </div>
                                                   </div>
                                                </div> 
                                            </div>
                                            {/* single coupon end */}
                                        </div>
                                        {/* Single Row End ------- */}
                                    </div>
                                </Tab>
                                <Tab eventKey="usedcpn" title="Used Coupons">
                                <div className="obd-my-couponsx-section-main-profile-section-right-sort-by-bs">
                                        <ul>
                                            <li>Sort by:</li>
                                            <li><Link to="">Popular</Link></li>
                                            <li><Link to="">Discount</Link></li>
                                            <li><Link to="">Time</Link></li>
                                            <li><input type="checkbox"/><span>Discount</span></li>
                                            <li><input type="checkbox"/><span>Cash</span></li>
                                        </ul>
                                    </div>
                                    <div className="obd-my-couponsx-section-main-profile-section-right-coupon-main-bbox">
                                        {/* Single Row Start ------- */}
                                        <div className="row obd-my-couponsx-section-main-profile-exxx-pddxz">
                                            {/* single coupon start */}
                                            <div className="col-md-3">
                                               <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-bbox-mn">
                                                   <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-small-bx">
                                                        <img src={require('../../../assets/coupons-image-smallxs.png')} alt="orponbd online shop"/>
                                                        <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-sml-cont text-center">
                                                            <h3>15 </h3>
                                                            <span className="offerr-offff-txt">
                                                                <h4>%</h4>
                                                                Off
                                                            </span>
                                                        </div>
                                                        <div className="couponn-offerrr-small-img-bxxpp-txt text-center">
                                                            <p>27 Nov 2020 ~ 31 Mar 2021</p>
                                                        </div>
                                                   </div>
                                                   <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-large-bx">
                                                        <img src={require('../../../assets/coupons-image-largezx.png')} alt="orponbd online shop"/>
                                                        <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-lrgg-cont text-center">
                                                            <Link to="">Product Name</Link>
                                                            <p>For potential products</p>
                                                            <button type="submit">Get It</button>
                                                        </div>
                                                   </div>
                                                </div> 
                                            </div>
                                            {/* single coupon end */}
                                            {/* single coupon start */}
                                            <div className="col-md-3">
                                               <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-bbox-mn">
                                                   <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-small-bx">
                                                        <img src={require('../../../assets/coupons-image-smallxs.png')} alt="orponbd online shop"/>
                                                        <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-sml-cont text-center">
                                                            <h3>15 </h3>
                                                            <span className="offerr-offff-txt">
                                                                <h4>%</h4>
                                                                Off
                                                            </span>
                                                        </div>
                                                        <div className="couponn-offerrr-small-img-bxxpp-txt text-center">
                                                            <p>27 Nov 2020 ~ 31 Mar 2021</p>
                                                        </div>
                                                   </div>
                                                   <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-large-bx">
                                                        <img src={require('../../../assets/coupons-image-largezx.png')} alt="orponbd online shop"/>
                                                        <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-lrgg-cont text-center">
                                                            <Link to="">Product Name</Link>
                                                            <p>For potential products</p>
                                                            <button type="submit">Get It</button>
                                                        </div>
                                                   </div>
                                                </div> 
                                            </div>
                                            {/* single coupon end */}
                                            {/* single coupon start */}
                                            <div className="col-md-3">
                                               <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-bbox-mn">
                                                   <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-small-bx">
                                                        <img src={require('../../../assets/coupons-image-smallxs.png')} alt="orponbd online shop"/>
                                                        <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-sml-cont text-center">
                                                            <h3>15 </h3>
                                                            <span className="offerr-offff-txt">
                                                                <h4>%</h4>
                                                                Off
                                                            </span>
                                                        </div>
                                                        <div className="couponn-offerrr-small-img-bxxpp-txt text-center">
                                                            <p>27 Nov 2020 ~ 31 Mar 2021</p>
                                                        </div>
                                                   </div>
                                                   <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-large-bx">
                                                        <img src={require('../../../assets/coupons-image-largezx.png')} alt="orponbd online shop"/>
                                                        <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-lrgg-cont text-center">
                                                            <Link to="">Product Name</Link>
                                                            <p>For potential products</p>
                                                            <button type="submit">Get It</button>
                                                        </div>
                                                   </div>
                                                </div> 
                                            </div>
                                            {/* single coupon end */}
                                            {/* single coupon start */}
                                            <div className="col-md-3">
                                               <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-bbox-mn">
                                                   <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-small-bx">
                                                        <img src={require('../../../assets/coupons-image-smallxs.png')} alt="orponbd online shop"/>
                                                        <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-sml-cont text-center">
                                                            <h3>15 </h3>
                                                            <span className="offerr-offff-txt">
                                                                <h4>%</h4>
                                                                Off
                                                            </span>
                                                        </div>
                                                        <div className="couponn-offerrr-small-img-bxxpp-txt text-center">
                                                            <p>27 Nov 2020 ~ 31 Mar 2021</p>
                                                        </div>
                                                   </div>
                                                   <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-large-bx">
                                                        <img src={require('../../../assets/coupons-image-largezx.png')} alt="orponbd online shop"/>
                                                        <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-lrgg-cont text-center">
                                                            <Link to="">Product Name</Link>
                                                            <p>For potential products</p>
                                                            <button type="submit">Get It</button>
                                                        </div>
                                                   </div>
                                                </div> 
                                            </div>
                                            {/* single coupon end */}
                                        </div>
                                        {/* Single Row End ------- */}

                                        {/* Single Row Start ------- */}
                                        <div className="row obd-my-couponsx-section-main-profile-exxx-pddxz">
                                            {/* single coupon start */}
                                            <div className="col-md-3">
                                               <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-bbox-mn">
                                                   <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-small-bx">
                                                        <img src={require('../../../assets/coupons-image-smallxs.png')} alt="orponbd online shop"/>
                                                        <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-sml-cont text-center">
                                                            <h3>15 </h3>
                                                            <span className="offerr-offff-txt">
                                                                <h4>%</h4>
                                                                Off
                                                            </span>
                                                        </div>
                                                        <div className="couponn-offerrr-small-img-bxxpp-txt text-center">
                                                            <p>27 Nov 2020 ~ 31 Mar 2021</p>
                                                        </div>
                                                   </div>
                                                   <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-large-bx">
                                                        <img src={require('../../../assets/coupons-image-largezx.png')} alt="orponbd online shop"/>
                                                        <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-lrgg-cont text-center">
                                                            <Link to="">Product Name</Link>
                                                            <p>For potential products</p>
                                                            <button type="submit">Get It</button>
                                                        </div>
                                                   </div>
                                                </div> 
                                            </div>
                                            {/* single coupon end */}
                                            {/* single coupon start */}
                                            <div className="col-md-3">
                                               <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-bbox-mn">
                                                   <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-small-bx">
                                                        <img src={require('../../../assets/coupons-image-smallxs.png')} alt="orponbd online shop"/>
                                                        <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-sml-cont text-center">
                                                            <h3>15 </h3>
                                                            <span className="offerr-offff-txt">
                                                                <h4>%</h4>
                                                                Off
                                                            </span>
                                                        </div>
                                                        <div className="couponn-offerrr-small-img-bxxpp-txt text-center">
                                                            <p>27 Nov 2020 ~ 31 Mar 2021</p>
                                                        </div>
                                                   </div>
                                                   <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-large-bx">
                                                        <img src={require('../../../assets/coupons-image-largezx.png')} alt="orponbd online shop"/>
                                                        <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-lrgg-cont text-center">
                                                            <Link to="">Product Name</Link>
                                                            <p>For potential products</p>
                                                            <button type="submit">Get It</button>
                                                        </div>
                                                   </div>
                                                </div> 
                                            </div>
                                            {/* single coupon end */}
                                            {/* single coupon start */}
                                            <div className="col-md-3">
                                               <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-bbox-mn">
                                                   <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-small-bx">
                                                        <img src={require('../../../assets/coupons-image-smallxs.png')} alt="orponbd online shop"/>
                                                        <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-sml-cont text-center">
                                                            <h3>15 </h3>
                                                            <span className="offerr-offff-txt">
                                                                <h4>%</h4>
                                                                Off
                                                            </span>
                                                        </div>
                                                        <div className="couponn-offerrr-small-img-bxxpp-txt text-center">
                                                            <p>27 Nov 2020 ~ 31 Mar 2021</p>
                                                        </div>
                                                   </div>
                                                   <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-large-bx">
                                                        <img src={require('../../../assets/coupons-image-largezx.png')} alt="orponbd online shop"/>
                                                        <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-lrgg-cont text-center">
                                                            <Link to="">Product Name</Link>
                                                            <p>For potential products</p>
                                                            <button type="submit">Get It</button>
                                                        </div>
                                                   </div>
                                                </div> 
                                            </div>
                                            {/* single coupon end */}
                                            {/* single coupon start */}
                                            <div className="col-md-3">
                                               <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-bbox-mn">
                                                   <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-small-bx">
                                                        <img src={require('../../../assets/coupons-image-smallxs.png')} alt="orponbd online shop"/>
                                                        <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-sml-cont text-center">
                                                            <h3>15 </h3>
                                                            <span className="offerr-offff-txt">
                                                                <h4>%</h4>
                                                                Off
                                                            </span>
                                                        </div>
                                                        <div className="couponn-offerrr-small-img-bxxpp-txt text-center">
                                                            <p>27 Nov 2020 ~ 31 Mar 2021</p>
                                                        </div>
                                                   </div>
                                                   <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-large-bx">
                                                        <img src={require('../../../assets/coupons-image-largezx.png')} alt="orponbd online shop"/>
                                                        <div className="obd-my-couponsx-section-main-profile-section-right-coupon-single-lrgg-cont text-center">
                                                            <Link to="">Product Name</Link>
                                                            <p>For potential products</p>
                                                            <button type="submit">Get It</button>
                                                        </div>
                                                   </div>
                                                </div> 
                                            </div>
                                            {/* single coupon end */}
                                        </div>
                                        {/* Single Row End ------- */}
                                    </div>
                                </Tab>
                            </Tabs>

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
