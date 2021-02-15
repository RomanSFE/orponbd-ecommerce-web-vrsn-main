import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// import './womensfashionweb.css';
import { NavLink } from 'react-router-dom';


import TopMenuSection from '../../../topmenusection/TopMenuSection.js';
import FooterWebSection from '../../../allsections/footerwebsection/FooterWebSection';
import RangeSlider from '../../../allsections/rangeslider/RangeSlider';
import RelatedProducts from '../../../allsections/relatedproducts/RelatedProducts';
import BestSellingSidebar from '../../../allsections/bestsellingsidebar/BestSellingSidebar.js';

export default class WomenSubBeautyAndHealth extends Component {
    render() {
        return (
            <>
            <div className="orponbd-womens-fashion-category-page-web-top-menu">
                <TopMenuSection/>
            </div>

            <div className="orponbd-womens-fashion-category-page-web-version-main-boxx">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="orponbd-womens-fashion-category-left-menu-section">
                                {/* Related category box */}
                                <div className="relateddd-cattt-gry-ytat">
                                    <h4>Related Categories</h4>
                                </div>
                                <div className="orponbd-womens-fashion-category-left-menu-section-itmm">
                                    <ul>
                                        <li className="womennsss-main-cattt-wbv"><NavLink to="/womens-fashion" activeClassName="selectedLink" activeStyle={{color:'#fb4c2c',fontWeight: "bold",}}>Women's Fashion</NavLink></li>
                                        <li><NavLink to="/womens-sub-watchs" activeStyle={{color:'#fb4c2c',fontWeight: "bold",}}>Watches</NavLink></li>
                                        <li><NavLink to="/womens-sub-beauty-and-health" activeStyle={{color:'#fb4c2c',fontWeight: "bold",}}>Beauty & Health</NavLink></li>
                                        <li><NavLink to="/womens-sub-womens-bags" activeStyle={{color:'#fb4c2c',fontWeight: "bold",}}>Women's Bags</NavLink></li>
                                    </ul>
                                </div>
                                {/* Related category box */}
                            </div>

                            {/* Filter section start */}
                            <div className="orponbd-womens-fashion-category-left-menu-filtrrr-section"> 
                                <div className="orponbd-womens-fashion-category-left-menu-filter-paddv">
                                    {/* filter txt */}
                                    <div className="orponbd-womens-fashion-category-filter-txtt">
                                        <h4>Filter</h4>
                                        <div className="flltrr-bbttn-brdr"></div>
                                    </div>
                                    {/* filter txt */}

                                    {/* Price txt */}
                                    <div className="orponbd-womens-fashion-category-pricee-txtt">
                                        <h4>Price</h4>
                                        <div className="orponbd-womens-fashion-category-pricee-txtt-range-sliid">
                                            <RangeSlider/>
                                            {/* <RangeSliderTwo/> */}
                                        </div>
                                    </div>
                                    {/* Price txt */}

                                    {/* Available txt */}
                                    <div className="orponbd-womens-fashion-category-available-sec">
                                        <h4>Availability</h4>
                                        <div className="orponbd-womens-fashion-category-available-chk-wbv">
                                            <p>
                                                <li>
                                                    <div class="custom-control custom-checkbox">
                                                    <input class="custom-control-input" id="package-area-0" type="checkbox" />
                                                    <label class="custom-control-label" for="package-area-0">In Stock</label>  
                                                    </div>    
                                                </li>
                                            </p>
                                            <p>
                                                <li>
                                                    <div class="custom-control custom-checkbox">
                                                    <input class="custom-control-input" id="package-area-1" type="checkbox" />
                                                    <label class="custom-control-label" for="package-area-1">Out of Stock</label>  
                                                    </div>    
                                                </li>
                                            </p>
                                            
                                        </div>
                                    </div>
                                    {/* Available txt */}

                                    {/* Color Box Start */}
                                    <div className="orponbd-womens-fashion-category-color-pick-sec">
                                        <h4>Color</h4>
                                        <div className="orponbd-womens-fashion-category-color-pick-box">
                                            <ul>
                                                <li className="color-one"><span></span></li>
                                                <li className="color-two"><span></span></li>
                                                <li className="color-three"><span></span></li>
                                                <li className="color-four"><span></span></li>
                                                <li className="color-five"><span></span></li>
                                                <li className="color-six"><span></span></li>
                                                <li className="color-seven"><span></span></li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* Color Box End */}
                                </div>
                            </div>
                            {/* Filter section End */}

                            {/* Best selling Section Start */}
                            <div className="orponbd-womens-fashion-category-left-menu-bestselling-sidebar-sec">
                                <div className="orponbd-womens-fashion-category-left-menu-best-selling-sidebar-paddng">
                                    <BestSellingSidebar/>
                                </div>
                            </div>
                            {/* Best selling Section End */}
                        </div>
                        <div className="col-md-10">
                            <div className="orponbd-womens-fashion-category-right-product-sec">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="orponbd-womens-fashion-category-right-topp-all-cttt">
                                            <p>All Categories <span><i className="fas fa-angle-right"></i></span>  <span><Link to="#">Women's Fashion</Link></span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="orponbd-womens-fashion-category-right-sortt-by-booxx">
                                            <div className="row">
                                                <div className="col-md-7">
                                                    <div className="orponbd-womens-fashion-category-right-sortt-by-left-sec">
                                                        <div className="orponbd-womentts-fashionn-sort-by-txt-web-vv">
                                                            <span>Sort By:</span>
                                                            <div className="orponbd-womentts-fashionn-sort-by-select-bbox">
                                                                <select>
                                                                    <option value="" selected>Best match</option>
                                                                    <option value="">Orders</option>
                                                                    <option value="">Price(high to low)</option>
                                                                    <option value="">Price(low to high)</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-5">
                                                    <div className="orponbd-womens-fashion-category-right-sortt-by-rigght-sec text-right">
                                                        <ul>
                                                            <li><p>View:</p></li>
                                                            <li><Link to=""><img src={require('../../../../assets/category-view-icon-box.svg')} alt="orponbd Online Shop"/></Link></li>
                                                            <li><Link to=""><img src={require('../../../../assets/category-view-icon-list.svg')} alt="orponbd Online Shop"/></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Single Roww Start */}
                                <div className="row orponbd-womens-fashion-category-exx-pdddrw">
                                    {/* Single product start */}
                                    <div className="orponbd-womens-fashion-category-right-single-product">
                                        <Link to="#">
                                            <div className="womens-fashion-ddot-cmm-snnggl-prodct-web-vvesnn-img">
                                                <img src={require('../../../../assets/women-fas-cat-1.png')} alt="orponbd online shop"/>
                                            </div>
                                            <div className="womens-fashnn-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <div className="bessttt-selllng-start-rattng">
                                                    <span class="fa fa-star checked"></span>
                                                    <span className="besstt-sellng-ttotl-star-rat-count">4.5</span>
                                                    <span className="besst-selling-star-count-number">(150 Sold)</span>
                                                </div>
                                                <div className="bestt-sell-priicice-web-vvrsn">
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="orponbd-womens-fashion-category-right-single-product">
                                        <Link to="#">
                                            <div className="womens-fashion-ddot-cmm-snnggl-prodct-web-vvesnn-img">
                                                <img src={require('../../../../assets/women-fas-cat-2.png')} alt="orponbd global collections"/>
                                            </div>
                                            <div className="womens-fashnn-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <div className="bessttt-selllng-start-rattng">
                                                    <span class="fa fa-star checked"></span>
                                                    <span className="besstt-sellng-ttotl-star-rat-count">4.5</span>
                                                    <span className="besst-selling-star-count-number">(150 Sold)</span>
                                                </div>
                                                <div className="bestt-sell-priicice-web-vvrsn">
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="orponbd-womens-fashion-category-right-single-product">
                                        <Link to="#">
                                            <div className="womens-fashion-ddot-cmm-snnggl-prodct-web-vvesnn-img">
                                                <img src={require('../../../../assets/women-fas-cat-3.png')} alt="orponbd global collections"/>
                                            </div>
                                            <div className="womens-fashnn-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <div className="bessttt-selllng-start-rattng">
                                                    <span class="fa fa-star checked"></span>
                                                    <span className="besstt-sellng-ttotl-star-rat-count">4.5</span>
                                                    <span className="besst-selling-star-count-number">(150 Sold)</span>
                                                </div>
                                                <div className="bestt-sell-priicice-web-vvrsn">
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="orponbd-womens-fashion-category-right-single-product">
                                        <Link to="#">
                                            <div className="womens-fashion-ddot-cmm-snnggl-prodct-web-vvesnn-img">
                                                <img src={require('../../../../assets/women-fas-cat-4.png')} alt="orponbd global collections"/>
                                            </div>
                                            <div className="womens-fashnn-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <div className="bessttt-selllng-start-rattng">
                                                    <span class="fa fa-star checked"></span>
                                                    <span className="besstt-sellng-ttotl-star-rat-count">4.5</span>
                                                    <span className="besst-selling-star-count-number">(150 Sold)</span>
                                                </div>
                                                <div className="bestt-sell-priicice-web-vvrsn">
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="orponbd-womens-fashion-category-right-single-product">
                                        <Link to="#">
                                            <div className="womens-fashion-ddot-cmm-snnggl-prodct-web-vvesnn-img">
                                                <img src={require('../../../../assets/women-fas-cat-5.png')} alt="orponbd global collections"/>
                                            </div>
                                            <div className="womens-fashnn-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <div className="bessttt-selllng-start-rattng">
                                                    <span class="fa fa-star checked"></span>
                                                    <span className="besstt-sellng-ttotl-star-rat-count">4.5</span>
                                                    <span className="besst-selling-star-count-number">(150 Sold)</span>
                                                </div>
                                                <div className="bestt-sell-priicice-web-vvrsn">
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                </div>
                                {/* Single Roww Start */}

                                {/* Single Roww Start */}
                                <div className="row orponbd-womens-fashion-category-exx-pdddrw">
                                    {/* Single product start */}
                                    <div className="orponbd-womens-fashion-category-right-single-product">
                                        <Link to="#">
                                            <div className="womens-fashion-ddot-cmm-snnggl-prodct-web-vvesnn-img">
                                                <img src={require('../../../../assets/women-fas-cat-6.png')} alt="orponbd global collections"/>
                                            </div>
                                            <div className="womens-fashnn-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <div className="bessttt-selllng-start-rattng">
                                                    <span class="fa fa-star checked"></span>
                                                    <span className="besstt-sellng-ttotl-star-rat-count">4.5</span>
                                                    <span className="besst-selling-star-count-number">(150 Sold)</span>
                                                </div>
                                                <div className="bestt-sell-priicice-web-vvrsn">
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="orponbd-womens-fashion-category-right-single-product">
                                        <Link to="#">
                                            <div className="womens-fashion-ddot-cmm-snnggl-prodct-web-vvesnn-img">
                                                <img src={require('../../../../assets/women-fas-cat-7.png')} alt="orponbd global collections"/>
                                            </div>
                                            <div className="womens-fashnn-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <div className="bessttt-selllng-start-rattng">
                                                    <span class="fa fa-star checked"></span>
                                                    <span className="besstt-sellng-ttotl-star-rat-count">4.5</span>
                                                    <span className="besst-selling-star-count-number">(150 Sold)</span>
                                                </div>
                                                <div className="bestt-sell-priicice-web-vvrsn">
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="orponbd-womens-fashion-category-right-single-product">
                                        <Link to="#">
                                            <div className="womens-fashion-ddot-cmm-snnggl-prodct-web-vvesnn-img">
                                                <img src={require('../../../../assets/women-fas-cat-8.png')} alt="orponbd global collections"/>
                                            </div>
                                            <div className="womens-fashnn-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <div className="bessttt-selllng-start-rattng">
                                                    <span class="fa fa-star checked"></span>
                                                    <span className="besstt-sellng-ttotl-star-rat-count">4.5</span>
                                                    <span className="besst-selling-star-count-number">(150 Sold)</span>
                                                </div>
                                                <div className="bestt-sell-priicice-web-vvrsn">
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="orponbd-womens-fashion-category-right-single-product">
                                        <Link to="#">
                                            <div className="womens-fashion-ddot-cmm-snnggl-prodct-web-vvesnn-img">
                                                <img src={require('../../../../assets/women-fas-cat-9.png')} alt="orponbd global collections"/>
                                            </div>
                                            <div className="womens-fashnn-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <div className="bessttt-selllng-start-rattng">
                                                    <span class="fa fa-star checked"></span>
                                                    <span className="besstt-sellng-ttotl-star-rat-count">4.5</span>
                                                    <span className="besst-selling-star-count-number">(150 Sold)</span>
                                                </div>
                                                <div className="bestt-sell-priicice-web-vvrsn">
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="orponbd-womens-fashion-category-right-single-product">
                                        <Link to="#">
                                            <div className="womens-fashion-ddot-cmm-snnggl-prodct-web-vvesnn-img">
                                                <img src={require('../../../../assets/women-fas-cat-10.png')} alt="orponbd global collections"/>
                                            </div>
                                            <div className="womens-fashnn-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <div className="bessttt-selllng-start-rattng">
                                                    <span class="fa fa-star checked"></span>
                                                    <span className="besstt-sellng-ttotl-star-rat-count">4.5</span>
                                                    <span className="besst-selling-star-count-number">(150 Sold)</span>
                                                </div>
                                                <div className="bestt-sell-priicice-web-vvrsn">
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                                </div>
                                {/* Single Roww Start */}

                                {/* Pagination Start */}
                                <div className="row orpon-bd-web-v-womenss-fashion-pagination-section">
                                    <div className="col-md-12">
                                        <div className="orpon-bd-web-v-womenss-fashion-pagination-section-box">
                                            <div className="orpon-bd-web-v-womenss-fashion-pagination-section-content">
                                                <ul>
                                                    <li class="orpon-bbd-pagination-prevv-txt-webv"><Link to="/"><span><i className="fas fa-angle-left"></i></span> Previous</Link></li>
                                                    <li><Link to="/">1</Link></li>
                                                    <li><Link to="/">2</Link></li>
                                                    <li><Link to="/">3</Link></li>
                                                    <li><Link to="/">4</Link></li>
                                                    <li><Link to="/">5</Link></li>
                                                    <li><Link to="/">6</Link></li>
                                                    <li class="orpon-bbd-pagination-nextt-txt-webv"><Link to="/">Next <span><i className="fas fa-angle-right"></i></span></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Pagination Start */}

                                {/* Related Products Start */}
                                <div className="row orpon-bd-web-v-womenss-fashion-related-products">
                                    <div className="col-md-12">
                                        <div className="orpon-bd-web-v-womenss-fashion-related-products-box">
                                            <RelatedProducts/>
                                        </div>
                                    </div>
                                </div>
                                {/* Related Products End */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="orponbd-womens-fashion-category-page-web-top-menu">
                <FooterWebSection/>
            </div>
            </>
        )
    }
}
