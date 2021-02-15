import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './topbrandsallweb.css';

import TopMenuSection from '../topmenusection/TopMenuSection';
import FooterWebSection from '../allsections/footerwebsection/FooterWebSection';

export default class TopBrandsAllWeb extends Component {
    render() {
        return (
            <>
            <div className="orponbd-womens-fashion-category-page-web-top-menu">
                <TopMenuSection/>
            </div>

            <div className="top-bbrands-com-webversion-main-sectionx-all-brands-box">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="top-bbrands-com-webversion-all-brands-hed-txxt-wv">
                                <h3>All Brands</h3>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="top-bbrands-com-webversion-all-brands-search text-right">
                                <div className="top-bbrands-all-pro-sectionn-web-v-search">
                                    <input type="search" placeholder="Enter product name.."/>
                                    <span className="top-bbrands-all-pro-brand-search-abb-btn"><button type="submit"><span><i className="fas fa-search"></i></span></button></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="top-bbrands-all-brnd-com-webversion-main-sectionx">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="topp-brands-all-brnd-wexv-dot-main-sec-bboxx-web-version">

                                {/* Single Brand Row Start */}
                                <div className="row top-brandds-all-brnd-com-delproj-rww-webb-versnn">
                                    {/* Single brand start */}
                                    <div className="col-md-2 col-6">
                                        <div className="topp-brandds-all-brnd-web-ddot-cmm-snnggl-prodct-web-vvesnn">
                                            <Link to="/brand-xiaomi">
                                                <div className="top-brandd-allx-snnggl-prodct-web-vvesnn-img">
                                                    <img src={require('../../assets/top-brand-1.png')} alt="orponbd online shop"/>
                                                </div>
                                                <div className="top-brandd-allx-ddot-cmm-snnggl-prodct-web-txt mx-auto">
                                                    <p>1500 Likes</p>
                                                </div>
                                                <div className="top-brandd-allx-snnggl-prodct-web-vvesnn-big-img">
                                                    <img src={require('../../assets/top-brand-11.png')} alt="orponbd online shop"/>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single brand end */}

                                    {/* Single brand start */}
                                    <div className="col-md-2 col-6">
                                        <div className="topp-brandds-all-brnd-web-ddot-cmm-snnggl-prodct-web-vvesnn">
                                            <Link to="/brand-xiaomi">
                                                <div className="top-brandd-allx-snnggl-prodct-web-vvesnn-img">
                                                    <img src={require('../../assets/top-brand-2.png')} alt="orponbd online shop"/>
                                                </div>
                                                <div className="top-brandd-allx-ddot-cmm-snnggl-prodct-web-txt mx-auto">
                                                    <p>1500 Likes</p>
                                                </div>
                                                <div className="top-brandd-allx-snnggl-prodct-web-vvesnn-big-img">
                                                    <img src={require('../../assets/top-brand-22.png')} alt="orponbd online shop"/>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single brand end */}

                                    {/* Single brand start */}
                                    <div className="col-md-2 col-6">
                                        <div className="topp-brandds-all-brnd-web-ddot-cmm-snnggl-prodct-web-vvesnn">
                                            <Link to="/brand-xiaomi">
                                                <div className="top-brandd-allx-snnggl-prodct-web-vvesnn-img">
                                                    <img src={require('../../assets/top-brand-3.png')} alt="orponbd online shop"/>
                                                </div>
                                                <div className="top-brandd-allx-ddot-cmm-snnggl-prodct-web-txt mx-auto">
                                                    <p>1500 Likes</p>
                                                </div>
                                                <div className="top-brandd-allx-snnggl-prodct-web-vvesnn-big-img">
                                                    <img src={require('../../assets/top-brand-33.png')} alt="orponbd online shop"/>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single brand end */}

                                    {/* Single brand start */}
                                    <div className="col-md-2 col-6">
                                        <div className="topp-brandds-all-brnd-web-ddot-cmm-snnggl-prodct-web-vvesnn">
                                            <Link to="/#">
                                                <div className="top-brandd-allx-snnggl-prodct-web-vvesnn-img">
                                                    <img src={require('../../assets/top-brand-4.png')} alt="orponbd online shop"/>
                                                </div>
                                                <div className="top-brandd-allx-ddot-cmm-snnggl-prodct-web-txt mx-auto">
                                                    <p>1500 Likes</p>
                                                </div>
                                                <div className="top-brandd-allx-snnggl-prodct-web-vvesnn-big-img">
                                                    <img src={require('../../assets/top-brand-44.png')} alt="orponbd online shop"/>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single brand end */}

                                    {/* Single brand start */}
                                    <div className="col-md-2 col-6">
                                        <div className="topp-brandds-all-brnd-web-ddot-cmm-snnggl-prodct-web-vvesnn">
                                            <Link to="/#">
                                                <div className="top-brandd-allx-snnggl-prodct-web-vvesnn-img">
                                                    <img src={require('../../assets/top-brand-5.png')} alt="orponbd online shop"/>
                                                </div>
                                                <div className="top-brandd-allx-ddot-cmm-snnggl-prodct-web-txt mx-auto">
                                                    <p>1500 Likes</p>
                                                </div>
                                                <div className="top-brandd-allx-snnggl-prodct-web-vvesnn-big-img">
                                                    <img src={require('../../assets/top-brand-55.png')} alt="orponbd online shop"/>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single brand end */}

                                    {/* Single brand start */}
                                    <div className="col-md-2 col-6">
                                        <div className="topp-brandds-all-brnd-web-ddot-cmm-snnggl-prodct-web-vvesnn">
                                            <Link to="/#">
                                                <div className="top-brandd-allx-snnggl-prodct-web-vvesnn-img">
                                                    <img src={require('../../assets/top-brand-6.png')} alt="orponbd online shop"/>
                                                </div>
                                                <div className="top-brandd-allx-ddot-cmm-snnggl-prodct-web-txt mx-auto">
                                                    <p>1500 Likes</p>
                                                </div>
                                                <div className="top-brandd-allx-snnggl-prodct-web-vvesnn-big-img">
                                                    <img src={require('../../assets/top-brand-66.png')} alt="orponbd online shop"/>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single brand end */}
                                </div>
                                {/* Single Brand Row End */}

                                {/* Single Brand Row Start */}
                                <div className="row top-brandds-all-brnd-com-delproj-rww-webb-versnn">
                                    {/* Single brand start */}
                                    <div className="col-md-2 col-6">
                                        <div className="topp-brandds-all-brnd-web-ddot-cmm-snnggl-prodct-web-vvesnn">
                                            <Link to="/brand-xiaomi">
                                                <div className="top-brandd-allx-snnggl-prodct-web-vvesnn-img">
                                                    <img src={require('../../assets/top-brand-6.png')} alt="orponbd online shop"/>
                                                </div>
                                                <div className="top-brandd-allx-ddot-cmm-snnggl-prodct-web-txt mx-auto">
                                                    <p>1500 Likes</p>
                                                </div>
                                                <div className="top-brandd-allx-snnggl-prodct-web-vvesnn-big-img">
                                                    <img src={require('../../assets/top-brand-66.png')} alt="orponbd online shop"/>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single brand end */}

                                    {/* Single brand start */}
                                    <div className="col-md-2 col-6">
                                        <div className="topp-brandds-all-brnd-web-ddot-cmm-snnggl-prodct-web-vvesnn">
                                            <Link to="/#">
                                                <div className="top-brandd-allx-snnggl-prodct-web-vvesnn-img">
                                                    <img src={require('../../assets/top-brand-3.png')} alt="orponbd online shop"/>
                                                </div>
                                                <div className="top-brandd-allx-ddot-cmm-snnggl-prodct-web-txt mx-auto">
                                                    <p>1500 Likes</p>
                                                </div>
                                                <div className="top-brandd-allx-snnggl-prodct-web-vvesnn-big-img">
                                                    <img src={require('../../assets/top-brand-33.png')} alt="orponbd online shop"/>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single brand end */}

                                    {/* Single brand start */}
                                    <div className="col-md-2 col-6">
                                        <div className="topp-brandds-all-brnd-web-ddot-cmm-snnggl-prodct-web-vvesnn">
                                            <Link to="/#">
                                                <div className="top-brandd-allx-snnggl-prodct-web-vvesnn-img">
                                                    <img src={require('../../assets/top-brand-1.png')} alt="orponbd online shop"/>
                                                </div>
                                                <div className="top-brandd-allx-ddot-cmm-snnggl-prodct-web-txt mx-auto">
                                                    <p>1500 Likes</p>
                                                </div>
                                                <div className="top-brandd-allx-snnggl-prodct-web-vvesnn-big-img">
                                                    <img src={require('../../assets/top-brand-11.png')} alt="orponbd online shop"/>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single brand end */}

                                    {/* Single brand start */}
                                    <div className="col-md-2 col-6">
                                        <div className="topp-brandds-all-brnd-web-ddot-cmm-snnggl-prodct-web-vvesnn">
                                            <Link to="/#">
                                                <div className="top-brandd-allx-snnggl-prodct-web-vvesnn-img">
                                                    <img src={require('../../assets/top-brand-5.png')} alt="orponbd online shop"/>
                                                </div>
                                                <div className="top-brandd-allx-ddot-cmm-snnggl-prodct-web-txt mx-auto">
                                                    <p>1500 Likes</p>
                                                </div>
                                                <div className="top-brandd-allx-snnggl-prodct-web-vvesnn-big-img">
                                                    <img src={require('../../assets/top-brand-55.png')} alt="orponbd online shop"/>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single brand end */}

                                    {/* Single brand start */}
                                    <div className="col-md-2 col-6">
                                        <div className="topp-brandds-all-brnd-web-ddot-cmm-snnggl-prodct-web-vvesnn">
                                            <Link to="/#">
                                                <div className="top-brandd-allx-snnggl-prodct-web-vvesnn-img">
                                                    <img src={require('../../assets/top-brand-4.png')} alt="orponbd online shop"/>
                                                </div>
                                                <div className="top-brandd-allx-ddot-cmm-snnggl-prodct-web-txt mx-auto">
                                                    <p>1500 Likes</p>
                                                </div>
                                                <div className="top-brandd-allx-snnggl-prodct-web-vvesnn-big-img">
                                                    <img src={require('../../assets/top-brand-44.png')} alt="orponbd online shop"/>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single brand end */}

                                    {/* Single brand start */}
                                    <div className="col-md-2 col-6">
                                        <div className="topp-brandds-all-brnd-web-ddot-cmm-snnggl-prodct-web-vvesnn">
                                            <Link to="/#">
                                                <div className="top-brandd-allx-snnggl-prodct-web-vvesnn-img">
                                                    <img src={require('../../assets/top-brand-2.png')} alt="orponbd online shop"/>
                                                </div>
                                                <div className="top-brandd-allx-ddot-cmm-snnggl-prodct-web-txt mx-auto">
                                                    <p>1500 Likes</p>
                                                </div>
                                                <div className="top-brandd-allx-snnggl-prodct-web-vvesnn-big-img">
                                                    <img src={require('../../assets/top-brand-22.png')} alt="orponbd online shop"/>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single brand end */}
                                </div>
                                {/* Single Brand Row End */}
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
