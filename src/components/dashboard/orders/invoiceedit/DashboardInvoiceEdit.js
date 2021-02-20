import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import DashboardSidebar from '../../dashboardsidebar/DashboardSidebar'
import DashboardTopBar from '../../dashboardtopbar/DashboardTopBar'
import './dashboardinvoiceedit.css'
import { Tabs, Tab } from 'react-bootstrap'

export default class DashboardInvoiceEdit extends Component {
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

                          {/* all order details invoice Edit Start */}
                          <div className="row obd-all-order-details-editt-dashboard-main-section-roww">
                             <div className="col-md-12">
                                 {/* top order id and back button start */}
                                 <div className="obd-all-order-details-editt-dashboard-main-section-order-id-and-back-btn">
                                     <div className="obd-all-order-details-editt-dashboard-main-section-order-id-and-back-lnk-list">
                                         <ul>
                                             <li><Link to="/dashboard">Dashboard <span><i className="fas fa-angle-right"></i></span></Link></li>
                                             <li><Link to="/dashboard-orders">Orders <span><i className="fas fa-angle-right"></i></span></Link></li>
                                             <li><span> Order # 325458</span></li>
                                         </ul>
                                     </div>
                                     <div className="obd-all-order-details-editt-dashboard-main-section-order-id-and-back-order-idd-tx">
                                         <h3>Order # <span>325458</span></h3>
                                         <div className="obd-all-order-details-editt-dashboard-main-section-order-id-and-back-order-bk-to-orddr">
                                             <Link to="/">
                                                 <span><i className="fas fa-angle-left"></i></span> Back To Orders
                                             </Link>
                                         </div>
                                     </div>

                                 </div>
                                 {/* top order id and back button end -------------*/}

                                 {/* Order Details Tab Section Start */}
                                 <div className="obd-all-order-details-editt-dashboard-main-section-orders-det-tabs-main-box">
                                     <div className="row">
                                         <div className="col-md-8">
                                             <div className="obd-all-order-details-editt-dashboard-main-section-orders-tab-box-lft">
                                             <Tabs defaultActiveKey="dasorderdetails" id="uncontrolled-tab-example">
                                                <Tab eventKey="dasorderdetails" title="Order Details">
                                                    <div className="obd-all-order-details-editt-dashboard-main-section-orders-tab-lft-contbnt">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-lft">
                                                                    <h3>Overview</h3>

                                                                    {/* single item start */}
                                                                    <div className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-lft-sngl-itm">
                                                                        <h4>Created</h4>
                                                                        <span className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-lft-datt">
                                                                            <h3><span>:</span> Jan 20, 2021, 10:30 AM</h3>
                                                                        </span>
                                                                    </div>
                                                                    {/* single item end */}
                                                                    {/* single item start */}
                                                                    <div className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-lft-sngl-itm">
                                                                        <h4>Order Confirmed</h4>
                                                                        <span className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-lft-datt">
                                                                            <h3><span>:</span> Jan 20, 2021, 10:30 AM</h3>
                                                                        </span>
                                                                    </div>
                                                                    {/* single item end */}
                                                                    {/* single item start */}
                                                                    <div className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-lft-sngl-itm">
                                                                        <h4>Printed</h4>
                                                                        <span className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-lft-datt">
                                                                            <h3><span>:</span> Yes</h3>
                                                                        </span>
                                                                    </div>
                                                                    {/* single item end */}
                                                                    {/* single item start */}
                                                                    <div className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-lft-sngl-itm">
                                                                        <h4>Tracking Email</h4>
                                                                        <span className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-lft-datt">
                                                                            <h3><span>:</span> useremail@gmail.com</h3>
                                                                        </span>
                                                                    </div>
                                                                    {/* single item end */}
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-right">
                                                                    <h3>Invoice</h3>

                                                                    {/* single item start */}
                                                                    <div className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-rightt-sngl-itm">
                                                                        <h4>Sub Total</h4>
                                                                        <span className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-right-invp">
                                                                            <h3> <span>৳</span> 1468</h3>
                                                                        </span>
                                                                    </div>
                                                                    {/* single item end */}
                                                                    {/* single item start */}
                                                                    <div className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-rightt-sngl-itm">
                                                                        <h4>Discount <span>(10%)</span></h4>
                                                                        <span className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-right-invp">
                                                                            <h3> <span>-৳</span> 150</h3>
                                                                        </span>
                                                                    </div>
                                                                    {/* single item end */}
                                                                    {/* single item start */}
                                                                    <div className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-rightt-sngl-itm">
                                                                        <h4>Delivery Charge</h4>
                                                                        <span className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-right-invp">
                                                                            <h3> <span>+৳</span> 140</h3>
                                                                        </span>
                                                                    </div>
                                                                    {/* single item end */}
                                                                    {/* single item start */}
                                                                    <div className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-rightt-sngl-itm">
                                                                        <h4>Invoice Card Fee</h4>
                                                                        <span className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-right-invp">
                                                                            <h3> <span>৳</span> 0</h3>
                                                                        </span>
                                                                    </div>
                                                                    {/* single item end */}
                                                                    {/* single item start */}
                                                                    <div className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-rightt-sngl-itm">
                                                                        <h4>Invoice Total</h4>
                                                                        <span className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-right-invp">
                                                                            <h3> <span>৳</span> 1400</h3>
                                                                        </span>
                                                                    </div>
                                                                    {/* single item end */}
                                                                    {/* single item start */}
                                                                    <div className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-rightt-sngl-itm">
                                                                        <h4>Paid</h4>
                                                                        <span className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-right-invp">
                                                                            <h3> <span>-৳</span> 500</h3>
                                                                        </span>
                                                                    </div>
                                                                    {/* single item end */}
                                                                    {/* single item start */}
                                                                    <div className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-rightt-sngl-itm balance-clr">
                                                                        <h4>Balance (TK)</h4>
                                                                        <span className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-right-invp blnsab">
                                                                            <h3> <span>৳</span> 700</h3>
                                                                        </span>
                                                                    </div>
                                                                    {/* single item end */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Tab>
                                                <Tab eventKey="dasstatus" title="Status">
                                                    order details 2
                                                </Tab>
                                                <Tab eventKey="daspaymntdet" title="Payment Details">
                                                    order details 3
                                                </Tab>
                                                <Tab eventKey="dasrefund" title="Refunds">
                                                    order details 4
                                                </Tab>
                                                <Tab eventKey="dascomments" title="Comments">
                                                    order details 5
                                                </Tab>
                                             </Tabs>
                                             </div>
                                         </div>
                                         <div className="col-md-4">
                                             <div className="obd-all-order-details-editt-dashboard-main-section-orders-custm-det-right">
                                                {/* Customer Details Head start */}
                                                <div className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-right-custm-detls">
                                                    <h4>Customer Details</h4>
                                                    <span className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-right-custm-dtls-ab">
                                                        <button>Edit</button>
                                                    </span>
                                                </div>
                                                {/* Customer Details Head end */}
                                                <div className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-right-custm-nm-addrs">
                                                    {/* Name start */}
                                                    <div className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-right-custm-fnm-hd">
                                                        <h4>First Name:</h4>
                                                        <span className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-right-custm-lnmhd-ab">
                                                            <h4>Last Name:</h4>
                                                        </span>
                                                    </div>
                                                    <div className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-right-custm-fnm-hd mnnam">
                                                        <h4>Anisur</h4>
                                                        <span className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-right-custm-lnmhd-ab mnab">
                                                            <h4>Rahman</h4>
                                                        </span>
                                                    </div>
                                                    {/* Name end */}

                                                    {/* Address Details start */}
                                                    <div className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-right-custm-addrs-dtls">
                                                        <h5>Address:</h5>
                                                        <p>
                                                            IDLC Finance Ltd., 1024, রহমত টাওয়ার, ৩য় তলা, চান্দনা চৌরাস্তা, (ব্রাক ব্যাংক এর বিল্ডিং এর
                                                            ৩য় তলা), টাংগাইল রোড, Gazipur Sadar, Gazipur., District - Gazipur, Upazila - Chandona
                                                            Chowrasta
                                                        </p>
                                                    </div>
                                                    <div className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-right-custm-addrs-dtls">
                                                        <h5>Email:</h5>
                                                        <h4>anis_r54@yahoo.com</h4>
                                                    </div>
                                                    <div className="obd-all-order-details-editt-dashboard-main-section-orders-det-innr-right-custm-addrs-dtls">
                                                        <h5>Contact No:</h5>
                                                        <h4>01911553348</h4>
                                                    </div>
                                                    {/* Address Details end */}
                                                </div>
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                                 {/* Order Details Tab Section End ----------------*/}

                                 {/* Order Summary Start ----------------*/}
                                 <div className="obd-all-order-details-editt-dashboard-main-section-orders-summary-main-box">
                                     <div className="obd-all-order-details-editt-dashboard-main-section-orders-summary-table-sec">
                                        <table class="table table-bordered">
                                            <thead style={{borderRadius: '8px'}}>
                                                <tr>
                                                    <th style={{borderTopLeftRadius: '8px',borderBottomLeftRadius: '8px',textAlign: 'left', width:"30%"}} scope="col col-6">Item</th>
                                                    <th scope="col col-6">Color</th>
                                                    <th scope="col col-6">Size</th>
                                                    <th scope="col col-6">QTY</th>
                                                    <th scope="col col-6">Cost/unit</th>
                                                    <th style={{borderTopRightRadius: '8px',borderBottomRightRadius: '8px',textAlign: 'center'}} scope="col col-6">Total Amount</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {/* single Item start */}
                                                <tr>
                                                    <td style={{textAlign: 'left'}}>
                                                        <div className="obd-all-order-dashboard-main-section-orders-summary-table-sec-item">
                                                            <select>
                                                                <option value="" selected>Fish Scale Plastic Tools.....</option>
                                                                <option value="">Fish Scale Plastic Tools 2.....</option>
                                                                <option value="">Fish Scale Plastic Tools 3.....</option>
                                                                <option value="">Fish Scale Plastic Tools 4.....</option>
                                                            </select>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="obd-all-order-dashboard-main-section-orders-summary-table-sec-item">
                                                            <select>
                                                                <option value="" selected>Color</option>
                                                                <option value="">Color 1</option>
                                                                <option value="">Color 2</option>
                                                                <option value="">Color 3</option>
                                                            </select>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="obd-all-order-dashboard-main-section-orders-summary-table-sec-item">
                                                            <select>
                                                                <option value="" selected>Size</option>
                                                                <option value="">Size 1</option>
                                                                <option value="">Size 2</option>
                                                                <option value="">Size 3</option>
                                                            </select>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="obd-all-order-dashboard-main-section-orders-summary-table-sec-item">
                                                            <input type="text"/>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="obd-all-order-dashboard-main-section-orders-summary-table-sec-item-cst text-center">
                                                            <h4>12</h4>
                                                        </div>
                                                    </td>
                                                    <td style={{color: '#FF6347', fontWeight: '500'}}><span>৳ </span>750</td>
                                                </tr>
                                                {/* Single Item End */}
                                                {/* single Item start */}
                                                <tr>
                                                    <td style={{textAlign: 'left'}}>
                                                        <div className="obd-all-order-dashboard-main-section-orders-summary-table-sec-item">
                                                            <select>
                                                                <option value="" selected>Fish Scale Plastic Tools.....</option>
                                                                <option value="">Fish Scale Plastic Tools 2.....</option>
                                                                <option value="">Fish Scale Plastic Tools 3.....</option>
                                                                <option value="">Fish Scale Plastic Tools 4.....</option>
                                                            </select>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="obd-all-order-dashboard-main-section-orders-summary-table-sec-item">
                                                            <select>
                                                                <option value="" selected>Color</option>
                                                                <option value="">Color 1</option>
                                                                <option value="">Color 2</option>
                                                                <option value="">Color 3</option>
                                                            </select>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="obd-all-order-dashboard-main-section-orders-summary-table-sec-item">
                                                            <select>
                                                                <option value="" selected>Size</option>
                                                                <option value="">Size 1</option>
                                                                <option value="">Size 2</option>
                                                                <option value="">Size 3</option>
                                                            </select>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="obd-all-order-dashboard-main-section-orders-summary-table-sec-item">
                                                            <input type="text"/>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="obd-all-order-dashboard-main-section-orders-summary-table-sec-item-cst text-center">
                                                            <h4>12</h4>
                                                        </div>
                                                    </td>
                                                    <td style={{color: '#FF6347', fontWeight: '500'}}><span>৳ </span>750</td>
                                                </tr>
                                                {/* Single Item End */}
                                                
                                            </tbody>
                                        </table>
                                     </div>
                                 </div>
                                 {/* Order Summary End ----------------*/}
                             </div>
                          </div>
                          {/* all order details invoice Edit end */} 

                        </div>
                    </div>
                </div>
            </div>

            </>
        )
    }
}
