import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import DashboardSidebar from '../dashboardsidebar/DashboardSidebar'
import DashboardTopBar from '../dashboardtopbar/DashboardTopBar'
import './dashboardorder.css'
import { Tabs, Tab } from 'react-bootstrap'
import OrdersDatePicker from './ordersdatepicker/OrdersDatePicker';

export default class DashboardOrder extends Component {
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

                          {/* Tabs Section start */}
                          <div className="row obd-all-order-pages-dashboard-tabs-main-boxx">
                            <div className="col-md-12">
                              <div className="obd-all-order-pages-dashboard-tabs-main-boxx-content">
                                <div className="obd-all-order-pages-tabs-main-manage-order-hed">
                                  <h4>Manage Orders</h4>
                                </div>
                                <Tabs defaultActiveKey="dashallorders" id="uncontrolled-tab-example">
                                    <Tab eventKey="dashallorders" title="All Orders">
                                      <div className="obd-recent-order-bx-product-and-order-tabs-dash-board-main-box">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="obd-recent-order-bx-product-and-order-tabs-dash-board-main-box-content">
                                                    {/* Head sec start */}
                                                    <div className="orponbd-all-tabs-order-bx-color-section-box">
                                                        <div className="orponbd-all-tabs-order-color-sectionn-paddv">
                                                            <div className="orponbd-all-tabss-order-bx-txtt-hd">
                                                                <div className="orponbd-all-tabss-order-bx-txtt-hd-bboxx">
                                                                    <ul>
                                                                        <li><h4>All Orders</h4></li>
                                                                        <li className="orponbd-all-tabss-order-bx-txtt-hd-bboxx-searchh-bx"><input type="search" placeholder="Search"/> <span><button type="submit"><i className="fas fa-search"></i></button></span></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="flltrr-bbttn-brdr-all-tabs-orderxv"></div>
                                                            </div>
                                                        </div>
                                                        <div className="orponbd-allxx-order-bx-color-section-box-right-seeall-export-ab">
                                                            <ul>
                                                                <li className="orponbd-allxx-order-bx-color-section-box-right-select-bx">
                                                                    <span>See: </span>
                                                                    <select>
                                                                        <option value="" selected>10 Entries</option>
                                                                        <option value="">50 Entries</option>
                                                                        <option value="">100 Entries</option>
                                                                        <option value="">200 Entries</option>
                                                                    </select>
                                                                </li>
                                                                <li><button>Export <span><i class="fas fa-long-arrow-alt-down"></i></span></button></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* Head sec end */}
                                                    {/* Recent Order Table Box Start */}
                                                    <div className="obd-all-orders-order-bx-product-and-new-user-dash-board-table-box">
                                                        <table class="table table-bordered">
                                                            <thead style={{borderRadius: '8px'}}>
                                                                <tr>
                                                                    <th style={{borderTopLeftRadius: '8px',borderBottomLeftRadius: '8px'}} scope="col col-6">Order No</th>
                                                                    <th scope="col col-6">Date</th>
                                                                    <th scope="col col-6">Customer Name</th>
                                                                    <th scope="col col-6">Address</th>
                                                                    <th scope="col col-6">Payment Method</th>
                                                                    <th scope="col col-6">Total Amount</th>
                                                                    <th style={{textAlign: 'center'}} scope="col col-6">Status</th>
                                                                    <th style={{borderTopRightRadius: '8px',borderBottomRightRadius: '8px', textAlignLast: 'center'}} scope="col col-6">Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {/* single Item start */}
                                                                <tr>
                                                                    <td>252545524</td>
                                                                    <td style={{textAlign: 'center'}}>2 Sep, 2020  <br/> <span>3:00 PM</span></td>
                                                                    <td>Customer Full Name</td>
                                                                    <td>Shipping address</td>
                                                                    <td style={{textAlign: 'center'}}>Bkash</td>
                                                                    <td style={{textAlign: 'center'}}>৳ 2400</td>
                                                                    <td style={{textAlign: 'center'}}>
                                                                        <div className="obd-recent-order-bx-product-and-payment-stts-sec">
                                                                            <div className="obd-recent-order-bx-product-and-payment-stts-pendng">
                                                                                <button>Pending</button>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td style={{textAlign: 'center'}}>
                                                                        <div className="obd-alll-orderx-bx-product-and-action-bx-main-box">
                                                                            <ul>
                                                                                <li>
                                                                                    <div className="obd-alll-orderx-bx-product-and-action-bx">
                                                                                        <Link to="/"><i class="far fa-eye"></i></Link>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <div className="obd-alll-orderx-bx-product-and-action-bx">
                                                                                        <Link to="/"><i class="far fa-edit"></i></Link>
                                                                                    </div>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                {/* Single Item End */}
                                                                {/* single Item start */}
                                                                <tr>
                                                                    <td>252545524</td>
                                                                    <td style={{textAlign: 'center'}}>2 Sep, 2020 <br/> <span>3:00 PM</span></td>
                                                                    <td>Customer Full Name</td>
                                                                    <td>Shipping address</td>
                                                                    <td style={{textAlign: 'center'}}>Card</td>
                                                                    <td style={{textAlign: 'center'}}>৳ 2400</td>
                                                                    <td style={{textAlign: 'center'}}>
                                                                        <div className="obd-recent-order-bx-product-and-payment-stts-sec">
                                                                            <div className="obd-recent-order-bx-product-and-payment-stts-in-transt">
                                                                                <button>In Transit</button>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td style={{textAlign: 'center'}}>
                                                                        <div className="obd-alll-orderx-bx-product-and-action-bx-main-box">
                                                                            <ul>
                                                                                <li>
                                                                                    <div className="obd-alll-orderx-bx-product-and-action-bx">
                                                                                        <Link to="/"><i class="far fa-eye"></i></Link>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <div className="obd-alll-orderx-bx-product-and-action-bx">
                                                                                        <Link to="/"><i class="far fa-edit"></i></Link>
                                                                                    </div>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                {/* Single Item End */}
                                                                {/* single Item start */}
                                                                <tr>
                                                                    <td>252545524</td>
                                                                    <td style={{textAlign: 'center'}}>2 Sep, 2020 <br/> <span>3:00 PM</span></td>
                                                                    <td>Customer Full Name</td>
                                                                    <td>Shipping address</td>
                                                                    <td style={{textAlign: 'center'}}>Card</td>
                                                                    <td style={{textAlign: 'center'}}>৳ 2400</td>
                                                                    <td style={{textAlign: 'center'}}>
                                                                        <div className="obd-recent-order-bx-product-and-payment-stts-sec">
                                                                            <div className="obd-recent-order-bx-product-and-payment-stts-deliverd">
                                                                                <button>Delivered</button>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td style={{textAlign: 'center'}}>
                                                                        <div className="obd-alll-orderx-bx-product-and-action-bx-main-box">
                                                                            <ul>
                                                                                <li>
                                                                                    <div className="obd-alll-orderx-bx-product-and-action-bx">
                                                                                        <Link to="/"><i class="far fa-eye"></i></Link>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <div className="obd-alll-orderx-bx-product-and-action-bx">
                                                                                        <Link to="/"><i class="far fa-edit"></i></Link>
                                                                                    </div>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                {/* Single Item End */}
                                                                {/* single Item start */}
                                                                <tr>
                                                                    <td>252545524</td>
                                                                    <td style={{textAlign: 'center'}}>2 Sep, 2020 <br/> <span>3:00 PM</span></td>
                                                                    <td>Customer Full Name</td>
                                                                    <td>Shipping address</td>
                                                                    <td style={{textAlign: 'center'}}>Card</td>
                                                                    <td style={{textAlign: 'center'}}>৳ 2400</td>
                                                                    <td style={{textAlign: 'center'}}>
                                                                        <div className="obd-recent-order-bx-product-and-payment-stts-sec">
                                                                            <div className="obd-recent-order-bx-product-and-payment-stts-cancelld">
                                                                                <button>Cancelled</button>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td style={{textAlign: 'center'}}>
                                                                        <div className="obd-alll-orderx-bx-product-and-action-bx-main-box">
                                                                            <ul>
                                                                                <li>
                                                                                    <div className="obd-alll-orderx-bx-product-and-action-bx">
                                                                                        <Link to="/"><i class="far fa-eye"></i></Link>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <div className="obd-alll-orderx-bx-product-and-action-bx">
                                                                                        <Link to="/"><i class="far fa-edit"></i></Link>
                                                                                    </div>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                {/* Single Item End */}

                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    {/* Recent Order Table Box End */}
                                                </div>
                                            </div>
                                        </div>
                                      </div>
                                    </Tab>
                                    <Tab eventKey="dashpending" title="Pending">
                                        <div className="obd-recent-order-bx-product-and-order-tabs-dash-board-main-box">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="obd-recent-order-bx-product-and-order-tabs-dash-board-main-box-content">
                                                        {/* Head sec start */}
                                                        <div className="orponbd-all-tabs-order-bx-color-section-box">
                                                            <div className="orponbd-all-tabs-order-color-sectionn-paddv">
                                                                <div className="orponbd-all-tabss-order-bx-txtt-hd">
                                                                    <div className="orponbd-all-tabss-order-bx-txtt-hd-bboxx">
                                                                        <ul>
                                                                            <li><h4>All Orders</h4></li>
                                                                            <li className="orponbd-all-tabss-order-bx-txtt-hd-bboxx-searchh-bx"><input type="search" placeholder="Search"/> <span><button type="submit"><i className="fas fa-search"></i></button></span></li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="flltrr-bbttn-brdr-all-tabs-orderxv"></div>
                                                                </div>
                                                            </div>
                                                            <div className="orponbd-allxx-order-bx-color-section-box-right-seeall-export-ab">
                                                                <ul>
                                                                    <li className="orponbd-allxx-order-bx-color-section-box-right-select-bx">
                                                                        <span>See: </span>
                                                                        <select>
                                                                            <option value="" selected>10 Entries</option>
                                                                            <option value="">50 Entries</option>
                                                                            <option value="">100 Entries</option>
                                                                            <option value="">200 Entries</option>
                                                                        </select>
                                                                    </li>
                                                                    <li><button>Export <span><i class="fas fa-long-arrow-alt-down"></i></span></button></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        {/* Head sec end */}
                                                        {/* Recent Order Table Box Start */}
                                                        <div className="obd-all-orders-order-bx-product-and-new-user-dash-board-table-box">
                                                            <table class="table table-bordered">
                                                                <thead style={{borderRadius: '8px'}}>
                                                                    <tr>
                                                                        <th style={{borderTopLeftRadius: '8px',borderBottomLeftRadius: '8px'}} scope="col col-6">Order No</th>
                                                                        <th scope="col col-6">Date</th>
                                                                        <th scope="col col-6">Customer Name</th>
                                                                        <th scope="col col-6">Address</th>
                                                                        <th scope="col col-6">Payment Method</th>
                                                                        <th scope="col col-6">Total Amount</th>
                                                                        <th style={{textAlign: 'center'}} scope="col col-6">Status</th>
                                                                        <th style={{borderTopRightRadius: '8px',borderBottomRightRadius: '8px', textAlignLast: 'center'}} scope="col col-6">Action</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {/* single Item start */}
                                                                    <tr>
                                                                        <td>252545524</td>
                                                                        <td style={{textAlign: 'center'}}>2 Sep, 2020  <br/> <span>3:00 PM</span></td>
                                                                        <td>Customer Full Name</td>
                                                                        <td>Shipping address</td>
                                                                        <td style={{textAlign: 'center'}}>Bkash</td>
                                                                        <td style={{textAlign: 'center'}}>৳ 2400</td>
                                                                        <td style={{textAlign: 'center'}}>
                                                                            <div className="obd-recent-order-bx-product-and-payment-stts-sec">
                                                                                <div className="obd-recent-order-bx-product-and-payment-stts-pendng">
                                                                                    <button>Pending</button>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td style={{textAlign: 'center'}}>
                                                                            <div className="obd-alll-orderx-bx-product-and-action-bx-main-box">
                                                                                <ul>
                                                                                    <li>
                                                                                        <div className="obd-alll-orderx-bx-product-and-action-bx">
                                                                                            <Link to="/"><i class="far fa-eye"></i></Link>
                                                                                        </div>
                                                                                    </li>
                                                                                    <li>
                                                                                        <div className="obd-alll-orderx-bx-product-and-action-bx">
                                                                                            <Link to="/"><i class="far fa-edit"></i></Link>
                                                                                        </div>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    {/* Single Item End */}
                                                                    {/* single Item start */}
                                                                    <tr>
                                                                        <td>252545524</td>
                                                                        <td style={{textAlign: 'center'}}>2 Sep, 2020  <br/> <span>3:00 PM</span></td>
                                                                        <td>Customer Full Name</td>
                                                                        <td>Shipping address</td>
                                                                        <td style={{textAlign: 'center'}}>Bkash</td>
                                                                        <td style={{textAlign: 'center'}}>৳ 2400</td>
                                                                        <td style={{textAlign: 'center'}}>
                                                                            <div className="obd-recent-order-bx-product-and-payment-stts-sec">
                                                                                <div className="obd-recent-order-bx-product-and-payment-stts-pendng">
                                                                                    <button>Pending</button>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td style={{textAlign: 'center'}}>
                                                                            <div className="obd-alll-orderx-bx-product-and-action-bx-main-box">
                                                                                <ul>
                                                                                    <li>
                                                                                        <div className="obd-alll-orderx-bx-product-and-action-bx">
                                                                                            <Link to="/"><i class="far fa-eye"></i></Link>
                                                                                        </div>
                                                                                    </li>
                                                                                    <li>
                                                                                        <div className="obd-alll-orderx-bx-product-and-action-bx">
                                                                                            <Link to="/"><i class="far fa-edit"></i></Link>
                                                                                        </div>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    {/* Single Item End */}
                                                                    {/* single Item start */}
                                                                    <tr>
                                                                        <td>252545524</td>
                                                                        <td style={{textAlign: 'center'}}>2 Sep, 2020  <br/> <span>3:00 PM</span></td>
                                                                        <td>Customer Full Name</td>
                                                                        <td>Shipping address</td>
                                                                        <td style={{textAlign: 'center'}}>Bkash</td>
                                                                        <td style={{textAlign: 'center'}}>৳ 2400</td>
                                                                        <td style={{textAlign: 'center'}}>
                                                                            <div className="obd-recent-order-bx-product-and-payment-stts-sec">
                                                                                <div className="obd-recent-order-bx-product-and-payment-stts-pendng">
                                                                                    <button>Pending</button>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td style={{textAlign: 'center'}}>
                                                                            <div className="obd-alll-orderx-bx-product-and-action-bx-main-box">
                                                                                <ul>
                                                                                    <li>
                                                                                        <div className="obd-alll-orderx-bx-product-and-action-bx">
                                                                                            <Link to="/"><i class="far fa-eye"></i></Link>
                                                                                        </div>
                                                                                    </li>
                                                                                    <li>
                                                                                        <div className="obd-alll-orderx-bx-product-and-action-bx">
                                                                                            <Link to="/"><i class="far fa-edit"></i></Link>
                                                                                        </div>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    {/* Single Item End */}

                                                                </tbody>
                                                            </table>
                                                        </div>
                                                        {/* Recent Order Table Box End */}
                                                    </div>
                                                </div>
                                            </div>
                                      </div>
                                    </Tab>
                                    <Tab eventKey="dashdelvrd" title="Delivered">
                                      tabs three
                                    </Tab>
                                    <Tab eventKey="dashintranst" title="In Transit">
                                      tabs three dd
                                    </Tab>
                                    <Tab eventKey="dashcanceld" title="Cancelled">
                                      tabs three cc
                                    </Tab>
                                </Tabs>
                                <div className="obd-all-order-pages-tabs-main-manage-order-date-ppckr">
                                  <OrdersDatePicker/>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Tabs Section start */} 

                        </div>
                    </div>
                </div>
            </div>

            </>
        )
    }
}
