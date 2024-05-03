import React from 'react';
import contactusbanner from "../assets/contactusbanner.png";

function ContactUs() {
  return (
    <main>
      <div className="aboutUsContainer" style={style.aboutUsContainer}>
            <div className="heroSingle" style={{ ...style.heroSingle, backgroundImage: `url(${contactusbanner})` }}>
                <div className="imageOverlay" style={style.imageOverlay}>
                    <div className="textContent" style={style.textContent}>
                        <h1>Contact Us</h1>
                        <p>We would love to hear from you! Feel free to reach out to us.</p>
                    </div>
                </div>
                <div className="frame white"></div>
            </div>

      <div className="bgGray">
        <div className="container margin_60_40">
          <div className="row justify-content-center">
            <div className="col-lg-4">
              <div className="box_contacts">
                <i className="icon_tag_alt"></i>
                <h2>Call & Whatsapp</h2>
                <a href="tel:+918982321487">+918884221487</a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box_contacts">
                <i className="icon_pin_alt"></i>
                <h2>Email</h2>
                <div> <a href="mailto:dev@horaservices.com">dev@horaservices.com</a></div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box_contacts">
                <i className="icon_download"></i>
                <h2>Download Application</h2>
                <div> <small>- <a target="_blank" href="https://play.google.com/store/apps/details?id=com.hora"> Click Here </a> -</small> </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container margin_60_40 contactus">
        <h5 className="mb_5 text-center">We Provide Services In These Cities</h5>
        {/* Your city grid items here */}
      </div>
      </div>
    </main>
  );
}
const style = {
    aboutUsContainer: {
        width: '100%',
    },
    heroSingle: {
        position: 'relative',
        width: '100%',
        height: '400px', /* Adjust height as needed */
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    imageOverlay: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgba(0, 0, 0, 0.6)', /* Adjust overlay color and opacity as needed */
    },
    textContent: {
        textAlign: 'center',
        color: 'white',
    },
    bgGray:{
    backgroundColor:"#f4f4f4", // Fixed typo here
    textAlign:"center"
    },
    };

export default ContactUs;
