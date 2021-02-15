import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './beveragedetailscat.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import TopMenuSection from '../..//topmenusection/TopMenuSection';
import FooterWebSection from '../../allsections/footerwebsection/FooterWebSection';
import GroceryCartIconBox from '../carticonbox/GroceryCartIconBox';

export default class BeverageCatDetails extends Component {
    render() {
        var groceryallcat = {
            dots: false,
            arrows: true,
            infinite: true,
            speed: 500,
            autoplay: false,
            slidesToShow: 4,
            slidesToScroll: 2,
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

            {/* Grocery Cart Icon Box Fixed Section Start */}
            <div className="obd-grocery-main-page-all-item-cart-main-page-box">
                <GroceryCartIconBox/>
            </div>
            {/* Grocery Cart Icon Box Fixed Section End */}

            {/* Banner start */}
            <div className="obd-grocery-main-page-all-item-banner-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="obd-grocery-main-page-all-item-banner-section-box">
                                <img src={require('../../../assets/grocery-cooking-ess-bg.png')} alt="orponbd global collections"/>
                               
                                <div className="obd-grocery-main-page-all-item-banner-back-link">
                                    <Link to="/grocery-all-items">
                                        <p><i className="fas fa-angle-left"></i> <span>Back</span></p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Banner end */}

            {/* Slider Section Start */}
            <div className="grocery-zone-all-itm-wv-com-webversion-main-sectionx">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="grocery-zone-all-itm-wv-wexv-dot-main-sec-bboxx-web-version">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="grocery-zone-all-itm-wvv-hedd-txt text-center">
                                            <h3>Shop By Category</h3>
                                        </div>
                                        <div className="obdd-dot-cmm-section-box-groceryzone-all-itm-wv">
                                            <Slider {...groceryallcat}>
                                                {/* Single product start */}
                                                <div className="obd-groceryzonee-all-itm-web-ddot-cmm-snnggl-prodct-pdd-wrap">
                                                    <Link to="/grocery-cooking-essentials-all-items">
                                                        <div className="obd-groceryzonee-web-ddot-cmm-snnggl-prodct-one-all">
                                                            <div className="obd-groceryzonee-web-ddot-cmm-snnggl-prodct-img-one-all">
                                                                <img src={require('../../../assets/grocery-slide-1.png')} alt="orponbd Online Shop"/>
                                                            </div>
                                                            <div className="obd-groceryzonee-web-ddot-cmm-snnggl-prodct-ttxt-one-all">
                                                                <div className="grocery-zone-product-ratng-priicice-web-vvrsn-one-all">
                                                                    <h4>Cooking Essentials</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                                {/* Single product end */}
                                                {/* Single product start 2 */}
                                                <div className="obd-groceryzonee-all-itm-web-ddot-cmm-snnggl-prodct-pdd-wrap">
                                                    <Link to="/grocery-snacks-confectionary-all-items">
                                                        <div className="obd-groceryzonee-web-ddot-cmm-snnggl-prodct-two-all">
                                                            <div className="obd-groceryzonee-web-ddot-cmm-snnggl-prodct-img-two-all">
                                                                <img src={require('../../../assets/grocery-slide-2.png')} alt="orponbd global collections"/>
                                                            </div>
                                                            <div className="obd-groceryzonee-web-ddot-cmm-snnggl-prodct-ttxt-two-all">
                                                                <div className="grocery-zone-product-ratng-priicice-web-vvrsn-two-all">
                                                                    <h4>Snacks & Confectonary</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                                {/* Single product end 2 */}
                                                {/* Single product start 3 */}
                                                <div className="obd-groceryzonee-all-itm-web-ddot-cmm-snnggl-prodct-pdd-wrap">
                                                    <Link to="/grocery-beverage-all-items">
                                                        <div className="obd-groceryzonee-web-ddot-cmm-snnggl-prodct-three-all">
                                                            <div className="obd-groceryzonee-web-ddot-cmm-snnggl-prodct-img-three-all">
                                                                <img src={require('../../../assets/grocery-slide-3.png')} alt="orponbd global collections"/>
                                                            </div>
                                                            <div className="obd-groceryzonee-web-ddot-cmm-snnggl-prodct-ttxt-three-all">
                                                                <div className="grocery-zone-product-ratng-priicice-web-vvrsn-three-all">
                                                                    <h4>Beverages</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                                {/* Single product end 3 */}
                                                {/* Single product start 4 */}
                                                <div className="obd-groceryzonee-all-itm-web-ddot-cmm-snnggl-prodct-pdd-wrap">
                                                    <Link to="/grocery-health-and-beauty-all-items">
                                                        <div className="obd-groceryzonee-web-ddot-cmm-snnggl-prodct-four-all">
                                                            <div className="obd-groceryzonee-web-ddot-cmm-snnggl-prodct-img-four-all">
                                                                <img src={require('../../../assets/grocery-slide-4.png')} alt="orponbd global collections"/>
                                                            </div>
                                                            <div className="obd-groceryzonee-web-ddot-cmm-snnggl-prodct-ttxt-four-all">
                                                                <div className="grocery-zone-product-ratng-priicice-web-vvrsn-four-all">
                                                                    <h4>Health & Beauty</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                                {/* Single product end 4 */}

                                                {/* Single product start */}
                                                <div className="obd-groceryzonee-all-itm-web-ddot-cmm-snnggl-prodct-pdd-wrap">
                                                    <Link to="#">
                                                        <div className="obd-groceryzonee-web-ddot-cmm-snnggl-prodct-one-all">
                                                            <div className="obd-groceryzonee-web-ddot-cmm-snnggl-prodct-img-one-all">
                                                                <img src={require('../../../assets/grocery-slide-1.png')} alt="orponbd global collections"/>
                                                            </div>
                                                            <div className="obd-groceryzonee-web-ddot-cmm-snnggl-prodct-ttxt-one-all">
                                                                <div className="grocery-zone-product-ratng-priicice-web-vvrsn-one-all">
                                                                    <h4>Cooking Essentials</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                                {/* Single product end */}
                                                {/* Single product start */}
                                                <div className="obd-groceryzonee-all-itm-web-ddot-cmm-snnggl-prodct-pdd-wrap">
                                                    <Link to="#">
                                                        <div className="obd-groceryzonee-web-ddot-cmm-snnggl-prodct-one-all">
                                                            <div className="obd-groceryzonee-web-ddot-cmm-snnggl-prodct-img-one-all">
                                                                <img src={require('../../../assets/grocery-slide-2.png')} alt="orponbd global collections"/>
                                                            </div>
                                                            <div className="obd-groceryzonee-web-ddot-cmm-snnggl-prodct-ttxt-one-all">
                                                                <div className="grocery-zone-product-ratng-priicice-web-vvrsn-one-all">
                                                                    <h4>Health & Beauty</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                                {/* Single product end */}
                                            </Slider>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            {/* Slider Section End */}


            {/* Cooking essential Start ----------------------------------------------------*/}
            <div className="obd-grocery-details-products-hed-txt-section-det">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="djfhdsjfhh-beveragexs">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="obd-grocery-details-products-hedd-txt-wv-x">
                                            <h4>Beverages</h4>
                                        </div>
                                    </div>
                                    <div className="col-5">
                                        <div className="obd-grocery-details-products-sortby-slet text-right">
                                            <span>Sort By: </span>
                                            <select>
                                                <option value="" selected>Short By: Default</option>
                                                <option value="">Orders</option>
                                                <option value="">Price(high to low)</option>
                                                <option value="">Price(low to high)</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="obd-grocery-all-details-products-webversion-main-sectionx">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            
                            <div className="obd-grocery-allitm-det-section-all-products-sec-box">
                                {/* Single Roww Start */}
                                <div className="row grocery-all-itm-det-prod-exx-pdddrw">
                                    {/* Single product start */}
                                    <div className="col-md-2 col-6">
                                        <div className="obd-grocery-all-itxm-details-all-products-single-product">
                                            <Link to="#">
                                                <div className="obd-grocery-all-itxm-details-all-products-single-web-vvesnn-img">
                                                    <img src={require('../../../assets/grocery-product-1.png')} alt="orponbd online shop"/>
                                                </div>
                                                <div className="obd-grocery-all-itxm-details-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <div className="obd-grocery-all-itxm-details-start-rattng">
                                                        <span className="obd-grocery-all-itxm-details-star-count-number">150 Sold</span>
                                                    </div>
                                                    <div className="obd-grocery-all-itxm-details-priicice-web-vvrsn">
                                                        <h3><span>৳</span> 1200</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="col-md-2 col-6">
                                        <div className="obd-grocery-all-itxm-details-all-products-single-product">
                                            <Link to="#">
                                                <div className="obd-grocery-all-itxm-details-all-products-single-web-vvesnn-img">
                                                    <img src={require('../../../assets/grocery-product-2.png')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="obd-grocery-all-itxm-details-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <div className="obd-grocery-all-itxm-details-start-rattng">
                                                        <span className="obd-grocery-all-itxm-details-star-count-number">150 Sold</span>
                                                    </div>
                                                    <div className="obd-grocery-all-itxm-details-priicice-web-vvrsn">
                                                        <h3><span>৳</span> 1200</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="col-md-2 col-6">
                                        <div className="obd-grocery-all-itxm-details-all-products-single-product">
                                            <Link to="#">
                                                <div className="obd-grocery-all-itxm-details-all-products-single-web-vvesnn-img">
                                                    <img src={require('../../../assets/grocery-product-3.png')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="obd-grocery-all-itxm-details-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <div className="obd-grocery-all-itxm-details-start-rattng">
                                                        <span className="obd-grocery-all-itxm-details-star-count-number">150 Sold</span>
                                                    </div>
                                                    <div className="obd-grocery-all-itxm-details-priicice-web-vvrsn">
                                                        <h3><span>৳</span> 1200</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="col-md-2 col-6">
                                        <div className="obd-grocery-all-itxm-details-all-products-single-product">
                                            <Link to="#">
                                                <div className="obd-grocery-all-itxm-details-all-products-single-web-vvesnn-img">
                                                    <img src={require('../../../assets/grocery-product-4.png')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="obd-grocery-all-itxm-details-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <div className="obd-grocery-all-itxm-details-start-rattng">
                                                        <span className="obd-grocery-all-itxm-details-star-count-number">150 Sold</span>
                                                    </div>
                                                    <div className="obd-grocery-all-itxm-details-priicice-web-vvrsn">
                                                        <h3><span>৳</span> 1200</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="col-md-2 col-6">
                                        <div className="obd-grocery-all-itxm-details-all-products-single-product">
                                            <Link to="#">
                                                <div className="obd-grocery-all-itxm-details-all-products-single-web-vvesnn-img">
                                                    <img src={require('../../../assets/grocery-product-5.png')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="obd-grocery-all-itxm-details-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <div className="obd-grocery-all-itxm-details-start-rattng">
                                                        <span className="obd-grocery-all-itxm-details-star-count-number">150 Sold</span>
                                                    </div>
                                                    <div className="obd-grocery-all-itxm-details-priicice-web-vvrsn">
                                                        <h3><span>৳</span> 1200</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="col-md-2 col-6">
                                        <div className="obd-grocery-all-itxm-details-all-products-single-product">
                                            <Link to="#">
                                                <div className="obd-grocery-all-itxm-details-all-products-single-web-vvesnn-img">
                                                    <img src={require('../../../assets/grocery-product-8.png')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="obd-grocery-all-itxm-details-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <div className="obd-grocery-all-itxm-details-start-rattng">
                                                        <span className="obd-grocery-all-itxm-details-star-count-number">150 Sold</span>
                                                    </div>
                                                    <div className="obd-grocery-all-itxm-details-priicice-web-vvrsn">
                                                        <h3><span>৳</span> 1200</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single product end */}
                                </div>
                                {/* Single Roww End */}

                                {/* Single Roww Start */}
                                <div className="row grocery-all-itm-det-prod-exx-pdddrw">
                                    {/* Single product start */}
                                    <div className="col-md-2 col-6">
                                        <div className="obd-grocery-all-itxm-details-all-products-single-product">
                                            <Link to="#">
                                                <div className="obd-grocery-all-itxm-details-all-products-single-web-vvesnn-img">
                                                    <img src={require('../../../assets/grocery-product-6.png')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="obd-grocery-all-itxm-details-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <div className="obd-grocery-all-itxm-details-start-rattng">
                                                        <span className="obd-grocery-all-itxm-details-star-count-number">150 Sold</span>
                                                    </div>
                                                    <div className="obd-grocery-all-itxm-details-priicice-web-vvrsn">
                                                        <h3><span>৳</span> 1200</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="col-md-2 col-6">
                                        <div className="obd-grocery-all-itxm-details-all-products-single-product">
                                            <Link to="#">
                                                <div className="obd-grocery-all-itxm-details-all-products-single-web-vvesnn-img">
                                                    <img src={require('../../../assets/grocery-product-7.png')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="obd-grocery-all-itxm-details-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <div className="obd-grocery-all-itxm-details-start-rattng">
                                                        <span className="obd-grocery-all-itxm-details-star-count-number">150 Sold</span>
                                                    </div>
                                                    <div className="obd-grocery-all-itxm-details-priicice-web-vvrsn">
                                                        <h3><span>৳</span> 1200</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="col-md-2 col-6">
                                        <div className="obd-grocery-all-itxm-details-all-products-single-product">
                                            <Link to="#">
                                                <div className="obd-grocery-all-itxm-details-all-products-single-web-vvesnn-img">
                                                    <img src={require('../../../assets/grocery-product-8.png')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="obd-grocery-all-itxm-details-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <div className="obd-grocery-all-itxm-details-start-rattng">
                                                        <span className="obd-grocery-all-itxm-details-star-count-number">150 Sold</span>
                                                    </div>
                                                    <div className="obd-grocery-all-itxm-details-priicice-web-vvrsn">
                                                        <h3><span>৳</span> 1200</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="col-md-2 col-6">
                                        <div className="obd-grocery-all-itxm-details-all-products-single-product">
                                            <Link to="#">
                                                <div className="obd-grocery-all-itxm-details-all-products-single-web-vvesnn-img">
                                                    <img src={require('../../../assets/grocery-product-9.png')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="obd-grocery-all-itxm-details-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <div className="obd-grocery-all-itxm-details-start-rattng">
                                                        <span className="obd-grocery-all-itxm-details-star-count-number">150 Sold</span>
                                                    </div>
                                                    <div className="obd-grocery-all-itxm-details-priicice-web-vvrsn">
                                                        <h3><span>৳</span> 1200</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="col-md-2 col-6">
                                        <div className="obd-grocery-all-itxm-details-all-products-single-product">
                                            <Link to="#">
                                                <div className="obd-grocery-all-itxm-details-all-products-single-web-vvesnn-img">
                                                    <img src={require('../../../assets/grocery-product-2.png')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="obd-grocery-all-itxm-details-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <div className="obd-grocery-all-itxm-details-start-rattng">
                                                        <span className="obd-grocery-all-itxm-details-star-count-number">150 Sold</span>
                                                    </div>
                                                    <div className="obd-grocery-all-itxm-details-priicice-web-vvrsn">
                                                        <h3><span>৳</span> 1200</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="col-md-2 col-6">
                                        <div className="obd-grocery-all-itxm-details-all-products-single-product">
                                            <Link to="#">
                                                <div className="obd-grocery-all-itxm-details-all-products-single-web-vvesnn-img">
                                                    <img src={require('../../../assets/grocery-product-7.png')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="obd-grocery-all-itxm-details-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <div className="obd-grocery-all-itxm-details-start-rattng">
                                                        <span className="obd-grocery-all-itxm-details-star-count-number">150 Sold</span>
                                                    </div>
                                                    <div className="obd-grocery-all-itxm-details-priicice-web-vvrsn">
                                                        <h3><span>৳</span> 1200</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single product end */}
                                </div>
                                {/* Single Roww End */}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* Cooking essential Products End */}


            <div className="obd-grocery-all-itxm-details-view-more-buttonn">
                <div className="obd-grocery-all-web-version-view-more-btn text-center">
                    <button>View More <span><i className="fas fa-angle-down"></i></span></button>
                </div>
           </div>
            {/* Cooking essential End Main ---------------------------------*/}


            

            <div className="orponbd-womens-fashion-category-page-web-top-menu">
                <FooterWebSection/>
            </div>

            </>
        )
    }
}
