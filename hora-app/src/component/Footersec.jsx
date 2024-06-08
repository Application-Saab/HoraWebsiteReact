import React from "react";
import frame_footer from "../assets/frame_footer.png";
import { Link } from 'react-router-dom';
import horaFooterImage from '../assets/hora-footer-bg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Add this import
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer style={style.footer}>
      <div className="frameBlack" style={style.frameBlack}></div>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="container" style={style.container}>
          <div className="foot-container" style={style.footContainer}>
            <div className="footSec" style={style.footSec}>
              <h2>About Hora</h2>
              <ul>
                <li>
                  <Link to="/orderlist" >My Order</Link>
                </li>
                <li>
                  <Link to="https://horaservices.com/AboutUs.html" >About Us</Link>
                </li>
                <li>
                  <Link to="https://horaservices.com/privacy-policy.html" >Private Policy</Link>
                </li>
                <li>
                  <Link to="https://horaservices.com/termCondition.html">Terms & Condition</Link>
                </li>
                <li>
                  <a href="https://horaservices.com/sitemap.xml">Sitemap</a>
                </li>
              </ul>
            </div>
            <div className="footSec1" style={style.footSec1}>
              <h2>Services</h2>
              <ul>
                <li><a href="/chefOrder">Chef for Party and Occasions</a></li>
                <li><a href="/decoration">Decorations for Party and Occasions</a></li>
                <li><a href="https://horaservices.com/ContactUs.html">Food Delivery for Party and Occasions</a></li>
                <li><a href="https://horaservices.com/ContactUs.html">Catering Service for Party and Occasions</a></li>
                <li><a href="https://horaservices.com/ContactUs.html">Waiter for Party and Occasions</a></li>
                <li><a href="https://horaservices.com/ContactUs.html">Bar Tender for Party and Occasions</a></li>
                <li><a href="https://horaservices.com/ContactUs.html">Cleaner for Party and Occasions</a></li>
                <li><a href="https://horaservices.com/Occasion.html">Occasions</a></li>
                <li><a href="https://horaservices.com/Cuisine.html">cuisine</a></li>
              </ul>
            </div>
            <div className="footSec2" style={style.footSec2}>
              <h2>Chef in your city</h2>
              <ul id="myList">
                <li className="city-link" data-city="Delhi">
                  <Link to="citypage/delhi">Delhi</Link>
                </li>
                <li className="city-link" data-city="gurugram">
                  <Link to="citypage/gurugram">Gurugram</Link>
                </li>
                <li className="city-link" data-city="Ghaziabad">
                  <Link to="citypage/ghaziabad">Ghaziabad</Link>
                </li>
                <li className="city-link" data-city="Faridabad">
                  <Link to="citypage/faridabad">Faridabad</Link>
                </li>
                <li className="city-link" data-city="Noida">
                  <Link to="citypage/noida">Noida</Link>
                </li>
                <li className="city-link" data-city="Bengaluru">
                  <Link to="citypage/bengaluru">Bengaluru</Link>
                </li>
                <li className="city-link" data-city="Hyderabad">
                  <Link to="citypage/hyderabad">Hyderabad</Link>
                </li>
                <li className="city-link" data-city="Mumbai">
                  <Link to="citypage/mumbai">Mumbai</Link>
                </li>
                <li className="city-link" data-city="Indore">
                  <Link to="citypage/indore">Indore</Link>
                </li>
                <li className="city-link" data-city="Chennai">
                  <Link to="citypage/chennai">Chennai</Link>
                </li>
                <li className="city-link" data-city="Pune">
                  <Link to="citypage/pune">Pune</Link>
                </li>
                <li className="city-link" data-city="Surat">
                  <Link to="citypage/surat">Surat</Link>
                </li>
                <li className="city-link" data-city="Bhopal">
                  <Link to="citypage/bhopal">Bhopal</Link>
                </li>
                <li className="city-link" data-city="kanpur">
                  <Link to="citypage/kanpur">Kanpur</Link>
                </li>
                <li className="city-link" data-city="Lucknow">
                  <Link to="citypage/lucknow">Lucknow</Link>
                </li>
                <li className="city-link" data-city="Goa">
                  <Link to="citypage/goa">Goa</Link>
                </li>
              </ul>

            </div>

          
            <div className="footSec2" style={style.footSec2}>
              <h2>Decorations in your city</h2>
              <ul id="myList">
                <li className="city-link" data-city="Delhi">
                  <Link to="decorationcitypage/delhi">Delhi</Link>
                </li>
                <li className="city-link" data-city="gurugram">
                  <Link to="citypage/gurugram">Gurugram</Link>
                </li>
                <li className="city-link" data-city="Ghaziabad">
                  <Link to="citypage/ghaziabad">Ghaziabad</Link>
                </li>
                <li className="city-link" data-city="Faridabad">
                  <Link to="citypage/faridabad">Faridabad</Link>
                </li>
                <li className="city-link" data-city="Noida">
                  <Link to="citypage/noida">Noida</Link>
                </li>
                <li className="city-link" data-city="Bengaluru">
                  <Link to="citypage/bengaluru">Bengaluru</Link>
                </li>
                <li className="city-link" data-city="Hyderabad">
                  <Link to="citypage/hyderabad">Hyderabad</Link>
                </li>
                <li className="city-link" data-city="Mumbai">
                  <Link to="citypage/mumbai">Mumbai</Link>
                </li>
                <li className="city-link" data-city="Indore">
                  <Link to="citypage/indore">Indore</Link>
                </li>
                <li className="city-link" data-city="Chennai">
                  <Link to="citypage/chennai">Chennai</Link>
                </li>
                <li className="city-link" data-city="Pune">
                  <Link to="citypage/pune">Pune</Link>
                </li>
                <li className="city-link" data-city="Surat">
                  <Link to="citypage/surat">Surat</Link>
                </li>
                <li className="city-link" data-city="Bhopal">
                  <Link to="citypage/bhopal">Bhopal</Link>
                </li>
                <li className="city-link" data-city="kanpur">
                  <Link to="citypage/kanpur">Kanpur</Link>
                </li>
                <li className="city-link" data-city="Lucknow">
                  <Link to="citypage/lucknow">Lucknow</Link>
                </li>
                <li className="city-link" data-city="Goa">
                  <Link to="citypage/goa">Goa</Link>
                </li>
              </ul>

            </div>
            <div className="footSec4" style={style.footSec3}>
              <h2>Contact</h2>
              <ul>
                <li><a href="/">+918982321487</a></li>
                <li><a href="contactUs.html" style={{ textTransform: "lowercase" }}>dev@horaservices.com</a></li>
                <li> <Link to="https://horaservices.com/ContactUs.html" >Contact Us</Link></li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="social-icons">
                <a href="https://www.facebook.com/profile.php?id=61550111701616" target="_blank" style={{ textTransform: "none", color: "inherit" }}>
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://www.instagram.com/horaservices/?fbclid=IwAR0PktJ-rl5rKC6YGSZ8BSw3m8o9qMfLpJchO17FCEZuCXKxvASZWRymifA" target="_blank" style={{ padding: "0px 6px 0px 8px", textDecoration: "none", color: "inherit" }}>
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://www.youtube.com/channel/UCj5gMUjptHut0aGYHxCbE5g" target="_blank" style={{ textDecoration: "none", color: "inherit" }}>
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </div>
            </div>
            <div className="col-sm-12">
              <p className="copy">© HORA - All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

const style = {
  footer: {
    background: `url(${horaFooterImage})`,
    padding: '10px 0 10px 0',
    color: 'rgba(255, 255, 255, 0.6)',
    position: 'relative',
    color: "#fff",
  },
  frameBlack: {
    background: `url(${frame_footer}) 0 0 repeat-x`,
    backgroundSize: '10px 3px',
    top: '-3px',
  },
  container: {
    maxWidth: '1280px !important',
  },
  footContainer: {
    margin: '0 auto',
    color: '#fff',
    padding: '44px 0 20px',
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline"
  },
  footSec: {
    flex: '0 0 auto',
    width: '25%',
  },
  footSec1: {
    width: "41.66666667%"
  },
  footSec2: {
    width: "16.66666667%"
  },
  footSec3: {
    width: "16.66666667%"
  },

}

export default Footer;
