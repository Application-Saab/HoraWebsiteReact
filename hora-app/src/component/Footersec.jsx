import React from "react";
import frame_footer from "../assets/frame_footer.png";
import { Link } from 'react-router-dom';

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
                  <Link to="/aboutus" >About Us</Link>
                </li>
                <li>
                  <a href="privacy-policy.html">Privacy Policy</a>
                </li>
                <li>
                  <a href="sitemap.xml">Sitemap</a>
                </li>
              </ul>
            </div>
            <div className="footSec1" style={style.footSec1}>
              <h2>Services</h2>
              <ul>
                <li><a href="ContactUs.html">Chef for Party and Occasions</a></li>
                <li><a href="ContactUs.html">Decorations for Party and Occasions</a></li>
                <li><a href="ContactUs.html">Food Delivery for Party and Occasions</a></li>
                <li><a href="ContactUs.html">Catering Service for Party and Occasions</a></li>
                <li><a href="ContactUs.html">Waiter for Party and Occasions</a></li>
                <li><a href="ContactUs.html">Bar Tender for Party and Occasions</a></li>
                <li><a href="ContactUs.html">Cleaner for Party and Occasions</a></li>
                <li><a href="Occasion.html">Occasions</a></li>
                <li><a href="Cuisine.html">cuisine</a></li>
              </ul>
            </div>
            <div className="footSec2" style={style.footSec2}>
              <h2>Serving In</h2>
              <ul id="myList">
                <li className="city-link" data-city="Delhi"><a href="city.html?city=Delhi">Delhi</a></li>
                <li className="city-link" data-city="Gurugram"><a href="city.html?city=Gurugram">Gurugram</a></li>
                <li className="city-link" data-city="Ghaziabad"><a href="city.html?city=Ghaziabad">Ghaziabad</a></li>
                <li className="city-link" data-city="Faridabad"><a href="city.html?city=Faridabad">Faridabad</a></li>
                <li className="city-link" data-city="Noida"><a href="city.html?city=Noida">Noida</a></li>
                <li className="city-link" data-city="Bengaluru"><a href="city.html?city=Bengaluru">Bengaluru</a></li>
                <li className="city-link" data-city="Hyderabad"><a href="city.html?city=Hyderabad">Hyderabad</a></li>
                <li className="city-link" data-city="Mumbai"><a href="city.html?city=Mumbai">Mumbai</a></li>
                <li className="city-link" data-city="Indore"><a href="city.html?city=Indore">Indore</a></li>
                <li className="city-link" data-city="Chennai"><a href="city.html?city=Chennai">Chennai</a></li>
                <li className="city-link" data-city="Pune"><a href="city.html?city=Pune">Pune</a></li>
                <li className="city-link" data-city="Surat"><a href="city.html?city=Surat">Surat</a></li>
                <li className="city-link" data-city="Bhopal"><a href="city.html?city=Bhopal">Bhopal</a></li>
                <li className="city-link" data-city="kanpur"><a href="city.html?city=kanpur">kanpur</a></li>
                <li className="city-link" data-city="Lucknow"><a href="city.html?city=Lucknow">Lucknow</a></li>
                <li className="city-link" data-city="kolkata"><a href="city.html?city=kolkata">kolkata</a></li>
                <li className="city-link" data-city="Goa"><a href="city.html?city=Goa">Goa</a></li>
              </ul>
            </div>

            <div className="footSec3" style={style.footSec3}>
              <h2>Contact</h2>
              <ul>
                <li><a href="#">+918982321487</a></li>
                <li><a href="contactUs.html" style={{ textTransform: "lowercase" }}>dev@horaservices.com</a></li>
                <li> <Link to="/contactus" >Contact Us</Link></li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="social-icons">
                <a href="https://www.facebook.com/profile.php?id=61550111701616" target="_blank" style={{ textTransform: "none", color: "inherit" }}>
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="https://www.instagram.com/horaservices/?fbclid=IwAR0PktJ-rl5rKC6YGSZ8BSw3m8o9qMfLpJchO17FCEZuCXKxvASZWRymifA" target="_blank" style={{ padding: "0 6px 0 0", textDecoration: "none", color: "inherit" }}>
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.youtube.com/channel/UCj5gMUjptHut0aGYHxCbE5g" target="_blank" style={{ textDecoration: "none", color: "inherit" }}>
                  <i className="fab fa-youtube"></i>
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
    backgroundColor: '#262626',
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
    maxWidth: '1000px',
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
