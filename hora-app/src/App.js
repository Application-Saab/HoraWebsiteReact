import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footersec';
import Home from './pages/Home';
import Decoration from './pages/Decoration';
import DecorationCatPage from './pages/DecorationCatPage';
import DecorationCatDetails from './pages/DecorationCatDetails'
import DecorationCity from './pages/DecorationCity';
import Checkout from './pages/Checkout';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Orderlist from './pages/Orderlist';
import MyAccount from './pages/MyAccount';
import Login from './pages/login';
import Success from './pages/Success.jsx';
import Failure from './pages/Failure.jsx';
import whatsppicon from "./assets/whatsapp-icon.png";
import FoodDeliveryCreateOrder from './pages/Fooddelivery/FoodDeliveryCreateOrder.jsx';
import FoodDeliveryselectDate from './pages/Fooddelivery/FoodDeliveryselectedate.jsx';
import FoodDeliveryCheckout from './pages/Fooddelivery/FoodDeliverCheckout.jsx';
import ChefCitypage from './pages/ChefCitypage.jsx';
import CreateOrder from './pages/ChefOrder/CreateOrder.jsx';
import ChefCheckout from './pages/ChefOrder/ChefCheckout.jsx';
import SelectDate from './pages/ChefOrder/SelectDate.jsx';

// const ChefCitypage = lazy(() => import('./pages/ChefCitypage.jsx'));
// const CreateOrder = lazy(() => import('./pages/ChefOrder/CreateOrder'));
// const ChefCheckout = lazy(() => import('./pages/ChefOrder/ChefCheckout.jsx'));
// const SelectDate = lazy(() => import('./pages/ChefOrder/SelectDate'));

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/success" element={<Success />} />
          <Route path="/failure" element={<Failure />} />
          {/* decoration pages */}
          <Route path="/balloon-decoration" element={<Decoration />} />
          <Route path="/balloon-decoration/:catValue" element={<DecorationCatPage />} />
          <Route path="/balloon-decoration/:catValue/product/:productName" element={<DecorationCatDetails />} />
          {/* decoration city page */}
          <Route path="/:city" element={<DecorationCity />} />
          <Route path="/:city/balloon-decoration" element={<Decoration />} />
          <Route path="/:city/balloon-decoration/:catValue" element={<DecorationCatPage />} />
          <Route path="/:city/balloon-decoration/:catValue/product/:productName" element={<DecorationCatDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          {/* chef pages */}
          <Route path="/book-chef-checkout" element={<ChefCheckout />} />
          <Route path="/book-chef-cook-for-party" element={<CreateOrder />} />
          <Route path="/:city/book-chef-cook-for-party" element={<CreateOrder />} />
          <Route path="/book-chef-cook-for-party/order-details" element={<SelectDate />} />
          <Route path="/:city/chef-near-me" element={<ChefCitypage />} />
          {/* other pages */}
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/orderlist" element={<Orderlist />} />
          <Route path="/myaccount" element={<MyAccount />} />
          {/* food delivery pages */}
          <Route path="/party-food-delivery-live-catering-buffet/:selectedfoodCategory" element={<FoodDeliveryCreateOrder />} />
          <Route path="/party-food-delivery-live-catering-buffet-select-date/:selectedfoodCategory" element={<FoodDeliveryselectDate />} />
          <Route path="/party-food-delivery-live-catering-buffet-checkout" element={<FoodDeliveryCheckout />} />
        </Routes>
      </div>
      <div>
        <a className="whatappicon" href="https://wa.me/+917338584828/?text=Hi%2CI%20saw%20your%20website%20and%20want%20to%20know%20more%20about%20the%20services" target="_blank">
          <img src={whatsppicon} alt="WhatsApp Icon" />
        </a>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
