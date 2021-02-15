import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './mycart.css';

import TopMenuSection from '../topmenusection/TopMenuSection';
import FooterWebSection from '../allsections/footerwebsection/FooterWebSection';
import YouAlsoLikeSlider from './youalsolikeslider/YouAlsoLikeSlider';

export default class MyCart extends Component {

    state = {
        // Select option product
        showOne: false,
        showTwo: false,
        // Select option product

        // For Increase Decrease
        value: 1,
        // For Increase Decrease
      };

    // For Select cart product
    toggle= () => {
      var res = this.state.showOne;
      this.setState({ showOne: !res });
    };
    toggleTwo= () => {
      var res = this.state.showTwo;
      this.setState({ showTwo: !res });
    };
    // For Select cart product

    // Increace Decreace Section start --------------------------- 
    decrease = () => {
        this.setState({ value: this.state.value - 1 });
      }
    
      increase = () => {
        this.setState({ value: this.state.value + 1 });
      }
    // Increace Decreace Section end -----------------

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
                                            <img src={require('../../assets/cart-secure-check-icon.svg')} alt="orponbd online shop"/>
                                            <span>Secere Checkout</span>
                                        </div>
                                    </div>
                                    <div className="col-md-7">
                                        <div className="my-cart-wv-secure-timeline-section-timeline-sec">
                                            {/* Timeline */}
                                            <div className="my-cart-wv-secure-timeline-section-bbox">
                                                <div className="my-cart-wv-secure-timeline-section-bordr"></div>
                                            </div>
                                            <div className="my-cart-wv-secure-timeline-section-bbox-color-box text-center">
                                                <ul>
                                                    <li>
                                                        <div className="my-cart-shoppingg-cart-icon-bbggg shoppinf-color">
                                                            <i class="fas fa-check"></i>
                                                        </div>
                                                        <p className="my-cart-shoppingg-cart-icon-tzxt">Shopping Cart</p>
                                                    </li>
                                                    <li>
                                                        <div className="my-cart-shoppingg-cart-icon-bbggg">
                                                            <i class="fas fa-check"></i>
                                                        </div>
                                                        <p>Place Order</p>
                                                    </li>
                                                    <li>
                                                        <div className="my-cart-shoppingg-cart-icon-bbggg">
                                                            <i class="fas fa-check"></i>
                                                        </div>
                                                        <p>Pay</p>
                                                    </li>
                                                    <li>
                                                        <div className="my-cart-shoppingg-cart-icon-bbggg">
                                                            <i class="fas fa-check"></i>
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
                                                <h4>Shopping Cart</h4>
                                                <div className="my-cart-wv-shoppingcart-order-summary-ttxt">
                                                    <span className="my-cart-wv-shoppingcart-order-sum-itm"><span><p><span>7</span> Items</p></span></span>
                                                </div>
                                                <div className="my-cart-wv-shoppingcart-order-summary-section-brdrr"></div>
                                            </div>
                                            {/* Shopping Cart color */}

                                            {/* Shopping Cart Preorder Start ---------------------------PreOrder*/}
                                            
                                            <div className="my-cart-wv-shoppingcart-order-all-product-itemsx-main-bbox">
                                                <div className="my-cart-wv-shoppingcart-order-all-product-sellect-all-sec">
                                                    <div className="row">
                                                        <div className="col-md-9">
                                                            <div className="my-cart-wv-shoppingcart-order-all-product-sellect-all-txt">
                                                                <input type="checkbox"/>
                                                                <span>Select All</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div className="my-cart-wv-shoppingcart-order-all-product-sellect-all-right-txt">
                                                                <p>Preorders</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="my-cart-wv-shoppingcart-order-all-product-itemsx-prod-box">
                                                    <table class="table table-borderedx">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col col-6"></th>
                                                                <th scope="col col-6">Product Details</th>
                                                                <th className="text-center" scope="col col-6">Quantity</th>
                                                                <th className="text-center" scope="col col-6">Price</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                            {/* Single Item start */}
                                                            <tr>
                                                                <td className="my-cart-wv-shoppingcart-order-all-checkkbx"><input type="checkbox"/></td>
                                                                <td style={{width: '60%'}}>
                                                                    <div className="my-cart-wv-shoppingcart-order-all-product-sing-prdo-det">
                                                                        <div className="row my-cart-wv-shoppingcart-order-all-product-sn-expdd">
                                                                            <div className="col-md-3">
                                                                                <div className="my-cart-wv-shoppingcart-order-all-product-sing-prdo-img">
                                                                                    <img src={require('../../assets/cart-product-1.png')} alt="orponbd online shop"/>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-9">
                                                                                <div className="my-cart-wv-shoppingcart-order-all-product-sing-prdo-content">
                                                                                    <p>[bluetooth Call] Bakeey CK30 Temperature Measurement Heart Rate Blood Pressure....</p>
                                                                                    <div className="my-cart-wv-shoppingcart-order-start-rattng">
                                                                                        <span class="fa fa-star checked"></span>
                                                                                        <span className="my-cart-wv-shoppingcart-order-star-rat-count">4.5</span>
                                                                                        <span className="my-cart-wv-shoppingcart-order-count-number">(150 Sold)</span>
                                                                                    </div>
                                                                                    <div className="my-cart-wv-shoppingcart-order-all-product-sing-select">
                                                                                        <button onClick={ this.toggle }> Color: Blacl | Size: M <span><i className="fas fa-angle-down"></i></span></button>
                                                                                        {
                                                                                            this.state.showOne ? (
                                                                                            <div className="my-cart-wv-shoppingcart-order-all-product-sing-select-in-box">
                                                                                                <div className="row sgdsggh">
                                                                                                    <div className="col-md-5">
                                                                                                    <div className="my-cart-wv-shoppingcart-all-product-sing-ct-sml-img">
                                                                                                        <img src={require('../../assets/cart-product-1.png')} alt="orponbd online shop"/>
                                                                                                    </div>
                                                                                                    </div>
                                                                                                    <div className="col-md-7">
                                                                                                        <div className="my-cart-wv-shoppingcart-all-product-sing-ct-sml-img-lst">
                                                                                                            <div className="colorrttt-texxttt">
                                                                                                                <h5>Color:</h5>
                                                                                                            </div>
                                                                                                            <ul>
                                                                                                                <li><img src={require('../../assets/cart-product-1.png')} alt="orponbd online shop"/></li>
                                                                                                                <li><img src={require('../../assets/cart-product-2.png')} alt="orponbd online shop"/></li>
                                                                                                                <li><img src={require('../../assets/cart-product-3.png')} alt="orponbd online shop"/></li>
                                                                                                                <li><img src={require('../../assets/cart-product-1.png')} alt="orponbd online shop"/></li>
                                                                                                            </ul>
                                                                                                            <div className="color-size-main-bboxx-mv">
                                                                                                                <div className="colorrttt-size-texxttt">
                                                                                                                    <h5>Size:</h5>
                                                                                                                </div>
                                                                                                                <ul>
                                                                                                                    <li>S</li>
                                                                                                                    <li>M</li>
                                                                                                                    <li>L</li>
                                                                                                                    <li>XL</li>
                                                                                                                </ul>
                                                                                                            </div>
                                                                                                            <div className="color-size-main-bboxx-button-sec">
                                                                                                                <ul>
                                                                                                                    <li className="color-size-main-bboxx-button-savex"><button>Save</button></li>
                                                                                                                    <li className="color-size-main-bboxx-button-cancelx"><button>Cancel</button></li>
                                                                                                                </ul>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            ) : null
                                                                                        }

                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="text-center">
                                                                    <div className="my-cart-wv-shoppingcart-order-all-product-text-inc-dec">
                                                                        <div className="def-number-input number-input">
                                                                            <button className="my-cart-wv-shoppingcart-order-dec-wv-btn" onClick={this.decrease}><i class="fas fa-minus"></i></button>
                                                                            <input className="quantity my-cart-wv-shoppingcart-order-input-fld" name="quantity" value={this.state.value} onChange={()=> console.log('change')}
                                                                            type="number" />
                                                                            <button className="my-cart-wv-shoppingcart-order-incc-wv-btn" onClick={this.increase}><i className="fas fa-plus"></i></button>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="text-center">
                                                                    <div className="my-cart-wv-shoppingcart-order-prod-price-txt">
                                                                        <h3><span>৳</span> 1200</h3>
                                                                    </div>
                                                                    {/* Wishlist and Delete btn */}
                                                                    <div className="my-cart-wv-shoppingcart-wishlst-and-delete-btn">
                                                                        <ul>
                                                                            <li className="my-cart-wv-shoppingcart-wishlst-only-wv"><button><i class="fas fa-heart"></i></button></li>
                                                                            <li className="my-cart-wv-shoppingcart-delete-only-wv"><button><i class="far fa-trash-alt"></i></button></li>
                                                                        </ul>
                                                                    </div>
                                                                    {/* Wishlist and Delete btn */}
                                                                </td>
                                                            </tr>
                                                            {/* Single Item end */}
                                                            {/* Single Item start */}
                                                            <tr>
                                                                <td className="my-cart-wv-shoppingcart-order-all-checkkbx"><input type="checkbox"/></td>
                                                                <td style={{width: '60%'}}>
                                                                    <div className="my-cart-wv-shoppingcart-order-all-product-sing-prdo-det">
                                                                        <div className="row my-cart-wv-shoppingcart-order-all-product-sn-expdd">
                                                                            <div className="col-md-3">
                                                                                <div className="my-cart-wv-shoppingcart-order-all-product-sing-prdo-img">
                                                                                    <img src={require('../../assets/cart-product-2.png')} alt="orponbd online shop"/>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-9">
                                                                                <div className="my-cart-wv-shoppingcart-order-all-product-sing-prdo-content">
                                                                                    <p>[bluetooth Call] Bakeey CK30 Temperature Measurement Heart Rate Blood Pressure....</p>
                                                                                    <div className="my-cart-wv-shoppingcart-order-start-rattng">
                                                                                        <span class="fa fa-star checked"></span>
                                                                                        <span className="my-cart-wv-shoppingcart-order-star-rat-count">4.5</span>
                                                                                        <span className="my-cart-wv-shoppingcart-order-count-number">(150 Sold)</span>
                                                                                    </div>
                                                                                    <div className="my-cart-wv-shoppingcart-order-all-product-sing-select">
                                                                                        <button onClick={ this.toggleTwo }> Color: Blacl | Size: M <span><i className="fas fa-angle-down"></i></span></button>
                                                                                        {
                                                                                            this.state.showTwo ? (
                                                                                            <div className="my-cart-wv-shoppingcart-order-all-product-sing-select-in-box">
                                                                                                <div className="row sgdsggh">
                                                                                                    <div className="col-md-5">
                                                                                                    <div className="my-cart-wv-shoppingcart-all-product-sing-ct-sml-img">
                                                                                                        <img src={require('../../assets/cart-product-1.png')} alt="orponbd online shop"/>
                                                                                                    </div>
                                                                                                    </div>
                                                                                                    <div className="col-md-7">
                                                                                                        <div className="my-cart-wv-shoppingcart-all-product-sing-ct-sml-img-lst">
                                                                                                            <div className="colorrttt-texxttt">
                                                                                                                <h5>Color:</h5>
                                                                                                            </div>
                                                                                                            <ul>
                                                                                                                <li><img src={require('../../assets/cart-product-1.png')} alt="orponbd online shop"/></li>
                                                                                                                <li><img src={require('../../assets/cart-product-2.png')} alt="orponbd online shop"/></li>
                                                                                                                <li><img src={require('../../assets/cart-product-3.png')} alt="orponbd online shop"/></li>
                                                                                                                <li><img src={require('../../assets/cart-product-2.png')} alt="orponbd online shop"/></li>
                                                                                                            </ul>
                                                                                                            <div className="color-size-main-bboxx-mv">
                                                                                                                <div className="colorrttt-size-texxttt">
                                                                                                                    <h5>Size:</h5>
                                                                                                                </div>
                                                                                                                <ul>
                                                                                                                    <li>S</li>
                                                                                                                    <li>M</li>
                                                                                                                    <li>L</li>
                                                                                                                    <li>XL</li>
                                                                                                                </ul>
                                                                                                            </div>
                                                                                                            <div className="color-size-main-bboxx-button-sec">
                                                                                                                <ul>
                                                                                                                    <li className="color-size-main-bboxx-button-savex"><button>Save</button></li>
                                                                                                                    <li className="color-size-main-bboxx-button-cancelx"><button>Cancel</button></li>
                                                                                                                </ul>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            ) : null
                                                                                        }
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="text-center">
                                                                    <div className="my-cart-wv-shoppingcart-order-all-product-text-inc-dec">
                                                                        <div className="def-number-input number-input">
                                                                            <button className="my-cart-wv-shoppingcart-order-dec-wv-btn" onClick={this.decrease}><i class="fas fa-minus"></i></button>
                                                                            <input className="quantity my-cart-wv-shoppingcart-order-input-fld" name="quantity" value={this.state.value} onChange={()=> console.log('change')}
                                                                            type="number" />
                                                                            <button className="my-cart-wv-shoppingcart-order-incc-wv-btn" onClick={this.increase}><i className="fas fa-plus"></i></button>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="text-center">
                                                                    <div className="my-cart-wv-shoppingcart-order-prod-price-txt">
                                                                        <h3><span>৳</span> 1200</h3>
                                                                    </div>
                                                                    {/* Wishlist and Delete btn */}
                                                                    <div className="my-cart-wv-shoppingcart-wishlst-and-delete-btn">
                                                                        <ul>
                                                                            <li className="my-cart-wv-shoppingcart-wishlst-only-wv"><button><i class="fas fa-heart"></i></button></li>
                                                                            <li className="my-cart-wv-shoppingcart-delete-only-wv"><button><i class="far fa-trash-alt"></i></button></li>
                                                                        </ul>
                                                                    </div>
                                                                    {/* Wishlist and Delete btn */}
                                                                </td>
                                                            </tr>
                                                            {/* Single Item end */}
                                                            

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            {/* Shopping Cart Preorder End ---------------------------PreOrder End*/}


                                            {/* Shopping Cart Order Start ---------------------------Order*/}
                                            {/* Shopping Cart color */}
                                            <div className="my-cart-wv-shoppingcart-order-all-product-itemsx-main-bbox">
                                                <div className="my-cart-wv-shoppingcart-order-all-product-sellect-all-sec">
                                                    <div className="row">
                                                        <div className="col-md-9">
                                                            <div className="my-cart-wv-shoppingcart-order-all-product-sellect-all-txt">
                                                                <input type="checkbox"/>
                                                                <span>Select All</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div className="my-cart-wv-shoppingcart-order-all-product-sellect-all-right-txt">
                                                                <p>Orders</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="my-cart-wv-shoppingcart-order-all-product-itemsx-prod-box">
                                                    <table class="table table-borderedx">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col col-6"></th>
                                                                <th scope="col col-6">Product Details</th>
                                                                <th className="text-center" scope="col col-6">Quantity</th>
                                                                <th className="text-center" scope="col col-6">Price</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                            {/* Single Item start */}
                                                            <tr>
                                                                <td className="my-cart-wv-shoppingcart-order-all-checkkbx"><input type="checkbox"/></td>
                                                                <td style={{width: '60%'}}>
                                                                    <div className="my-cart-wv-shoppingcart-order-all-product-sing-prdo-det">
                                                                        <div className="row my-cart-wv-shoppingcart-order-all-product-sn-expdd">
                                                                            <div className="col-md-3">
                                                                                <div className="my-cart-wv-shoppingcart-order-all-product-sing-prdo-img">
                                                                                    <img src={require('../../assets/cart-product-3.png')} alt="orponbd online shop"/>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-9">
                                                                                <div className="my-cart-wv-shoppingcart-order-all-product-sing-prdo-content">
                                                                                    <p>[bluetooth Call] Bakeey CK30 Temperature Measurement Heart Rate Blood Pressure....</p>
                                                                                    <div className="my-cart-wv-shoppingcart-order-start-rattng">
                                                                                        <span class="fa fa-star checked"></span>
                                                                                        <span className="my-cart-wv-shoppingcart-order-star-rat-count">4.5</span>
                                                                                        <span className="my-cart-wv-shoppingcart-order-count-number">(150 Sold)</span>
                                                                                    </div>
                                                                                    <div className="my-cart-wv-shoppingcart-order-all-product-sing-select">
                                                                                        <button onClick={ this.toggle }> Color: Blacl | Size: M <span><i className="fas fa-angle-down"></i></span></button>
                                                                                        {
                                                                                            this.state.showOne ? (
                                                                                            <div className="my-cart-wv-shoppingcart-order-all-product-sing-select-in-box">
                                                                                                <div className="row sgdsggh">
                                                                                                    <div className="col-md-5">
                                                                                                    <div className="my-cart-wv-shoppingcart-all-product-sing-ct-sml-img">
                                                                                                        <img src={require('../../assets/cart-product-4.png')} alt="orponbd online shop"/>
                                                                                                    </div>
                                                                                                    </div>
                                                                                                    <div className="col-md-7">
                                                                                                        <div className="my-cart-wv-shoppingcart-all-product-sing-ct-sml-img-lst">
                                                                                                            <div className="colorrttt-texxttt">
                                                                                                                <h5>Color:</h5>
                                                                                                            </div>
                                                                                                            <ul>
                                                                                                                <li><img src={require('../../assets/cart-product-1.png')} alt="orponbd online shop"/></li>
                                                                                                                <li><img src={require('../../assets/cart-product-2.png')} alt="orponbd online shop"/></li>
                                                                                                                <li><img src={require('../../assets/cart-product-3.png')} alt="orponbd online shop"/></li>
                                                                                                                <li><img src={require('../../assets/cart-product-1.png')} alt="orponbd online shop"/></li>
                                                                                                            </ul>
                                                                                                            <div className="color-size-main-bboxx-mv">
                                                                                                                <div className="colorrttt-size-texxttt">
                                                                                                                    <h5>Size:</h5>
                                                                                                                </div>
                                                                                                                <ul>
                                                                                                                    <li>S</li>
                                                                                                                    <li>M</li>
                                                                                                                    <li>L</li>
                                                                                                                    <li>XL</li>
                                                                                                                </ul>
                                                                                                            </div>
                                                                                                            <div className="color-size-main-bboxx-button-sec">
                                                                                                                <ul>
                                                                                                                    <li className="color-size-main-bboxx-button-savex"><button>Save</button></li>
                                                                                                                    <li className="color-size-main-bboxx-button-cancelx"><button>Cancel</button></li>
                                                                                                                </ul>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            ) : null
                                                                                        }
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="text-center">
                                                                    <div className="my-cart-wv-shoppingcart-order-all-product-text-inc-dec">
                                                                        <div className="def-number-input number-input">
                                                                            <button className="my-cart-wv-shoppingcart-order-dec-wv-btn" onClick={this.decrease}><i class="fas fa-minus"></i></button>
                                                                            <input className="quantity my-cart-wv-shoppingcart-order-input-fld" name="quantity" value={this.state.value} onChange={()=> console.log('change')}
                                                                            type="number" />
                                                                            <button className="my-cart-wv-shoppingcart-order-incc-wv-btn" onClick={this.increase}><i className="fas fa-plus"></i></button>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="text-center">
                                                                    <div className="my-cart-wv-shoppingcart-order-prod-price-txt">
                                                                        <h3><span>৳</span> 1200</h3>
                                                                    </div>
                                                                    {/* Wishlist and Delete btn */}
                                                                    <div className="my-cart-wv-shoppingcart-wishlst-and-delete-btn">
                                                                        <ul>
                                                                            <li className="my-cart-wv-shoppingcart-wishlst-only-wv"><button><i class="fas fa-heart"></i></button></li>
                                                                            <li className="my-cart-wv-shoppingcart-delete-only-wv"><button><i class="far fa-trash-alt"></i></button></li>
                                                                        </ul>
                                                                    </div>
                                                                    {/* Wishlist and Delete btn */}
                                                                </td>
                                                            </tr>
                                                            {/* Single Item end */}
                                                            {/* Single Item start */}
                                                            <tr>
                                                                <td className="my-cart-wv-shoppingcart-order-all-checkkbx"><input type="checkbox"/></td>
                                                                <td style={{width: '60%'}}>
                                                                    <div className="my-cart-wv-shoppingcart-order-all-product-sing-prdo-det">
                                                                        <div className="row my-cart-wv-shoppingcart-order-all-product-sn-expdd">
                                                                            <div className="col-md-3">
                                                                                <div className="my-cart-wv-shoppingcart-order-all-product-sing-prdo-img">
                                                                                    <img src={require('../../assets/cart-product-4.png')} alt="orponbd online shop"/>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-9">
                                                                                <div className="my-cart-wv-shoppingcart-order-all-product-sing-prdo-content">
                                                                                    <p>[bluetooth Call] Bakeey CK30 Temperature Measurement Heart Rate Blood Pressure....</p>
                                                                                    <div className="my-cart-wv-shoppingcart-order-start-rattng">
                                                                                        <span class="fa fa-star checked"></span>
                                                                                        <span className="my-cart-wv-shoppingcart-order-star-rat-count">4.5</span>
                                                                                        <span className="my-cart-wv-shoppingcart-order-count-number">(150 Sold)</span>
                                                                                    </div>
                                                                                    <div className="my-cart-wv-shoppingcart-order-all-product-sing-select">
                                                                                        <button onClick={ this.toggleTwo }> Color: Blacl | Size: M <span><i className="fas fa-angle-down"></i></span></button>
                                                                                        {
                                                                                            this.state.showTwo ? (
                                                                                            <div className="my-cart-wv-shoppingcart-order-all-product-sing-select-in-box">
                                                                                                <div className="row sgdsggh">
                                                                                                    <div className="col-md-5">
                                                                                                    <div className="my-cart-wv-shoppingcart-all-product-sing-ct-sml-img">
                                                                                                        <img src={require('../../assets/cart-product-1.png')} alt="orponbd online shop"/>
                                                                                                    </div>
                                                                                                    </div>
                                                                                                    <div className="col-md-7">
                                                                                                        <div className="my-cart-wv-shoppingcart-all-product-sing-ct-sml-img-lst">
                                                                                                            <div className="colorrttt-texxttt">
                                                                                                                <h5>Color:</h5>
                                                                                                            </div>
                                                                                                            <ul>
                                                                                                                <li><img src={require('../../assets/cart-product-1.png')} alt="orponbd online shop"/></li>
                                                                                                                <li><img src={require('../../assets/cart-product-2.png')} alt="orponbd online shop"/></li>
                                                                                                                <li><img src={require('../../assets/cart-product-3.png')} alt="orponbd online shop"/></li>
                                                                                                                <li><img src={require('../../assets/cart-product-2.png')} alt="orponbd online shop"/></li>
                                                                                                            </ul>
                                                                                                            <div className="color-size-main-bboxx-mv">
                                                                                                                <div className="colorrttt-size-texxttt">
                                                                                                                    <h5>Size:</h5>
                                                                                                                </div>
                                                                                                                <ul>
                                                                                                                    <li>S</li>
                                                                                                                    <li>M</li>
                                                                                                                    <li>L</li>
                                                                                                                    <li>XL</li>
                                                                                                                </ul>
                                                                                                            </div>
                                                                                                            <div className="color-size-main-bboxx-button-sec">
                                                                                                                <ul>
                                                                                                                    <li className="color-size-main-bboxx-button-savex"><button>Save</button></li>
                                                                                                                    <li className="color-size-main-bboxx-button-cancelx"><button>Cancel</button></li>
                                                                                                                </ul>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            ) : null
                                                                                        }
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="text-center">
                                                                    <div className="my-cart-wv-shoppingcart-order-all-product-text-inc-dec">
                                                                        <div className="def-number-input number-input">
                                                                            <button className="my-cart-wv-shoppingcart-order-dec-wv-btn" onClick={this.decrease}><i class="fas fa-minus"></i></button>
                                                                            <input className="quantity my-cart-wv-shoppingcart-order-input-fld" name="quantity" value={this.state.value} onChange={()=> console.log('change')}
                                                                            type="number" />
                                                                            <button className="my-cart-wv-shoppingcart-order-incc-wv-btn" onClick={this.increase}><i className="fas fa-plus"></i></button>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="text-center">
                                                                    <div className="my-cart-wv-shoppingcart-order-prod-price-txt">
                                                                        <h3><span>৳</span> 1200</h3>
                                                                    </div>
                                                                    {/* Wishlist and Delete btn */}
                                                                    <div className="my-cart-wv-shoppingcart-wishlst-and-delete-btn">
                                                                        <ul>
                                                                            <li className="my-cart-wv-shoppingcart-wishlst-only-wv"><button><i class="fas fa-heart"></i></button></li>
                                                                            <li className="my-cart-wv-shoppingcart-delete-only-wv"><button><i class="far fa-trash-alt"></i></button></li>
                                                                        </ul>
                                                                    </div>
                                                                    {/* Wishlist and Delete btn */}
                                                                </td>
                                                            </tr>
                                                            {/* Single Item end */}
                                                            

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            {/* Shopping Cart Order End ---------------------------Order*/}
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
                                                    <p>Discount</p>
                                                    <span className="my-cart-wv-shoppingcart-order-total-subtotal-amnt-ab"><h3><span>৳</span> 50</h3></span>
                                                </div>
                                                <div className="my-cart-wv-shoppingcart-order-total-subtotal-single-itm total-itemxs">
                                                    <p>Total <span>(4 Items)</span></p>
                                                    <span className="my-cart-wv-shoppingcart-order-total-subtotal-amnt-ab total-itemxspz"><h3><span>৳</span> 450</h3></span>
                                                </div>
                                            </div>
                                            {/* Total Subtotal end */}

                                            {/* Checkout Button Link */}
                                            <div className="my-cart-wv-shoppingcart-order-total-proceed-to-ckout-btn-wv text-center">
                                                <Link to="/proceed-to-checkout">Proceed to Checkout</Link>
                                            </div>
                                            <div className="extraaa-divvv-wv"></div>
                                            {/* Checkout Button Link */}

                                            {/* Payment Icon Box start */}
                                            <div className="my-cart-wv-shoppingcart-order-total-payment-icon-wv-main-box">
                                                <div className="my-cart-wv-shoppingcart-order-total-payment-icon-box-content">

                                                    <div className="my-cart-wv-shoppingcart-order-total-payment-icon-hed">
                                                        <p>Payment Methods</p>
                                                    </div>

                                                    <div className="row my-cart-wv-shoppingcart-order-total-payment-icon-expdd">
                                                        <div className="col-md-4">
                                                            <div className="my-cart-wv-shoppingcart-order-total-payment-icon-img">
                                                                <img src={require('../../assets/bkash-payment-wv.svg')} alt="orponbd online shop"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="my-cart-wv-shoppingcart-order-total-payment-icon-img">
                                                                <img src={require('../../assets/nagad-payment-wv.svg')} alt="orponbd online shop"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="my-cart-wv-shoppingcart-order-total-payment-icon-img">
                                                                <img src={require('../../assets/visa-payment-wv.svg')} alt="orponbd online shop"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row my-cart-wv-shoppingcart-order-total-payment-icon-expdd">
                                                        <div className="col-md-4">
                                                            <div className="my-cart-wv-shoppingcart-order-total-payment-icon-img">
                                                                <img src={require('../../assets/master-card-payment-wv.svg')} alt="orponbd online shop"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="my-cart-wv-shoppingcart-order-total-payment-icon-img">
                                                                <img src={require('../../assets/american-exp-payment-wv.svg')} alt="orponbd online shop"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="my-cart-wv-shoppingcart-order-total-payment-icon-img">
                                                                <img src={require('../../assets/union-pay-payment-wv.svg')} alt="orponbd online shop"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Payment Icon Box end */}
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
