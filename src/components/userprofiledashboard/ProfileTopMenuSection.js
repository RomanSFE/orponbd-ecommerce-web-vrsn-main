import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './profiletopmenusection.css';

export default class ProfileTopMenuSection extends Component {

    render() {

        return (
            <>
            {/* Top small Menu  */}
            <div className="orpon-bd-main-web-version-topmenu-small-menu-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="orpon-bd-main-web-version-topmenu-small-menu-left-sse">
                                <p><span><i className="fas fa-phone"></i></span> 01759874611</p>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="orpon-bd-main-web-version-topmenu-small-menu-right-sec text-right">
                                <ul>
                                    <li><Link to="#">Track My Order</Link></li>
                                    <li><Link to="#">Buyer Protection</Link></li>
                                    <li><Link to="#">Help</Link></li>
                                    <li><Link to="#">App</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Top small Menu */}

           
            <div className="orpon-bd-main-web-version-topmenu-section-profile">
                <div className="container">
                    <div className="row orpon-bd-main-web-version-topmenu-section-row-exx-pdd-profile">
                        <div className="col-md-3">
                            <div className="orpon-bd-main-web-version-topmenu-logo-section text-center">
                                <Link to="/">
                                    <img src={require('../../assets/logomain.svg')} alt="OrponBD Online shop"/>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="orpon-bd-main-web-version-topmenu-search-box-sec-main-profile">
                                <div className="orpon-bd-main-web-version-topmenu-serch-cat-sec-profile">
                                    <button>Select Categories <span><i className="fas fa-angle-down"></i></span> </button>
                                </div>
                                <div className="orpon-bd-main-web-version-topmenu-search-boxx-profile">
                                    <input type="search" placeholder="Enter Product Name...."/>
                                    <span><button type="submit"><i className="fas fa-search"></i> Search</button></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="orpon-bd-main-web-version-topmenu-search-right-user-signup-sec-profile">
                                <ul>
                                    <li className="orpon-bd-main-web-version-topmenu-cart-lst-profile">
                                        <Link to="#">
                                            <span><img src={require('../../assets/profile-cart-icon.svg')} alt="OrponBD Online shop"/><span>Cart</span><span className="obd-profile-cartt-section-cnt-bx">15</span></span>
                                        </Link> 
                                    </li>
                                    <li className="orpon-bd-main-web-version-topmenu-cart-lst-profile">
                                        <Link to="#">
                                            <span><img src={require('../../assets/profile-wishlist-icon.svg')} alt="OrponBD Online shop"/><span>Wishlist</span></span>
                                        </Link> 
                                    </li>
                                    <li className="orpon-bd-main-web-version-topmenu-cart-lst-profile">
                                        <Link to="/profile">
                                            <span><img src={require('../../assets/profile-user-icon.svg')} alt="OrponBD Online shop"/><span>Hi, Omar</span></span>
                                        </Link> 
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Menu and Category Section start */}
            <div className="orpon-bd-main-web-version-topmenu-menu-and-category-section-box-profile">
                <div className="container">
                    <div className="row orpon-bd-main-web-version-topmenu-menu-extrra-bbtn-ctg-profile">
                        <div className="col-md-12">
                            <div className="orpon-bd-main-web-version-topmenu-onlyy-mennnu-web-section-profile">
                                <ul>
                                    <li><Link to="">My Account</Link></li>
                                    <li><Link to="">My Orders</Link></li>
                                    <li><Link to="">Preorders</Link></li>
                                    <li><Link to="">Wish List</Link></li>
                                    <li><Link to="">Account Settings</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Menu and Category Section end */}
            </>
        )
    }
}
