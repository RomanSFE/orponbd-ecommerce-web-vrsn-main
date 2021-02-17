import React from 'react';
import {Switch,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Home Page Section
import HomePageWeb from './components/homepage/HomePageWeb.js'

// Womens Fashion Category start
import WomensFashion from './components/categoriespages/womensfashions/WomensFashion';
import WomensSubWatches from './components/categoriespages/womensfashions/subcategorywomens/WomensSubWatches.js';
import WomenSubBeautyAndHealth from './components/categoriespages/womensfashions/subcategorywomens/WomenSubBeautyAndHealth';
import WomensSubBags from './components/categoriespages/womensfashions/subcategorywomens/WomensSubBags';
// Womens Fashion Category End

// Top Brand Start
import TopBrandsAllWeb from './components/topbrands/TopBrandsAllWeb';
import XiaomiBrand from './components/topbrands/xiaomi/XiaomiBrand';
// Top Brand End

// Details Section All Products flash deal, New arrival etc
import NewArrivalAllProducts from './components/detailssection/newarrivaldetails/NewArrivalAllProducts';
import BestSellingsDetails from './components/detailssection/bestsellingdetails/BestSellingsDetails';
import FlashDealDetails from './components/detailssection/flashdealdetails/FlashDealDetails';
// Details Section All Products flash deal, New arrival etc

// Pre Order Details
import PreOrderDetails from './components/preorderdetails/PreOrderDetails';
// Pre Order Details

// Grocery Main Page Details
import GroceryAllItems from './components/grocerydetailspage/GroceryAllItems';
import CookingEssentialCategoryDetails from './components/grocerydetailspage/cookingcatdetails/CookingEssentialCategoryDetails';
import SnacksAndConfectionaryCatDetails from './components/grocerydetailspage/snacksandconfectdetails/SnacksAndConfectionaryCatDetails';
import BeverageCatDetails from './components/grocerydetailspage/beveragedetails/BeverageCatDetails';
import HealthAndBeautyCatDetails from './components/grocerydetailspage/healthandbeauty/HealthAndBeautyCatDetails';
// Grocery Main Page Details

// Products Page
import Products from './components/productpage/Products';
// Products Page

// My Cart Page
import MyCart from './components/cart/MyCart';
import ProceedToCheckout from './components/cart/proceedtocheckout/ProceedToCheckout';
import ProceedToPay from './components/cart/proceedtopay/ProceedToPay';
import CongratulationPage from './components/cart/congratulationpage/CongratulationPage';
// My Cart Page

// Profile Dashboard
import Profile from './components/userprofiledashboard/Profile';
import MyOrders from './components/userprofiledashboard/myorders/MyOrders';
import WishList from './components/userprofiledashboard/wishlist/WishList';
import PreOrderList from './components/userprofiledashboard/preorderslist/PreOrderList';
import CouponsList from './components/userprofiledashboard/coupons/CouponsList';
import MyWallet from './components/userprofiledashboard/mywallet/MyWallet';
import ManageReview from './components/userprofiledashboard/managereview/ManageReview';
import AddressBook from './components/userprofiledashboard/addressbook/AddressBook';
import MyAccountSettings from './components/userprofiledashboard/accountsetting/MyAccountSettings';
// Profile Dashboard

// Important Pages
import ContactUsPage from './components/importantpages/contactuspage/ContactUsPage';
// Important Pages

// OTP
import UserOtp from './components/topmenusection/userotp/UserOtp';
// OTP

// Admin User Signin
import AdminUserSignin from './components/userpart/AdminUserSignin';
// Admin User Signin


//apply admin middleware
import GuestRoute from './routeGuard/GuestRoute';
import AdminAuthRoute from './routeGuard/AdminAuthRoute';
//Apply middleware


//apply customer middleware
import CustomerAuthRoute from './routeGuard/CustomerAuthRoute';

//customer dashboard
import CustomerDashboard from "./components/customer_dashboard/CustomerDashboard";

//Admin dashboard
import AdminDashboard from "./components/admin_dashboard/AdminDashboard";
import ForgetPassword from './components/userpart/ForgetPassword';
import ResetPassword from './components/userpart/ResetPassword';
import CustomerForgetPassword from './components/topmenusection/CustomerForgetPassword';
import CustomerResetPassword from './components/topmenusection/CustomerResetPassword';
//Admin dashboard


// Main Dashboard Start
import Dashboard from './components/dashboard/Dashboard';
import DashboardOrder from './components/dashboard/orders/DashboardOrder';
import DshboardInvoiceDetails from './components/dashboard/orders/invoicedetails/DshboardInvoiceDetails';
import DashboardInvoiceEdit from './components/dashboard/orders/invoiceedit/DashboardInvoiceEdit';
// Main Dashboard End



function App() {
  return (
      <>
      <div className="orpon-bd-web-version-main-section-box">

        <Switch>
          <Route exact path="/" component={HomePageWeb}/>

          {/* Women Fashion Category start */}
          <Route path="/womens-fashion" component={WomensFashion}/>
          <Route path="/womens-sub-watchs" component={WomensSubWatches}/>
          <Route path="/womens-sub-beauty-and-health" component={WomenSubBeautyAndHealth}/>
          <Route path="/womens-sub-womens-bags" component={WomensSubBags}/>
          {/* Women Fashion Category start */}

          {/* Top Brands Start */}
          <Route path="/top-brands-all-brands" component={TopBrandsAllWeb}/>
          <Route path="/brand-xiaomi" component={XiaomiBrand}/>
          {/* Top Brands End */}

          {/* Details Section All Products flash deal, New arrival etc */}
          <Route path="/new-arrival-all-products" component={NewArrivalAllProducts}/>
          <Route path="/best-selling-all-products" component={BestSellingsDetails}/>
          <Route path="/flash-deal-all-products" component={FlashDealDetails}/>
          {/* Details Section All Products flash deal, New arrival etc */}

          {/* Pre Order Details  */}
          <Route path="/pre-order-details" component={PreOrderDetails}/>
          {/* Pre Order Details  */}

          {/* Grocery Main Page Details  */}
          <Route path="/grocery-all-items" component={GroceryAllItems}/>
          <Route path="/grocery-cooking-essentials-all-items" component={CookingEssentialCategoryDetails}/>
          <Route path="/grocery-snacks-confectionary-all-items" component={SnacksAndConfectionaryCatDetails}/>
          <Route path="/grocery-beverage-all-items" component={BeverageCatDetails}/>
          <Route path="/grocery-health-and-beauty-all-items" component={HealthAndBeautyCatDetails}/>
          {/* Grocery Main Page Details  */}

          {/* My Cart Page */}
          <Route path="/my-cart" component={MyCart}/>
          <Route path="/proceed-to-checkout" component={ProceedToCheckout}/>
          <Route path="/proceed-to-pay" component={ProceedToPay}/>
          <Route path="/congratulation" component={CongratulationPage}/>
          {/* My Cart Page */}

          {/* Products Page */}
          <Route path="/products" component={Products}/>
          {/* Products Page */}

          {/* Profile Dashboard */}
          <Route path="/profile" component={Profile}/>
          <Route path="/my-orders" component={MyOrders}/>
          <Route path="/my-wishlist" component={WishList}/>
          <Route path="/my-preorders" component={PreOrderList}/>
          <Route path="/my-coupons" component={CouponsList}/>
          <Route path="/my-wallet" component={MyWallet}/>
          <Route path="/manage-reviews" component={ManageReview}/>
          <Route path="/my-address-book" component={AddressBook}/>
          <Route path="/my-account-settings" component={MyAccountSettings}/>
          {/* Profile Dashboard */}

          {/* Important Pages */}
          <Route path="/contact-us" component={ContactUsPage}/>
          {/* Important Pages */}

          {/* OTP */}
          <Route path="/user-otp-confirm/:phone" component={UserOtp}/>
          {/* OTP */}

          {/*customer dashboard*/}
          <CustomerAuthRoute path="/customer-dashboard" component={CustomerDashboard}/>
          {/*customer dashboard*/}

          {/*customer forget and reset password*/}
          <CustomerAuthRoute path="/customer-dashboard" component={CustomerDashboard}/>
          <Route path="/customer-forget-password" component={CustomerForgetPassword}></Route>
          <Route path="/customer-reset-password" component={CustomerResetPassword}></Route>
          {/*customer forget and reset password*/}

          {/* Admin User Signin */}
          <GuestRoute path="/admin-signin" component={AdminUserSignin}/>
          <GuestRoute path="/admin-forget-password" component={ForgetPassword}></GuestRoute>
          <GuestRoute path="/admin-reset-password" component={ResetPassword}></GuestRoute>
          {/* Admin User Signin  */}

          {/*Admin DashBoard routes start*/}
          <AdminAuthRoute path="/admin-dashboard" component={AdminDashboard}/>
          {/*Admin DashBoard Routes end*/}



          {/*Main Dashboard Start*/}
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/dashboard-orders" component={DashboardOrder}/>
          <Route path="/dashboard-invoice-details" component={DshboardInvoiceDetails}/>
          <Route path="/dashboard-invoice-edit" component={DashboardInvoiceEdit}/>
          {/*Main Dashboard end*/}

        </Switch>
        
      </div>
      </>
  );
}

export default App;
