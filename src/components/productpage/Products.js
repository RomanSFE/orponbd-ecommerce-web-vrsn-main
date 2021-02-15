import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './products.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import ReactImageZoom from 'react-image-zoom';
import Modal from 'react-bootstrap/Modal';
import { Tabs, Tab } from 'react-bootstrap';

import TopMenuSection from '../topmenusection/TopMenuSection';
import FooterWebSection from '../allsections/footerwebsection/FooterWebSection';
import YouAlsoLikeSlider from '../../components/cart/youalsolikeslider/YouAlsoLikeSlider.js';

import AddToCartModalSlide from './addtocartmodalslide/AddToCartModalSlide.js';

// View More Button Product
import cx from "classnames";
import Collapse from "@kunukn/react-collapse";
// View More Button Product

export default class Products extends Component {
    

    // View More Modal
    constructor(props) {
		super(props);

        // EMI Modal
        this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);

        this.handleShowTwo = this.handleShowTwo.bind(this);
		this.handleCloseTwo = this.handleCloseTwo.bind(this);

        // Write a Review
        this.handleShowThree = this.handleShowThree.bind(this);
		this.handleCloseThree = this.handleCloseThree.bind(this);
        // Write a Review

        // EMI Modal

		this.state = {
            // EMI Modal
            show: false,
            showtwo: false,
            // Write a Review
            showthree: false,
            // Write a Review
            // EMI Modal

            // For Increase Decrease
            value: 1,
            // For Increase Decrease

            //   View more Button
            ViewMore: false,
            //   View more Button

            // View More Button Products
            isOpen1: false,
            isOpen2: false,
            isOpen3: false,
            toggle: false,
            spy3: {}
            // View More Button Products
		};
	}

	// View Modal EMI
    handleClose() {
		this.setState({ show: false });
	}

	handleShow() {
		this.setState({ show: true });
	}


    handleCloseTwo() {
		this.setState({ showtwo: false });
	}

	handleShowTwo() {
		this.setState({ showtwo: true });
	}

    // Write a Review
    handleCloseThree() {
		this.setState({ showthree: false });
	}
	handleShowThree() {
		this.setState({ showthree: true });
	}
    // Write a Review
    // View Modal EMI

    // Increace Decreace Section start ---------------------------
    decrease = () => {
        this.setState({ value: this.state.value - 1 });
      }
    
      increase = () => {
        this.setState({ value: this.state.value + 1 });
      }
    // Increace Decreace Section end -----------------

    //   View More Button Products
    toggle = index => {
        let collapse = "isOpen" + index;
    
        this.setState(prevState => ({ [collapse]: !prevState[collapse] }));
      };
    //   View More Button Products

    // View More Button
    ToggleClick = () => {
        this.setState({ ViewMore: !this.state.ViewMore });
    }
    // View More Button

    render() {
        // Image Zoom
        const props = {width: 370, height: 370, zoomWidth: 369,zoomPosition: 'original', img: "/static/media/product-page-img.3804e649.png"};
        // Image Zoom

        var productpagesmallslide = {
            dots: false,
            infinite: true,
            speed: 700,
            autoplay: true,
            slidesToShow: 5,
            slidesToScroll: 2,
            vertical: true,
            verticalSwiping: true,
            centerMode: true,
            focusOnSelect: true,
            arrows: true,
            responsive: [
                {
                  breakpoint: 600,
                  settings: {
                    dots: false,
                    arrows: true
                  }
                }
              ]
          };
        return (
            <>
            <div className="orponbd-womens-fashion-category-page-web-top-menu">
                <TopMenuSection/>
            </div>

            {/* Product Image section start */}
            <div className="obd-product-page-web-vs-main-i-product-info-box">
                <div className="container">
                    <div className="row">
                        <div className="col-md-1">
                            <div className="home-page-main-slider-section-boxex-product-page-sm-sld">
                                <Slider {...productpagesmallslide}>
                                    {/* single slide item */}
                                    <div className="single-carousel-web-hom-itemex-product-sml">
                                        <div className="single-carousel-web-hom-product-sml-img">
                                            <Link to="/#">
                                                <img src={require('../../assets/product-page-slide-1.png')} alt="orponbd global collection"/>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* single slide item */}
                                    {/* single slide item */}
                                    <div className="single-carousel-web-hom-itemex-product-sml">
                                        <div className="single-carousel-web-hom-product-sml-img">
                                            <Link to="/#">
                                                <img src={require('../../assets/product-page-slide-2.png')} alt="orponbd global collection"/>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* single slide item */}
                                    {/* single slide item */}
                                    <div className="single-carousel-web-hom-itemex-product-sml">
                                        <div className="single-carousel-web-hom-product-sml-img">
                                            <Link to="/#">
                                                <img src={require('../../assets/product-page-slide-3.png')} alt="orponbd global collection"/>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* single slide item */}
                                    {/* single slide item */}
                                    <div className="single-carousel-web-hom-itemex-product-sml">
                                        <div className="single-carousel-web-hom-product-sml-img">
                                            <Link to="/#">
                                                <img src={require('../../assets/product-page-slide-4.png')} alt="orponbd Online Shop"/>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* single slide item */}
                                    {/* single slide item */}
                                    <div className="single-carousel-web-hom-itemex-product-sml">
                                        <div className="single-carousel-web-hom-product-sml-img">
                                            <Link to="/#">
                                                <img src={require('../../assets/product-page-slide-5.png')} alt="orponbd Online Shop"/>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* single slide item */}
                                    {/* single slide item */}
                                    <div className="single-carousel-web-hom-itemex-product-sml">
                                        <div className="single-carousel-web-hom-product-sml-img">
                                            <Link to="/#">
                                                <img src={require('../../assets/product-page-slide-4.png')} alt="orponbd Online Shop"/>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* single slide item */}
                                    {/* single slide item */}
                                    <div className="single-carousel-web-hom-itemex-product-sml">
                                        <div className="single-carousel-web-hom-product-sml-img">
                                            <Link to="/#">
                                                <img src={require('../../assets/product-page-slide-5.png')} alt="orponbd Online Shop"/>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* single slide item */}
                                </Slider>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="obd-product-page-web-vs-main-right-part-product-desc-main-zoom-img">
                                <ReactImageZoom {...props} />
                                {/* <img src={require('../../assets/product-page-img.png')} alt="orponbd Online Shop"/> */}

                                <div className="obd-product-page-web-vs-main-right-part-product-zoom-social-icon">
                                    <div className="obd-product-page-web-vs-main-right-part-productx-social-icon-section">
                                        <ul>
                                            <li className="obd-product-page-web-vs-main-right-share-txt">Share to:</li>
                                            <li className="obd-product-page-web-vs-zoom-img-details-facbk"><Link to=""><i class="fab fa-facebook-f"></i></Link></li>
                                            <li className="obd-product-page-web-vs-zoom-details-twittr"><Link to=""><i class="fab fa-twitter"></i></Link></li>
                                            <li className="obd-product-page-web-vs-zoom-details-instag"><Link to=""><i class="fab fa-instagram"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                            
                        </div>
                        <div className="col-md-5">
                            <div className="obd-product-page-web-vs-main-right-part-product-desc-price-text-box">
                                <div className="obd-product-page-web-vs-main-right-part-product-desc-hed-txt">
                                    <h4>12 Pcs Travel Dry Compressed Disposable Face Towel</h4>
                                    <div className="obd-product-page-item-web-start-rattng">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                        <span className="obd-product-page-item-web-ttotl-star-rat-count">4.5</span>
                                        <span className="obd-product-page-item-web-count-number">(150 Sold)</span>
                                    </div>
                                </div>
                                <div className="obd-product-page-web-vs-main-right-part-product-desc-price-banner-box">
                                    <ul>
                                        <li className="obd-product-page-web-vs-main-right-mn-price"><h3><span>৳</span> 1100</h3></li>
                                        <li className="obd-product-page-web-vs-main-right-mn-delt-price"><del><h4><span>৳</span> 1200</h4></del></li>
                                        <li className="obd-product-page-web-vs-main-right-offr-pricex"><p>10% Off</p></li>
                                    </ul>
                                </div>
                                {/* <div className="obd-product-page-web-vs-main-right-part-product-desc-ship-frm">
                                    <h4>Ship From: <span><img src={require('../../assets/ship-from-bg.png')} alt=""/>Bangladesh</span></h4>
                                </div> */}
                                <div className="obd-product-page-web-vs-main-right-part-product-desc-color-image-box">
                                    <div className="obd-product-page-web-vs-main-right-part-product-desc-color-hed">
                                        <h4>Color:</h4>
                                    </div>
                                    <div className="obd-product-page-web-vs-main-right-part-product-desc-color-image-imgg">
                                        <ul>
                                            <li><img src={require('../../assets/product-color-img-1.png')} alt="orponbd Online Shop"/></li>
                                            <li><img src={require('../../assets/product-color-img-2.png')} alt="orponbd Online Shop"/></li>
                                            <li><img src={require('../../assets/product-color-img-3.png')} alt="orponbd Online Shop"/></li>
                                            <li><img src={require('../../assets/product-color-img-4.png')} alt="orponbd Online Shop"/></li>
                                            <li><img src={require('../../assets/product-color-img-5.png')} alt="orponbd Online Shop"/></li>
                                            <li><img src={require('../../assets/product-color-img-6.png')} alt="orponbd Online Shop"/></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="obd-product-page-web-vs-main-right-part-product-desc-size-box">
                                    <div className="obd-product-page-web-vs-main-right-part-product-desc-size-hed">
                                        <h4>Size:</h4>
                                    </div>
                                    <div className="obd-product-page-web-vs-main-right-part-product-desc-size-items">
                                        <ul>
                                            <li><span>S</span></li>
                                            <li><span>M</span></li>
                                            <li><span>L</span></li>
                                            <li><span>XL</span></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Inc Decress Box */}
                                <div className="obd-product-page-web-vs-main-right-part-product-quantity-inc-dec-box">
                                    <div className="obd-product-page-web-vs-main-right-part-product-quantity-inc-dec-hed">
                                        <h4>Quantity:</h4>
                                    </div>
                                    <div className="obd-product-page-web-vs-main-right-part-product-quantity-inc-dec-sec">
                                        <div className="obd-product-page-web-vs-main-right-part-product-text-inc-dec-bx">
                                            <div className="def-number-input number-input">
                                                <button className="obd-product-page-web-vs-main-right-deccrs-btn" onClick={this.decrease}><i class="fas fa-minus"></i></button>
                                                <input className="quantity grocery-cart-inc-dec-input-fld-in-modal" name="quantity" value={this.state.value} onChange={()=> console.log('change')}
                                                type="number" />
                                                <button className="obd-product-page-web-vs-main-right-incc-btn" onClick={this.increase}><i className="fas fa-plus"></i></button>
                                                <span className="obd-product-page-web-vs-main-right-inc-avail-txt">899 pieces available</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Inc Decress Box ---------*/}

                                {/* EMI Modal Box Section Start */}
                                <div className="obd-product-page-web-vs-main-right-part-product-emi-modal-sexc-box">
                                    {/* Modal Start */}
                                    <button onClick={this.handleShow} className="obd-product-product-emi-btn">
                                        <span>EMI:</span> Available
                                    </button>
                                        <Modal size="sm" show={this.state.show} onHide={this.handleClose}>
                                            <Modal.Header closeButton>
                                                {/* <Modal.Title>Modal heading</Modal.Title> */}
                                            </Modal.Header>

                                            <Modal.Body>
                                                <div className="obd-grocery-all-itxm-details-modal-body-main-box">
                                                    Modal Body EMI Options
                                                </div>
                                            </Modal.Body>

                                            {/* <Modal.Footer>
                                                <Button variant="secondary" onClick={this.handleClose}>
                                                    Close
                                                </Button>
                                                <Button variant="primary" onClick={this.handleClose}>
                                                    Save Changes
                                                </Button>
                                            </Modal.Footer> */}
                                        </Modal>
                                        {/* Modal End*/}
                                    </div>
                                    {/* EMI Modal Box Section End */}
                                    
                                    <div className="obd-product-page-web-vs-main-right-part-product-desc-ship-frm">
                                        <h4>Ship From: <span><img src={require('../../assets/ship-from-bg.png')} alt=""/>Bangladesh</span></h4>
                                    </div>
                                    {/* Estimate delivery time */}
                                    <div className="obd-product-page-web-vs-main-right-part-estimate-delivery-tm-bx">
                                        <h4>Estimated Delivery Time: <span>5-7 Days</span></h4>
                                    </div>
                                    {/* Estimate delivery time */}

                                {/* Buy Now Add to Cart Button */}
                                <div className="obd-product-page-web-vs-main-right-part-product-buy-now-add-to-cart-btn-lnk-box">
                                    <ul>
                                        <li className="obd-product-page-web-vs-main-right-part-bbuy-now"><Link to="/my-cart">Buy Now</Link></li>
                                        <li className="obd-product-page-web-vs-main-right-part-add-tto-crt">
                                            {/* Modal Start */}
                                            <button onClick={this.handleShowTwo}>
                                                Add to Cart
                                            </button>
                                                <Modal show={this.state.showtwo} onHide={this.handleCloseTwo}>
                                                    <Modal.Header closeButton>
                                                        {/* <Modal.Title>Modal heading</Modal.Title> */}
                                                    </Modal.Header>

                                                    <Modal.Body>
                                                        <div className="obd-products-sec-all-itxm-details-modal-body-main-box">
                                                            <div className="row">
                                                                <div className="col-md-12">
                                                                    <div className="obd-add-to-cart-itxm-details-modal-body-main-box-left-prodct-sec">
                                                                        <AddToCartModalSlide/>
                                                                    </div>
                                                                </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-md-12">
                                                                        <div className="obd-grocery-all-itxm-details-modal-body-main-box-right-price-bx-sec text-center">
                                                                            <div className="row">
                                                                                <div className="col-md-6">
                                                                                    <div className="obd-grocery-all-itxm-details-modal-body-main-box-right-price-bx-hed-txt text-left">
                                                                                        <img src={require('../../assets/add-to-cart-modal-confirm-icon.png')} alt=""/>
                                                                                        <span>3 item(s) added to cart</span>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-md-6">
                                                                                    <div className="obd-grocery-all-itxm-details-modal-body-main-box-two-ammnt-ttl text-right">
                                                                                        <div className="obd-grocery-all-itxm-details-modal-body-main-box-right-ck-total-amnt">
                                                                                            <p>Total: <span>৳ 1200</span></p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="obd-grocery-all-itxm-details-modal-body-main-box-two-nuttonnx-box">
                                                                                        <ul>
                                                                                            <li>
                                                                                                <div className="obd-grocery-all-itxm-details-modal-body-main-box-right-shoppng-btn">
                                                                                                    <Link to="/">Continue Shopping</Link>
                                                                                                </div> 
                                                                                            </li>
                                                                                            <li>
                                                                                                <div className="obd-grocery-all-itxm-details-modal-body-main-box-right-vw-crt-chk-btn">
                                                                                                    <Link to="/my-cart">View Cart & Checkout</Link>
                                                                                                </div>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                    
                                                                                </div>
                                                                                {/* <div className="col-md-4">
                                                                                    <div className="obd-grocery-all-itxm-details-modal-body-main-box-right-shoppng-btn">
                                                                                        <Link to="/">Continue Shopping</Link>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-md-4">
                                                                                    <div className="obd-grocery-all-itxm-details-modal-body-main-box-right-vw-crt-chk-btn">
                                                                                        <Link to="/my-cart">View Cart & Checkout</Link>
                                                                                    </div>
                                                                                    <div className="obd-grocery-all-itxm-details-modal-body-main-box-right-ck-total-amnt">
                                                                                        <p>Total: <span>৳ 1200</span></p>
                                                                                    </div>
                                                                                </div> */}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                        </div>
                                                    </Modal.Body>

                                                </Modal>
                                                {/* Modal End*/}
                                        </li>
                                        <li className="obd-product-page-web-vs-main-right-part-wish-lst-btn"><button><i className="fas fa-heart"></i></button> <span>Add to Wishlist (250)</span></li>
                                    </ul>
                                </div>
                                {/* Buy Now Add to Cart Button End------ */}
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="obd-product-page-web-vs-main-right-recomended-image-box">
                                <div className="obd-product-page-web-vs-main-right-recomended-image-hedd text-center">
                                    <h4>Recommended For You</h4>
                                </div>
                                {/* single Product start */}
                                <div className="obd-product-page-web-vs-main-right-recomended-image-single-prdct text-center">
                                    <Link to="">
                                        <div className="obd-product-page-web-vs-main-right-recomended-image-itm">
                                            <img src={require('../../assets/global-shoppng-22.png')} alt="orponbd Online Shop"/>
                                        </div>
                                        <div className="obd-product-page-web-vs-main-right-recomended-image-prdct-price">
                                            <h3>৳ 1200</h3>
                                        </div>
                                    </Link>
                                </div>
                                {/* single Product end */}
                                {/* single Product start */}
                                <div className="obd-product-page-web-vs-main-right-recomended-image-single-prdct text-center">
                                    <Link to="">
                                        <div className="obd-product-page-web-vs-main-right-recomended-image-itm">
                                            <img src={require('../../assets/global-shoppng-33.png')} alt="orponbd Online Shop"/>
                                        </div>
                                        <div className="obd-product-page-web-vs-main-right-recomended-image-prdct-price">
                                            <h3>৳ 1200</h3>
                                        </div>
                                    </Link>
                                </div>
                                {/* single Product end */}
                                {/* single Product start */}
                                <div className="obd-product-page-web-vs-main-right-recomended-image-single-prdct text-center">
                                    <Link to="">
                                        <div className="obd-product-page-web-vs-main-right-recomended-image-itm">
                                            <img src={require('../../assets/global-shoppng-12.png')} alt="orponbd Online Shop"/>
                                        </div>
                                        <div className="obd-product-page-web-vs-main-right-recomended-image-prdct-price">
                                            <h3>৳ 1200</h3>
                                        </div>
                                    </Link>
                                </div>
                                {/* single Product end */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Product Image section end */}

            {/* Product DEscription Tab Box Start */}
            <div className="obd-product-page-web-vs-products-description-tab-main-product-info-box">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="obd-product-page-web-vs-products-description-tab-content-box">
                                
                                <Tabs defaultActiveKey="productdesc" id="uncontrolled-tab-example">
                                    <Tab eventKey="productdesc" title="Product Description ">
                                        {/* Products Details Section */}
                                        <div className="obd-product-page-web-vs-products-description-details-section">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="obd-product-page-web-vs-products-description-heading-ttxt">
                                                            <h4>Description</h4>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                            aliquip ex ea commodo consequat.</p>
                                                        </div>
                                                        <div className="obd-product-page-web-vs-products-description-immgg-prt text-center">
                                                            <img src={require('../../assets/product-view-details-1.png')} alt="orponbd Online Shop"/>
                                                        </div>
                                                      

                                                        {/* view More Content */}
                                                        <div className="app hhgbcvc">
                                                        <button
                                                            className={cx("app__toggle", {
                                                                "app__toggle--active": this.state.isOpen1
                                                            })}
                                                            onClick={() => this.toggle(1)}
                                                            >
                                                            <span className="app__toggle-text"><p>View More</p></span>
                                                            
                                                            </button>
                                                            <Collapse
                                                            isOpen={this.state.isOpen1}
                                                            className={
                                                                "app__collapse app__collapse--gradient collapse-css-transition" +
                                                                (this.state.isOpen1 ? "app__collapse--active" : "")
                                                            }
                                                            >
                                                            <div className="jjhhgggff text-center">
                                                                <div className="app__content">
                                                                    <div className="obd-productt-details-desction-tv-tab-text-content text-left">
                                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                                                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                                        aliquip ex ea commodo consequat.</p>
                                                                    </div>
                                                                    
                                                                    <img src={require('../../assets/product-page-img.png')} alt="orponbd Online Shop"/>

                                                                    <div className="obd-productt-details-desction-tv-tab-text-content text-left">
                                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                                                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                                        aliquip ex ea commodo consequat.</p>
                                                                    </div>

                                                                    <img src={require('../../assets/product-page-img.png')} alt="orponbd Online Shop"/>

                                                                    <div className="dhfgshdgjh-view-les-btn">
                                                                        <button onClick={() => this.toggle(1)}>
                                                                        View Less
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            </Collapse>
                                                        </div>
                                                        {/* view More Content */}


                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Products Details Section */}
                                    </Tab>
                                    <Tab eventKey="specifictn" title="Specification">
                                        <div className="obd-product-page-web-vs-products-description-tab-specificationzx">
                                            <div className="row">
                                                <div className="col-md-5">
                                                    <div className="obd-product-page-web-vs-products-description-tab-specifi-lft-cnt">
                                                        <ul>
                                                            <li><span>Origin:</span>CN(Origin)</li>
                                                            <li><span>Model Number:</span>Shoe rack</li>
                                                            <li><span>Type1:</span>shoe cabinet</li>
                                                            <li><span>Type2:</span>shoe rack</li>
                                                            <li><span>Type3:</span>shoe Organizer</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-md-7">
                                                    <div className="obd-product-page-web-vs-products-description-tab-specifi-lft-cnt">
                                                        <ul>
                                                            <li><span>Material:</span>Plastic</li>
                                                            <li><span>Model Number:</span>Shoe rack</li>
                                                            <li><span>Size:</span>26.5*11cm, Adjustable up and down 9.5-18.5cm</li>
                                                            <li><span>Weight:</span>170G</li>
                                                            <li><span>Color:</span>black, khaki, green, rose, red, yellow, purple, blue</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="customerrev" title="Customer Reviews (50)">
                                        <div className="obd-product-page-web-vs-products-description-tab-customer-revvxu-box">
                                            <div className="obd-product-page-web-vs-products-description-tab-customer-revvxu-hedd">
                                                <h4>Customer Reviews (235)</h4>
                                            </div>
                                            <div className="obd-product-page-web-vs-products-description-tab-customer-revvxu-content-bx">
                                                <div className="row">
                                                    <div className="col-md-5">
                                                        <div className="obd-product-page-web-vs-products-description-tab-customer-revvxu-revw-only">
                                                            {/* Single Item start */}
                                                            <div className="obd-product-page-web-vs-products-description-tab-customer-revvxu-sngl">
                                                                <ul>
                                                                    <li>5 Star</li>
                                                                    <li className="obd-product-page-web-vs-onllyy-progressx">
                                                                        <div className="obd-product-page-web-vxs-progress-bar blue stripes">
                                                                            <span style={{width: "91%"}}></span>
                                                                        </div>
                                                                    </li>
                                                                    <li className="obd-product-page-web-vs-onllyy-progressx-percentt"><p>91%</p></li>
                                                                </ul>
                                                            </div>
                                                            {/* Single Item end */}
                                                            {/* Single Item start */}
                                                            <div className="obd-product-page-web-vs-products-description-tab-customer-revvxu-sngl">
                                                                <ul>
                                                                    <li>4 Star</li>
                                                                    <li className="obd-product-page-web-vs-onllyy-progressx">
                                                                        <div className="obd-product-page-web-vxs-progress-bar blue stripes">
                                                                            <span style={{width: "5%"}}></span>
                                                                        </div>
                                                                    </li>
                                                                    <li className="obd-product-page-web-vs-onllyy-progressx-percentt"><p>5%</p></li>
                                                                </ul>
                                                            </div>
                                                            {/* Single Item end */}
                                                            {/* Single Item start */}
                                                            <div className="obd-product-page-web-vs-products-description-tab-customer-revvxu-sngl">
                                                                <ul>
                                                                    <li>3 Star</li>
                                                                    <li className="obd-product-page-web-vs-onllyy-progressx">
                                                                        <div className="obd-product-page-web-vxs-progress-bar blue stripes">
                                                                            <span style={{width: "2%"}}></span>
                                                                        </div>
                                                                    </li>
                                                                    <li className="obd-product-page-web-vs-onllyy-progressx-percentt"><p>2%</p></li>
                                                                </ul>
                                                            </div>
                                                            {/* Single Item end */}
                                                            {/* Single Item start */}
                                                            <div className="obd-product-page-web-vs-products-description-tab-customer-revvxu-sngl">
                                                                <ul>
                                                                    <li>2 Star</li>
                                                                    <li className="obd-product-page-web-vs-onllyy-progressx">
                                                                        <div className="obd-product-page-web-vxs-progress-bar blue stripes">
                                                                            <span style={{width: "1%"}}></span>
                                                                        </div>
                                                                    </li>
                                                                    <li className="obd-product-page-web-vs-onllyy-progressx-percentt"><p>1%</p></li>
                                                                </ul>
                                                            </div>
                                                            {/* Single Item end */}
                                                            {/* Single Item start */}
                                                            <div className="obd-product-page-web-vs-products-description-tab-customer-revvxu-sngl">
                                                                <ul>
                                                                    <li className="obd-product-page-web-vs-products-rev-one-str">1 Star</li>
                                                                    <li className="obd-product-page-web-vs-onllyy-progressx">
                                                                        <div className="obd-product-page-web-vxs-progress-bar blue stripes">
                                                                            <span style={{width: "1%"}}></span>
                                                                        </div>
                                                                    </li>
                                                                    <li className="obd-product-page-web-vs-onllyy-progressx-percentt"><p>1%</p></li>
                                                                </ul>
                                                            </div>
                                                            {/* Single Item end */}
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="obd-product-page-web-vs-products-description-tab-customer-revvxu-star-iconn-rt">
                                                            <div className="obd-product-page-web-start-rattng-five-count">
                                                                <span className="obd-product-page-web-vs-description-rate-numberr-txt">4.8 / <span className="obd-product-page-web-vs-out-of-fiv"> 5</span></span>
                                                                <span className="fa fa-star checked"></span>
                                                                <span class="fa fa-star checked"></span>
                                                                <span class="fa fa-star checked"></span>
                                                                <span class="fa fa-star checked"></span>
                                                                <span class="fa fa-star"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className="obd-product-page-web-vs-description-tab-customer-revw-write-a-review-modal">
                                                            {/* Modal Start */}
                                                            <div className="obd-productss-write-review-buttonnx">
                                                                <button onClick={this.handleShowThree}>
                                                                    Write a Review
                                                                </button>
                                                            </div>
                                                                <Modal size="sm" show={this.state.showthree} onHide={this.handleCloseThree}>
                                                                    <Modal.Header closeButton>
                                                                        {/* <Modal.Title>Modal heading</Modal.Title> */}
                                                                    </Modal.Header>

                                                                    <Modal.Body>
                                                                        <div className="obd-grocery-all-itxm-details-modal-body-main-box">
                                                                            Write a Review Modal Box
                                                                        </div>
                                                                    </Modal.Body>

                                                                </Modal>
                                                                {/* Modal End*/}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* User Comment section start */}
                                        <div className="obd-product-page-web-vs-products-description-tab-custom-user-star-commnt-box">
                                            <div className="obd-product-page-web-vs-products-description-tab-custom-user-star-commnt-box-hedd">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="obd-product-page-web-vs-products-description-tab-custom-user-star-commnt-select-lft">
                                                            <select>
                                                                <option value="" selected>All Stars (120)</option>
                                                                <option value="">Orders</option>
                                                                <option value="">Price(high to low)</option>
                                                                <option value="">Price(low to high)</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="obd-product-page-web-vs-products-description-tab-custom-user-star-commnt-select-right text-right">
                                                            <select>
                                                                <option value="" selected>Short by Default</option>
                                                                <option value="">Orders</option>
                                                                <option value="">Price(high to low)</option>
                                                                <option value="">Price(low to high)</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="obd-product-page-web-vs-products-description-tab-custom-user-star-commnt-content">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="obd-product-page-web-vs-products-description-tab-custom-user-star-commnt-content-bbox">
                                                                {/* single item */}
                                                                <div className="obd-product-page-web-vs-products-description-tab-custom-user-star-commnt-content-single">
                                                                    <div className="row">
                                                                        <div className="col-md-3">
                                                                            <div className="obd-product-page-web-vs-products-tab-custom-user-star-commnt-content-lft">
                                                                                <img src={require('../../assets/customer-review-user-icon.png')} alt="orponbd Online Shop"/>
                                                                                <span>User Name</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-9">
                                                                            <div className="obd-product-page-web-vs-products-tab-custom-user-star-commnt-content-right">
                                                                                <div className="obd-product-page-web-vs-tab-custom-user-star-commnt-content-right-sttr">
                                                                                    <div className="obd-product-page-web-start-rattng-commnt-count">
                                                                                        <span className="fa fa-star checked"></span>
                                                                                        <span class="fa fa-star checked"></span>
                                                                                        <span class="fa fa-star checked"></span>
                                                                                        <span class="fa fa-star checked"></span>
                                                                                        <span class="fa fa-star"></span>
                                                                                    </div>
                                                                                </div>

                                                                                <div className="obd-product-page-web-vs-tab-custom-user-star-commnt-content-right-user-cmnt">
                                                                                    <p>
                                                                                        Organizers superrrr, very comfortable, adjustable, bright, beautiful, durable, I'm very happy
                                                                                        with the purchase!!! I recommend to buy!
                                                                                    </p>
                                                                                </div>

                                                                                <div className="obd-product-page-web-vs-tab-custom-user-star-commnt-content-right-admin-cmnt">
                                                                                    <Link to="/">Orpon BD</Link>
                                                                                    <p>
                                                                                        Organizers superrrr, very comfortable, adjustable, bright, beautiful, durable, I'm very happy
                                                                                        with the purchase!!! I recommend to buy!
                                                                                    </p>
                                                                                </div>

                                                                                <div className="obd-product-page-web-vs-tab-custom-user-star-commnt-content-right-cmnt-input-like">
                                                                                    <ul>
                                                                                        <li className="obd-product-page-web-vs-tab-profdd-onnly-cmnt-inpt"><input type="text" placeholder="Write you reply here..."/></li>
                                                                                        <li className="obd-product-page-web-vs-tab-profdd-cmnt-inpt-cnt"><i class="far fa-comment-dots"></i> <span>2</span></li>
                                                                                        <li className="obd-product-page-web-vs-tab-profdd-cmnt-likke-cnt"><i class="far fa-thumbs-up"></i> <span>5</span></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* Single item */}
                                                                {/* single item */}
                                                                <div className="obd-product-page-web-vs-products-description-tab-custom-user-star-commnt-content-single">
                                                                    <div className="row">
                                                                        <div className="col-md-3">
                                                                            <div className="obd-product-page-web-vs-products-tab-custom-user-star-commnt-content-lft">
                                                                                <img src={require('../../assets/customer-review-user-icon.png')} alt="orponbd Online Shop"/>
                                                                                <span>User Name</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-9">
                                                                            <div className="obd-product-page-web-vs-products-tab-custom-user-star-commnt-content-right">
                                                                                <div className="obd-product-page-web-vs-tab-custom-user-star-commnt-content-right-sttr">
                                                                                    <div className="obd-product-page-web-start-rattng-commnt-count">
                                                                                        <span className="fa fa-star checked"></span>
                                                                                        <span class="fa fa-star checked"></span>
                                                                                        <span class="fa fa-star checked"></span>
                                                                                        <span class="fa fa-star checked"></span>
                                                                                        <span class="fa fa-star checked"></span>
                                                                                    </div>
                                                                                </div>

                                                                                <div className="obd-product-page-web-vs-tab-custom-user-star-commnt-content-right-user-cmnt">
                                                                                    <p>
                                                                                        Organizers superrrr, very comfortable, adjustable, bright, beautiful, durable, I'm very happy
                                                                                        with the purchase!!! I recommend to buy!
                                                                                    </p>
                                                                                </div>

                                                                                <div className="obd-product-page-web-vs-tab-custom-user-star-commnt-content-right-admin-cmnt">
                                                                                    <Link to="/">Orpon BD</Link>
                                                                                    <p>
                                                                                        Organizers superrrr, very comfortable, adjustable, bright, beautiful, durable, I'm very happy
                                                                                        with the purchase!!! I recommend to buy!
                                                                                    </p>
                                                                                </div>

                                                                                <div className="obd-product-page-web-vs-tab-custom-user-star-commnt-content-right-cmnt-input-like">
                                                                                    <ul>
                                                                                        <li className="obd-product-page-web-vs-tab-profdd-onnly-cmnt-inpt"><input type="text" placeholder="Write you reply here..."/></li>
                                                                                        <li className="obd-product-page-web-vs-tab-profdd-cmnt-inpt-cnt"><i class="far fa-comment-dots"></i> <span>2</span></li>
                                                                                        <li className="obd-product-page-web-vs-tab-profdd-cmnt-likke-cnt"><i class="far fa-thumbs-up"></i> <span>5</span></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* Single item */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* User Comment section End ------------ */}
                                    </Tab>
                                    <Tab eventKey="customerquesans" title="Customer Qus & Ans">
                                        <div className="obd-product-page-web-vs-products-description-tab-questions-main-box">
                                            <div className="obd-product-page-web-vs-products-description-tab-questions-hed">
                                                <h4>Customer Qus & Ans</h4>
                                            </div>
                                            <div className="obd-product-page-web-vs-products-description-tab-questions-single-qst">
                                                <h4>Q:  This is only for summer shoes? And as for the winter?</h4>
                                                <p>A:  For shoes, not for boots or ankle. Not worth if the shoe is very heavy</p>
                                            </div>
                                            <div className="obd-product-page-web-vs-products-description-tab-questions-single-qst">
                                                <h4>Q:  This is only for summer shoes? And as for the winter high boots? The whole year in shales pass?</h4>
                                                <p>A:  For shoes, not for boots or ankle. Not worth if the shoe is very heavy</p>
                                            </div>
                                            <div className="obd-product-page-web-vs-products-description-tab-questions-single-qst">
                                                <h4>Q:  This is only for summer shoes? And as for the winter high boots? The whole?</h4>
                                                <p>A:  For shoes, not for boots or ankle. Not worth if the shoe is very heavy</p>
                                            </div>
                                        </div>
                                    </Tab>
                                </Tabs>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Product DEscription Tab Box End */}

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
