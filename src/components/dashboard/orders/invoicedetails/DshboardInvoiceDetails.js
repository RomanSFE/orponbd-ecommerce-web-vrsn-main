import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import DashboardSidebar from '../../dashboardsidebar/DashboardSidebar'
import DashboardTopBar from '../../dashboardtopbar/DashboardTopBar'
import './dashboardinvoicedetails.css'

export default class DshboardInvoiceDetails extends Component {
    render() {
        return (
            <>
            <div className="example-sasjghdjhgs">
                <div className="container-fluid">
                    <div className="row obd-top-bar-main-order-main-dashboard-ex-pdd">
                        <div className="col-md-2">
                            <DashboardSidebar/>
                        </div>
                        <div className="col-md-10">
                          {/* Top Search bar and profile sec start */}
                          <div className="row">
                            <div className="col-md-12">
                              <div className="obd-top-bar-main-order-dash-board-top-search-boxx">
                                <DashboardTopBar/>
                              </div>
                            </div>
                          </div>
                          {/* Top Search bar and profile sec end ---------- */}

                          {/* all order details invoice start */}
                          <div className="row obd-all-order-details-dashboard-main-section-roww">
                            <div className="col-md-9">
                                <div className="obd-all-order-details-dashboard-main-section-left-box-main">
                                    {/* Invoive and logo box start */}
                                    <div className="obd-all-order-details-dashboard-main-section-left-logo-and-inv-bx">
                                        <div className="row">
                                            <div className="col-md-5">
                                                <div className="obd-all-order-details-dashboard-main-section-left-logo-and-inv-bx-contnt">
                                                    <h5>Invoice# <span>2154787</span></h5>
                                                    <img src={require('../../../../assets/obd-dashboard-barcode-img.png')} alt="orponbd online shop"/>
                                                    <h2>Invoice</h2>
                                                    <p>Anisur Rahman</p>
                                                </div>
                                            </div>
                                            <div className="col-md-7">
                                                <div className="obd-all-order-details-dashboard-mainsc-left-logo-and-datex-bx-contnt text-right">
                                                    <ul>
                                                        <li>Date Issue: <span>07/02/2021</span></li>
                                                        <li>Date Due: <span>07/02/2021</span></li>
                                                    </ul>
                                                    <img src={require('../../../../assets/logomain.svg')} alt="orponbd online shop"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Invoive and logo box end ----------*/}

                                    {/* Bill from and ship to start */}
                                    <div className="obd-all-order-details-dashboard-main-section-left-bill-from-shipto-bx">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="obd-all-order-details-dashboard-main-section-left-bill-from-bbx">
                                                    <h3>Bill From</h3>
                                                    <h5>ORPONBD</h5>
                                                    <p>
                                                        House-08, Avenue-1, Block-A, Section-10, Mirpur, Dhaka 1216 (Benarashi Polli 1 No Gate er ekhane)
                                                    </p>
                                                    <h6>support@orponbd.com</h6>
                                                    <h6>HOTLINE : 09638333000, 01933339963, </h6>
                                                </div> 
                                            </div>
                                            <div className="col-md-6">
                                                <div className="obd-all-order-details-dashboard-main-section-left-ship-to-bbx">
                                                    <h3>Ship To</h3>
                                                    <h5>Anisur Rahman</h5>
                                                    <p>
                                                        IDLC Finance Ltd., 1024, রহমত টাওয়ার, ৩য় তলা, চান্দনা চৌরাস্তা, (ব্রাক ব্যাংক এর বিল্ডিং এর ৩য় তলা),
                                                        টাংগাইল রোড, Gazipur Sadar, Gazipur., District - Gazipur, Upazila - Chandona Chowrasta
                                                    </p>
                                                    <h6>01911553348</h6>
                                                    <h6>support@orponbd.com</h6>
                                                    <h6>Courier: Sundarban</h6>
                                                    <h6>Order device: Mobile</h6>
                                                    <h6>Payment method: Cash</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Bill from and ship to end------- */}

                                    {/* Order Details items Table section Start */}
                                    <div className="obd-all-order-details-dashboard-main-section-left-table-main-box">
                                        <table class="table table-bordered">
                                            <thead style={{borderRadius: '8px'}}>
                                                <tr>
                                                    <th style={{borderTopLeftRadius: '8px',borderBottomLeftRadius: '8px',textAlign: 'left'}} scope="col col-6">Item descriptions</th>
                                                    <th scope="col col-6">QTY</th>
                                                    <th scope="col col-6">Cost/unit</th>
                                                    <th scope="col col-6">Total Amount</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {/* single Item start */}
                                                <tr>
                                                    <td style={{textAlign: 'left'}}>
                                                        <div className="row obd-all-order-details-dashboard-mn-section-left-exx-pdd-nn">
                                                            <div className="col-md-2">
                                                                <div className="obd-all-order-details-dashboard-mn-section-left-table-img-it">
                                                                    <img src={require('../../../../assets/cart-product-1.png')} alt="orponbd online shop"/>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-10">
                                                                <div className="obd-all-order-details-dashboard-mn-section-left-table-it-txt">
                                                                    <h5>Fish Scale Plastic Tools</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>3</td>
                                                    <td><span>৳ </span>70</td>
                                                    <td><span>৳ </span>750</td>
                                                </tr>
                                                {/* Single Item End */}

                                                {/* single Item start */}
                                                <tr>
                                                    <td style={{textAlign: 'left'}}>
                                                        <div className="row obd-all-order-details-dashboard-mn-section-left-exx-pdd-nn">
                                                            <div className="col-md-2">
                                                                <div className="obd-all-order-details-dashboard-mn-section-left-table-img-it">
                                                                    <img src={require('../../../../assets/cart-product-2.png')} alt="orponbd online shop"/>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-10">
                                                                <div className="obd-all-order-details-dashboard-mn-section-left-table-it-txt">
                                                                    <h5>Second Scale Plastic Tools</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>3</td>
                                                    <td><span>৳ </span>90</td>
                                                    <td><span>৳ </span>1250</td>
                                                </tr>
                                                {/* Single Item End */}
                                            </tbody>
                                        </table>
                                    </div>
                                    {/* Order Details items Table section End------------- */}

                                    {/* Order Details items Table Total Count Start------------- */}
                                    <div className="obd-all-order-details-dashboard-main-section-left-table-total-count-main-box">
                                        <div className="row">
                                            <div className="col-md-8">
                                                <div className="obd-all-order-details-dashboard-main-section-left-table-ttl-countmn-hd">
                                                    <h4>Thanks for your business.</h4>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="obd-all-order-details-dashboard-main-section-left-table-total-count-price-main-box">
                                                    {/* single item start */}
                                                    <div className="obd-all-order-details-dashboard-main-section-left-table-total-count-price-mn-cnt">
                                                        <h4>Sub Total </h4>
                                                        <span className="obd-all-order-details-dashboard-main-section-left-price-abb-txt">
                                                            <h3><span>৳</span> 1468</h3>
                                                        </span>
                                                    </div>
                                                    {/* single item end */}
                                                    {/* single item start */}
                                                    <div className="obd-all-order-details-dashboard-main-section-left-table-total-count-price-mn-cnt">
                                                        <h4>Discount <span>(10%)</span> </h4>
                                                        <span className="obd-all-order-details-dashboard-main-section-left-price-abb-txt">
                                                            <h3><span>- ৳</span> 120</h3>
                                                        </span>
                                                    </div>
                                                    {/* single item end */}
                                                    {/* single item start */}
                                                    <div className="obd-all-order-details-dashboard-main-section-left-table-total-count-price-mn-cnt delvry-crg-brdr">
                                                        <h4>Delivery Charge </h4>
                                                        <span className="obd-all-order-details-dashboard-main-section-left-price-abb-txt">
                                                            <h3><span>+ ৳</span> 120</h3>
                                                        </span>
                                                    </div>
                                                    {/* single item end */}
                                                    {/* single item start */}
                                                    <div className="obd-all-order-details-dashboard-main-section-left-table-total-count-price-mn-cnt">
                                                        <h4>Invoice Card Fee </h4>
                                                        <span className="obd-all-order-details-dashboard-main-section-left-price-abb-txt">
                                                            <h3><span>৳</span> 0</h3>
                                                        </span>
                                                    </div>
                                                    {/* single item end */}
                                                    {/* single item start */}
                                                    <div className="obd-all-order-details-dashboard-main-section-left-table-total-count-price-mn-cnt">
                                                        <h4>Invoice Total </h4>
                                                        <span className="obd-all-order-details-dashboard-main-section-left-price-abb-txt">
                                                            <h3><span>৳</span> 1320</h3>
                                                        </span>
                                                    </div>
                                                    {/* single item end */}
                                                    {/* single item start */}
                                                    <div className="obd-all-order-details-dashboard-main-section-left-table-total-count-price-mn-cnt">
                                                        <h4>Paid </h4>
                                                        <span className="obd-all-order-details-dashboard-main-section-left-price-abb-txt">
                                                            <h3><span>৳</span> 1320</h3>
                                                        </span>
                                                    </div>
                                                    {/* single item end */}
                                                    {/* single item start */}
                                                    <div className="obd-all-order-details-dashboard-main-section-left-table-total-count-price-mn-cnt balance-color-txt">
                                                        <h4>Balance (TK) </h4>
                                                        <span className="obd-all-order-details-dashboard-main-section-left-price-abb-txt">
                                                            <h3><span>৳</span> 650</h3>
                                                        </span>
                                                    </div>
                                                    {/* single item end */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Order Details items Table Total Count End------------- */}

                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="obd-all-order-details-dashboard-main-section-right-box-mn text-center">
                                    <div className="obd-all-order-details-dashboard-main-section-right-box-send-inv-btn">
                                        <button type="submit"><span><i class="far fa-paper-plane"></i></span> Send Invoice</button>
                                    </div>
                                    <div className="obd-all-order-details-dashboard-main-section-right-box-printt-btn">
                                        <button type="submit"><span><i class="fas fa-print"></i></span> Print</button>
                                    </div>
                                    <div className="obd-all-order-details-dashboard-main-section-right-box-edit-inv-btn mx-auto">
                                        <Link to="/dashboard-invoice-edit">
                                            <span><i class="far fa-edit"></i></span> Edit Invoice
                                        </Link>
                                    </div>
                                    <div className="obd-all-order-details-dashboard-main-section-right-box-add-pmnt-btn">
                                        <button type="submit"><span>৳</span> Add Payment</button>
                                    </div>
                                </div>
                            </div>
                          </div>
                          {/* all order details invoice end */} 

                        </div>
                    </div>
                </div>
            </div>

            </>
        )
    }
}
