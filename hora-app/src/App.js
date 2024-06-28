import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footersec';
import Home from './pages/Home';
import Decoration from './pages/Decoration';
import DecorationCatPage from './pages/DecorationCatPage';
import DecorationCatDetails from './pages/DecorationCatDetails'
import DecorationCity from './pages/DecorationCity';
import Checkout from './pages/Checkout';
import Login from './pages/login';
import AboutUs from './pages/AboutUs';
import './index.css'; // Import your CSS file here
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Citypage from './pages/Citypage';
import Orderlist from './pages/Orderlist'; 
import MyAccount from './pages/MyAccount';
import CreateOrder from './pages/ChefOrder/CreateOrder';
import ChefCheckout from './pages/ChefOrder/ChefCheckout.jsx';
import whatsppicon from "./assets/whatsapp-icon.png";
import SelectDate from './pages/ChefOrder/SelectDate';
import Failure from './pages/Failure.jsx';
import Success from './pages/Success.jsx'
import FoodDeliveryCreateOrder from './pages/Fooddelivery/FoodDeliveryCreateOrder.jsx'
import FoodDeliveryselectDate from './pages/Fooddelivery/FoodDeliveryselectedate.jsx';
import FoodDeliveryCheckout from './pages/Fooddelivery/FoodDeliverCheckout.jsx';

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
          <Route path="/decoration" element={<Decoration />} />
          <Route path="/decoration/occasions/:catValue" element={<DecorationCatPage />} />
          <Route path="/decoration/product/:catValue/:productName" element={<DecorationCatDetails />} />
          <Route path="/citypage/:city/decoration" element={<Decoration />} />
          <Route path="/citypage/:city/decoration/occasions/:catValue" element={<DecorationCatPage />} />
          <Route path="/citypage/:city/decoration/product/:catValue/:productName" element={<DecorationCatDetails />}/>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/chefcheckout" element={<ChefCheckout />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/citypage/:city" element={<Citypage />} />
          <Route path="/orderlist" element={<Orderlist />} />
          <Route path="/myaccount" element={<MyAccount/>} /> 
          <Route path="/chefOrder" element={<CreateOrder/>} /> 
          <Route path="/selectDate" element={<SelectDate/>} />
          <Route path="/decorationcitypage/:city" element={<DecorationCity/>}/>
          <Route path='/fooddeliveryCreateOrder/:selectedfoodCategory' element={<FoodDeliveryCreateOrder/>}/>
          <Route path='/fooddeliveryselectdate' element={<FoodDeliveryselectDate/>}/>
          <Route path='/foodDeliveryCheckout' element={<FoodDeliveryCheckout/>}/>
        </Routes>
        </div>
<div>
<a  class="whatappicon" href="https://wa.me/+917338584828/?text=Hi%2CI%20saw%20your%20website%20and%20want%20to%20know%20more%20about%20the%20services" target="_blank">

<img src={whatsppicon} alt="WhatsApp Icon"/>
</a>    
</div>
        <Footer />
     
    </Router>
   
  );
}

export default App;
