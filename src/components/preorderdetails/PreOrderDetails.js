import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './preorderdetails.css';

import TopMenuSection from '../topmenusection/TopMenuSection';
import FooterWebSection from '../allsections/footerwebsection/FooterWebSection';

export default class PreOrderDetails extends Component {
    render() {
        return (
            <>
            <div className="orponbd-womens-fashion-category-page-web-top-menu">
                <TopMenuSection/>
            </div>
            
            {/* Top Banner Box Start */}
            <div className="obd-pre-order-details-top-banner-section-web-box">
                <div className="container">
                    <div className="row obd-pre-order-details-top-banner-exx-pdd">
                        <div className="col-md-7">
                            <div className="pre-order-section-boxs-wb-content-box">
                                <div className="pre-order-texxt-comtent-hedd-text">
                                    <h4>Preorder</h4>
                                    <p> 
                                        Shop globally with Orpon BD, <br/>
                                        Preorder your desire product today!
                                    </p>
                                </div>
                                {/* Single Row Start */}
                                <div className="row pre-order-section-boxs-exx-cat-row">
                                    {/* Single Cat start */}
                                    <div className="col-md-3">
                                        <div className="pre-order-details-single-catt-box-wb-main-itm">
                                            <Link to="">
                                                <div className="pre-order-details-single-catt-box-wb text-center">
                                                    <img src={require('../../assets/pre-order-kitchen-1.png')} alt="orponbd online shop"/>
                                                    <p>Kitchen Accessories</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                     {/* Single Cat end */}
                                     {/* Single Cat start */}
                                    <div className="col-md-3">
                                        <div className="pre-order-details-single-catt-box-wb-main-itm">
                                            <Link to="">
                                                <div className="pre-order-details-single-catt-box-wb text-center">
                                                    <img src={require('../../assets/pre-order-menn-2.png')} alt="orponbd online shop"/>
                                                    <p>Men's Fashion</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                     {/* Single Cat end */}
                                      {/* Single Cat start */}
                                    <div className="col-md-3">
                                        <div className="pre-order-details-single-catt-box-wb-main-itm">
                                            <Link to="">
                                                <div className="pre-order-details-single-catt-box-wb text-center">
                                                    <img src={require('../../assets/pre-order-womens-3.png')} alt="orponbd online shop"/>
                                                    <p>Women's Fashion</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                     {/* Single Cat end */}
                                     {/* Single Cat start */}
                                    <div className="col-md-3">
                                        <div className="pre-order-details-single-catt-box-wb-main-itm">
                                            <Link to="">
                                                <div className="pre-order-details-single-catt-box-wb text-center">
                                                    <img src={require('../../assets/pre-order-home-livv-4.png')} alt="orponbd online shop"/>
                                                    <p>Home & Living</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                     {/* Single Cat end */}
                                </div>
                                {/* Single Row End */}

                                {/* Single Row Start */}
                                <div className="row pre-order-section-boxs-exx-cat-row">
                                    {/* Single Cat start */}
                                    <div className="col-md-3">
                                        <div className="pre-order-details-single-catt-box-wb-main-itm">
                                            <Link to="">
                                                <div className="pre-order-details-single-catt-box-wb text-center">
                                                    <img src={require('../../assets/pre-order-kitchen-1.png')} alt="orponbd online shop"/>
                                                    <p>Baby Zone</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                     {/* Single Cat end */}
                                     {/* Single Cat start */}
                                    <div className="col-md-3">
                                        <div className="pre-order-details-single-catt-box-wb-main-itm">
                                            <Link to="">
                                                <div className="pre-order-details-single-catt-box-wb text-center">
                                                    <img src={require('../../assets/pre-order-menn-2.png')} alt="orponbd online shop"/>
                                                    <p>Smart Watches</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                     {/* Single Cat end */}
                                      {/* Single Cat start */}
                                    <div className="col-md-3">
                                        <div className="pre-order-details-single-catt-box-wb-main-itm">
                                            <Link to="">
                                                <div className="pre-order-details-single-catt-box-wb text-center">
                                                    <img src={require('../../assets/pre-order-womens-3.png')} alt="orponbd online shop"/>
                                                    <p>Mobile Accessories</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                     {/* Single Cat end */}
                                     {/* Single Cat start */}
                                    <div className="col-md-3">
                                        <div className="pre-order-details-single-catt-box-wb-main-itm">
                                            <Link to="">
                                                <div className="pre-order-details-single-catt-box-wb text-center">
                                                    <img src={require('../../assets/pre-order-home-livv-4.png')} alt="orponbd online shop"/>
                                                    <p>Mobile Accessories</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                     {/* Single Cat end */}
                                </div>
                                {/* Single Row End */}
                            </div>
                        </div>
                        <div className="col-md-5">
                           <Link to="/">
                                <div className="pre-order-details-single-catt-box-wb-main-itm-right-banner">
                                    <img src={require('../../assets/pre-order-details-banner-wb.png')} alt="orponbd online shop"/>
                                </div>
                           </Link> 
                        </div>
                    </div>
                </div>
            </div>
            {/* Top Banner Box End */}

            {/* Products Section start Kitchen Accessories */}
            <div className="obd-pre-order-wv-details-products-new-item-for-you-txt-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="obd-pre-order-wv-details-products-new-item-txt-wv">
                                <h4>Kitchen Accessories</h4>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="obd-pre-order-wv-details-products-new-item-right-sort text-right">
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


            {/* Pre-order All Products Start */}
            <div className="obd-pre-order-wv-details-products-webversion-main-sectionx">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            
                            <div className="obd-pre-order-wv-det-section-all-products-sec-box">
                                {/* Single Roww Start */}
                                <div className="row pre-order-wv-det-prod-exx-pdddrw">
                                    {/* Single product start */}
                                    <div className="obd-pre-order-wv-details-all-products-single-product">
                                        <Link to="#">
                                            <div className="obd-pre-order-wv-details-all-products-single-web-vvesnn-img">
                                                <img src={require('../../assets/women-fas-cat-4.png')} alt="orponbd online shop"/>
                                            </div>
                                            <div className="pre-order-wv-details-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <div className="pre-order-wv-details-start-rattng">
                                                    <span class="fa fa-star checked"></span>
                                                    <span className="pre-order-wv-details-ttotl-star-rat-count">4.5</span>
                                                    <span className="pre-order-wv-details-star-count-number">(150 Sold)</span>
                                                </div>
                                                <div className="pre-order-wv-details-priicice-web-vvrsn">
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="obd-pre-order-wv-details-all-products-single-product">
                                        <Link to="#">
                                            <div className="obd-pre-order-wv-details-all-products-single-web-vvesnn-img">
                                                <img src={require('../../assets/women-fas-cat-2.png')} alt="orponbd global collections"/>
                                            </div>
                                            <div className="pre-order-wv-details-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <div className="pre-order-wv-details-start-rattng">
                                                    <span class="fa fa-star checked"></span>
                                                    <span className="pre-order-wv-details-ttotl-star-rat-count">4.5</span>
                                                    <span className="pre-order-wv-details-star-count-number">(150 Sold)</span>
                                                </div>
                                                <div className="pre-order-wv-details-priicice-web-vvrsn">
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="obd-pre-order-wv-details-all-products-single-product">
                                        <Link to="#">
                                            <div className="obd-pre-order-wv-details-all-products-single-web-vvesnn-img">
                                                <img src={require('../../assets/women-fas-cat-3.png')} alt="orponbd global collections"/>
                                            </div>
                                            <div className="pre-order-wv-details-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <div className="pre-order-wv-details-start-rattng">
                                                    <span class="fa fa-star checked"></span>
                                                    <span className="pre-order-wv-details-ttotl-star-rat-count">4.5</span>
                                                    <span className="pre-order-wv-details-star-count-number">(150 Sold)</span>
                                                </div>
                                                <div className="pre-order-wv-details-priicice-web-vvrsn">
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="obd-pre-order-wv-details-all-products-single-product">
                                        <Link to="#">
                                            <div className="obd-pre-order-wv-details-all-products-single-web-vvesnn-img">
                                                <img src={require('../../assets/women-fas-cat-6.png')} alt="orponbd global collections"/>
                                            </div>
                                            <div className="pre-order-wv-details-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <div className="pre-order-wv-details-start-rattng">
                                                    <span class="fa fa-star checked"></span>
                                                    <span className="pre-order-wv-details-ttotl-star-rat-count">4.5</span>
                                                    <span className="pre-order-wv-details-star-count-number">(150 Sold)</span>
                                                </div>
                                                <div className="pre-order-wv-details-priicice-web-vvrsn">
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="obd-pre-order-wv-details-all-products-single-product">
                                        <Link to="#">
                                            <div className="obd-pre-order-wv-details-all-products-single-web-vvesnn-img">
                                                <img src={require('../../assets/women-fas-cat-5.png')} alt="orponbd global collections"/>
                                            </div>
                                            <div className="pre-order-wv-details-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <div className="pre-order-wv-details-start-rattng">
                                                    <span class="fa fa-star checked"></span>
                                                    <span className="pre-order-wv-details-ttotl-star-rat-count">4.5</span>
                                                    <span className="pre-order-wv-details-star-count-number">(150 Sold)</span>
                                                </div>
                                                <div className="pre-order-wv-details-priicice-web-vvrsn">
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                </div>
                                {/* Single Roww End */}

                                {/* Single Roww Start */}
                                <div className="row best-sell-det-prod-exx-pdddrw">
                                    {/* Single product start */}
                                    <div className="obd-pre-order-wv-details-all-products-single-product">
                                        <Link to="#">
                                            <div className="obd-pre-order-wv-details-all-products-single-web-vvesnn-img">
                                                <img src={require('../../assets/women-fas-cat-7.png')} alt="orponbd online shop"/>
                                            </div>
                                            <div className="pre-order-wv-details-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <div className="pre-order-wv-details-start-rattng">
                                                    <span class="fa fa-star checked"></span>
                                                    <span className="pre-order-wv-details-ttotl-star-rat-count">4.5</span>
                                                    <span className="pre-order-wv-details-star-count-number">(150 Sold)</span>
                                                </div>
                                                <div className="pre-order-wv-details-priicice-web-vvrsn">
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="obd-pre-order-wv-details-all-products-single-product">
                                        <Link to="#">
                                            <div className="obd-pre-order-wv-details-all-products-single-web-vvesnn-img">
                                                <img src={require('../../assets/women-fas-cat-8.png')} alt="orponbd global collections"/>
                                            </div>
                                            <div className="pre-order-wv-details-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <div className="pre-order-wv-details-start-rattng">
                                                    <span class="fa fa-star checked"></span>
                                                    <span className="pre-order-wv-details-ttotl-star-rat-count">4.5</span>
                                                    <span className="pre-order-wv-details-star-count-number">(150 Sold)</span>
                                                </div>
                                                <div className="pre-order-wv-details-priicice-web-vvrsn">
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="obd-pre-order-wv-details-all-products-single-product">
                                        <Link to="#">
                                            <div className="obd-pre-order-wv-details-all-products-single-web-vvesnn-img">
                                                <img src={require('../../assets/women-fas-cat-9.png')} alt="orponbd global collections"/>
                                            </div>
                                            <div className="pre-order-wv-details-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <div className="pre-order-wv-details-start-rattng">
                                                    <span class="fa fa-star checked"></span>
                                                    <span className="pre-order-wv-details-ttotl-star-rat-count">4.5</span>
                                                    <span className="pre-order-wv-details-star-count-number">(150 Sold)</span>
                                                </div>
                                                <div className="pre-order-wv-details-priicice-web-vvrsn">
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="obd-pre-order-wv-details-all-products-single-product">
                                        <Link to="#">
                                            <div className="obd-pre-order-wv-details-all-products-single-web-vvesnn-img">
                                                <img src={require('../../assets/women-fas-cat-2.png')} alt="orponbd global collections"/>
                                            </div>
                                            <div className="pre-order-wv-details-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <div className="pre-order-wv-details-start-rattng">
                                                    <span class="fa fa-star checked"></span>
                                                    <span className="pre-order-wv-details-ttotl-star-rat-count">4.5</span>
                                                    <span className="pre-order-wv-details-star-count-number">(150 Sold)</span>
                                                </div>
                                                <div className="pre-order-wv-details-priicice-web-vvrsn">
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="obd-pre-order-wv-details-all-products-single-product">
                                        <Link to="#">
                                            <div className="obd-pre-order-wv-details-all-products-single-web-vvesnn-img">
                                                <img src={require('../../assets/women-fas-cat-3.png')} alt="orponbd global collections"/>
                                            </div>
                                            <div className="pre-order-wv-details-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <div className="pre-order-wv-details-start-rattng">
                                                    <span class="fa fa-star checked"></span>
                                                    <span className="pre-order-wv-details-ttotl-star-rat-count">4.5</span>
                                                    <span className="pre-order-wv-details-star-count-number">(150 Sold)</span>
                                                </div>
                                                <div className="pre-order-wv-details-priicice-web-vvrsn">
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                </div>
                                {/* Single Roww End */}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* Pre-Order KItchen All Products End */}

           <div className="obd-only-for-pre-order-wv-details-view-more-buttonn">
                <div className="moreto-love-web-version-view-more-btn text-center">
                    <button>View More <span><i className="fas fa-angle-down"></i></span></button>
                </div>
           </div>
            {/* Products Section end Kitchenn -------- */}
            
            {/* ------------------------ */}

            {/* Products Section start */}
            <div className="obd-pre-order-wv-details-products-new-item-for-you-txt-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="obd-pre-order-wv-details-products-new-item-txt-wv">
                                <h4>Men's Fashion</h4>
                            </div>
                        </div>
                        {/* <div className="col-md-5">
                            <div className="obd-pre-order-wv-details-products-new-item-right-sort text-right">
                                <select>
                                    <option value="" selected>Short By: Default</option>
                                    <option value="">Orders</option>
                                    <option value="">Price(high to low)</option>
                                    <option value="">Price(low to high)</option>
                                </select>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>


            {/* Pre-order All Products Start */}
            <div className="obd-pre-order-wv-details-products-webversion-main-sectionx">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            
                            <div className="obd-pre-order-wv-det-section-all-products-sec-box">
                                {/* Single Roww Start */}
                                <div className="row pre-order-wv-det-prod-exx-pdddrw">
                                    {/* Single product start */}
                                    <div className="obd-pre-order-wv-details-all-products-single-product">
                                        <Link to="#">
                                            <div className="obd-pre-order-wv-details-all-products-single-web-vvesnn-img">
                                                <img src={require('../../assets/women-fas-cat-4.png')} alt="orponbd online shop"/>
                                            </div>
                                            <div className="pre-order-wv-details-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <div className="pre-order-wv-details-start-rattng">
                                                    <span class="fa fa-star checked"></span>
                                                    <span className="pre-order-wv-details-ttotl-star-rat-count">4.5</span>
                                                    <span className="pre-order-wv-details-star-count-number">(150 Sold)</span>
                                                </div>
                                                <div className="pre-order-wv-details-priicice-web-vvrsn">
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="obd-pre-order-wv-details-all-products-single-product">
                                        <Link to="#">
                                            <div className="obd-pre-order-wv-details-all-products-single-web-vvesnn-img">
                                                <img src={require('../../assets/women-fas-cat-2.png')} alt="orponbd global collections"/>
                                            </div>
                                            <div className="pre-order-wv-details-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <div className="pre-order-wv-details-start-rattng">
                                                    <span class="fa fa-star checked"></span>
                                                    <span className="pre-order-wv-details-ttotl-star-rat-count">4.5</span>
                                                    <span className="pre-order-wv-details-star-count-number">(150 Sold)</span>
                                                </div>
                                                <div className="pre-order-wv-details-priicice-web-vvrsn">
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="obd-pre-order-wv-details-all-products-single-product">
                                        <Link to="#">
                                            <div className="obd-pre-order-wv-details-all-products-single-web-vvesnn-img">
                                                <img src={require('../../assets/women-fas-cat-3.png')} alt="orponbd global collections"/>
                                            </div>
                                            <div className="pre-order-wv-details-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <div className="pre-order-wv-details-start-rattng">
                                                    <span class="fa fa-star checked"></span>
                                                    <span className="pre-order-wv-details-ttotl-star-rat-count">4.5</span>
                                                    <span className="pre-order-wv-details-star-count-number">(150 Sold)</span>
                                                </div>
                                                <div className="pre-order-wv-details-priicice-web-vvrsn">
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="obd-pre-order-wv-details-all-products-single-product">
                                        <Link to="#">
                                            <div className="obd-pre-order-wv-details-all-products-single-web-vvesnn-img">
                                                <img src={require('../../assets/women-fas-cat-6.png')} alt="orponbd global collections"/>
                                            </div>
                                            <div className="pre-order-wv-details-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <div className="pre-order-wv-details-start-rattng">
                                                    <span class="fa fa-star checked"></span>
                                                    <span className="pre-order-wv-details-ttotl-star-rat-count">4.5</span>
                                                    <span className="pre-order-wv-details-star-count-number">(150 Sold)</span>
                                                </div>
                                                <div className="pre-order-wv-details-priicice-web-vvrsn">
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="obd-pre-order-wv-details-all-products-single-product">
                                        <Link to="#">
                                            <div className="obd-pre-order-wv-details-all-products-single-web-vvesnn-img">
                                                <img src={require('../../assets/women-fas-cat-5.png')} alt="orponbd global collections"/>
                                            </div>
                                            <div className="pre-order-wv-details-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <div className="pre-order-wv-details-start-rattng">
                                                    <span class="fa fa-star checked"></span>
                                                    <span className="pre-order-wv-details-ttotl-star-rat-count">4.5</span>
                                                    <span className="pre-order-wv-details-star-count-number">(150 Sold)</span>
                                                </div>
                                                <div className="pre-order-wv-details-priicice-web-vvrsn">
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                </div>
                                {/* Single Roww End */}

                                {/* Single Roww Start */}
                                <div className="row best-sell-det-prod-exx-pdddrw">
                                    {/* Single product start */}
                                    <div className="obd-pre-order-wv-details-all-products-single-product">
                                        <Link to="#">
                                            <div className="obd-pre-order-wv-details-all-products-single-web-vvesnn-img">
                                                <img src={require('../../assets/women-fas-cat-7.png')} alt="orponbd online shop"/>
                                            </div>
                                            <div className="pre-order-wv-details-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <div className="pre-order-wv-details-start-rattng">
                                                    <span class="fa fa-star checked"></span>
                                                    <span className="pre-order-wv-details-ttotl-star-rat-count">4.5</span>
                                                    <span className="pre-order-wv-details-star-count-number">(150 Sold)</span>
                                                </div>
                                                <div className="pre-order-wv-details-priicice-web-vvrsn">
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="obd-pre-order-wv-details-all-products-single-product">
                                        <Link to="#">
                                            <div className="obd-pre-order-wv-details-all-products-single-web-vvesnn-img">
                                                <img src={require('../../assets/women-fas-cat-8.png')} alt="orponbd global collections"/>
                                            </div>
                                            <div className="pre-order-wv-details-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <div className="pre-order-wv-details-start-rattng">
                                                    <span class="fa fa-star checked"></span>
                                                    <span className="pre-order-wv-details-ttotl-star-rat-count">4.5</span>
                                                    <span className="pre-order-wv-details-star-count-number">(150 Sold)</span>
                                                </div>
                                                <div className="pre-order-wv-details-priicice-web-vvrsn">
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="obd-pre-order-wv-details-all-products-single-product">
                                        <Link to="#">
                                            <div className="obd-pre-order-wv-details-all-products-single-web-vvesnn-img">
                                                <img src={require('../../assets/women-fas-cat-9.png')} alt="orponbd global collections"/>
                                            </div>
                                            <div className="pre-order-wv-details-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <div className="pre-order-wv-details-start-rattng">
                                                    <span class="fa fa-star checked"></span>
                                                    <span className="pre-order-wv-details-ttotl-star-rat-count">4.5</span>
                                                    <span className="pre-order-wv-details-star-count-number">(150 Sold)</span>
                                                </div>
                                                <div className="pre-order-wv-details-priicice-web-vvrsn">
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="obd-pre-order-wv-details-all-products-single-product">
                                        <Link to="#">
                                            <div className="obd-pre-order-wv-details-all-products-single-web-vvesnn-img">
                                                <img src={require('../../assets/women-fas-cat-2.png')} alt="orponbd global collections"/>
                                            </div>
                                            <div className="pre-order-wv-details-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <div className="pre-order-wv-details-start-rattng">
                                                    <span class="fa fa-star checked"></span>
                                                    <span className="pre-order-wv-details-ttotl-star-rat-count">4.5</span>
                                                    <span className="pre-order-wv-details-star-count-number">(150 Sold)</span>
                                                </div>
                                                <div className="pre-order-wv-details-priicice-web-vvrsn">
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="obd-pre-order-wv-details-all-products-single-product">
                                        <Link to="#">
                                            <div className="obd-pre-order-wv-details-all-products-single-web-vvesnn-img">
                                                <img src={require('../../assets/women-fas-cat-3.png')} alt="orponbd global collections"/>
                                            </div>
                                            <div className="pre-order-wv-details-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <div className="pre-order-wv-details-start-rattng">
                                                    <span class="fa fa-star checked"></span>
                                                    <span className="pre-order-wv-details-ttotl-star-rat-count">4.5</span>
                                                    <span className="pre-order-wv-details-star-count-number">(150 Sold)</span>
                                                </div>
                                                <div className="pre-order-wv-details-priicice-web-vvrsn">
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                </div>
                                {/* Single Roww End */}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* Pre-Order KItchen All Products End */}

           <div className="obd-only-for-pre-order-wv-details-view-more-buttonn">
                <div className="moreto-love-web-version-view-more-btn text-center">
                    <button>View More <span><i className="fas fa-angle-down"></i></span></button>
                </div>
           </div>
            {/* Products Section end Kitchenn -------- */}

            <div className="orponbd-womens-fashion-category-page-web-top-menu">
                <FooterWebSection/>
            </div>
            </>
        )
    }
}
