import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './bestsellingsdetails.css';

import TopMenuSection from '../../topmenusection/TopMenuSection';
import FooterWebSection from '../../allsections/footerwebsection/FooterWebSection';

export default class BestSellingsDetails extends Component {
    render() {
        return (
            <>
            <div className="orponbd-womens-fashion-category-page-web-top-menu">
                <TopMenuSection/>
            </div>

            {/* New Arrival Text Section Start */}
            <div className="obd-best-selling-details-products-top-bg-section">
                <div className="obd-best-selling-details-products-bg-img">
                    <img src={require('../../../assets/newarrival-bg.png')} alt="orponbd online shop"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="obd-best-selling-details-products-top-content-box">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="obd-best-selling-details-products-hed-txt">
                                            <h3>Best Selling</h3>
                                            <p>Discover what's new, what's hot and what's trending </p>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="obd-best-selling-details-products-bg-right text-right">
                                            <img src={require('../../../assets/new-arrival-bg-right.png')} alt="orponbd online shop"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* New Arrival Text Section End */}

            <div className="obd-best-selling-details-products-new-item-for-you-txt-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="obd-best-selling-details-products-new-item-txt-wv">
                                <h4>Best Selling Items For You</h4>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="obd-best-selling-details-products-new-item-right-sort text-right">
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

            {/* Best Selling All Products Start */}
            <div className="obd-best-selling-details-products-webversion-main-sectionx">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            
                            <div className="obd-best-selling-details-section-all-products-sec-box">
                                {/* Single Row Start ---*/}
                                <div className="row besst-sellng-details-com-delproj-rww-webb-versnn">
                                    {/* Single Item start */}
                                    <div className="col-md-2 col-6">
                                        <div className="besst-sellng-detailsx-web-ddot-cmm-snnggl-prodct-web-vvesnn">
                                            <Link to="/#">
                                                <div className="besst-sellng-detailsx-cmm-snnggl-prodct-web-vvesnn-img">
                                                    <img src={require('../../../assets/item-13.png')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="besst-sellng-detailsx-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <div className="besst-sellng-detailsx-start-rattng">
                                                        <span class="fa fa-star checked"></span>
                                                        <span className="besst-sellng-detailsx-ttotl-star-rat-count">4.5</span>
                                                        <span className="besst-sellng-detailsx-star-count-number">(150 Sold)</span>
                                                    </div>
                                                    <div className="besst-sellng-detailsx-bestt-sell-priicice-web-vvrsn">
                                                        <h3><span>৳</span> 1200</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single Item end */}
                                    <div className="col-md-2 col-6">
                                        <div className="besst-sellng-detailsx-web-ddot-cmm-snnggl-prodct-web-vvesnn">
                                            <Link to="/#">
                                                <div className="besst-sellng-detailsx-cmm-snnggl-prodct-web-vvesnn-img">
                                                    <img src={require('../../../assets/item-14.png')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="besst-sellng-detailsx-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <div className="besst-sellng-detailsx-start-rattng">
                                                        <span class="fa fa-star checked"></span>
                                                        <span className="besst-sellng-detailsx-ttotl-star-rat-count">4.5</span>
                                                        <span className="besst-sellng-detailsx-star-count-number">(150 Sold)</span>
                                                    </div>
                                                    <div className="besst-sellng-detailsx-bestt-sell-priicice-web-vvrsn">
                                                        <h3><span>৳</span> 1200</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-6">
                                        <div className="besst-sellng-detailsx-web-ddot-cmm-snnggl-prodct-web-vvesnn">
                                            <Link to="/#">
                                                <div className="besst-sellng-detailsx-cmm-snnggl-prodct-web-vvesnn-img">
                                                    <img src={require('../../../assets/item-15.png')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="besst-sellng-detailsx-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <div className="besst-sellng-detailsx-start-rattng">
                                                        <span class="fa fa-star checked"></span>
                                                        <span className="besst-sellng-detailsx-ttotl-star-rat-count">4.5</span>
                                                        <span className="besst-sellng-detailsx-star-count-number">(150 Sold)</span>
                                                    </div>
                                                    <div className="besst-sellng-detailsx-bestt-sell-priicice-web-vvrsn">
                                                        <h3><span>৳</span> 1200</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-6">
                                        <div className="besst-sellng-detailsx-web-ddot-cmm-snnggl-prodct-web-vvesnn">
                                            <Link to="/#">
                                                <div className="besst-sellng-detailsx-cmm-snnggl-prodct-web-vvesnn-img">
                                                    <img src={require('../../../assets/item-16.png')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="besst-sellng-detailsx-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <div className="besst-sellng-detailsx-start-rattng">
                                                        <span class="fa fa-star checked"></span>
                                                        <span className="besst-sellng-detailsx-ttotl-star-rat-count">4.5</span>
                                                        <span className="besst-sellng-detailsx-star-count-number">(150 Sold)</span>
                                                    </div>
                                                    <div className="besst-sellng-detailsx-bestt-sell-priicice-web-vvrsn">
                                                        <h3><span>৳</span> 1200</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-6">
                                        <div className="besst-sellng-detailsx-web-ddot-cmm-snnggl-prodct-web-vvesnn">
                                            <Link to="/#">
                                                <div className="besst-sellng-detailsx-cmm-snnggl-prodct-web-vvesnn-img">
                                                    <img src={require('../../../assets/item-17.png')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="besst-sellng-detailsx-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <div className="besst-sellng-detailsx-start-rattng">
                                                        <span class="fa fa-star checked"></span>
                                                        <span className="besst-sellng-detailsx-ttotl-star-rat-count">4.5</span>
                                                        <span className="besst-sellng-detailsx-star-count-number">(150 Sold)</span>
                                                    </div>
                                                    <div className="besst-sellng-detailsx-bestt-sell-priicice-web-vvrsn">
                                                        <h3><span>৳</span> 1200</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-6">
                                        <div className="besst-sellng-detailsx-web-ddot-cmm-snnggl-prodct-web-vvesnn">
                                            <Link to="/#">
                                                <div className="besst-sellng-detailsx-cmm-snnggl-prodct-web-vvesnn-img">
                                                    <img src={require('../../../assets/item-18.png')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="besst-sellng-detailsx-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <div className="besst-sellng-detailsx-start-rattng">
                                                        <span class="fa fa-star checked"></span>
                                                        <span className="besst-sellng-detailsx-ttotl-star-rat-count">4.5</span>
                                                        <span className="besst-sellng-detailsx-star-count-number">(150 Sold)</span>
                                                    </div>
                                                    <div className="besst-sellng-detailsx-bestt-sell-priicice-web-vvrsn">
                                                        <h3><span>৳</span> 1200</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                {/* Single Row End */}

                                {/* Single Row Start ---*/}
                                <div className="row besst-sellng-details-com-delproj-rww-webb-versnn">
                                    {/* Single Item start */}
                                    <div className="col-md-2 col-6">
                                        <div className="besst-sellng-detailsx-web-ddot-cmm-snnggl-prodct-web-vvesnn">
                                            <Link to="/#">
                                                <div className="besst-seellngg-ddot-cmm-snnggl-prodct-web-vvesnn-img">
                                                    <img src={require('../../../assets/item-10.png')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="besst-seelng-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <div className="besst-sellng-detailsx-start-rattng">
                                                        <span className="fa fa-star checked"></span>
                                                        <span className="besst-sellng-detailsx-ttotl-star-rat-count">4.5</span>
                                                        <span className="besst-sellng-detailsx-star-count-number">(150 Sold)</span>
                                                    </div>
                                                    <div className="besst-sellng-detailsx-bestt-sell-priicice-web-vvrsn">
                                                        <h3><span>৳</span> 1200</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single Item end */}
                                    <div className="col-md-2 col-6">
                                        <div className="besst-sellng-detailsx-web-ddot-cmm-snnggl-prodct-web-vvesnn">
                                            <Link to="/#">
                                                <div className="besst-sellng-detailsx-cmm-snnggl-prodct-web-vvesnn-img">
                                                    <img src={require('../../../assets/item-7.png')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="besst-sellng-detailsx-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <div className="besst-sellng-detailsx-start-rattng">
                                                        <span class="fa fa-star checked"></span>
                                                        <span className="besst-sellng-detailsx-ttotl-star-rat-count">4.5</span>
                                                        <span className="besst-sellng-detailsx-star-count-number">(150 Sold)</span>
                                                    </div>
                                                    <div className="besst-sellng-detailsx-bestt-sell-priicice-web-vvrsn">
                                                        <h3><span>৳</span> 1200</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-6">
                                        <div className="besst-sellng-detailsx-web-ddot-cmm-snnggl-prodct-web-vvesnn">
                                            <Link to="/#">
                                                <div className="besst-sellng-detailsx-cmm-snnggl-prodct-web-vvesnn-img">
                                                    <img src={require('../../../assets/item-11.png')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="besst-sellng-detailsx-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <div className="besst-sellng-detailsx-start-rattng">
                                                        <span class="fa fa-star checked"></span>
                                                        <span className="besst-sellng-detailsx-ttotl-star-rat-count">4.5</span>
                                                        <span className="besst-sellng-detailsx-star-count-number">(150 Sold)</span>
                                                    </div>
                                                    <div className="besst-sellng-detailsx-bestt-sell-priicice-web-vvrsn">
                                                        <h3><span>৳</span> 1200</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-6">
                                        <div className="besst-sellng-detailsx-web-ddot-cmm-snnggl-prodct-web-vvesnn">
                                            <Link to="/#">
                                                <div className="besst-sellng-detailsx-cmm-snnggl-prodct-web-vvesnn-img">
                                                    <img src={require('../../../assets/item-4.png')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="besst-sellng-detailsx-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <div className="besst-sellng-detailsx-start-rattng">
                                                        <span class="fa fa-star checked"></span>
                                                        <span className="besst-sellng-detailsx-ttotl-star-rat-count">4.5</span>
                                                        <span className="besst-sellng-detailsx-star-count-number">(150 Sold)</span>
                                                    </div>
                                                    <div className="besst-sellng-detailsx-bestt-sell-priicice-web-vvrsn">
                                                        <h3><span>৳</span> 1200</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-6">
                                        <div className="besst-sellng-detailsx-web-ddot-cmm-snnggl-prodct-web-vvesnn">
                                            <Link to="/#">
                                                <div className="besst-sellng-detailsx-cmm-snnggl-prodct-web-vvesnn-img">
                                                    <img src={require('../../../assets/item-3.png')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="besst-sellng-detailsx-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <div className="besst-sellng-detailsx-start-rattng">
                                                        <span class="fa fa-star checked"></span>
                                                        <span className="besst-sellng-detailsx-ttotl-star-rat-count">4.5</span>
                                                        <span className="besst-sellng-detailsx-star-count-number">(150 Sold)</span>
                                                    </div>
                                                    <div className="besst-sellng-detailsx-bestt-sell-priicice-web-vvrsn">
                                                        <h3><span>৳</span> 1200</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-6">
                                        <div className="besst-sellng-detailsx-web-ddot-cmm-snnggl-prodct-web-vvesnn">
                                            <Link to="/#">
                                                <div className="besst-sellng-detailsx-cmm-snnggl-prodct-web-vvesnn-img">
                                                    <img src={require('../../../assets/item-9.png')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="besst-sellng-detailsx-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <div className="besst-sellng-detailsx-start-rattng">
                                                        <span class="fa fa-star checked"></span>
                                                        <span className="besst-sellng-detailsx-ttotl-star-rat-count">4.5</span>
                                                        <span className="besst-sellng-detailsx-star-count-number">(150 Sold)</span>
                                                    </div>
                                                    <div className="besst-sellng-detailsx-bestt-sell-priicice-web-vvrsn">
                                                        <h3><span>৳</span> 1200</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                {/* Single Row End */}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* Best Selling All Products End */}

           <div className="obd-only-for-best-sellng-details-view-more-buttonn">
                <div className="moreto-love-web-version-view-more-btn text-center">
                    <button>View More <span><i className="fas fa-angle-down"></i></span></button>
                </div>
           </div>

            <div className="orponbd-womens-fashion-category-page-web-top-menu">
                <FooterWebSection/>
            </div>
            </>
        )
    }
}
