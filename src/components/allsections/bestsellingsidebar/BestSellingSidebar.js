import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './bestsellingsidebar.css';

export default class BestSellingSidebar extends Component {
    render() {
        return (
            <>
            {/* filter txt */}
            <div className="orponbd-womens-fashion-category-filter-txtt">
                <h4>Best Selling</h4>
                <div className="flltrr-bbttn-brdr"></div>
            </div>

            {/* filter txt */}
            <div className="orponbd-womens-fashion-left-sidebar-bestsellng-product-box">
                {/* Single Item Start */}
                <div className="orponbd-womens-fashion-left-sidebar-bestsellng-single-product">
                    <Link to="/">
                        <div className="orponbd-womens-fashion-left-sidebar-bestsellng-single-img">
                            <img src={require('../../../assets/best-sel-sidebar.png')} alt="orponbd Online shop"/>
                        </div>
                        <div className="orponbd-womens-fashion-left-sidebar-bestsellng-single-price-txt">
                            <h3><span>৳</span> 750</h3>
                            <div className="bessttt-selllng-sidebar-start-rattng">
                                <span class="fa fa-star checked"></span>
                                <span className="besstt-sellng-ttotl-star-rat-count-left-sidebar">4.5</span>
                            </div>
                            <span className="besst-selling-sidebarr-star-count-number">(150 Sold)</span>
                        </div>
                    </Link>
                </div>
                {/* Single Item End */}
                {/* Single Item Start */}
                <div className="orponbd-womens-fashion-left-sidebar-bestsellng-single-product">
                    <Link to="/">
                        <div className="orponbd-womens-fashion-left-sidebar-bestsellng-single-img">
                            <img src={require('../../../assets/item-8.png')} alt="orponbd Online shop"/>
                        </div>
                        <div className="orponbd-womens-fashion-left-sidebar-bestsellng-single-price-txt">
                            <h3><span>৳</span> 750</h3>
                            <div className="bessttt-selllng-sidebar-start-rattng">
                                <span class="fa fa-star checked"></span>
                                <span className="besstt-sellng-ttotl-star-rat-count-left-sidebar">4.5</span>
                            </div>
                            <span className="besst-selling-sidebarr-star-count-number">(150 Sold)</span>
                        </div>
                    </Link>
                </div>
                {/* Single Item End */}
                {/* Single Item Start */}
                <div className="orponbd-womens-fashion-left-sidebar-bestsellng-single-product">
                    <Link to="/">
                        <div className="orponbd-womens-fashion-left-sidebar-bestsellng-single-img">
                            <img src={require('../../../assets/women-fas-cat-5.png')} alt="orponbd Online shop"/>
                        </div>
                        <div className="orponbd-womens-fashion-left-sidebar-bestsellng-single-price-txt">
                            <h3><span>৳</span> 750</h3>
                            <div className="bessttt-selllng-sidebar-start-rattng">
                                <span class="fa fa-star checked"></span>
                                <span className="besstt-sellng-ttotl-star-rat-count-left-sidebar">4.5</span>
                            </div>
                            <span className="besst-selling-sidebarr-star-count-number">(150 Sold)</span>
                        </div>
                    </Link>
                </div>
                {/* Single Item End */}
            </div>
            {/* Product box */}
            </>
        )
    }
}
