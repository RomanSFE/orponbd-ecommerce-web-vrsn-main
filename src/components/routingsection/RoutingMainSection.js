import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class RoutingMainSection extends Component {
    render() {
        return (
            <>
            <div className="orponbd-main-routing-section-web-versn-box">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="orponbd-main-routing-section-web-versn-content">
                                <ul>
                                    <li><Link to="/">Home</Link></li>

                                    {/* Womans Fashion start */}
                                    <li><Link to="/womens-fashion">Women's Fashion</Link></li>
                                    <li><Link to="/womens-sub-watchs">Women's Fashion Watch</Link></li>
                                    <li><Link to="/womens-sub-beauty-and-health">Women's Fashion Beauty and Health</Link></li>
                                    <li><Link to="/womens-sub-womens-bags">Women's Fashion Bags</Link></li>
                                    {/* Womans Fashion End */}

                                    {/* Top Brands Start */}
                                    <li><Link to="/top-brands-all-brands">All Top Brands</Link></li>
                                    <li><Link to="/brand-xiaomi">Xiaomi Brand</Link></li>
                                    {/* Top Brands End */}

                                    {/* Details Section All Products flash deal, New arrival etc */}
                                    <li><Link to="/new-arrival-all-products">New Arrival All Products</Link></li>
                                    <li><Link to="/best-selling-all-products">Best Selling All Products</Link></li>
                                    <li><Link to="/flash-deal-all-products">Best Selling All Products</Link></li>
                                    {/* Details Section All Products flash deal, New arrival etc */}

                                    {/* Pre Order Details */}
                                    <li><Link to="/pre-order-details">Pre Order Details</Link></li>
                                    {/* Pre Order Details */}

                                    {/* Grocery Main Page Details */}
                                    <li><Link to="/grocery-all-items">Grocery Details</Link></li>
                                    <li><Link to="/grocery-cooking-essentials-all-items">Grocery Cooking Essentials</Link></li>
                                    <li><Link to="/grocery-snacks-confectionary-all-items">Grocery Snacks Confectionary</Link></li>
                                    <li><Link to="/grocery-beverage-all-items">Grocery Beverage</Link></li>
                                    <li><Link to="/grocery-health-and-beauty-all-items">Grocery Health and Beauty</Link></li>
                                    {/* Grocery Main Page Details */}

                                    {/* Products Page */}
                                    <li><Link to="/products">Products Page</Link></li>
                                    {/* Products Page */}

                                    {/* My Cart Page */}
                                    <li><Link to="/my-cart">My Cart</Link></li>
                                    <li><Link to="/proceed-to-checkout">Proceed To Checkout</Link></li>
                                    <li><Link to="/proceed-to-pay">Proceed To Pay</Link></li>
                                    <li><Link to="/congratulation">Congratulation</Link></li>
                                    {/* My Cart Page */}


                                    {/* Profile Dashboard */}
                                    <li><Link to="/profile">Profile</Link></li>
                                    <li><Link to="/my-orders">My Orders</Link></li>
                                    <li><Link to="/my-wishlist">My Wishlist</Link></li>
                                    <li><Link to="/my-preorders">My Preorders</Link></li>
                                    <li><Link to="/my-coupons">My Coupons</Link></li>
                                    <li><Link to="/my-wallet">My Wallet</Link></li>
                                    <li><Link to="/manage-reviews">Manage Reviews</Link></li>
                                    <li><Link to="/my-address-book">My Address Book</Link></li>
                                    <li><Link to="/my-account-settings">My Account Settings</Link></li>
                                    {/* Profile Dashboard */}

                                    {/* Important Pages */}
                                    <li><Link to="/contact-us">Contact Us</Link></li>
                                    {/* Important Pages */}

                                    {/* OTP */}
                                    <li><Link to="/user-otp-confirm/:phone">Otp Send</Link></li>
                                    {/* OTP */}

                                    {/*Customer register*/}
                                    <li><Link to="/customer-dashboard">Customer Dashboard</Link></li>
                                    <li><Link to="/customer-forget-password">Customer Forget Password</Link></li>
                                    <li><Link to="/customer-reset-password">Customer Reset Password</Link></li>
                                    {/*Customer register*/}



                                    {/* Admin User Signin */}
                                    <li><Link to="/admin-signin">Admin Signin</Link></li>
                                    <li><Link to="/admin-forget-password">Forget Password</Link></li>
                                    <li><Link to="/admin-reset-password">Forget Password</Link></li>
                                    {/* Admin User Signin */}

                                    {/*Admin Dashboard Start*/}
                                    <li><Link to="/admin-dashboard">Admin Dashboard</Link></li>
                                    {/*Admin Dashboard end*/}



                                    {/*Main Dashboard Start*/}
                                    <li><Link to="/dashboard">Dashboard</Link></li>
                                    <li><Link to="/dashboard-orders">Orders</Link></li>
                                    <li><Link to="/dashboard-invoice-details">Dashboard Orders Details</Link></li>
                                    <li><Link to="/dashboard-invoice-edit">Dashboard Orders Edit</Link></li>
                                    {/*Main Dashboard end*/}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
