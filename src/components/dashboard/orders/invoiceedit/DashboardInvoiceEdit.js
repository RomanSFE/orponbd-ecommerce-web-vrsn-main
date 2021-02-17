import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import DashboardSidebar from '../../dashboardsidebar/DashboardSidebar'
import DashboardTopBar from '../../dashboardtopbar/DashboardTopBar'
import './dashboardinvoiceedit.css'

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
                                             <li><Link to="/dashboard">Dashboard</Link></li>
                                             <li><Link to="/dashboard-orders">Orders</Link></li>
                                             <li><span> Order # 325458</span></li>
                                         </ul>
                                     </div>
                                     <div className="obd-all-order-details-editt-dashboard-main-section-order-id-and-back-order-idd-tx">
                                         <h3>Order # 325458</h3>
                                         <div className="obd-all-order-details-editt-dashboard-main-section-order-id-and-back-order-bk-to-orddr">
                                             <Link to="/">
                                                 <span><i className="fas fa-angle-left"></i></span> Back To Orders
                                             </Link>
                                         </div>
                                     </div>

                                 </div>
                                 {/* top order id and back button end */}
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
