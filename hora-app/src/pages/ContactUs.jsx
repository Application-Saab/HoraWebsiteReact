import React from "react";
import { FaTag, FaMapMarkerAlt, FaDownload } from "react-icons/fa";
import contactusbanner from "../assets/contactusbanner.png";
import delhi from "../assets/delhi.jpg";
import mumbai from "../assets/mumbai.jpg";
import banglore from "../assets/banglore.jpg";
import pune from "../assets/Pune.png";
import noida from "../assets/Noida.png";
import indore from "../assets/indore.png";
import bhopal from "../assets/bhopal.png";
import ghaziabad from "../assets/ghaziabad.png";
import gurugram from "../assets/gurugram.png";
import faridabad from "../assets/faridabad.png";
import hydrabad from "../assets/hydrabad.png";
import chennai from "../assets/Chennai.png";
import jaipur from "../assets/jaipur.png";
import ahmdabad from "../assets/Ahmdabad.png";
import chandigarh from "../assets/Chandigarh.png";
import kolkata from "../assets/kolkata.png";
import lakhnow from "../assets/Locknow.png";
import kanpur from "../assets/Kanpur.png";
import surat from "../assets/Kanpur.png";
import goa from "../assets/Goa.png";

function ContactUs() {
  return (
    <main>
      <div className="aboutUsContainer" style={styles.aboutUsContainer}>
        <div
          className="heroSingle"
          style={{
            ...styles.heroSingle,
            backgroundImage: `url(${contactusbanner})`,
          }}
        >
          <div className="imageOverlay" style={styles.imageOverlay}>
            <div className="textContent" style={styles.textContent}>
              <h1>Contact Us</h1>
              <p className="contact-us-main-heading">
                We would love to hear from you! Feel free to reach out to us.
              </p>
            </div>
          </div>

          <div className="frame white"></div>
        </div>

        {/* <div style={styles.secRight}>
          <div style={styles.boxHow}>
            <i className="icon_tag_alt"></i>
            <h2
              style={{
                fontSize: "1.3125rem",
                color: "#444",
                margin: "10px 0 10px 0",
              }}
            >
              Call & Whatsapp
            </h2>
            <a href="tel:+918982321487" style={{ color: "#444" }}>
              +918884221487
            </a>
          </div>
          <div style={styles.boxHow}>
            <i className="icon_pin_alt"></i>
            <h2
              style={{
                fontSize: "1.3125rem",
                color: "#444",
                margin: "10px 0 10px 0",
              }}
            >
              Email
            </h2>
            <div>
              {" "}
              <a href="mailto:dev@horaservices.com" style={{ color: "#444" }}>
                dev@horaservices.com
              </a>
            </div>
          </div>

          <div style={styles.boxHow}>
            <i className="icon_download"></i>
            <h2
              style={{
                fontSize: "1.3125rem",
                color: "#444",
                margin: "10px 0 10px 0",
              }}
            >
              Download Application
            </h2>
            <div>
              {" "}
              <small>
                -{" "}
                <a
                  target="_blank"
                  href="https://play.google.com/store/apps/details?id=com.hora"
                  style={{ color: "#444" }}
                >
                  {" "}
                  Click Here{" "}
                </a>{" "}
                -
              </small>{" "}
            </div>
          </div>
        </div> */}
        <div className="contact-us-secRight" style={styles.secRight}>
          <div className="contact-us-boxsection" style={styles.boxHow}>
            <FaTag style={styles.icon} />
            <h2
              style={{ fontSize: "1.3125rem", color: "#444", margin: "10px 0" }}
            >
              Call & Whatsapp
            </h2>
            <a href="tel:+918982321487" style={{ color: "#444" }}>
              +918884221487
            </a>
          </div>
          <div className="contact-us-boxsection" style={styles.boxHow}>
            <FaMapMarkerAlt style={styles.icon} />
            <h2
              style={{ fontSize: "1.3125rem", color: "#444", margin: "10px 0" }}
            >
              Email
            </h2>
            <a href="mailto:dev@horaservices.com" style={{ color: "#444" }}>
              dev@horaservices.com
            </a>
          </div>
          <div className="contact-us-boxsection" style={styles.boxHow}>
            <FaDownload style={styles.icon} />
            <h2
              style={{ fontSize: "1.3125rem", color: "#444", margin: "10px 0" }}
            >
              Download Application
            </h2>
            <small>
              -{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://play.google.com/store/apps/details?id=com.hora"
                style={{ color: "#444" }}
              >
                Click Here
              </a>{" "}
              -
            </small>
          </div>
        </div>
        <div style={styles.contactUs}>
          <div style={styles.secRight1}>
            <h5
              className="contact-us-second-heading"
              style={{
                textAlign: "center",
                fontWeight: "500",
                fontSize: "1.25rem",
                marginTop: "10px",
                padding: "50px",
              }}
            >
              We Provide Services In These Cities
            </h5>
            <div>
              <div
                className="contact-us-img-section-1"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "30px",
                }}
              >
                <div className="contact-us-section-div">
                  <img className="contact-us-img" src={mumbai} />
                  <h4 className="contact-us-heading">Mumbai</h4>
                </div>
                <div className="contact-us-section-div">
                  <img className="contact-us-img" src={delhi} />
                  <h4 className="contact-us-heading">Delhi</h4>
                </div>

                <div className="contact-us-section-div">
                  <img className="contact-us-img" src={banglore} />
                  <h4 className="contact-us-heading">Bangalore</h4>
                </div>
              </div>
              <div
                className="contact-us-img-section-1"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "30px",
                }}
              >
                <div className="contact-us-section-div">
                  <img className="contact-us-img" src={pune} />
                  <h4 className="contact-us-heading">Pune</h4>
                </div>
                <div className="contact-us-section-div">
                  <img className="contact-us-img" src={noida} />
                  <h4 className="contact-us-heading">Noida</h4>
                </div>
                <div className="contact-us-section-div">
                  <img className="contact-us-img" src={ghaziabad} />
                  <h4 className="contact-us-heading">Gaziabad</h4>
                </div>
              </div>
              <div
                className="contact-us-img-section-1"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "30px",
                }}
              >
                <div className="contact-us-section-div">
                  <img className="contact-us-img" src={gurugram} />
                  <h4 className="contact-us-heading">Gurugram</h4>
                </div>
                <div className="contact-us-section-div">
                  <img className="contact-us-img" src={faridabad} />
                  <h4 className="contact-us-heading">Faridabad</h4>
                </div>
                <div className="contact-us-section-div">
                  <img className="contact-us-img" src={hydrabad} />
                  <h4 className="contact-us-heading">Hydrabad</h4>
                </div>
              </div>
              <div
                className="contact-us-img-section-1"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "30px",
                }}
              >
                <div className="contact-us-section-div">
                  <img className="contact-us-img" src={chennai} />
                  <h4 className="contact-us-heading">Chennai</h4>
                </div>
                <div className="contact-us-section-div">
                  <img className="contact-us-img" src={jaipur} />
                  <h4 className="contact-us-heading">Jaipur</h4>
                </div>
                <div className="contact-us-section-div">
                  <img className="contact-us-img" src={ahmdabad} />
                  <h4 className="contact-us-heading">Ahmdabad</h4>
                </div>
              </div>
              <div
                className="contact-us-img-section-1"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "30px",
                }}
              >
                <div className="contact-us-section-div">
                  <img className="contact-us-img" src={chandigarh} />
                  <h4 className="contact-us-heading">Chandigarh</h4>
                </div>
                <div className="contact-us-section-div">
                  <img className="contact-us-img" src={kolkata} />
                  <h4 className="contact-us-heading">Kolkata</h4>
                </div>
                <div className="contact-us-section-div">
                  <img className="contact-us-img" src={lakhnow} />
                  <h4 className="contact-us-heading">Locknow</h4>
                </div>
              </div>
              <div
                className="contact-us-img-section-1"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "30px",
                }}
              >
                <div className="contact-us-section-div">
                  <img className="contact-us-img" src={kanpur} />
                  <h4 className="contact-us-heading">Kanpur</h4>
                </div>
                <div className="contact-us-section-div">
                  <img className="contact-us-img" src={indore} />
                  <h4 className="contact-us-heading">Indore</h4>
                </div>
                <div className="contact-us-section-div">
                  <img className="contact-us-img" src={surat} />
                  <h4 className="contact-us-heading">Surat</h4>
                </div>
              </div>
              <div
                className="contact-us-img-section-1"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "30px",
                }}
              >
                <div className="contact-us-section-div">
                  <img className="contact-us-img" src={bhopal} />
                  <h4 className="contact-us-heading">Bhopal</h4>
                </div>
                <div className="contact-us-section-div">
                  <img className="contact-us-img" src={goa} />
                  <h4 className="contact-us-heading">Goa</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
const styles = {
  aboutUsContainer: {
    width: "100%",
    backgroundColor: "#ededed",
  },
  contactUs: {
    backgroundColor: "#fff",
  },
  heroSingle: {
    position: "relative",
    width: "100%",
    height: "400px" /* Adjust height as needed */,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  imageOverlay: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background:
      "rgba(0, 0, 0, 0.1)" /* Adjust overlay color and opacity as needed */,
  },
  textContent: {
    textAlign: "center",
    color: "white",
  },
  // secRight: {
  //   width: "80%",
  //   display: "flex",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   margin: "27px auto 51px",
  // },
  secRight1: {
    width: "75%",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0 auto 20px",
    flexDirection: "column",
  },
  // boxHow: {
  //   boxShadow: "0 0 32px -7px rgba(0, 0, 0, 0.1)",
  //   padding: "30px 25px",
  //   textAlign: "center",
  //   marignBottum: "20px",
  //   backgroundColor: "#fff",
  //   width: "300px",
  // },
  secRight: {
    display: "flex",
    justifyContent: "space-around",
    padding: "20px 0",
    backgroundColor: "#f8f8f8",
  },
  boxHow: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    width: "30%",
  },
  icon: {
    fontSize: "2rem",
    color: "#8a6d3b",
  },
};

export default ContactUs;
