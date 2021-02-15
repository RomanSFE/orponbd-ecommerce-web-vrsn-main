import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './xiaomibrand.css';

import TopMenuSection from '../../topmenusection/TopMenuSection';
import FooterWebSection from '../../allsections/footerwebsection/FooterWebSection';

export default class XiaomiBrand extends Component {
    render() {
        return (
            <>
            <div className="orponbd-womens-fashion-category-page-web-top-menu">
                <TopMenuSection/>
            </div>

            <div className="obd-top-brands-section-web-version-main-box">
                <div className="container">
                    <div className="row obd-top-brands-section-web-banner-secc">
                        <div className="col-md-12">
                            <div className="obd-top-brands-section-web-banner-section-box">
                                <img src={require('../../../assets/top-brand-xiaomi-banner.png')} alt="orponbd online shop"/>
                            </div>
                        </div>
                    </div>
                    <div className="row obd-top-brands-brand-logo-search-sort-section-pdd-box">
                        <div className="col-md-12">
                            <div className="obd-top-brand-top-brand-section-wv-logo-icon-bd-sec-box">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="obd-top-brand-logo-sectionn-web-v-box">
                                            <div className="row obd-top-brand-logo-sectionn-paddd-exx">
                                                <div className="col-md-3">
                                                    <div className="obd-top-brand-logo-sectionn-img">
                                                        <img src={require('../../../assets/top-brand-logo-xiaomi.png')} alt="orponbd online shop"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-9">
                                                    <div className="obd-brabnd-logo-section-txt-box-wv">
                                                        <h4>XIAOMI</h4>
                                                        <p>Total <span>25 </span>products found in XIAOMI </p>
                                                        <div className="obd-brabnd-logo-section-like-and-star-sec">
                                                            <ul>
                                                                <li><p><span><i className="fas fa-heart"></i></span> 25 Likes</p></li>
                                                                <li>
                                                                    <div className="top-brandd-star-start-rattng">
                                                                        <span className="fa fa-star checked"></span>
                                                                        <span className="top-brand-ttotl-star-rat-count">4.5</span>
                                                                        <span className="top-brandd-star-count-number">(150 Sold)</span>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="obd-top-brand-logo-sectionn-web-v-search">
                                            <input type="search" placeholder="Enter product name.."/>
                                            <span className="obd-topp-brand-search-abb-btn"><button type="submit"><span><i className="fas fa-search"></i></span></button></span>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="obd-top-brand-logo-section-sortby-part">
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

                    {/* Product Section Start */}
                    <div className="obd-top-brands-section-all-products-sec-box">
                         {/* Single Roww Start */}
                         <div className="row orponbd-top-brand-prod-exx-pdddrw">
                            {/* Single product start */}
                            <div className="obd-top-brands-section-all-products-single-product">
                                <Link to="#">
                                    <div className="obd-top-brands-section-all-products-single-web-vvesnn-img">
                                        <img src={require('../../../assets/women-fas-cat-4.png')} alt="orponbd online shop"/>
                                    </div>
                                    <div className="obd-top-brands-section-all-products-single-web-vvrsn-ttxt">
                                        <p>Product Name In Two Line maximum</p>
                                        <div className="obd-top-brands-wevb-start-rattng">
                                            <span className="fa fa-star checked"></span>
                                            <span className="obd-top-brands-wevb-star-rat-count">4.5</span>
                                            <span className="obd-top-brands-wevb-star-count-number">(150 Sold)</span>
                                        </div>
                                        <div className="obd-top-brands-section-priicice-web-vvrsn">
                                            <h3><span>৳</span> 1200</h3>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            {/* Single product end */}
                            {/* Single product start */}
                            <div className="obd-top-brands-section-all-products-single-product">
                                <Link to="#">
                                    <div className="obd-top-brands-section-all-products-single-web-vvesnn-img">
                                        <img src={require('../../../assets/women-fas-cat-2.png')} alt="orponbd global collections"/>
                                    </div>
                                    <div className="obd-top-brands-section-all-products-single-web-vvrsn-ttxt">
                                        <p>Product Name In Two Line maximum</p>
                                        <div className="bessttt-selllng-start-rattng">
                                            <span className="fa fa-star checked"></span>
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
                            <div className="obd-top-brands-section-all-products-single-product">
                                <Link to="#">
                                    <div className="obd-top-brands-section-all-products-single-web-vvesnn-img">
                                        <img src={require('../../../assets/women-fas-cat-3.png')} alt="orponbd global collections"/>
                                    </div>
                                    <div className="obd-top-brands-section-all-products-single-web-vvrsn-ttxt">
                                        <p>Product Name In Two Line maximum</p>
                                        <div className="bessttt-selllng-start-rattng">
                                            <span className="fa fa-star checked"></span>
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
                            <div className="obd-top-brands-section-all-products-single-product">
                                <Link to="#">
                                    <div className="obd-top-brands-section-all-products-single-web-vvesnn-img">
                                        <img src={require('../../../assets/women-fas-cat-6.png')} alt="orponbd global collections"/>
                                    </div>
                                    <div className="obd-top-brands-section-all-products-single-web-vvrsn-ttxt">
                                        <p>Product Name In Two Line maximum</p>
                                        <div className="bessttt-selllng-start-rattng">
                                            <span className="fa fa-star checked"></span>
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
                            <div className="obd-top-brands-section-all-products-single-product">
                                <Link to="#">
                                    <div className="obd-top-brands-section-all-products-single-web-vvesnn-img">
                                        <img src={require('../../../assets/women-fas-cat-5.png')} alt="orponbd global collections"/>
                                    </div>
                                    <div className="obd-top-brands-section-all-products-single-web-vvrsn-ttxt">
                                        <p>Product Name In Two Line maximum</p>
                                        <div className="bessttt-selllng-start-rattng">
                                            <span className="fa fa-star checked"></span>
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
                        {/* Single Roww End */}

                         {/* Single Roww Start */}
                         <div className="row orponbd-top-brand-prod-exx-pdddrw">
                            {/* Single product start */}
                            <div className="obd-top-brands-section-all-products-single-product">
                                <Link to="#">
                                    <div className="obd-top-brands-section-all-products-single-web-vvesnn-img">
                                        <img src={require('../../../assets/women-fas-cat-7.png')} alt="orponbd online shop"/>
                                    </div>
                                    <div className="obd-top-brands-section-all-products-single-web-vvrsn-ttxt">
                                        <p>Product Name In Two Line maximum</p>
                                        <div className="obd-top-brands-wevb-start-rattng">
                                            <span className="fa fa-star checked"></span>
                                            <span className="obd-top-brands-wevb-star-rat-count">4.5</span>
                                            <span className="obd-top-brands-wevb-star-count-number">(150 Sold)</span>
                                        </div>
                                        <div className="obd-top-brands-section-priicice-web-vvrsn">
                                            <h3><span>৳</span> 1200</h3>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            {/* Single product end */}
                            {/* Single product start */}
                            <div className="obd-top-brands-section-all-products-single-product">
                                <Link to="#">
                                    <div className="obd-top-brands-section-all-products-single-web-vvesnn-img">
                                        <img src={require('../../../assets/women-fas-cat-8.png')} alt="orponbd global collections"/>
                                    </div>
                                    <div className="obd-top-brands-section-all-products-single-web-vvrsn-ttxt">
                                        <p>Product Name In Two Line maximum</p>
                                        <div className="bessttt-selllng-start-rattng">
                                            <span className="fa fa-star checked"></span>
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
                            <div className="obd-top-brands-section-all-products-single-product">
                                <Link to="#">
                                    <div className="obd-top-brands-section-all-products-single-web-vvesnn-img">
                                        <img src={require('../../../assets/women-fas-cat-9.png')} alt="orponbd global collections"/>
                                    </div>
                                    <div className="obd-top-brands-section-all-products-single-web-vvrsn-ttxt">
                                        <p>Product Name In Two Line maximum</p>
                                        <div className="bessttt-selllng-start-rattng">
                                            <span className="fa fa-star checked"></span>
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
                            <div className="obd-top-brands-section-all-products-single-product">
                                <Link to="#">
                                    <div className="obd-top-brands-section-all-products-single-web-vvesnn-img">
                                        <img src={require('../../../assets/women-fas-cat-2.png')} alt="orponbd global collections"/>
                                    </div>
                                    <div className="obd-top-brands-section-all-products-single-web-vvrsn-ttxt">
                                        <p>Product Name In Two Line maximum</p>
                                        <div className="bessttt-selllng-start-rattng">
                                            <span className="fa fa-star checked"></span>
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
                            <div className="obd-top-brands-section-all-products-single-product">
                                <Link to="#">
                                    <div className="obd-top-brands-section-all-products-single-web-vvesnn-img">
                                        <img src={require('../../../assets/women-fas-cat-3.png')} alt="orponbd global collections"/>
                                    </div>
                                    <div className="obd-top-brands-section-all-products-single-web-vvrsn-ttxt">
                                        <p>Product Name In Two Line maximum</p>
                                        <div className="bessttt-selllng-start-rattng">
                                            <span className="fa fa-star checked"></span>
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
                        {/* Single Roww End */}

                        {/* Pagination Start */}
                        <div className="row orpon-bd-web-v-womenss-fashion-pagination-section">
                            <div className="col-md-12">
                                <div className="orpon-bd-web-v-womenss-fashion-pagination-section-box">
                                    <div className="orpon-bd-web-v-womenss-fashion-pagination-section-content">
                                        <ul>
                                            <li className="orpon-bbd-pagination-prevv-txt-webv"><Link to="/"><span><i className="fas fa-angle-left"></i></span> Previous</Link></li>
                                            <li><Link to="/">1</Link></li>
                                            <li><Link to="/">2</Link></li>
                                            <li><Link to="/">3</Link></li>
                                            <li><Link to="/">4</Link></li>
                                            <li><Link to="/">5</Link></li>
                                            <li><Link to="/">6</Link></li>
                                            <li className="orpon-bbd-pagination-nextt-txt-webv"><Link to="/">Next <span><i className="fas fa-angle-right"></i></span></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Pagination Start */}

                    </div>
                    {/* ghhfhfgh */}
                </div>
            </div>

            <div className="orponbd-womens-fashion-category-page-web-top-menu">
                <FooterWebSection/>
            </div>
            </>
        )
    }
}
