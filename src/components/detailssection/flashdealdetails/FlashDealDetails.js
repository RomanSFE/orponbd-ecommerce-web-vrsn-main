import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './flashdealdetails.css';

import TopMenuSection from '../../topmenusection/TopMenuSection';
import FooterWebSection from '../../allsections/footerwebsection/FooterWebSection';
import TimeCounterWeb from '../../timecounter/TimeCounterWeb';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


export default class FlashDealDetails extends Component {
    render() {
        return (
            <>
            <div className="orponbd-womens-fashion-category-page-web-top-menu">
                <TopMenuSection/>
            </div>

            {/* New Arrival Text Section Start */}
            <div className="obd-flash-deal-details-products-top-bg-section">
                <div className="obd-flash-deal-details-products-bg-img">
                    <img src={require('../../../assets/flash-deal-details-sm.png')} alt="orponbd online shop"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="obd-flash-deal-details-products-top-content-box">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="obd-flash-deal-details-products-hed-txt">
                                            <h3>Flash Deals</h3>
                                            <p>Incredible priced items, Limited time to grab </p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="obd-flash-deal-details-products-bg-middle">
                                            <img src={require('../../../assets/flash-deal-details-ils.png')} alt="orponbd online shop"/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="obd-best-selling-details-products-right-time">
                                            <TimeCounterWeb/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* New Arrival Text Section End */}

            {/* Tabs Products section Start */}
            <div className="obd-flash-deal-details-tab-sectionnn-main-box">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="obd-flash-deal-details-tab-secctn-box-content">
                                <div className="obd-flash-deal-details-tab-secctn-box-content text-center">
                                <Tabs>
                                    <div className="obd-tab-section-flash-deal-detailsonly-tabbss-web">
                                        <TabList>
                                        <Tab>Now</Tab>
                                        <Tab>Up Coming</Tab>
                                        </TabList>
                                    </div>

                                    <TabPanel>
                                    <div className="obd-flash-deat-details-tab-content-texxt-details text-left">
                                        <div className="container">
                                            {/* Single Row Start */}
                                            <div className="row flash-deal-details-com-delproj-rww-webb-versnn">
                                                {/* Single Product */}
                                                <div className="col">
                                                    <div className="flash-deal-details-web-ddot-cmm-snnggl-prodct-web-vvesnn">
                                                        <Link to="/#">
                                                            <div className="flash-deal-details-ddot-cmm-snnggl-prodct-web-vvesnn-img">
                                                                <img src={require('../../../assets/item-11.png')} alt="orponbd global collections"/>
                                                            </div>
                                                            <div className="flash-deal-deetls-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                            
                                                                <div className="flash-deal-details-com-price-text-boxx">
                                                                    <h3><span>৳</span> 1200</h3>
                                                                    <del><h4><span>৳</span> 1200</h4></del>
                                                                </div>
                                                                <div className="flash-deal-details-webbb-offerrx">
                                                                    <p>20% Off</p>
                                                                </div>
                                                                <div className="obd-flash-deal-details-range-section-and-pro-count-wb">
                                                                    <h4>
                                                                    <div className="progress-bar blue stripes">
                                                                        <span style={{width: "60%"}}></span>
                                                                    </div>
                                                                    </h4>
                                                                    <p>150 sold</p>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                                {/* Single Product */}

                                                {/* Single Product */}
                                                <div className="col">
                                                    <div className="flash-deal-details-web-ddot-cmm-snnggl-prodct-web-vvesnn">
                                                        <Link to="/#">
                                                            <div className="flash-deal-details-ddot-cmm-snnggl-prodct-web-vvesnn-img">
                                                                <img src={require('../../../assets/item-2.png')} alt="orponbd global collections"/>
                                                            </div>
                                                            <div className="flash-deal-deetls-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                                
                                                                <div className="flash-deal-details-com-price-text-boxx">
                                                                    <h3><span>৳</span> 1200</h3>
                                                                    <del><h4><span>৳</span> 1200</h4></del>
                                                                </div>
                                                                <div className="flash-deal-details-webbb-offerrx">
                                                                    <p>20% Off</p>
                                                                </div>
                                                                <div className="obd-flash-deal-details-range-section-and-pro-count-wb">
                                                                    <h4>
                                                                    <div className="progress-bar blue stripes">
                                                                        <span style={{width: "70%"}}></span>
                                                                    </div>
                                                                    </h4>
                                                                    <p>150 sold</p>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                                {/* Single Product */}
                                                <div className="col">
                                                    <div className="flash-deal-details-web-ddot-cmm-snnggl-prodct-web-vvesnn">
                                                        <Link to="/#">
                                                            <div className="flash-deal-details-ddot-cmm-snnggl-prodct-web-vvesnn-img">
                                                                <img src={require('../../../assets/item-1.png')} alt="orponbd global collections"/>
                                                            </div>
                                                            <div className="flash-deal-deetls-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                                
                                                                <div className="flash-deal-details-com-price-text-boxx">
                                                                    <h3><span>৳</span> 1200</h3>
                                                                    <del><h4><span>৳</span> 1200</h4></del>
                                                                </div>
                                                                <div className="flash-deal-details-webbb-offerrx">
                                                                    <p>20% Off</p>
                                                                </div>
                                                                <div className="obd-flash-deal-details-range-section-and-pro-count-wb">
                                                                    <h4>
                                                                    <div className="progress-bar blue stripes">
                                                                        <span style={{width: "30%"}}></span>
                                                                    </div>
                                                                    </h4>
                                                                    <p>150 sold</p>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                                {/* Single Product */}

                                                {/* Single Product */}
                                                <div className="col">
                                                    <div className="flash-deal-details-web-ddot-cmm-snnggl-prodct-web-vvesnn">
                                                        <Link to="/#">
                                                            <div className="flash-deal-details-ddot-cmm-snnggl-prodct-web-vvesnn-img">
                                                                <img src={require('../../../assets/item-5.png')} alt="orponbd global collections"/>
                                                            </div>
                                                            <div className="flash-deal-deetls-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                                
                                                                <div className="flash-deal-details-com-price-text-boxx">
                                                                    <h3><span>৳</span> 1200</h3>
                                                                    <del><h4><span>৳</span> 1200</h4></del>
                                                                </div>
                                                                <div className="flash-deal-details-webbb-offerrx">
                                                                    <p>20% Off</p>
                                                                </div>
                                                                <div className="obd-flash-deal-details-range-section-and-pro-count-wb">
                                                                    <h4>
                                                                    <div className="progress-bar blue stripes">
                                                                        <span style={{width: "60%"}}></span>
                                                                    </div>
                                                                    </h4>
                                                                    <p>150 sold</p>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                                {/* Single Product */}
                                                {/* Single Product */}
                                                <div className="col">
                                                    <div className="flash-deal-details-web-ddot-cmm-snnggl-prodct-web-vvesnn">
                                                        <Link to="/#">
                                                            <div className="flash-deal-details-ddot-cmm-snnggl-prodct-web-vvesnn-img">
                                                                <img src={require('../../../assets/item-5.png')} alt="orponbd global collections"/>
                                                            </div>
                                                            <div className="flash-deal-deetls-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                                
                                                                <div className="flash-deal-details-com-price-text-boxx">
                                                                    <h3><span>৳</span> 1200</h3>
                                                                    <del><h4><span>৳</span> 1200</h4></del>
                                                                </div>
                                                                <div className="flash-deal-details-webbb-offerrx">
                                                                    <p>20% Off</p>
                                                                </div>
                                                                <div className="obd-flash-deal-details-range-section-and-pro-count-wb">
                                                                    <h4>
                                                                    <div className="progress-bar blue stripes">
                                                                        <span style={{width: "60%"}}></span>
                                                                    </div>
                                                                    </h4>
                                                                    <p>150 sold</p>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                                {/* Single Product */}
                                            </div>
                                            {/* Single Row End */}

                                            {/* Single Row Start */}
                                            <div className="row flash-deal-details-com-delproj-rww-webb-versnn">
                                                {/* Single Product */}
                                                <div className="col">
                                                    <div className="flash-deal-details-web-ddot-cmm-snnggl-prodct-web-vvesnn">
                                                        <Link to="/#">
                                                            <div className="flash-deal-details-ddot-cmm-snnggl-prodct-web-vvesnn-img">
                                                                <img src={require('../../../assets/item-3.png')} alt="orponbd global collections"/>
                                                            </div>
                                                            <div className="flash-deal-deetls-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                            
                                                                <div className="flash-deal-details-com-price-text-boxx">
                                                                    <h3><span>৳</span> 1200</h3>
                                                                    <del><h4><span>৳</span> 1200</h4></del>
                                                                </div>
                                                                <div className="flash-deal-details-webbb-offerrx">
                                                                    <p>20% Off</p>
                                                                </div>
                                                                <div className="obd-flash-deal-details-range-section-and-pro-count-wb">
                                                                    <h4>
                                                                    <div className="progress-bar blue stripes">
                                                                        <span style={{width: "80%"}}></span>
                                                                    </div>
                                                                    </h4>
                                                                    <p>150 sold</p>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                                {/* Single Product */}

                                                {/* Single Product */}
                                                <div className="col">
                                                    <div className="flash-deal-details-web-ddot-cmm-snnggl-prodct-web-vvesnn">
                                                        <Link to="/#">
                                                            <div className="flash-deal-details-ddot-cmm-snnggl-prodct-web-vvesnn-img">
                                                                <img src={require('../../../assets/item-7.png')} alt="orponbd global collections"/>
                                                            </div>
                                                            <div className="flash-deal-deetls-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                                
                                                                <div className="flash-deal-details-com-price-text-boxx">
                                                                    <h3><span>৳</span> 1200</h3>
                                                                    <del><h4><span>৳</span> 1200</h4></del>
                                                                </div>
                                                                <div className="flash-deal-details-webbb-offerrx">
                                                                    <p>20% Off</p>
                                                                </div>
                                                                <div className="obd-flash-deal-details-range-section-and-pro-count-wb">
                                                                    <h4>
                                                                    <div className="progress-bar blue stripes">
                                                                        <span style={{width: "18%"}}></span>
                                                                    </div>
                                                                    </h4>
                                                                    <p>150 sold</p>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                                {/* Single Product */}
                                                <div className="col">
                                                    <div className="flash-deal-details-web-ddot-cmm-snnggl-prodct-web-vvesnn">
                                                        <Link to="/#">
                                                            <div className="flash-deal-details-ddot-cmm-snnggl-prodct-web-vvesnn-img">
                                                                <img src={require('../../../assets/item-10.png')} alt="orponbd global collections"/>
                                                            </div>
                                                            <div className="flash-deal-deetls-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                                
                                                                <div className="flash-deal-details-com-price-text-boxx">
                                                                    <h3><span>৳</span> 1200</h3>
                                                                    <del><h4><span>৳</span> 1200</h4></del>
                                                                </div>
                                                                <div className="flash-deal-details-webbb-offerrx">
                                                                    <p>20% Off</p>
                                                                </div>
                                                                <div className="obd-flash-deal-details-range-section-and-pro-count-wb">
                                                                    <h4>
                                                                    <div className="progress-bar blue stripes">
                                                                        <span style={{width: "60%"}}></span>
                                                                    </div>
                                                                    </h4>
                                                                    <p>150 sold</p>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                                {/* Single Product */}

                                                {/* Single Product */}
                                                <div className="col">
                                                    <div className="flash-deal-details-web-ddot-cmm-snnggl-prodct-web-vvesnn">
                                                        <Link to="/#">
                                                            <div className="flash-deal-details-ddot-cmm-snnggl-prodct-web-vvesnn-img">
                                                                <img src={require('../../../assets/item-9.png')} alt="orponbd global collections"/>
                                                            </div>
                                                            <div className="flash-deal-deetls-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                                
                                                                <div className="flash-deal-details-com-price-text-boxx">
                                                                    <h3><span>৳</span> 1200</h3>
                                                                    <del><h4><span>৳</span> 1200</h4></del>
                                                                </div>
                                                                <div className="flash-deal-details-webbb-offerrx">
                                                                    <p>20% Off</p>
                                                                </div>
                                                                <div className="obd-flash-deal-details-range-section-and-pro-count-wb">
                                                                    <h4>
                                                                    <div className="progress-bar blue stripes">
                                                                        <span style={{width: "40%"}}></span>
                                                                    </div>
                                                                    </h4>
                                                                    <p>150 sold</p>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                                {/* Single Product */}
                                                {/* Single Product */}
                                                <div className="col">
                                                    <div className="flash-deal-details-web-ddot-cmm-snnggl-prodct-web-vvesnn">
                                                        <Link to="/#">
                                                            <div className="flash-deal-details-ddot-cmm-snnggl-prodct-web-vvesnn-img">
                                                                <img src={require('../../../assets/item-9.png')} alt="orponbd global collections"/>
                                                            </div>
                                                            <div className="flash-deal-deetls-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                                
                                                                <div className="flash-deal-details-com-price-text-boxx">
                                                                    <h3><span>৳</span> 1200</h3>
                                                                    <del><h4><span>৳</span> 1200</h4></del>
                                                                </div>
                                                                <div className="flash-deal-details-webbb-offerrx">
                                                                    <p>20% Off</p>
                                                                </div>
                                                                <div className="obd-flash-deal-details-range-section-and-pro-count-wb">
                                                                    <h4>
                                                                    <div className="progress-bar blue stripes">
                                                                        <span style={{width: "40%"}}></span>
                                                                    </div>
                                                                    </h4>
                                                                    <p>150 sold</p>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                                {/* Single Product */}
                                            </div>
                                            {/* Single Row End */}
                                        </div>
                                    </div>
                                    </TabPanel>
                                    <TabPanel>
                                    <div className="obd-flash-deat-details-tab-content-texxt-details text-left">
                                        <div className="container">
                                            {/* Single Row Start */}
                                            <div className="row flash-deal-details-com-delproj-rww-webb-versnn">
                                                {/* Single Product */}
                                                <div className="col">
                                                    <div className="flash-deal-details-web-ddot-cmm-snnggl-prodct-web-vvesnn">
                                                        <Link to="/#">
                                                            <div className="flash-deal-details-ddot-cmm-snnggl-prodct-web-vvesnn-img">
                                                                <img src={require('../../../assets/item-7.png')} alt="orponbd global collections"/>
                                                            </div>
                                                            <div className="flash-deal-deetls-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                            
                                                                <div className="flash-deal-details-com-price-text-boxx">
                                                                    <h3><span>৳</span> 1200</h3>
                                                                    <del><h4><span>৳</span> 1200</h4></del>
                                                                </div>
                                                                <div className="flash-deal-details-webbb-offerrx">
                                                                    <p>20% Off</p>
                                                                </div>
                                                                <div className="obd-flash-deal-details-range-section-and-pro-count-wb">
                                                                    <h4>
                                                                    <div className="progress-bar blue stripes">
                                                                        <span style={{width: "70%"}}></span>
                                                                    </div>
                                                                    </h4>
                                                                    <p>150 sold</p>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                                {/* Single Product */}

                                                {/* Single Product */}
                                                <div className="col">
                                                    <div className="flash-deal-details-web-ddot-cmm-snnggl-prodct-web-vvesnn">
                                                        <Link to="/#">
                                                            <div className="flash-deal-details-ddot-cmm-snnggl-prodct-web-vvesnn-img">
                                                                <img src={require('../../../assets/item-5.png')} alt="orponbd global collections"/>
                                                            </div>
                                                            <div className="flash-deal-deetls-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                                
                                                                <div className="flash-deal-details-com-price-text-boxx">
                                                                    <h3><span>৳</span> 1200</h3>
                                                                    <del><h4><span>৳</span> 1200</h4></del>
                                                                </div>
                                                                <div className="flash-deal-details-webbb-offerrx">
                                                                    <p>20% Off</p>
                                                                </div>
                                                                <div className="obd-flash-deal-details-range-section-and-pro-count-wb">
                                                                    <h4>
                                                                    <div className="progress-bar blue stripes">
                                                                        <span style={{width: "50%"}}></span>
                                                                    </div>
                                                                    </h4>
                                                                    <p>150 sold</p>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                                {/* Single Product */}
                                                <div className="col">
                                                    <div className="flash-deal-details-web-ddot-cmm-snnggl-prodct-web-vvesnn">
                                                        <Link to="/#">
                                                            <div className="flash-deal-details-ddot-cmm-snnggl-prodct-web-vvesnn-img">
                                                                <img src={require('../../../assets/item-12.png')} alt="orponbd global collections"/>
                                                            </div>
                                                            <div className="flash-deal-deetls-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                                
                                                                <div className="flash-deal-details-com-price-text-boxx">
                                                                    <h3><span>৳</span> 1200</h3>
                                                                    <del><h4><span>৳</span> 1200</h4></del>
                                                                </div>
                                                                <div className="flash-deal-details-webbb-offerrx">
                                                                    <p>20% Off</p>
                                                                </div>
                                                                <div className="obd-flash-deal-details-range-section-and-pro-count-wb">
                                                                    <h4>
                                                                    <div className="progress-bar blue stripes">
                                                                        <span style={{width: "10%"}}></span>
                                                                    </div>
                                                                    </h4>
                                                                    <p>150 sold</p>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                                {/* Single Product */}

                                                {/* Single Product */}
                                                <div className="col">
                                                    <div className="flash-deal-details-web-ddot-cmm-snnggl-prodct-web-vvesnn">
                                                        <Link to="/#">
                                                            <div className="flash-deal-details-ddot-cmm-snnggl-prodct-web-vvesnn-img">
                                                                <img src={require('../../../assets/item-13.png')} alt="orponbd global collections"/>
                                                            </div>
                                                            <div className="flash-deal-deetls-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                                
                                                                <div className="flash-deal-details-com-price-text-boxx">
                                                                    <h3><span>৳</span> 1200</h3>
                                                                    <del><h4><span>৳</span> 1200</h4></del>
                                                                </div>
                                                                <div className="flash-deal-details-webbb-offerrx">
                                                                    <p>20% Off</p>
                                                                </div>
                                                                <div className="obd-flash-deal-details-range-section-and-pro-count-wb">
                                                                    <h4>
                                                                    <div className="progress-bar blue stripes">
                                                                        <span style={{width: "40%"}}></span>
                                                                    </div>
                                                                    </h4>
                                                                    <p>150 sold</p>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                                {/* Single Product */}
                                                {/* Single Product */}
                                                <div className="col">
                                                    <div className="flash-deal-details-web-ddot-cmm-snnggl-prodct-web-vvesnn">
                                                        <Link to="/#">
                                                            <div className="flash-deal-details-ddot-cmm-snnggl-prodct-web-vvesnn-img">
                                                                <img src={require('../../../assets/item-13.png')} alt="orponbd global collections"/>
                                                            </div>
                                                            <div className="flash-deal-deetls-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                                
                                                                <div className="flash-deal-details-com-price-text-boxx">
                                                                    <h3><span>৳</span> 1200</h3>
                                                                    <del><h4><span>৳</span> 1200</h4></del>
                                                                </div>
                                                                <div className="flash-deal-details-webbb-offerrx">
                                                                    <p>20% Off</p>
                                                                </div>
                                                                <div className="obd-flash-deal-details-range-section-and-pro-count-wb">
                                                                    <h4>
                                                                    <div className="progress-bar blue stripes">
                                                                        <span style={{width: "40%"}}></span>
                                                                    </div>
                                                                    </h4>
                                                                    <p>150 sold</p>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                                {/* Single Product */}
                                            </div>
                                            {/* Single Row End */}

                                            {/* Single Row Start */}
                                            <div className="row flash-deal-details-com-delproj-rww-webb-versnn">
                                                {/* Single Product */}
                                                <div className="col">
                                                    <div className="flash-deal-details-web-ddot-cmm-snnggl-prodct-web-vvesnn">
                                                        <Link to="/#">
                                                            <div className="flash-deal-details-ddot-cmm-snnggl-prodct-web-vvesnn-img">
                                                                <img src={require('../../../assets/item-1.png')} alt="orponbd global collections"/>
                                                            </div>
                                                            <div className="flash-deal-deetls-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                            
                                                                <div className="flash-deal-details-com-price-text-boxx">
                                                                    <h3><span>৳</span> 1200</h3>
                                                                    <del><h4><span>৳</span> 1200</h4></del>
                                                                </div>
                                                                <div className="flash-deal-details-webbb-offerrx">
                                                                    <p>20% Off</p>
                                                                </div>
                                                                <div className="obd-flash-deal-details-range-section-and-pro-count-wb">
                                                                    <h4>
                                                                    <div className="progress-bar blue stripes">
                                                                        <span style={{width: "70%"}}></span>
                                                                    </div>
                                                                    </h4>
                                                                    <p>150 sold</p>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                                {/* Single Product */}

                                                {/* Single Product */}
                                                <div className="col">
                                                    <div className="flash-deal-details-web-ddot-cmm-snnggl-prodct-web-vvesnn">
                                                        <Link to="/#">
                                                            <div className="flash-deal-details-ddot-cmm-snnggl-prodct-web-vvesnn-img">
                                                                <img src={require('../../../assets/item-4.png')} alt="orponbd global collections"/>
                                                            </div>
                                                            <div className="flash-deal-deetls-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                                
                                                                <div className="flash-deal-details-com-price-text-boxx">
                                                                    <h3><span>৳</span> 1200</h3>
                                                                    <del><h4><span>৳</span> 1200</h4></del>
                                                                </div>
                                                                <div className="flash-deal-details-webbb-offerrx">
                                                                    <p>20% Off</p>
                                                                </div>
                                                                <div className="obd-flash-deal-details-range-section-and-pro-count-wb">
                                                                    <h4>
                                                                    <div className="progress-bar blue stripes">
                                                                        <span style={{width: "90%"}}></span>
                                                                    </div>
                                                                    </h4>
                                                                    <p>150 sold</p>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                                {/* Single Product */}
                                                <div className="col">
                                                    <div className="flash-deal-details-web-ddot-cmm-snnggl-prodct-web-vvesnn">
                                                        <Link to="/#">
                                                            <div className="flash-deal-details-ddot-cmm-snnggl-prodct-web-vvesnn-img">
                                                                <img src={require('../../../assets/item-9.png')} alt="orponbd global collections"/>
                                                            </div>
                                                            <div className="flash-deal-deetls-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                                
                                                                <div className="flash-deal-details-com-price-text-boxx">
                                                                    <h3><span>৳</span> 1200</h3>
                                                                    <del><h4><span>৳</span> 1200</h4></del>
                                                                </div>
                                                                <div className="flash-deal-details-webbb-offerrx">
                                                                    <p>20% Off</p>
                                                                </div>
                                                                <div className="obd-flash-deal-details-range-section-and-pro-count-wb">
                                                                    <h4>
                                                                    <div className="progress-bar blue stripes">
                                                                        <span style={{width: "70%"}}></span>
                                                                    </div>
                                                                    </h4>
                                                                    <p>150 sold</p>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                                {/* Single Product */}

                                                {/* Single Product */}
                                                <div className="col">
                                                    <div className="flash-deal-details-web-ddot-cmm-snnggl-prodct-web-vvesnn">
                                                        <Link to="/#">
                                                            <div className="flash-deal-details-ddot-cmm-snnggl-prodct-web-vvesnn-img">
                                                                <img src={require('../../../assets/item-14.png')} alt="orponbd global collections"/>
                                                            </div>
                                                            <div className="flash-deal-deetls-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                                
                                                                <div className="flash-deal-details-com-price-text-boxx">
                                                                    <h3><span>৳</span> 1200</h3>
                                                                    <del><h4><span>৳</span> 1200</h4></del>
                                                                </div>
                                                                <div className="flash-deal-details-webbb-offerrx">
                                                                    <p>20% Off</p>
                                                                </div>
                                                                <div className="obd-flash-deal-details-range-section-and-pro-count-wb">
                                                                    <h4>
                                                                    <div className="progress-bar blue stripes">
                                                                        <span style={{width: "50%"}}></span>
                                                                    </div>
                                                                    </h4>
                                                                    <p>150 sold</p>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                                {/* Single Product */}
                                                {/* Single Product */}
                                                <div className="col">
                                                    <div className="flash-deal-details-web-ddot-cmm-snnggl-prodct-web-vvesnn">
                                                        <Link to="/#">
                                                            <div className="flash-deal-details-ddot-cmm-snnggl-prodct-web-vvesnn-img">
                                                                <img src={require('../../../assets/item-14.png')} alt="orponbd global collections"/>
                                                            </div>
                                                            <div className="flash-deal-deetls-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                                
                                                                <div className="flash-deal-details-com-price-text-boxx">
                                                                    <h3><span>৳</span> 1200</h3>
                                                                    <del><h4><span>৳</span> 1200</h4></del>
                                                                </div>
                                                                <div className="flash-deal-details-webbb-offerrx">
                                                                    <p>20% Off</p>
                                                                </div>
                                                                <div className="obd-flash-deal-details-range-section-and-pro-count-wb">
                                                                    <h4>
                                                                    <div className="progress-bar blue stripes">
                                                                        <span style={{width: "50%"}}></span>
                                                                    </div>
                                                                    </h4>
                                                                    <p>150 sold</p>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                                {/* Single Product */}
                                            </div>
                                            {/* Single Row End */}
                                        </div>
                                    </div>
                                    </TabPanel>
                                </Tabs>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Tabs Products section End */}



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
