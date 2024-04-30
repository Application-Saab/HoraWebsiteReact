import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footersec';
import Home from './pages/Home';
import Decoration from './pages/Decoration';
import DecorationCatPage from './pages/DecorationCatPage';
import DecorationCatDetails from './pages/DecorationCatDetails'
import Checkout from './pages/Checkout';
import Login from './pages/login';
import AboutUs from './pages/AboutUs';

import './index.css'; // Import your CSS file here

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/decoration" element={<Decoration />} />
          <Route path="/decoration-cat-page/:subCategory" element={<DecorationCatPage />} />
          <Route path="/decoration-cat-details/:subCategory/:productName" element={<DecorationCatDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
        </div>
        <Footer />
     
    </Router>
   
  );
}

export default App;
