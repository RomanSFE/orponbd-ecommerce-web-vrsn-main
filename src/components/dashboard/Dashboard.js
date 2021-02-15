import React, { Component } from 'react'
import DashboardSidebar from './dashboardsidebar/DashboardSidebar'
import './dashboardmain.css'
import DashboardTopBar from './dashboardtopbar/DashboardTopBar'
import TopSaleAndNewUser from './dashboardhomecomponent/topsaleandusers/TopSaleAndNewUser'
import DashBoardRecentOrder from './dashboardhomecomponent/recentorder/DashBoardRecentOrder'

import { Bar } from 'react-chartjs-2'
import { Doughnut  } from 'react-chartjs-2'

const data = {
    labels: ['Sat', 'Sun', 'Mon', 'Twe', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'Total Revenue',
        data: [12, 19, 3, 5, 2, 3, 17],
        backgroundColor: 'rgba(184, 83, 242, 0.6)',
      },
      {
        label: 'Total Sales',
        data: [2, 3, 20, 5, 1, 4, 7],
        backgroundColor: 'rgba(102, 185, 249, 0.6)',

        // borderColor: 'rgba(255, 99, 132, 1)',
        // borderWidth: 1,
      },
    ],
  }
  
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  }

  // Pie Chart Start -----------------
  const datapie = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 6],
        backgroundColor: [
          'rgba(69, 85, 196, 9)',
          'rgba(78, 199, 106, 10)',
          'rgba(103, 200, 255, 10)',
        ],
        borderColor: [
          'rgba(69, 85, 196, 9)',
          'rgba(78, 199, 106, 10)',
          'rgba(103, 200, 255, 10)',
        ],
        borderWidth: 1,
      },
    ],
  }
  // Pie Chart End

export default class Dashboard extends Component {
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
                          {/* Box Section start */}
                          <div className="row obd-top-bar-main-order-total-count-boxx">
                            <div className="col-md-3">
                              <div className="obd-top-bar-main-order-total-count-boxx-single-item-box-orderx">
                                  <div className="row obd-top-bar-main-order-total-count-boxx-single-item-inner-ex-pdd">
                                    <div className="col-md-8">
                                      <div className="obd-top-bar-main-order-total-count-boxx-single-item-ordr-lft-order">
                                        <h4>Orders</h4>
                                        <h5>1200</h5>
                                        <div className="obd-top-bar-main-order-total-count-boxx-single-item-ordr-lft-icon-order">
                                          <img src={require('../../assets/dashboard-up-icon.svg')} alt=""/>
                                          <span>This Month</span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div className="obd-top-bar-main-order-total-count-boxx-single-item-ordr-right-icon-order text-center">
                                        <div className="obd-top-bar-main-order-total-count-boxx-single-item-ordr-right-icon-img">
                                          <img src={require('../../assets/dashboard-wv-order-icon.svg')} alt=""/>
                                        </div>
                                          
                                          <h4><i className="fas fa-plus"></i> <span>4.2%</span></h4>
                                      </div>
                                    </div>
                                  </div>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="obd-top-bar-main-order-total-count-boxx-single-item-box-total-salex">
                                  <div className="row obd-top-bar-main-order-total-count-boxx-single-item-inner-ex-pdd">
                                    <div className="col-md-8">
                                      <div className="obd-top-bar-main-order-total-count-boxx-single-item-ordr-lft-order">
                                        <h4>Total Sale</h4>
                                        <h5>৳ 150000.00</h5>
                                        <div className="obd-top-bar-main-order-total-count-boxx-single-item-ordr-lft-icon-order">
                                          <img src={require('../../assets/dashboard-up-icon.svg')} alt=""/>
                                          <span>This Month</span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div className="obd-top-bar-main-order-total-count-boxx-single-item-ordr-right-icon-order text-center">
                                        <div className="obd-top-bar-main-order-total-count-boxx-single-item-ordr-right-icon-img-ttl-sl">
                                          <img src={require('../../assets/dashboard-ttl-sale-icn.svg')} alt=""/>
                                        </div>
                                          
                                          <h4><i className="fas fa-plus"></i> <span>4.2%</span></h4>
                                      </div>
                                    </div>
                                  </div>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="obd-top-bar-main-order-total-count-boxx-single-item-box-total-revnu">
                                  <div className="row obd-top-bar-main-order-total-count-boxx-single-item-inner-ex-pdd">
                                    <div className="col-md-8">
                                      <div className="obd-top-bar-main-order-total-count-boxx-single-item-ordr-lft-order">
                                        <h4>Total Revenue</h4>
                                        <h5>৳ 180000.00</h5>
                                        <div className="obd-top-bar-main-order-total-count-boxx-single-item-ordr-lft-icon-order">
                                          <img src={require('../../assets/dashboard-dwnn-icon.svg')} alt=""/>
                                          <span>This Month</span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div className="obd-top-bar-main-order-total-count-boxx-single-item-ordr-right-icon-order text-center">
                                        <div className="obd-top-bar-main-order-total-count-boxx-single-item-ordr-right-icon-img-revn">
                                          <img src={require('../../assets/dashboard-totl-revn-icon.svg')} alt=""/>
                                        </div>
                                          
                                          <h4><i className="fas fa-minus"></i> <span>3.2%</span></h4>
                                      </div>
                                    </div>
                                  </div>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="obd-top-bar-main-order-total-count-boxx-single-item-box-new-user">
                                  <div className="row obd-top-bar-main-order-total-count-boxx-single-item-inner-ex-pdd">
                                    <div className="col-md-8">
                                      <div className="obd-top-bar-main-order-total-count-boxx-single-item-ordr-lft-order">
                                        <h4>New User</h4>
                                        <h5>1750</h5>
                                        <div className="obd-top-bar-main-order-total-count-boxx-single-item-ordr-lft-icon-order">
                                          <img src={require('../../assets/dashboard-up-icon.svg')} alt=""/>
                                          <span>This Month</span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div className="obd-top-bar-main-order-total-count-boxx-single-item-ordr-right-icon-order text-center">
                                        <div className="obd-top-bar-main-order-total-count-boxx-single-item-ordr-right-icon-img-new-user">
                                          <img src={require('../../assets/dashboard-new-user.svg')} alt=""/>
                                        </div>
                                          
                                          <h4><i className="fas fa-plus"></i> <span>5.2%</span></h4>
                                      </div>
                                    </div>
                                  </div>
                              </div>
                            </div>
                          </div>
                          {/* Box Section start */} 

                          {/* Bar Chart Section */}
                          <div className="row">
                            <div className="col-md-8">
                              <div className="obd-main-dashboard-main-sec-main-chart-box-wv">
                                <div className="obd-business-overview-and-day-month-sec-dashbrd">
                                  <div className="row">
                                    <div className="col-md-5">
                                      <div className="obd-business-overview-and-day-month-sec-das-hed">
                                        <h4>Business Overview</h4>
                                      </div>
                                    </div>
                                    <div className="col-md-7">
                                      <div className="obd-business-overview-and-day-month-sec-das-month-wek-yr-sec text-right">
                                        <ul>
                                          <li>Weekly</li>
                                          <li>Monthly</li>
                                          <li>Yearly</li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <Bar 
                                  data={data}
                                  width={195}
                                  height={90}
                                  options={options} 
                                />
                              </div>
                          </div>
                          <div className="col-4">
                              <div className="obd-main-dashboard-main-sec-main-chart-box-pie-chrt-box">
                                <div className="obd-main-dashboard-main-sec-main-chart-box-pie-chrt-hed text-center">
                                  <h4>Order Summary</h4>
                                </div>
                                <Doughnut 
                                  data={datapie}
                                  width={180}
                                  height={180}
                                />
                              </div>
                            </div>
                          </div>
                          {/* Top Selling Products and new user start */}
                          <div className="obd-top-selling-product-and-new-user-dash-board-box">
                            <div className="row">
                              <div className="col-md-12">
                                <div className="obd-top-selling-product-and-new-user-dash-board-inner">
                                  <TopSaleAndNewUser/>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Top Selling Products and new user End */}
                          {/* Recent Order start */}
                          <div className="obd-recent-orderxx-product-and-new-user-dash-board-box">
                            <div className="row">
                              <div className="col-md-12">
                                <div className="obd-recent-orderxx-product-and-new-user-dash-board-inner">
                                  <DashBoardRecentOrder/>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Recent Order End */}
                        </div>
                    </div>
                </div>
            </div>

            </>
        )
    }
}



