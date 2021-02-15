import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import './myorders.css'

import FooterWebSection from '../../allsections/footerwebsection/FooterWebSection'
import YouAlsoLikeSlider from '../../cart/youalsolikeslider/YouAlsoLikeSlider'
import ProfileTopMenuSection from '../ProfileTopMenuSection'

export default class MyOrders extends Component {
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
                           <div className="obd-my-orders-section-main-profile-section-right-main-box">
                                {/* My Order Color */}
                                <div className="my-orderx-wv-orderzx-section-content-color-txtt">
                                    <h4>My Orders <span>(Your order history in ORPON BD)</span></h4>
                                    <div className="my-orderxc-wv-shoppingcart-order-summary-section-brdrr"></div>
                                </div>
                                {/* My Order Color  end ------- */}

                                {/* Search Box start */}
                                <div className="my-orderx-wv-orderzx-section-content-search-and-select-box">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <div className="my-orderx-wv-orderzx-section-content-search-sec">
                                                <input type="search" placeholder="Search..."/>
                                                <span><button type="submit"><i className="fas fa-search"></i></button></span>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="my-orderx-wv-orderzx-section-content-select-sxc text-right">
                                                <select>
                                                    <option value="">All Orders</option>
                                                    <option value="">Pending</option>
                                                    <option value="">Delivered</option>
                                                    <option value="">Cancelled</option>
                                                    <option value="">In Transit</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Search Box end ------------------ */}

                                {/* All Order Table Box start */}
                                <div className="my-orderx-wv-orderzx-section-content-all-order-table-box">
                                    <table class="table table-bordered" style={{borderTopLeftRadius: '8px',border: 'none'}}>
                                        <thead style={{borderTopLeftRadius: '8px',border: 'none'}}>
                                            <tr style={{borderTopLeftRadius: '8px',border: 'none'}}>
                                                <th scope="col col-6" style={{borderTopLeftRadius: '8px',border: 'none'}}>Order ID</th>
                                                <th scope="col col-6">Order Date</th>
                                                <th scope="col col-6">Amount</th>
                                                <th scope="col col-6">Payment</th>
                                                <th scope="col col-6">Status</th>
                                                <th scope="col col-6" style={{borderTopRightRadius: '8px',border: 'none'}}>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* single Item start */}
                                            <tr>
                                                <td>252545524</td>
                                                <td>2 Sep, 2020  | <span>3:00 PM</span></td>
                                                <td>৳ 1500</td>
                                                <td>Cash On Delivery</td>
                                                <td>
                                                    <div class="my-orderx-wv-orderzx-listttx-lxst">
                                                        <button className="my-orderx-wv-orderzx-pending" type="submit">Pending</button>
                                                    </div>
                                                </td>
                                                <td>
                                                <div class="merchant-lizzxst-action-edit-sec">
                                                    <Link to="">View <span><i className="fas fa-eye"></i></span></Link>
                                                </div>
                                                </td>
                                            </tr>
                                            {/* Single Item End */}
                                            {/* single Item start */}
                                            <tr>
                                                <td>252545524</td>
                                                <td>2 Sep, 2020  | <span>3:00 PM</span></td>
                                                <td>৳ 1500</td>
                                                <td>Nagad</td>
                                                <td>
                                                    <div class="my-orderx-wv-orderzx-listttx-lxst">
                                                        <button className="my-orderx-wv-orderzx-intranst" type="submit">In Transit</button>
                                                    </div>
                                                </td>
                                                <td>
                                                <div class="merchant-lizzxst-action-edit-sec">
                                                    <Link to="">View <span><i className="fas fa-eye"></i></span></Link>
                                                </div>
                                                </td>
                                            </tr>
                                            {/* Single Item End */}
                                            {/* single Item start */}
                                            <tr>
                                                <td>252545524</td>
                                                <td>2 Sep, 2020  | <span>3:00 PM</span></td>
                                                <td>৳ 1500</td>
                                                <td>Cash On Delivery</td>
                                                <td>
                                                    <div class="my-orderx-wv-orderzx-listttx-lxst">
                                                        <button className="my-orderx-wv-orderzx-on-hold" type="submit">On Hold</button>
                                                    </div>
                                                </td>
                                                <td>
                                                <div class="merchant-lizzxst-action-edit-sec">
                                                    <Link to="">View <span><i className="fas fa-eye"></i></span></Link>
                                                </div>
                                                </td>
                                            </tr>
                                            {/* Single Item End */}
                                            {/* single Item start */}
                                            <tr>
                                                <td>252545524</td>
                                                <td>2 Sep, 2020  | <span>3:00 PM</span></td>
                                                <td>৳ 1500</td>
                                                <td>Bkash</td>
                                                <td>
                                                    <div class="my-orderx-wv-orderzx-listttx-lxst">
                                                        <button className="my-orderx-wv-orderzx-cancelled" type="submit">Canceled</button>
                                                    </div>
                                                </td>
                                                <td>
                                                <div class="merchant-lizzxst-action-edit-sec">
                                                    <Link to="">View <span><i className="fas fa-eye"></i></span></Link>
                                                </div>
                                                </td>
                                            </tr>
                                            {/* Single Item End */}
                                            {/* single Item start */}
                                            <tr>
                                                <td>252545524</td>
                                                <td>2 Sep, 2020  | <span>3:00 PM</span></td>
                                                <td>৳ 1500</td>
                                                <td>Cash On Delivery</td>
                                                <td>
                                                    <div class="my-orderx-wv-orderzx-listttx-lxst">
                                                        <button className="my-orderx-wv-orderzx-deliverd" type="submit">Delivered</button>
                                                    </div>
                                                </td>
                                                <td>
                                                <div class="merchant-lizzxst-action-edit-sec">
                                                    <Link to="">View <span><i className="fas fa-eye"></i></span></Link>
                                                </div>
                                                </td>
                                            </tr>
                                            {/* Single Item End */}

                                        </tbody>
                                    </table>
                                </div>
                                {/* All Order Table Box End */}
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
