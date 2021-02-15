import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './homesliderandcategory.css';

export default class HomeSliderAndCategory extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 700,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            responsive: [
                {
                  breakpoint: 600,
                  settings: {
                    dots: true,
                    arrows: false
                  }
                }
              ]
          };
        return (
            <div className="home-slider-and-category-section-web-main-box">
                <div className="container">
                    <div className="row home-slider-and-category-exx-pdd">
                        <div className="col-md-2">
                            <div className="home-category-main-home-mega-menu">
                                <ul>
                                    <li><Link to="#">Global Shopping</Link>
                                        <div className="mega-menu-inner-box-webb-versn">
                                            <div className="row mega-menu-inner-box-webb-versn-ecxc-pdd">
                                                <div className="col-md-3">
                                                    <div className="mega-menu-inner-box-webb-versn-inner-box">
                                                        <div className="mega-menu-inner-box-webb-versn-inner-box-he">
                                                            <h5>Mobile</h5>
                                                        </div>
                                                        <li><Link to="#">MI</Link></li>
                                                        <li><Link to="#">Realme</Link></li>
                                                        <li><Link to="#">Samsung</Link></li>
                                                        <li><Link to="#">Apple</Link></li>
                                                        <li><Link to="#">Vivo</Link></li>
                                                        <li><Link to="#">Walton</Link></li>

                                                        <div className="mega-menu-inner-box-webb-versn-inner-box-he">
                                                            <h5>Mobile Accessories</h5>
                                                        </div>
                                                        <li><Link to="#">Mobile Covers</Link></li>
                                                        <li><Link to="#">Hedphones & Headsets</Link></li>
                                                        <li><Link to="#">Powerbank</Link></li>
                                                        <li><Link to="#">Screenprotector</Link></li>
                                                        <li><Link to="#">Mobile Chargers</Link></li>
                                                        <li><Link to="#">Mobile Holders</Link></li>
                                                        <li><Link to="#">Mobile Cables</Link></li>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="mega-menu-inner-box-webb-versn-inner-box">
                                                        <div className="mega-menu-inner-box-webb-versn-inner-box-he">
                                                            <h5>Computer Accessories</h5>
                                                        </div>
                                                        <li><Link to="#">External Hard Disks</Link></li>
                                                        <li><Link to="#">Pen Drives</Link></li>
                                                        <li><Link to="#">Laptop Bags</Link></li>
                                                        <li><Link to="#">Keyboard & Mouse</Link></li>
                                                        <li><Link to="#">Printers</Link></li>
                                                        <li><Link to="#">Monitors</Link></li>
                                                        <li><Link to="#">Router</Link></li>

                                                        <div className="mega-menu-inner-box-webb-versn-inner-box-he">
                                                            <h5>Camera & Accessories</h5>
                                                        </div>
                                                        <li><Link to="#">DSLR</Link></li>
                                                        <li><Link to="#">Compact & Bridge Cameras</Link></li>
                                                        <li><Link to="#">Sports & Action</Link></li>
                                                        <li><Link to="#">Lens</Link></li>
                                                        <li><Link to="#">Tripods</Link></li>
                                                        <li><Link to="#">Gimbles</Link></li>
                                                        <li><Link to="#">Camera Flash</Link></li>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="mega-menu-inner-box-webb-versn-inner-box">
                                                        <div className="mega-menu-inner-box-webb-versn-inner-box-he">
                                                            <h5>Speaker</h5>
                                                        </div>
                                                        <li><Link to="#">Home Audio Speakers</Link></li>
                                                        <li><Link to="#">Home Theatres</Link></li>
                                                        <li><Link to="#">Soundbars</Link></li>
                                                        <li><Link to="#">Bluetooth Speakers</Link></li>
                                                        <li><Link to="#">DTH Set Top Box</Link></li>
                                                        <li><Link to="#">Laptop Speaker</Link></li>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="mega-menu-inner-box-webb-versn-inner-box borderr-nonee-exx">
                                                        <div className="mega-menu-inner-box-webb-versn-inner-box-cat-img">
                                                            <img src={require('../../assets/electronics-cat-menu-img.png')} alt="orponbd Online Shop"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li><Link to="#">Men's Fashion</Link>
                                        <div className="mega-menu-inner-box-webb-versn">
                                            <div className="row mega-menu-inner-box-webb-versn-ecxc-pdd">
                                                <div className="col-md-3">
                                                    <div className="mega-menu-inner-box-webb-versn-inner-box">
                                                        <div className="mega-menu-inner-box-webb-versn-inner-box-he">
                                                            <h5>Top wear</h5>
                                                        </div>
                                                        <li><Link to="#">T-Shirts</Link></li>
                                                        <li><Link to="#">Formal Shirts</Link></li>
                                                        <li><Link to="#">Casual Shirts</Link></li>
                                                        <li><Link to="#">Suits, Blazers & Waistcoats</Link></li>
                                                        <li><Link to="#">Jackets</Link></li>
                                                        <li><Link to="#">Sweater</Link></li>
                                                        <li><Link to="#">Tracksuits</Link></li>
                                                        <li><Link to="#">Panjabi</Link></li>

                                                        <div className="mega-menu-inner-box-webb-versn-inner-box-he">
                                                            <h5>Bottom wear</h5>
                                                        </div>
                                                        <li><Link to="#">Jeans</Link></li>
                                                        <li><Link to="#">Casual Trousers</Link></li>
                                                        <li><Link to="#">Formal Trousers</Link></li>
                                                        <li><Link to="#">Track pants</Link></li>
                                                        <li><Link to="#">Shorts</Link></li>
                                                        <li><Link to="#">Lungi</Link></li>
                                                        <li><Link to="#">Three Fourths</Link></li>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="mega-menu-inner-box-webb-versn-inner-box">
                                                        <div className="mega-menu-inner-box-webb-versn-inner-box-he">
                                                            <h5>Men's Grooming</h5>
                                                        </div>
                                                        <li><Link to="#">Deodorants</Link></li>
                                                        <li><Link to="#">Perfumes</Link></li>
                                                        <li><Link to="#">Beard Care & Grooming</Link></li>
                                                        <li><Link to="#">Shaving & Aftershave</Link></li>
                                                        <li><Link to="#">Body & Face Skin Care</Link></li>
                                                        <li><Link to="#">Trimmers</Link></li>
                                                        <li><Link to="#">Shavers</Link></li>
                                                        <li><Link to="#">Grooming Kits</Link></li>

                                                        <div className="mega-menu-inner-box-webb-versn-inner-box-he">
                                                            <h5>Accessories</h5>
                                                        </div>
                                                        <li><Link to="#">Socks</Link></li>
                                                        <li><Link to="#">Backpacks</Link></li>
                                                        <li><Link to="#">Wallets</Link></li>
                                                        <li><Link to="#">Belts</Link></li>
                                                        <li><Link to="#">Sunglasses</Link></li>
                                                        <li><Link to="#">Luggage & Travel</Link></li>
                                                        <li><Link to="#">Frames</Link></li>
                                                        <li><Link to="#">Jewellery</Link></li>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="mega-menu-inner-box-webb-versn-inner-box">
                                                        <div className="mega-menu-inner-box-webb-versn-inner-box-he">
                                                            <h5>Footwear</h5>
                                                        </div>
                                                        <li><Link to="#">Sports Shoes</Link></li>
                                                        <li><Link to="#">Home Theatres</Link></li>
                                                        <li><Link to="#">Sports Shoes</Link></li>
                                                        <li><Link to="#">Casual Shoes</Link></li>
                                                        <li><Link to="#">Formal Shoes</Link></li>
                                                        <li><Link to="#">Sandals & Floaters</Link></li>
                                                        <li><Link to="#">Flip- Flops</Link></li>
                                                        <li><Link to="#">Loafers</Link></li>
                                                        <li><Link to="#">Boots</Link></li>
                                                        <li><Link to="#">Running Shoes</Link></li>
                                                        <li><Link to="#">Sneakers</Link></li>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="mega-menu-inner-box-webb-versn-inner-box borderr-nonee-exx">
                                                        <div className="mega-menu-inner-box-webb-versn-inner-box-cat-img">
                                                            <img src={require('../../assets/obd-mens-fashion-banner.png')} alt="orponbd Online Shop"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li><Link to="#">Beauty & Health</Link>
                                        <div className="mega-menu-inner-box-webb-versn">
                                            <div className="row mega-menu-inner-box-webb-versn-ecxc-pdd">
                                                <div className="col-md-3">
                                                    <div className="mega-menu-inner-box-webb-versn-inner-box">
                                                        <div className="mega-menu-inner-box-webb-versn-inner-box-he">
                                                            <h5>Mobile</h5>
                                                        </div>
                                                        <li><Link to="#">MI</Link></li>
                                                        <li><Link to="#">Realme</Link></li>
                                                        <li><Link to="#">Samsung</Link></li>
                                                        <li><Link to="#">Apple</Link></li>
                                                        <li><Link to="#">Vivo</Link></li>
                                                        <li><Link to="#">Walton</Link></li>

                                                        <div className="mega-menu-inner-box-webb-versn-inner-box-he">
                                                            <h5>Mobile Accessories</h5>
                                                        </div>
                                                        <li><Link to="#">Mobile Covers</Link></li>
                                                        <li><Link to="#">Hedphones & Headsets</Link></li>
                                                        <li><Link to="#">Powerbank</Link></li>
                                                        <li><Link to="#">Screenprotector</Link></li>
                                                        <li><Link to="#">Mobile Chargers</Link></li>
                                                        <li><Link to="#">Mobile Holders</Link></li>
                                                        <li><Link to="#">Mobile Cables</Link></li>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="mega-menu-inner-box-webb-versn-inner-box">
                                                        <div className="mega-menu-inner-box-webb-versn-inner-box-he">
                                                            <h5>Computer Accessories</h5>
                                                        </div>
                                                        <li><Link to="#">External Hard Disks</Link></li>
                                                        <li><Link to="#">Pen Drives</Link></li>
                                                        <li><Link to="#">Laptop Bags</Link></li>
                                                        <li><Link to="#">Keyboard & Mouse</Link></li>
                                                        <li><Link to="#">Printers</Link></li>
                                                        <li><Link to="#">Monitors</Link></li>
                                                        <li><Link to="#">Router</Link></li>

                                                        <div className="mega-menu-inner-box-webb-versn-inner-box-he">
                                                            <h5>Camera & Accessories</h5>
                                                        </div>
                                                        <li><Link to="#">DSLR</Link></li>
                                                        <li><Link to="#">Compact & Bridge Cameras</Link></li>
                                                        <li><Link to="#">Sports & Action</Link></li>
                                                        <li><Link to="#">Lens</Link></li>
                                                        <li><Link to="#">Tripods</Link></li>
                                                        <li><Link to="#">Gimbles</Link></li>
                                                        <li><Link to="#">Camera Flash</Link></li>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="mega-menu-inner-box-webb-versn-inner-box">
                                                        <div className="mega-menu-inner-box-webb-versn-inner-box-he">
                                                            <h5>Speaker</h5>
                                                        </div>
                                                        <li><Link to="#">Home Audio Speakers</Link></li>
                                                        <li><Link to="#">Home Theatres</Link></li>
                                                        <li><Link to="#">Soundbars</Link></li>
                                                        <li><Link to="#">Bluetooth Speakers</Link></li>
                                                        <li><Link to="#">DTH Set Top Box</Link></li>
                                                        <li><Link to="#">Laptop Speaker</Link></li>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="mega-menu-inner-box-webb-versn-inner-box borderr-nonee-exx">
                                                        <div className="mega-menu-inner-box-webb-versn-inner-box-cat-img">
                                                            <img src={require('../../assets/electronics-cat-menu-img.png')} alt="orponbd Online Shop"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li><Link to="#">Home & Living</Link></li>
                                    <li><Link to="#">Watches & Accessories</Link></li>
                                    <li><Link to="#">Sports & Outdoors</Link></li>
                                    <li><Link to="#">Electronics</Link>
                                        <div className="mega-menu-inner-box-webb-versn">
                                            <div className="row mega-menu-inner-box-webb-versn-ecxc-pdd">
                                                <div className="col-md-3">
                                                    <div className="mega-menu-inner-box-webb-versn-inner-box">
                                                        <div className="mega-menu-inner-box-webb-versn-inner-box-he">
                                                            <h5>Mobile</h5>
                                                        </div>
                                                        <li><Link to="#">MI</Link></li>
                                                        <li><Link to="#">Realme</Link></li>
                                                        <li><Link to="#">Samsung</Link></li>
                                                        <li><Link to="#">Apple</Link></li>
                                                        <li><Link to="#">Vivo</Link></li>
                                                        <li><Link to="#">Walton</Link></li>

                                                        <div className="mega-menu-inner-box-webb-versn-inner-box-he">
                                                            <h5>Mobile Accessories</h5>
                                                        </div>
                                                        <li><Link to="#">Mobile Covers</Link></li>
                                                        <li><Link to="#">Hedphones & Headsets</Link></li>
                                                        <li><Link to="#">Powerbank</Link></li>
                                                        <li><Link to="#">Screenprotector</Link></li>
                                                        <li><Link to="#">Mobile Chargers</Link></li>
                                                        <li><Link to="#">Mobile Holders</Link></li>
                                                        <li><Link to="#">Mobile Cables</Link></li>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="mega-menu-inner-box-webb-versn-inner-box">
                                                        <div className="mega-menu-inner-box-webb-versn-inner-box-he">
                                                            <h5>Computer Accessories</h5>
                                                        </div>
                                                        <li><Link to="#">External Hard Disks</Link></li>
                                                        <li><Link to="#">Pen Drives</Link></li>
                                                        <li><Link to="#">Laptop Bags</Link></li>
                                                        <li><Link to="#">Keyboard & Mouse</Link></li>
                                                        <li><Link to="#">Printers</Link></li>
                                                        <li><Link to="#">Monitors</Link></li>
                                                        <li><Link to="#">Router</Link></li>

                                                        <div className="mega-menu-inner-box-webb-versn-inner-box-he">
                                                            <h5>Camera & Accessories</h5>
                                                        </div>
                                                        <li><Link to="#">DSLR</Link></li>
                                                        <li><Link to="#">Compact & Bridge Cameras</Link></li>
                                                        <li><Link to="#">Sports & Action</Link></li>
                                                        <li><Link to="#">Lens</Link></li>
                                                        <li><Link to="#">Tripods</Link></li>
                                                        <li><Link to="#">Gimbles</Link></li>
                                                        <li><Link to="#">Camera Flash</Link></li>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="mega-menu-inner-box-webb-versn-inner-box">
                                                        <div className="mega-menu-inner-box-webb-versn-inner-box-he">
                                                            <h5>Speaker</h5>
                                                        </div>
                                                        <li><Link to="#">Home Audio Speakers</Link></li>
                                                        <li><Link to="#">Home Theatres</Link></li>
                                                        <li><Link to="#">Soundbars</Link></li>
                                                        <li><Link to="#">Bluetooth Speakers</Link></li>
                                                        <li><Link to="#">DTH Set Top Box</Link></li>
                                                        <li><Link to="#">Laptop Speaker</Link></li>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="mega-menu-inner-box-webb-versn-inner-box borderr-nonee-exx">
                                                        <div className="mega-menu-inner-box-webb-versn-inner-box-cat-img">
                                                            <img src={require('../../assets/electronics-cat-menu-img.png')} alt="orponbd Online Shop"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li><Link to="/womens-fashion">Women's Fashion</Link></li>
                                    <li><Link to="#">Smartphone</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-10">
                            <div className="home-page-main-slider-section-box">
                                <Slider {...settings}>
                                    {/* single slide item */}
                                    <div className="single-carousel-web-hom-item">
                                        <div className="single-carousel-web-hom-img-part">
                                            <Link to="/#">
                                                <img src={require('../../assets/main-slide-2.jpg')} alt="orponbd global collection"/>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* single slide item */}
                                    {/* single slide item */}
                                    <div className="single-carousel-web-hom-item">
                                        <div className="single-carousel-web-hom-img-part">
                                            <Link to="/#">
                                                <img src={require('../../assets/main-slide-1.jpg')} alt="orponbd global collection"/>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* single slide item */}
                                    {/* single slide item */}
                                    <div className="single-carousel-web-hom-item">
                                        <div className="single-carousel-web-hom-img-part">
                                            <Link to="/#">
                                                <img src={require('../../assets/main-slide-3.jpg')} alt="orponbd global collection"/>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* single slide item */}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
