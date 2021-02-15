import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import './wishlist.css'

import FooterWebSection from '../../allsections/footerwebsection/FooterWebSection'
import YouAlsoLikeSlider from '../../cart/youalsolikeslider/YouAlsoLikeSlider'
import ProfileTopMenuSection from '../ProfileTopMenuSection'

export default class WishList extends Component {
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
                           <div className="obd-my-wishlisxt-section-main-profile-section-right-main-box">
                               {/* My Wishlist Color */}
                               <div className="my-wishlist-wv-orderzx-section-content-color-txtt">
                                    <h4>Wishlist <span>(Your Wishlist in ORPON BD)</span></h4>
                                    <div className="my-wishllst-wv-shoppingcart-order-summary-section-brdrr"></div>
                                </div>
                                {/* My Wishlist Color  end ------- */}

                                 {/* Search Box start */}
                                 <div className="my-wishlst-wv-orderzx-section-content-note-and-select-cat-box">
                                    <div className="row">
                                        <div className="col-md-5">
                                            <div className="my-wishlxst-orderzx-section-content-note-sec">
                                                <p>Note: We'll let you know by email if there is any reduction <span><i className="fas fa-times"></i></span></p>
                                            </div>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="my-wishlist-wv-orderzx-section-content-select-catg-sxc text-right">
                                                <ul>
                                                    <li>
                                                        <select>
                                                            <option value="">All Categories</option>
                                                            <option value="">Men's Shoes</option>
                                                            <option value="">Women's Fashion</option>
                                                        </select>
                                                    </li>
                                                    <li className="my-wishlist-wv-orderzx-section-content-select-all-priceex">
                                                        <select>
                                                            <option value="">All Price</option>
                                                            <option value="">Price Low to High</option>
                                                            <option value="">Price High to Low</option>
                                                        </select>
                                                    </li>
                                                    <li>
                                                       <div className="my-wish-lstt-wv-orderzx-section-check-box-sl">
                                                           <input type="checkbox"/> <span>Sale</span>
                                                        </div> 
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Search Box end ------------------ */}

                                {/* Wishlist Broduct section Start */}
                                <div className="my-wishlist-wv-orderzx-section-content-productt-sec-box">
                                    
                                    {/* Single Row Section Box Start ----------- */}
                                    <div className="row my-wishlist-wv-orderzx-section-rww-webb-ver-pdd">
                                        <div className="col-md-3 col-6">
                                            <div className="my-wishlist-wv-content-cmm-snnggl-prodct-web-vvesnn">
                                                <Link to="/#">
                                                    <div className="my-wishlist-wv-content-cmm-snnggl-prodct-web-vvesnn-img">
                                                        <img src={require('../../../assets/item-7.png')} alt="orponbd online shop"/>
                                                    </div>
                                                    <div className="my-wishlist-wv-content-cmm-snnggl-prodct-web-vvesnn-ttxt">
                                                        <p>Product Name In Two Line maximum</p>
                                                        <h3><span>৳</span> 1200</h3>
                                                    </div>
                                                    <div className="my-wishlist-wv-content-cmm-snnggl-prodct-delete-btn">
                                                        <button type="submit"><i class="far fa-trash-alt"></i></button>
                                                    </div>

                                                    <div className="my-wishlist-wv-content-cmm-snnggl-prodct-find-product-box">
                                                        <Link to="/"><i className="fas fa-search"></i> Find Similar</Link>

                                                        <div className="my-wishlist-wv-content-cmm-snnggl-prodct-find-product-cart">
                                                            <button type="submit">
                                                                <img src={require('../../../assets/cart-serch-relevent.svg')} alt=""/>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-6">
                                            <div className="my-wishlist-wv-content-cmm-snnggl-prodct-web-vvesnn">
                                                <Link to="/#">
                                                    <div className="my-wishlist-wv-content-cmm-snnggl-prodct-web-vvesnn-img">
                                                        <img src={require('../../../assets/item-8.png')} alt="orponbd online shop"/>
                                                    </div>
                                                    <div className="my-wishlist-wv-content-cmm-snnggl-prodct-web-vvesnn-ttxt">
                                                        <p>Product Name In Two Line maximum</p>
                                                        <h3><span>৳</span> 1200</h3>
                                                    </div>
                                                    <div className="my-wishlist-wv-content-cmm-snnggl-prodct-delete-btn">
                                                        <button type="submit"><i class="far fa-trash-alt"></i></button>
                                                    </div>
                                                    <div className="my-wishlist-wv-content-cmm-snnggl-prodct-find-product-box">
                                                        <Link to="/"><i className="fas fa-search"></i> Find Similar</Link>

                                                        <div className="my-wishlist-wv-content-cmm-snnggl-prodct-find-product-cart">
                                                            <button type="submit">
                                                                <img src={require('../../../assets/cart-serch-relevent.svg')} alt=""/>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-6">
                                            <div className="my-wishlist-wv-content-cmm-snnggl-prodct-web-vvesnn">
                                                <Link to="/#">
                                                    <div className="my-wishlist-wv-content-cmm-snnggl-prodct-web-vvesnn-img">
                                                        <img src={require('../../../assets/item-9.png')} alt="orponbd online shop"/>
                                                    </div>
                                                    <div className="my-wishlist-wv-content-cmm-snnggl-prodct-web-vvesnn-ttxt">
                                                        <p>Product Name In Two Line maximum</p>
                                                        <h3><span>৳</span> 1200</h3>
                                                    </div>
                                                    <div className="my-wishlist-wv-content-cmm-snnggl-prodct-delete-btn">
                                                        <button type="submit"><i class="far fa-trash-alt"></i></button>
                                                    </div>

                                                    <div className="my-wishlist-wv-content-cmm-snnggl-prodct-find-product-box">
                                                        <Link to="/"><i className="fas fa-search"></i> Find Similar</Link>

                                                        <div className="my-wishlist-wv-content-cmm-snnggl-prodct-find-product-cart">
                                                            <button type="submit">
                                                                <img src={require('../../../assets/cart-serch-relevent.svg')} alt=""/>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-6">
                                            <div className="my-wishlist-wv-content-cmm-snnggl-prodct-web-vvesnn">
                                                <Link to="/#">
                                                    <div className="my-wishlist-wv-content-cmm-snnggl-prodct-web-vvesnn-img">
                                                        <img src={require('../../../assets/item-10.png')} alt="orponbd online shop"/>
                                                    </div>
                                                    <div className="my-wishlist-wv-content-cmm-snnggl-prodct-web-vvesnn-ttxt">
                                                        <p>Product Name In Two Line maximum</p>
                                                        <h3><span>৳</span> 1200</h3>
                                                    </div>
                                                    <div className="my-wishlist-wv-content-cmm-snnggl-prodct-delete-btn">
                                                        <button type="submit"><i class="far fa-trash-alt"></i></button>
                                                    </div>
                                                    <div className="my-wishlist-wv-content-cmm-snnggl-prodct-find-product-box">
                                                        <Link to="/"><i className="fas fa-search"></i> Find Similar</Link>

                                                        <div className="my-wishlist-wv-content-cmm-snnggl-prodct-find-product-cart">
                                                            <button type="submit">
                                                                <img src={require('../../../assets/cart-serch-relevent.svg')} alt=""/>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Single Row Section Box End ----------- */}

                                    {/* Single Row Section Box Start ----------- */}
                                    <div className="row my-wishlist-wv-orderzx-section-rww-webb-ver-pdd">
                                        <div className="col-md-3 col-6">
                                            <div className="my-wishlist-wv-content-cmm-snnggl-prodct-web-vvesnn">
                                                <Link to="/#">
                                                    <div className="my-wishlist-wv-content-cmm-snnggl-prodct-web-vvesnn-img">
                                                        <img src={require('../../../assets/item-11.png')} alt="orponbd online shop"/>
                                                    </div>
                                                    <div className="my-wishlist-wv-content-cmm-snnggl-prodct-web-vvesnn-ttxt">
                                                        <p>Product Name In Two Line maximum</p>
                                                        <h3><span>৳</span> 1200</h3>
                                                    </div>
                                                    <div className="my-wishlist-wv-content-cmm-snnggl-prodct-delete-btn">
                                                        <button type="submit"><i class="far fa-trash-alt"></i></button>
                                                    </div>

                                                    <div className="my-wishlist-wv-content-cmm-snnggl-prodct-find-product-box">
                                                        <Link to="/"><i className="fas fa-search"></i> Find Similar</Link>

                                                        <div className="my-wishlist-wv-content-cmm-snnggl-prodct-find-product-cart">
                                                            <button type="submit">
                                                                <img src={require('../../../assets/cart-serch-relevent.svg')} alt=""/>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-6">
                                            <div className="my-wishlist-wv-content-cmm-snnggl-prodct-web-vvesnn">
                                                <Link to="/#">
                                                    <div className="my-wishlist-wv-content-cmm-snnggl-prodct-web-vvesnn-img">
                                                        <img src={require('../../../assets/item-12.png')} alt="orponbd online shop"/>
                                                    </div>
                                                    <div className="my-wishlist-wv-content-cmm-snnggl-prodct-web-vvesnn-ttxt">
                                                        <p>Product Name In Two Line maximum</p>
                                                        <h3><span>৳</span> 1200</h3>
                                                    </div>
                                                    <div className="my-wishlist-wv-content-cmm-snnggl-prodct-delete-btn">
                                                        <button type="submit"><i class="far fa-trash-alt"></i></button>
                                                    </div>
                                                    <div className="my-wishlist-wv-content-cmm-snnggl-prodct-find-product-box">
                                                        <Link to="/"><i className="fas fa-search"></i> Find Similar</Link>

                                                        <div className="my-wishlist-wv-content-cmm-snnggl-prodct-find-product-cart">
                                                            <button type="submit">
                                                                <img src={require('../../../assets/cart-serch-relevent.svg')} alt=""/>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-6">
                                            <div className="my-wishlist-wv-content-cmm-snnggl-prodct-web-vvesnn">
                                                <Link to="/#">
                                                    <div className="my-wishlist-wv-content-cmm-snnggl-prodct-web-vvesnn-img">
                                                        <img src={require('../../../assets/item-13.png')} alt="orponbd online shop"/>
                                                    </div>
                                                    <div className="my-wishlist-wv-content-cmm-snnggl-prodct-web-vvesnn-ttxt">
                                                        <p>Product Name In Two Line maximum</p>
                                                        <h3><span>৳</span> 1200</h3>
                                                    </div>
                                                    <div className="my-wishlist-wv-content-cmm-snnggl-prodct-delete-btn">
                                                        <button type="submit"><i class="far fa-trash-alt"></i></button>
                                                    </div>

                                                    <div className="my-wishlist-wv-content-cmm-snnggl-prodct-find-product-box">
                                                        <Link to="/"><i className="fas fa-search"></i> Find Similar</Link>

                                                        <div className="my-wishlist-wv-content-cmm-snnggl-prodct-find-product-cart">
                                                            <button type="submit">
                                                                <img src={require('../../../assets/cart-serch-relevent.svg')} alt=""/>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-6">
                                            <div className="my-wishlist-wv-content-cmm-snnggl-prodct-web-vvesnn">
                                                <Link to="/#">
                                                    <div className="my-wishlist-wv-content-cmm-snnggl-prodct-web-vvesnn-img">
                                                        <img src={require('../../../assets/item-14.png')} alt="orponbd online shop"/>
                                                    </div>
                                                    <div className="my-wishlist-wv-content-cmm-snnggl-prodct-web-vvesnn-ttxt">
                                                        <p>Product Name In Two Line maximum</p>
                                                        <h3><span>৳</span> 1200</h3>
                                                    </div>
                                                    <div className="my-wishlist-wv-content-cmm-snnggl-prodct-delete-btn">
                                                        <button type="submit"><i class="far fa-trash-alt"></i></button>
                                                    </div>
                                                    <div className="my-wishlist-wv-content-cmm-snnggl-prodct-find-product-box">
                                                        <Link to="/"><i className="fas fa-search"></i> Find Similar</Link>

                                                        <div className="my-wishlist-wv-content-cmm-snnggl-prodct-find-product-cart">
                                                            <button type="submit">
                                                                <img src={require('../../../assets/cart-serch-relevent.svg')} alt=""/>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Single Row Section Box End ----------- */}

                                </div>
                                {/* Wishlist Broduct section End ----------*/}
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
