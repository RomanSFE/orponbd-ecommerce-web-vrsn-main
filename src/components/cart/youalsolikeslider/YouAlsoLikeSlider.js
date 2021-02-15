import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './youalsolikeslider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default class YouAlsoLikeSlider extends Component {
    render() {
        var youalsolikesld = {
            dots: false,
            arrows: true,
            infinite: true,
            speed: 500,
            autoplay: true,
            slidesToShow: 6,
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
            <div className="obd-related-productt-dot-com-main-sectionx">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="obd-related-productt-dot-main-sec-bboxx">

                                <div className="obd-related-product-ccm-dealmmnnff-bb-web-v">
                                    <p> You May Also Like</p>
                                    <Link to="/#"><span>View More <i className="fa fa-angle-right"></i></span></Link>
                                </div>

                                    <div className="row obd-related-products-com-delproj-rww">
                                        <div className="obdd-dot-cmm-section-box-neww-arrival">
                                            <Slider {...youalsolikesld}>
                                                {/* Single product start */}
                                                <div className="obd-related-product-web-ddot-cmm-snnggl-prodct">
                                                    <Link to="#">
                                                        <div className="obd-related-product-web-ddot-cmm-snnggl-prodct-img">
                                                            <img src={require('../../../assets/women-fas-cat-1.png')} alt="orponbd Online Shop"/>
                                                        </div>
                                                        <div className="obd-related-product-web-ddot-cmm-snnggl-prodct-ttxt">
                                                            <p>Product Name In Two Line maximum</p>
                                                            <div className="related-product-selllng-start-rattng">
                                                                <span class="fa fa-star checked"></span>
                                                                <span className="related-product-ttotl-star-rat-count">4.5</span>
                                                                <span className="related-product-star-count-number">(150 Sold)</span>
                                                            </div>
                                                            <div className="related-product-ratng-priicice-web-vvrsn">
                                                                <h3><span>৳</span> 1200</h3>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                                {/* Single product end */}
                                                {/* Single product start */}
                                                <div className="obd-related-product-web-ddot-cmm-snnggl-prodct">
                                                    <Link to="#">
                                                        <div className="obd-related-product-web-ddot-cmm-snnggl-prodct-img">
                                                            <img src={require('../../../assets/women-fas-cat-2.png')} alt="orponbd global collections"/>
                                                        </div>
                                                        <div className="obd-related-product-web-ddot-cmm-snnggl-prodct-ttxt">
                                                            <p>Product Name In Two Line maximum</p>
                                                            <div className="related-product-selllng-start-rattng">
                                                                <span class="fa fa-star checked"></span>
                                                                <span className="related-product-ttotl-star-rat-count">4.5</span>
                                                                <span className="related-product-star-count-number">(150 Sold)</span>
                                                            </div>
                                                            <div className="related-product-ratng-priicice-web-vvrsn">
                                                                <h3><span>৳</span> 1200</h3>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                                {/* Single product end */}
                                                {/* Single product start */}
                                                <div className="obd-related-product-web-ddot-cmm-snnggl-prodct">
                                                    <Link to="#">
                                                        <div className="obd-related-product-web-ddot-cmm-snnggl-prodct-img">
                                                            <img src={require('../../../assets/women-fas-cat-3.png')} alt="orponbd global collections"/>
                                                        </div>
                                                        <div className="obd-related-product-web-ddot-cmm-snnggl-prodct-ttxt">
                                                            <p>Product Name In Two Line maximum</p>
                                                            <div className="related-product-selllng-start-rattng">
                                                                <span class="fa fa-star checked"></span>
                                                                <span className="related-product-ttotl-star-rat-count">4.5</span>
                                                                <span className="related-product-star-count-number">(150 Sold)</span>
                                                            </div>
                                                            <div className="related-product-ratng-priicice-web-vvrsn">
                                                                <h3><span>৳</span> 1200</h3>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                                {/* Single product end */}
                                                {/* Single product start */}
                                                <div className="obd-related-product-web-ddot-cmm-snnggl-prodct">
                                                    <Link to="#">
                                                        <div className="obd-related-product-web-ddot-cmm-snnggl-prodct-img">
                                                            <img src={require('../../../assets/women-fas-cat-4.png')} alt="orponbd global collections"/>
                                                        </div>
                                                        <div className="obd-related-product-web-ddot-cmm-snnggl-prodct-ttxt">
                                                            <p>Product Name In Two Line maximum</p>
                                                            <div className="related-product-selllng-start-rattng">
                                                                <span class="fa fa-star checked"></span>
                                                                <span className="related-product-ttotl-star-rat-count">4.5</span>
                                                                <span className="related-product-star-count-number">(150 Sold)</span>
                                                            </div>
                                                            <div className="related-product-ratng-priicice-web-vvrsn">
                                                                <h3><span>৳</span> 1200</h3>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                                {/* Single product end */}
                                                {/* Single product start */}
                                                <div className="obd-related-product-web-ddot-cmm-snnggl-prodct">
                                                    <Link to="#">
                                                        <div className="obd-related-product-web-ddot-cmm-snnggl-prodct-img">
                                                            <img src={require('../../../assets/women-fas-cat-5.png')} alt="orponbd global collections"/>
                                                        </div>
                                                        <div className="obd-related-product-web-ddot-cmm-snnggl-prodct-ttxt">
                                                            <p>Product Name In Two Line maximum</p>
                                                            <div className="related-product-selllng-start-rattng">
                                                                <span class="fa fa-star checked"></span>
                                                                <span className="related-product-ttotl-star-rat-count">4.5</span>
                                                                <span className="related-product-star-count-number">(150 Sold)</span>
                                                            </div>
                                                            <div className="related-product-ratng-priicice-web-vvrsn">
                                                                <h3><span>৳</span> 1200</h3>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                                {/* Single product end */}
                                                {/* Single product start */}
                                                <div className="obd-related-product-web-ddot-cmm-snnggl-prodct">
                                                    <Link to="#">
                                                        <div className="obd-related-product-web-ddot-cmm-snnggl-prodct-img">
                                                            <img src={require('../../../assets/women-fas-cat-6.png')} alt="orponbd global collections"/>
                                                        </div>
                                                        <div className="obd-related-product-web-ddot-cmm-snnggl-prodct-ttxt">
                                                            <p>Product Name In Two Line maximum</p>
                                                            <div className="related-product-selllng-start-rattng">
                                                                <span class="fa fa-star checked"></span>
                                                                <span className="related-product-ttotl-star-rat-count">4.5</span>
                                                                <span className="related-product-star-count-number">(150 Sold)</span>
                                                            </div>
                                                            <div className="related-product-ratng-priicice-web-vvrsn">
                                                                <h3><span>৳</span> 1200</h3>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                                {/* Single product end */}
                                                {/* Single product start */}
                                                <div className="obd-related-product-web-ddot-cmm-snnggl-prodct">
                                                    <Link to="#">
                                                        <div className="obd-related-product-web-ddot-cmm-snnggl-prodct-img">
                                                            <img src={require('../../../assets/women-fas-cat-1.png')} alt="orponbd Online Shop"/>
                                                        </div>
                                                        <div className="obd-related-product-web-ddot-cmm-snnggl-prodct-ttxt">
                                                            <p>Product Name In Two Line maximum</p>
                                                            <div className="related-product-selllng-start-rattng">
                                                                <span class="fa fa-star checked"></span>
                                                                <span className="related-product-ttotl-star-rat-count">4.5</span>
                                                                <span className="related-product-star-count-number">(150 Sold)</span>
                                                            </div>
                                                            <div className="related-product-ratng-priicice-web-vvrsn">
                                                                <h3><span>৳</span> 1200</h3>
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
            </>
        )
    }
}
