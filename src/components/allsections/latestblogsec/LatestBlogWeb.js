import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './latestblogweb.css';

export default class LatestBlogWeb extends Component {
    render() {
        return (
            <>
            <div className="latest-blogg-web-com-webversion-main-sectionx">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="latest-blog-wev-wexv-dot-main-sec-bboxx-web-version">
                                <div className="latest-blog-web-dott-ccm-dealmmnnff-bb-web-verrsn">
                                    <p><span><img src={require('../../../assets/latest-blog-web-versn.svg')} alt="orponbd online shop"/></span> LATEST BLOG</p>
                                </div>

                                <div className="row latest-bllog-wb-com-delproj-rww-webb-versnn">
                                    <div className="col-md-4 col-12">
                                        <div className="lattest-blog-web-ddot-cmm-snnggl-prodct-web-vvesnn">
                                            <Link to="/#">
                                                <div className="latesst-blogg-ddot-cmm-snnggl-prodct-web-vvesnn-img">
                                                    <img src={require('../../../assets/blog-web-1.png')} alt="orponbd online shop"/>
                                                </div>
                                                <div className="latesst-bblog-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                    <h4>Blog Heading Goes Here</h4>
                                                    <p>
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..
                                                    </p>
                                                    <div className="latesst-bblog-web-ddot-date-sec">
                                                        <p>12/12/2020 <span>2 comments</span></p>

                                                        <div className="latest-blog-read-mmor-txt-web-vvrsn">
                                                            <h3>Read More <span><i className="fas fa-angle-right"></i></span></h3>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-12">
                                        <div className="lattest-blog-web-ddot-cmm-snnggl-prodct-web-vvesnn">
                                            <Link to="/#">
                                                <div className="latesst-blogg-ddot-cmm-snnggl-prodct-web-vvesnn-img">
                                                    <img src={require('../../../assets/blog-web-1.png')} alt="orponbd online shop"/>
                                                </div>
                                                <div className="latesst-bblog-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                    <h4>Blog Heading Goes Here</h4>
                                                    <p>
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..
                                                    </p>
                                                    <div className="latesst-bblog-web-ddot-date-sec">
                                                        <p>12/12/2020 <span>2 comments</span></p>

                                                        <div className="latest-blog-read-mmor-txt-web-vvrsn">
                                                            <h3>Read More <span><i className="fas fa-angle-right"></i></span></h3>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-12">
                                        <div className="lattest-blog-web-ddot-cmm-snnggl-prodct-web-vvesnn">
                                            <Link to="/#">
                                                <div className="latesst-blogg-ddot-cmm-snnggl-prodct-web-vvesnn-img">
                                                    <img src={require('../../../assets/blog-web-1.png')} alt="orponbd online shop"/>
                                                </div>
                                                <div className="latesst-bblog-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                    <h4>Blog Heading Goes Here</h4>
                                                    <p>
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..
                                                    </p>
                                                    <div className="latesst-bblog-web-ddot-date-sec">
                                                        <p>12/12/2020 <span>2 comments</span></p>

                                                        <div className="latest-blog-read-mmor-txt-web-vvrsn">
                                                            <h3>Read More <span><i className="fas fa-angle-right"></i></span></h3>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                            </Link>
                                        </div>
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
