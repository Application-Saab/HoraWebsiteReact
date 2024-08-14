import React from 'react';
import '../testing/newfile.css';
import logo from "../assets/homepage_logo.png";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-left">
        <img src={logo} alt="Hora Logo" className="footer-logo" />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets.
        </p>
        <div className="footer-social-icons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
        <p>© 2024 Hora. All rights reserved.</p>
      </div>
      <div className="footer-right">
        <div className="footer-column">
          <h3>ABOUT HORA</h3>
          <ul>
            <li><a href="#">My Order</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms and Conditions</a></li>
            <li><a href="#">Sitemap</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>SERVICES</h3>
          <ul>
            <li><a href="#">Chef for Party and Occasions</a></li>
            <li><a href="#">Decorations for Party and Occasions</a></li>
            <li><a href="#">Food Delivery for Party and Occasions</a></li>
            <li><a href="#">Catering Service for Party and Occasions</a></li>
            <li><a href="#">Waiter for Party and Occasions</a></li>
            <li><a href="#">Bar Tender for Party and Occasions</a></li>
            <li><a href="#">Cleaner for Party and Occasions</a></li>
            <li><a href="#">Occasions</a></li>
            <li><a href="#">Cuisine</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>CHIEF AND DECORATION IN YOUR CITY</h3>
          <ul>
            <li><a href="#">Delhi</a></li>
            <li><a href="#">Gurugram</a></li>
            <li><a href="#">Ghaziabad</a></li>
            <li><a href="#">Faridabad</a></li>
            <li><a href="#">Noida</a></li>
            <li><a href="#">Bengaluru</a></li>
            <li><a href="#">Hyderabad</a></li>
            <li><a href="#">Mumbai</a></li>
            <li><a href="#">Indore</a></li>
            <li><a href="#">Chennai</a></li>
            <li><a href="#">Pune</a></li>
            <li><a href="#">Surat</a></li>
            <li><a href="#">Bhopal</a></li>
            <li><a href="#">Kanpur</a></li>
            <li><a href="#">Lucknow</a></li>
            <li><a href="#">Goa</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
