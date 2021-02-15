import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './hotcategorysecweb.css';

export default class HotCategorySecWeb extends Component {
    render() {
        return (
            <>
            <div className="hotcategoryy-com-webversion-main-sectionx">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="hot-categoryy-wexv-dot-main-sec-bboxx-web-version">
                                <div className="hot-cattgory-dott-ccm-dealmmnnff-bb-web-verrsn">
                                    <p><span><img src={require('../../../assets/hotcategory-icon.svg')} alt="orponbd online shop"/></span> Hot Category</p>
                                </div>

                                <div className="row hott-categorry-extra-ro-padd-lefft-sec">
                                    <div className="col-md-4">
                                        <div className="hot-categoory-banner-image-section">
                                            <Link to="">
                                                <img src={require('../../../assets/hot-cat-banner.png')} alt="orponbd online shop"/>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        {/* single Row start */}
                                        <div className="row hott-categorry-extra-ro-padd">
                                            <div className="col-md-6 col-12">
                                               <Link to="/">
                                                    <div className="hot-categoory-single-banneer-secc">
                                                        <img src={require('../../../assets/hot-cat-banner-item-1.png')} alt="orponbd online shop"/>
                                                        <div className="hot-category-category-nnamsam-web-txt">
                                                            <h4>Beauty & Health</h4>
                                                        </div>
                                                    </div>
                                               </Link> 
                                            </div>
                                            <div className="col-md-6 col-12">
                                                <Link to="/">
                                                    <div className="hot-categoory-single-banneer-secc">
                                                        <img src={require('../../../assets/hot-cat-banner-item-2.png')} alt="orponbd online shop"/>
                                                        <div className="hot-category-category-nnamsam-web-txt">
                                                            <h4>Kitchen Accessories</h4>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                        {/* single Row End */}
                                        {/* single Row start */}
                                        <div className="row hott-categorry-extra-ro-padd">
                                            <div className="col-md-6 col-12">
                                               <Link to="/">
                                                    <div className="hot-categoory-single-banneer-secc">
                                                        <img src={require('../../../assets/hot-cat-banner-item-3.png')} alt="orponbd online shop"/>
                                                        <div className="hot-category-category-nnamsam-web-txt">
                                                            <h4>Women's Fashion</h4>
                                                        </div>
                                                    </div>
                                               </Link> 
                                            </div>
                                            <div className="col-md-6 col-12">
                                                <Link to="/">
                                                    <div className="hot-categoory-single-banneer-secc">
                                                        <img src={require('../../../assets/hot-cat-banner-item-4.png')} alt="orponbd online shop"/>
                                                        <div className="hot-category-category-nnamsam-web-txt">
                                                            <h4>Travel Accessories</h4>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                        {/* single Row End */}
                                        {/* single Row start */}
                                        <div className="row hott-categorry-extra-ro-padd">
                                            <div className="col-md-6 col-12">
                                               <Link to="/">
                                                    <div className="hot-categoory-single-banneer-secc">
                                                        <img src={require('../../../assets/hot-cat-banner-item-5.png')} alt="orponbd online shop"/>
                                                        <div className="hot-category-category-nnamsam-web-txt">
                                                            <h4>Mobile Accessories</h4>
                                                        </div>
                                                    </div>
                                               </Link> 
                                            </div>
                                            <div className="col-md-6 col-12">
                                                <Link to="/">
                                                    <div className="hot-categoory-single-banneer-secc">
                                                        <img src={require('../../../assets/hot-cat-banner-item-6.png')} alt="orponbd online shop"/>
                                                        <div className="hot-category-category-nnamsam-web-txt">
                                                            <h4>Smart Watches</h4>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                        {/* single Row End */}
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
