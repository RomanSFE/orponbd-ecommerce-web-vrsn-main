import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './homebannersec.css';

export default class HomeBannerSec extends Component {
    render() {
        return (
            <>
            <div className="home-page-banner-section-web-verrsioon-main-box">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="home-page-banner-section-web-verrsioon-box-immg">
                                <Link to="">
                                    <img src={require('../../../assets/home-banner-web.png')} alt="orponbd online shop"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
