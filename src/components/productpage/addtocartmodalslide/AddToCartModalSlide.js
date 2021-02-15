import React, { Component } from 'react';
import './addtocartmodalslide.css';
import {Link} from 'react-router-dom';

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default class AddToCartModalSlide extends Component {
    render() {
        return (
            <>
            <div className="obd-add-to-cart-modal-box-slider-only-sliderrr-wrp-all-main-wrap">
                <div className="obd-add-to-cart-modal-box-slider-only-sliderrr-wrp-hedd-sec">
                    <h4>Customers Who View This Item Also Bought</h4>
                </div>
            
                <div className="obd-add-to-cart-modal-box-slider-only-sliderrr-wrp">
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={125}
                        totalSlides={3}
                        currentSlide={0}
                        isPlaying= 'true'
                        infinite='true'
                    >
                    <Slider>
                    <Slide index={0}>
                    <div className="obd-add-to-cart-modal-box-slider-section-box">
                        {/* Single Row Start */}
                        <div className="row obd-add-to-cart-modal-box-slider-section-ex-pdd">
                        
                            <div className="col-md-3">
                                {/* Single product start */}
                                <div className="obd-add-to-cart-modal-web-ddot-cmm-snnggl-prodct">
                                        <Link to="#">
                                            <div className="obd-add-to-cart-modal-web-ddot-cmm-snnggl-prodct-img">
                                                <img src={require('../../../assets/women-fas-cat-1.png')} alt="orponbd Online Shop"/>
                                            </div>
                                            <div className="obd-add-to-cart-modal-web-ddot-cmm-snnggl-prodct-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <div className="obd-add-to-cart-modal-selllng-start-rattng">
                                                    <span class="fa fa-star checked"></span>
                                                    <span className="obd-add-to-cart-modal-ttotl-star-rat-count">4.5</span>
                                                    <span className="obd-add-to-cart-modal-star-count-number">(150 Sold)</span>
                                                </div>
                                                <div className="obd-add-to-cart-modal-ratng-priicice-web-vvrsn">
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                            </div>
                            <div className="col-md-3">
                                {/* Single product start */}
                                <div className="obd-add-to-cart-modal-web-ddot-cmm-snnggl-prodct">
                                        <Link to="#">
                                            <div className="obd-add-to-cart-modal-web-ddot-cmm-snnggl-prodct-img">
                                                <img src={require('../../../assets/women-fas-cat-2.png')} alt="orponbd Online Shop"/>
                                            </div>
                                            <div className="obd-add-to-cart-modal-web-ddot-cmm-snnggl-prodct-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <div className="obd-add-to-cart-modal-selllng-start-rattng">
                                                    <span class="fa fa-star checked"></span>
                                                    <span className="obd-add-to-cart-modal-ttotl-star-rat-count">4.5</span>
                                                    <span className="obd-add-to-cart-modal-star-count-number">(150 Sold)</span>
                                                </div>
                                                <div className="obd-add-to-cart-modal-ratng-priicice-web-vvrsn">
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                            </div>
                            <div className="col-md-3">
                                {/* Single product start */}
                                <div className="obd-add-to-cart-modal-web-ddot-cmm-snnggl-prodct">
                                        <Link to="#">
                                            <div className="obd-add-to-cart-modal-web-ddot-cmm-snnggl-prodct-img">
                                                <img src={require('../../../assets/women-fas-cat-3.png')} alt="orponbd Online Shop"/>
                                            </div>
                                            <div className="obd-add-to-cart-modal-web-ddot-cmm-snnggl-prodct-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <div className="obd-add-to-cart-modal-selllng-start-rattng">
                                                    <span class="fa fa-star checked"></span>
                                                    <span className="obd-add-to-cart-modal-ttotl-star-rat-count">4.5</span>
                                                    <span className="obd-add-to-cart-modal-star-count-number">(150 Sold)</span>
                                                </div>
                                                <div className="obd-add-to-cart-modal-ratng-priicice-web-vvrsn">
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                            </div>
                            <div className="col-md-3">
                                {/* Single product start */}
                                <div className="obd-add-to-cart-modal-web-ddot-cmm-snnggl-prodct">
                                        <Link to="#">
                                            <div className="obd-add-to-cart-modal-web-ddot-cmm-snnggl-prodct-img">
                                                <img src={require('../../../assets/women-fas-cat-3.png')} alt="orponbd Online Shop"/>
                                            </div>
                                            <div className="obd-add-to-cart-modal-web-ddot-cmm-snnggl-prodct-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <div className="obd-add-to-cart-modal-selllng-start-rattng">
                                                    <span class="fa fa-star checked"></span>
                                                    <span className="obd-add-to-cart-modal-ttotl-star-rat-count">4.5</span>
                                                    <span className="obd-add-to-cart-modal-star-count-number">(150 Sold)</span>
                                                </div>
                                                <div className="obd-add-to-cart-modal-ratng-priicice-web-vvrsn">
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                            </div>
                        </div>
                        {/* Single Row End*/}
                    </div>
                    </Slide>

                    <Slide index={1}>
                        <div className="obd-add-to-cart-modal-box-slider-section-box">
                            {/* Single Row Start */}
                            <div className="row obd-add-to-cart-modal-box-slider-section-ex-pdd">
                                <div className="col-md-3">
                                {/* Single product start */}
                                <div className="obd-add-to-cart-modal-web-ddot-cmm-snnggl-prodct">
                                        <Link to="#">
                                            <div className="obd-add-to-cart-modal-web-ddot-cmm-snnggl-prodct-img">
                                                <img src={require('../../../assets/women-fas-cat-2.png')} alt="orponbd Online Shop"/>
                                            </div>
                                            <div className="obd-add-to-cart-modal-web-ddot-cmm-snnggl-prodct-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <div className="obd-add-to-cart-modal-selllng-start-rattng">
                                                    <span class="fa fa-star checked"></span>
                                                    <span className="obd-add-to-cart-modal-ttotl-star-rat-count">4.5</span>
                                                    <span className="obd-add-to-cart-modal-star-count-number">(150 Sold)</span>
                                                </div>
                                                <div className="obd-add-to-cart-modal-ratng-priicice-web-vvrsn">
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                            </div>
                            <div className="col-md-3">
                                {/* Single product start */}
                                <div className="obd-add-to-cart-modal-web-ddot-cmm-snnggl-prodct">
                                        <Link to="#">
                                            <div className="obd-add-to-cart-modal-web-ddot-cmm-snnggl-prodct-img">
                                                <img src={require('../../../assets/women-fas-cat-6.png')} alt="orponbd Online Shop"/>
                                            </div>
                                            <div className="obd-add-to-cart-modal-web-ddot-cmm-snnggl-prodct-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <div className="obd-add-to-cart-modal-selllng-start-rattng">
                                                    <span class="fa fa-star checked"></span>
                                                    <span className="obd-add-to-cart-modal-ttotl-star-rat-count">4.5</span>
                                                    <span className="obd-add-to-cart-modal-star-count-number">(150 Sold)</span>
                                                </div>
                                                <div className="obd-add-to-cart-modal-ratng-priicice-web-vvrsn">
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                            </div>
                            <div className="col-md-3">
                                {/* Single product start */}
                                <div className="obd-add-to-cart-modal-web-ddot-cmm-snnggl-prodct">
                                        <Link to="#">
                                            <div className="obd-add-to-cart-modal-web-ddot-cmm-snnggl-prodct-img">
                                                <img src={require('../../../assets/women-fas-cat-2.png')} alt="orponbd Online Shop"/>
                                            </div>
                                            <div className="obd-add-to-cart-modal-web-ddot-cmm-snnggl-prodct-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <div className="obd-add-to-cart-modal-selllng-start-rattng">
                                                    <span class="fa fa-star checked"></span>
                                                    <span className="obd-add-to-cart-modal-ttotl-star-rat-count">4.5</span>
                                                    <span className="obd-add-to-cart-modal-star-count-number">(150 Sold)</span>
                                                </div>
                                                <div className="obd-add-to-cart-modal-ratng-priicice-web-vvrsn">
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                            </div>
                            <div className="col-md-3">
                                {/* Single product start */}
                                <div className="obd-add-to-cart-modal-web-ddot-cmm-snnggl-prodct">
                                        <Link to="#">
                                            <div className="obd-add-to-cart-modal-web-ddot-cmm-snnggl-prodct-img">
                                                <img src={require('../../../assets/women-fas-cat-2.png')} alt="orponbd Online Shop"/>
                                            </div>
                                            <div className="obd-add-to-cart-modal-web-ddot-cmm-snnggl-prodct-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <div className="obd-add-to-cart-modal-selllng-start-rattng">
                                                    <span class="fa fa-star checked"></span>
                                                    <span className="obd-add-to-cart-modal-ttotl-star-rat-count">4.5</span>
                                                    <span className="obd-add-to-cart-modal-star-count-number">(150 Sold)</span>
                                                </div>
                                                <div className="obd-add-to-cart-modal-ratng-priicice-web-vvrsn">
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                            </div>
                        </div>
                        {/* Single Row */}
                        </div>
                    </Slide>
                    <Slide index={2}>
                    <div className="obd-add-to-cart-modal-box-slider-section-box">
                        {/* Single Row Start */}
                        <div className="row obd-add-to-cart-modal-box-slider-section-ex-pdd">
                        
                            <div className="col-md-3">
                                {/* Single product start */}
                                <div className="obd-add-to-cart-modal-web-ddot-cmm-snnggl-prodct">
                                        <Link to="#">
                                            <div className="obd-add-to-cart-modal-web-ddot-cmm-snnggl-prodct-img">
                                                <img src={require('../../../assets/women-fas-cat-2.png')} alt="orponbd Online Shop"/>
                                            </div>
                                            <div className="obd-add-to-cart-modal-web-ddot-cmm-snnggl-prodct-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <div className="obd-add-to-cart-modal-selllng-start-rattng">
                                                    <span class="fa fa-star checked"></span>
                                                    <span className="obd-add-to-cart-modal-ttotl-star-rat-count">4.5</span>
                                                    <span className="obd-add-to-cart-modal-star-count-number">(150 Sold)</span>
                                                </div>
                                                <div className="obd-add-to-cart-modal-ratng-priicice-web-vvrsn">
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                            </div>
                            <div className="col-md-3">
                                {/* Single product start */}
                                <div className="obd-add-to-cart-modal-web-ddot-cmm-snnggl-prodct">
                                        <Link to="#">
                                            <div className="obd-add-to-cart-modal-web-ddot-cmm-snnggl-prodct-img">
                                                <img src={require('../../../assets/women-fas-cat-1.png')} alt="orponbd Online Shop"/>
                                            </div>
                                            <div className="obd-add-to-cart-modal-web-ddot-cmm-snnggl-prodct-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <div className="obd-add-to-cart-modal-selllng-start-rattng">
                                                    <span class="fa fa-star checked"></span>
                                                    <span className="obd-add-to-cart-modal-ttotl-star-rat-count">4.5</span>
                                                    <span className="obd-add-to-cart-modal-star-count-number">(150 Sold)</span>
                                                </div>
                                                <div className="obd-add-to-cart-modal-ratng-priicice-web-vvrsn">
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                            </div>
                            <div className="col-md-3">
                                {/* Single product start */}
                                <div className="obd-add-to-cart-modal-web-ddot-cmm-snnggl-prodct">
                                        <Link to="#">
                                            <div className="obd-add-to-cart-modal-web-ddot-cmm-snnggl-prodct-img">
                                                <img src={require('../../../assets/women-fas-cat-6.png')} alt="orponbd Online Shop"/>
                                            </div>
                                            <div className="obd-add-to-cart-modal-web-ddot-cmm-snnggl-prodct-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <div className="obd-add-to-cart-modal-selllng-start-rattng">
                                                    <span class="fa fa-star checked"></span>
                                                    <span className="obd-add-to-cart-modal-ttotl-star-rat-count">4.5</span>
                                                    <span className="obd-add-to-cart-modal-star-count-number">(150 Sold)</span>
                                                </div>
                                                <div className="obd-add-to-cart-modal-ratng-priicice-web-vvrsn">
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                            </div>
                            <div className="col-md-3">
                                {/* Single product start */}
                                <div className="obd-add-to-cart-modal-web-ddot-cmm-snnggl-prodct">
                                        <Link to="#">
                                            <div className="obd-add-to-cart-modal-web-ddot-cmm-snnggl-prodct-img">
                                                <img src={require('../../../assets/women-fas-cat-6.png')} alt="orponbd Online Shop"/>
                                            </div>
                                            <div className="obd-add-to-cart-modal-web-ddot-cmm-snnggl-prodct-ttxt">
                                                <p>Product Name In Two Line maximum</p>
                                                <div className="obd-add-to-cart-modal-selllng-start-rattng">
                                                    <span class="fa fa-star checked"></span>
                                                    <span className="obd-add-to-cart-modal-ttotl-star-rat-count">4.5</span>
                                                    <span className="obd-add-to-cart-modal-star-count-number">(150 Sold)</span>
                                                </div>
                                                <div className="obd-add-to-cart-modal-ratng-priicice-web-vvrsn">
                                                    <h3><span>৳</span> 1200</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* Single product end */}
                            </div>
                        </div>
                        {/* Single Row */}
                    </div>
                    </Slide>
                    </Slider>

                        <div className="obd-add-to-cart-modal-ratng-modal-dotts-sec">
                            <ButtonBack><i class="fas fa-circle"></i></ButtonBack>
                            <ButtonNext><i class="fas fa-circle"></i></ButtonNext>
                            <ButtonNext><i class="fas fa-circle"></i></ButtonNext>
                        </div>
                    </CarouselProvider>
                </div>
        </div>
            </>
        )
    }
}
