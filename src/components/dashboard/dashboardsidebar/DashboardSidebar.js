import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './dashboardsidebar.css';

// RC Collepse
import Collapse, { Panel } from 'rc-collapse';
require('rc-collapse/assets/index.css');
// RC Collepse

export default class DashboardSidebar extends Component {
    render() {
        return (
            <>
            <div className="obd-dashboard-left-sidebar-main-wv-box">
                <div className="obd-dashboard-left-sidebar-main-wv-item-menu-content">
                    <div className="obd-dashboard-left-sidebar-main-wv-item-menu-content-logo text-center">
                        <img src={require('../../../assets/dashboard-logo.png')} alt=""/>
                    </div>
                    <Collapse accordion={true} >
                        <NavLink to="/dashboard" activeStyle={{color:'#fb4c2c',fontWeight: "bold",}}>
                            <Panel showArrow={false} header={<p><img src={require('../../../assets/dashboard-dash-icon.png')} alt=""/> <span>Dashboard</span> <span className="obd-dashboard-left-sidebar-main-wv-rihnt-ang-icn text-right"><i className="fas fa-angle-right"></i></span></p>}></Panel>
                        </NavLink>
                        <NavLink to="/dashboard-orders" activeStyle={{color:'#fb4c2c',fontWeight: "bold",}}>
                            <Panel showArrow={false} header={<p><img src={require('../../../assets/dashboard-orders-icon.png')} alt=""/> <span>Orders</span> <span className="obd-dashboard-left-sidebar-main-wv-rihnt-ang-icn text-right"><i className="fas fa-angle-right"></i></span></p>}></Panel>
                        </NavLink>
                        <Panel showArrow={false} header={<p><img src={require('../../../assets/dashboard-orders-icon.png')} alt=""/> <span>Orders</span> <span className="obd-dashboard-left-sidebar-main-wv-rihnt-ang-icn text-right"><i className="fas fa-angle-right"></i></span></p>}>
                            <div className="obd-dashboard-left-sidebar-main-wv-item-menu-content-inner">
                                <ul>
                                    <li className="womennsss-main-cattt-wbv"><NavLink to="/womens-fashion" activeClassName="selectedLink" activeStyle={{color:'#fb4c2c',fontWeight: "bold",}}><img src={require('../../../assets/dashboard-sub-menu-das-icon.svg')} alt=""/> Women's Fashion</NavLink></li>
                                    <li><NavLink to="/dashboard" activeStyle={{color:'#fb4c2c',fontWeight: "bold",}}><img src={require('../../../assets/dashboard-sub-menu-das-icon.svg')} alt=""/> Watches</NavLink></li>
                                    <li><NavLink to="/womens-sub-beauty-and-health" activeStyle={{color:'#fb4c2c',fontWeight: "bold",}}><img src={require('../../../assets/dashboard-sub-menu-das-icon.svg')} alt=""/> Beauty & Health</NavLink></li>
                                    <li><NavLink to="/womens-sub-womens-bags" activeStyle={{color:'#fb4c2c',fontWeight: "bold",}}><img src={require('../../../assets/dashboard-sub-menu-das-icon.svg')} alt=""/> Women's Bags</NavLink></li>
                                </ul>
                            </div>
                        </Panel>
                        <Panel showArrow={false} header={<p><img src={require('../../../assets/dashboard-products-icon.png')} alt=""/> <span>Products</span> <span className="obd-dashboard-left-sidebar-main-wv-rihnt-ang-icn text-right"><i className="fas fa-angle-right"></i></span></p>}>
                            <div className="obd-dashboard-left-sidebar-main-wv-item-menu-content-inner">
                                <ul>
                                    <li className="womennsss-main-cattt-wbv"><NavLink to="/womens-fashion" activeClassName="selectedLink" activeStyle={{color:'#fb4c2c',fontWeight: "bold",}}><img src={require('../../../assets/dashboard-sub-menu-das-icon.svg')} alt=""/> Women's Fashion</NavLink></li>
                                    <li><NavLink to="/dashboard" activeStyle={{color:'#fb4c2c',fontWeight: "bold",}}><img src={require('../../../assets/dashboard-sub-menu-das-icon.svg')} alt=""/> Watches</NavLink></li>
                                    <li><NavLink to="/womens-sub-beauty-and-health" activeStyle={{color:'#fb4c2c',fontWeight: "bold",}}><img src={require('../../../assets/dashboard-sub-menu-das-icon.svg')} alt=""/> Beauty & Health</NavLink></li>
                                    <li><NavLink to="/womens-sub-womens-bags" activeStyle={{color:'#fb4c2c',fontWeight: "bold",}}><img src={require('../../../assets/dashboard-sub-menu-das-icon.svg')} alt=""/> Women's Bags</NavLink></li>
                                </ul>
                            </div>
                        </Panel>
                        <Panel showArrow={false} header={<p><img src={require('../../../assets/dashboard-category-icon.png')} alt=""/> <span>Category</span> <span className="obd-dashboard-left-sidebar-main-wv-rihnt-ang-icn text-right"><i className="fas fa-angle-right"></i></span></p>}>
                            <div className="obd-dashboard-left-sidebar-main-wv-item-menu-content-inner">
                                <ul>
                                    <li className="womennsss-main-cattt-wbv"><NavLink to="/womens-fashion" activeClassName="selectedLink" activeStyle={{color:'#fb4c2c',fontWeight: "bold",}}><img src={require('../../../assets/dashboard-sub-menu-das-icon.svg')} alt=""/> Women's Fashion</NavLink></li>
                                    <li><NavLink to="/dashboard" activeStyle={{color:'#fb4c2c',fontWeight: "bold",}}><img src={require('../../../assets/dashboard-sub-menu-das-icon.svg')} alt=""/> Watches</NavLink></li>
                                    <li><NavLink to="/womens-sub-beauty-and-health" activeStyle={{color:'#fb4c2c',fontWeight: "bold",}}><img src={require('../../../assets/dashboard-sub-menu-das-icon.svg')} alt=""/> Beauty & Health</NavLink></li>
                                    <li><NavLink to="/womens-sub-womens-bags" activeStyle={{color:'#fb4c2c',fontWeight: "bold",}}><img src={require('../../../assets/dashboard-sub-menu-das-icon.svg')} alt=""/> Women's Bags</NavLink></li>
                                </ul>
                            </div>
                        </Panel>
                        <Panel showArrow={false} header={<p><img src={require('../../../assets/dashboard-brands-icon.png')} alt=""/> <span>Brands</span> <span className="obd-dashboard-left-sidebar-main-wv-rihnt-ang-icn text-right"><i className="fas fa-angle-right"></i></span></p>}>
                            <div className="obd-dashboard-left-sidebar-main-wv-item-menu-content-inner">
                                <ul>
                                    <li className="womennsss-main-cattt-wbv"><NavLink to="/womens-fashion" activeClassName="selectedLink" activeStyle={{color:'#fb4c2c',fontWeight: "bold",}}><img src={require('../../../assets/dashboard-sub-menu-das-icon.svg')} alt=""/> Women's Fashion</NavLink></li>
                                    <li><NavLink to="/dashboard" activeStyle={{color:'#fb4c2c',fontWeight: "bold",}}><img src={require('../../../assets/dashboard-sub-menu-das-icon.svg')} alt=""/> Watches</NavLink></li>
                                    <li><NavLink to="/womens-sub-beauty-and-health" activeStyle={{color:'#fb4c2c',fontWeight: "bold",}}><img src={require('../../../assets/dashboard-sub-menu-das-icon.svg')} alt=""/> Beauty & Health</NavLink></li>
                                    <li><NavLink to="/womens-sub-womens-bags" activeStyle={{color:'#fb4c2c',fontWeight: "bold",}}><img src={require('../../../assets/dashboard-sub-menu-das-icon.svg')} alt=""/> Women's Bags</NavLink></li>
                                </ul>
                            </div>
                        </Panel>
                        <Panel showArrow={false} header={<p><img src={require('../../../assets/dashboard-del-chrg-icon.png')} alt=""/> <span>Delivery Charge</span> <span className="obd-dashboard-left-sidebar-main-wv-rihnt-ang-icn text-right"><i className="fas fa-angle-right"></i></span></p>}>
                            <div className="obd-dashboard-left-sidebar-main-wv-item-menu-content-inner">
                                <ul>
                                    <li className="womennsss-main-cattt-wbv"><NavLink to="/womens-fashion" activeClassName="selectedLink" activeStyle={{color:'#fb4c2c',fontWeight: "bold",}}><img src={require('../../../assets/dashboard-sub-menu-das-icon.svg')} alt=""/> Women's Fashion</NavLink></li>
                                    <li><NavLink to="/dashboard" activeStyle={{color:'#fb4c2c',fontWeight: "bold",}}><img src={require('../../../assets/dashboard-sub-menu-das-icon.svg')} alt=""/> Watches</NavLink></li>
                                    <li><NavLink to="/womens-sub-beauty-and-health" activeStyle={{color:'#fb4c2c',fontWeight: "bold",}}><img src={require('../../../assets/dashboard-sub-menu-das-icon.svg')} alt=""/> Beauty & Health</NavLink></li>
                                    <li><NavLink to="/womens-sub-womens-bags" activeStyle={{color:'#fb4c2c',fontWeight: "bold",}}><img src={require('../../../assets/dashboard-sub-menu-das-icon.svg')} alt=""/> Women's Bags</NavLink></li>
                                </ul>
                            </div>
                        </Panel>
                        <Panel showArrow={false} header={<p><img src={require('../../../assets/dashboard-customers-icon.png')} alt=""/> <span>Customers</span> <span className="obd-dashboard-left-sidebar-main-wv-rihnt-ang-icn text-right"><i className="fas fa-angle-right"></i></span></p>}>
                            <div className="obd-dashboard-left-sidebar-main-wv-item-menu-content-inner">
                                <ul>
                                    <li className="womennsss-main-cattt-wbv"><NavLink to="/womens-fashion" activeClassName="selectedLink" activeStyle={{color:'#fb4c2c',fontWeight: "bold",}}><img src={require('../../../assets/dashboard-sub-menu-das-icon.svg')} alt=""/> Women's Fashion</NavLink></li>
                                    <li><NavLink to="/dashboard" activeStyle={{color:'#fb4c2c',fontWeight: "bold",}}><img src={require('../../../assets/dashboard-sub-menu-das-icon.svg')} alt=""/> Watches</NavLink></li>
                                    <li><NavLink to="/womens-sub-beauty-and-health" activeStyle={{color:'#fb4c2c',fontWeight: "bold",}}><img src={require('../../../assets/dashboard-sub-menu-das-icon.svg')} alt=""/> Beauty & Health</NavLink></li>
                                    <li><NavLink to="/womens-sub-womens-bags" activeStyle={{color:'#fb4c2c',fontWeight: "bold",}}><img src={require('../../../assets/dashboard-sub-menu-das-icon.svg')} alt=""/> Women's Bags</NavLink></li>
                                </ul>
                            </div>
                        </Panel>
                        <Panel showArrow={false} header={<p><img src={require('../../../assets/dashboard-user-setp-icon.png')} alt=""/> <span>User Setup</span><span className="obd-dashboard-left-sidebar-main-wv-rihnt-ang-icn text-right"><i className="fas fa-angle-right"></i></span></p>}>
                            <div className="obd-dashboard-left-sidebar-main-wv-item-menu-content-inner">
                                <ul>
                                    <li className="womennsss-main-cattt-wbv"><NavLink to="/womens-fashion" activeClassName="selectedLink" activeStyle={{color:'#fb4c2c',fontWeight: "bold",}}><img src={require('../../../assets/dashboard-sub-menu-das-icon.svg')} alt=""/> Women's Fashion</NavLink></li>
                                    <li><NavLink to="/dashboard" activeStyle={{color:'#fb4c2c',fontWeight: "bold",}}><img src={require('../../../assets/dashboard-sub-menu-das-icon.svg')} alt=""/> Watches</NavLink></li>
                                    <li><NavLink to="/womens-sub-beauty-and-health" activeStyle={{color:'#fb4c2c',fontWeight: "bold",}}><img src={require('../../../assets/dashboard-sub-menu-das-icon.svg')} alt=""/> Beauty & Health</NavLink></li>
                                    <li><NavLink to="/womens-sub-womens-bags" activeStyle={{color:'#fb4c2c',fontWeight: "bold",}}><img src={require('../../../assets/dashboard-sub-menu-das-icon.svg')} alt=""/> Women's Bags</NavLink></li>
                                </ul>
                            </div>
                        </Panel>
                    </Collapse>
                </div>
            </div>
            </>
        )
    }
}
