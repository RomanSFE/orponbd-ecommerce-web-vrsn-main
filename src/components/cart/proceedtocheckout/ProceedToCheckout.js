import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './proceedtocheckout.css';

import TopMenuSection from '../../topmenusection/TopMenuSection';
import FooterWebSection from '../../allsections/footerwebsection/FooterWebSection';
import YouAlsoLikeSlider from '../youalsolikeslider/YouAlsoLikeSlider';

import Modal from 'react-bootstrap/Modal';



export default class ProceedToCheckout extends Component {

    constructor(props, context) {
		super(props, context);

        // Add New Address Modal
		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);
        // Add New Address Modal

        this.state = {
            // Add New address modal
            show: false,
            // Add New address modal
            showOne: false,
            showTwo: false,

            // For Increase Decrease
            value: 1,
            // For Increase Decrease

            // color change address
                black: true
            // color change address
        };
    }

    // Add New Address Modal
    handleClose() {
		this.setState({ show: false });
	}
	handleShow() {
		this.setState({ show: true });
	}
    // Add New Address Modal

    //   Color Change Address
    changeColor(){
        this.setState({black: !this.state.black})
    }
    //   Color Change Address

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
        // Color Change Address
        let btn_class = this.state.black ? "blackButton" : "whiteButton";
        // Color Change Address
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
                                                <div className="my-cart-wv-secure-timeline-section-bordr proceedto-checkout-wvv"></div>
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
                                                        <div className="my-cart-shoppingg-cart-icon-bbggg">
                                                            <i className="fas fa-check"></i>
                                                        </div>
                                                        <p>Pay</p>
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
                                            {/* Shipping Address Start */}
                                            <div className="my-cart-wv-shoppingcart-order-summary-section-content-color-txtt">
                                                <h4>Shipping Address</h4>
                                                <div className="my-cart-wv-shoppingcart-order-summary-ttxt">
                                                    {/* <span className="my-cart-wv-shoppingcart-order-sum-itm"><span><p><span>7</span> Items</p></span></span> */}
                                                </div>
                                                <div className="my-cart-wv-shoppingcart-order-summary-section-brdrr"></div>
                                            </div>

                                            <div className="my-cart-wv-shoppingcart-order-shipping-address-boxx">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className={btn_class} onClick={this.changeColor.bind(this)}>
                                                            <div className="my-cart-wv-shoppingcart-order-shipping-address-boxx-content-wv">
                                                                <h4>Customer Full Name</h4>
                                                                <h5>+8801745874677</h5>
                                                                <p>House 8, Block A, Avenue 1, Section 10, Mirpur, Dhaka (Benarashi Palli 1 No Gate) Dhaka, Mirpur, Bangladesh, 1216</p>
                                                                <div className="my-cart-wv-shoppingcart-order-shipping-address-edit-lnk-ab">
                                                                    <ul>
                                                                        <li><Link to="/"><i className="fas fa-edit"></i> <span>Edit</span></Link></li>
                                                                        <li><Link to="/"><i className="far fa-check-square"></i> <span>Set as default</span></Link></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className={btn_class} onClick={this.changeColor.bind(this)}>
                                                            <div className="my-cart-wv-shoppingcart-order-shipping-address-boxx-content-wv">
                                                                <h4>Customer Full Name</h4>
                                                                <h5>+8801745874677</h5>
                                                                <p>House 8, Block A, Avenue 1, Section 10, Mirpur, Dhaka (Benarashi Palli 1 No Gate) Dhaka, Mirpur, Bangladesh, 1216</p>
                                                                <div className="my-cart-wv-shoppingcart-order-shipping-address-edit-lnk-ab">
                                                                    <ul>
                                                                        <li><Link to="/"><i className="fas fa-edit"></i> <span>Edit</span></Link></li>
                                                                        <li><Link to="/"><i className="far fa-check-square"></i> <span>Set as default</span></Link></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="my-cart-wv-shoppingcart-order-shipping-address-add-new-btn">
                                                    <div className="my-cart-wv-shopping-add-new-address-bbuxtn">
                                                        <button onClick={this.handleShow}>Add New <span><i className="fas fa-plus"></i></span></button>
                                                    </div>
                                                    {/* Modal Start */}
                                                    <Modal size="sm" show={this.state.show} onHide={this.handleClose}>
                                                        <Modal.Header closeButton>
                                                            <div className="my-cart-wv-shoppingcart-order-shipping-address-hed">
                                                                <h4>Add New Address</h4>
                                                            </div>
                                                        </Modal.Header>
                                                        
                                                        <Modal.Body>
                                                            <div className="my-cart-wv-shoppingcart-order-shipping-address-add-modal-address text-center">
                                                                <form action="">
                                                                    <div className="my-cart-wv-shoppingcart-order-shipping-address-input-field">
                                                                        <input type="text" placeholder="Enter your name"/>
                                                                    </div>
                                                                    <div className="my-cart-wv-shoppingcart-order-shipping-address-input-field">
                                                                        <input type="text" placeholder="Enter your pnone number"/>
                                                                    </div>
                                                                    <div className="my-cart-wv-shoppingcart-order-shipping-address-input-field">
                                                                        <textarea name="" id="" cols="30" rows="10" placeholder="Enter your address"></textarea>
                                                                    </div>
                                                                    <div className="my-cart-wv-shoppingcart-order-shipping-address-input-field">
                                                                        <button type="submit">Submit</button>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </Modal.Body>
                                                        
                                                    </Modal>
                                                    {/* Modal End*/}
                                                </div>
                                            </div>
                                            {/* Shipping Address End -------------*/}

                                            {/* Shopping Cart color */}
                                            <div className="my-cart-wv-shoppingcart-order-summary-section-content-color-txtt">
                                                <h4>Order Overview</h4>
                                                <div className="my-cart-wv-shoppingcart-order-summary-ttxt">
                                                    {/* <span className="my-cart-wv-shoppingcart-order-sum-itm"><span><p><span>7</span> Items</p></span></span> */}
                                                </div>
                                                <div className="my-cart-wv-shoppingcart-order-summary-section-brdrr"></div>
                                            </div>

                                            {/* Shopping Cart Preorder Start ---------------------------PreOrder*/}
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
                                                                <p>Preorders</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="my-cart-wv-shoppingcart-order-all-product-itemsx-prod-box">
                                                    <table className="table table-borderedx">
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
                                                                                    <img src={require('../../../assets/cart-product-3.png')} alt="orponbd online shop"/>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-9">
                                                                                <div className="my-cart-wv-shoppingcart-order-all-product-sing-prdo-content">
                                                                                    <p>[bluetooth Call] Bakeey CK30 Temperature Measurement Heart Rate Blood Pressure....</p>
                                                                                    <div className="my-cart-wv-shoppingcart-order-start-rattng">
                                                                                        <span className="fa fa-star checked"></span>
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
                                                                                                        <img src={require('../../../assets/cart-product-1.png')} alt="orponbd online shop"/>
                                                                                                    </div>
                                                                                                    </div>
                                                                                                    <div className="col-md-7">
                                                                                                        <div className="my-cart-wv-shoppingcart-all-product-sing-ct-sml-img-lst">
                                                                                                            <div className="colorrttt-texxttt">
                                                                                                                <h5>Color:</h5>
                                                                                                            </div>
                                                                                                            <ul>
                                                                                                                <li><img src={require('../../../assets/cart-product-1.png')} alt="orponbd online shop"/></li>
                                                                                                                <li><img src={require('../../../assets/cart-product-2.png')} alt="orponbd online shop"/></li>
                                                                                                                <li><img src={require('../../../assets/cart-product-3.png')} alt="orponbd online shop"/></li>
                                                                                                                <li><img src={require('../../../assets/cart-product-1.png')} alt="orponbd online shop"/></li>
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
                                                                        <span className="my-cart-wv-shoppingcart-proceed-to-checkout-count">5</span>
                                                                    </div>
                                                                </td>
                                                                <td className="text-center">
                                                                    <div className="my-cart-wv-shoppingcart-order-prod-price-txt">
                                                                        <h3><span>৳</span> 1200</h3>
                                                                    </div>
                                                                    {/* Wishlist and Delete btn */}
                                                                    <div className="my-cart-wv-shoppingcart-wishlst-and-delete-btn">
                                                                        <ul>
                                                                            <li className="my-cart-wv-shoppingcart-wishlst-only-wv"><button><i className="fas fa-heart"></i></button></li>
                                                                            <li className="my-cart-wv-shoppingcart-delete-only-wv"><button><i className="far fa-trash-alt"></i></button></li>
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
                                                                                    <img src={require('../../../assets/cart-product-4.png')} alt="orponbd online shop"/>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-9">
                                                                                <div className="my-cart-wv-shoppingcart-order-all-product-sing-prdo-content">
                                                                                    <p>[bluetooth Call] Bakeey CK30 Temperature Measurement Heart Rate Blood Pressure....</p>
                                                                                    <div className="my-cart-wv-shoppingcart-order-start-rattng">
                                                                                        <span className="fa fa-star checked"></span>
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
                                                                                                        <img src={require('../../../assets/cart-product-1.png')} alt="orponbd online shop"/>
                                                                                                    </div>
                                                                                                    </div>
                                                                                                    <div className="col-md-7">
                                                                                                        <div className="my-cart-wv-shoppingcart-all-product-sing-ct-sml-img-lst">
                                                                                                            <div className="colorrttt-texxttt">
                                                                                                                <h5>Color:</h5>
                                                                                                            </div>
                                                                                                            <ul>
                                                                                                                <li><img src={require('../../../assets/cart-product-1.png')} alt="orponbd online shop"/></li>
                                                                                                                <li><img src={require('../../../assets/cart-product-2.png')} alt="orponbd online shop"/></li>
                                                                                                                <li><img src={require('../../../assets/cart-product-3.png')} alt="orponbd online shop"/></li>
                                                                                                                <li><img src={require('../../../assets/cart-product-2.png')} alt="orponbd online shop"/></li>
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
                                                                        <span className="my-cart-wv-shoppingcart-proceed-to-checkout-count">5</span>
                                                                    </div>
                                                                </td>
                                                                <td className="text-center">
                                                                    <div className="my-cart-wv-shoppingcart-order-prod-price-txt">
                                                                        <h3><span>৳</span> 1200</h3>
                                                                    </div>
                                                                    {/* Wishlist and Delete btn */}
                                                                    <div className="my-cart-wv-shoppingcart-wishlst-and-delete-btn">
                                                                        <ul>
                                                                            <li className="my-cart-wv-shoppingcart-wishlst-only-wv"><button><i className="fas fa-heart"></i></button></li>
                                                                            <li className="my-cart-wv-shoppingcart-delete-only-wv"><button><i className="far fa-trash-alt"></i></button></li>
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

                                            {/* Coupon Code Sec start */}
                                            <div className="my-cart-wv-shoppingcart-order-total-coupon-code-box">
                                               <form action="">
                                                   <div className="my-cart-wv-shoppingcart-order-total-coupon-code-input-fld">
                                                       <input type="text" placeholder="Enter code"/>
                                                       <span><button type="submit">Apply</button></span>
                                                   </div>
                                                </form>                                                 
                                            </div>
                                            {/* Coupon Code Sec end */}

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

                                            {/* Checkout Button Link */}
                                            <div className="my-cart-wv-shoppingcart-order-total-proceed-to-ckout-btn-wv text-center">
                                                <Link to="/proceed-to-pay">Proceed to Pay</Link>
                                            </div>
                                            {/* Checkout Button Link */}
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
