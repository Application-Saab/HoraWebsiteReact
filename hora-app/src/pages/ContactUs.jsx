import React from 'react';
import contactusbanner from "../assets/contactusbanner.png";
import delhi from "../assets/delhi.jpg";

function ContactUs() {
  return (
    <main>
      <div className="aboutUsContainer" style={styles.aboutUsContainer}>
            <div className="heroSingle" style={{ ...styles.heroSingle, backgroundImage: `url(${contactusbanner})` }}>
                <div className="imageOverlay" style={styles.imageOverlay}>
                    <div className="textContent" style={styles.textContent}>
                        <h1>Contact Us</h1>
                        <p>We would love to hear from you! Feel free to reach out to us.</p>
                    </div>
                </div>
                <div className="frame white"></div>
            </div>

            <div style={styles.secRight}>
            <div  style={styles.boxHow}>
                <i className="icon_tag_alt"></i>
                <h2 style={{fontSize:"1.3125rem" , color:"#444" , margin:"10px 0 10px 0"}}>Call & Whatsapp</h2>
                <a href="tel:+918982321487" style={{color:"#444"}}>+918884221487</a>
              </div>
              <div  style={styles.boxHow}>
                <i className="icon_pin_alt"></i>
                <h2 style={{fontSize:"1.3125rem" , color:"#444" , margin:"10px 0 10px 0"}}>Email</h2>
                <div> <a href="mailto:dev@horaservices.com" style={{color:"#444"}}>dev@horaservices.com</a></div>
              </div>
            
              <div  style={styles.boxHow}>
                <i className="icon_download"></i>
                <h2 style={{fontSize:"1.3125rem" , color:"#444" , margin:"10px 0 10px 0"}}>Download Application</h2>
                <div> <small>- <a target="_blank" href="https://play.google.com/store/apps/details?id=com.hora" style={{color:"#444"}}> Click Here </a> -</small> </div>
            </div>
            </div>
            <div style={styles.contactUs}>
            <div style={styles.secRight1}>
            <h5 style={{textAlign:"center" , fontWeight:"500" , fontSize:"1.25rem" , marginTop:"10px" , paddingTop:"30px"}}>We Provide Services In These Cities</h5>
              <div>
              <div style={{display:"flex" , justifyContent:"space-between" , alignItems:"center" , marginBottom:"30px"}}>
                <div>
                <img src={delhi} />
                <p>Mumbai</p>
                </div>
                <div> 
                  <img src={delhi} />
                  <p>Delhi</p>
                </div>
               
                <div>
                <img src={delhi} />
                <p>Bangalore</p>
                </div>
              
              </div>
              <div style={{display:"flex" , justifyContent:"space-between" , alignItems:"center" , marginBottom:"30px"}}>
              <div>
              <img src={delhi} />
              <p>Pune</p>
              </div>
             <div>
             <img src={delhi} />
              <p>Noida</p>
             </div>
              <div>
                         
              <img src={delhi} />
                <p>Gaziabad</p>
              </div>
              </div>
              <div style={{display:"flex" , justifyContent:"space-between" , alignItems:"center" , marginBottom:"30px"}}>
              <div>
              <img src={delhi} />
                <p>Gurugram</p>
              </div>
              <div>
              <img src={delhi} />
                <p>Faridabad</p>
              </div>
              <div>
              <img src={delhi} />
                <p>Hydrabad</p>
              </div>
              </div>
              <div style={{display:"flex" , justifyContent:"space-between" , alignItems:"center" , marginBottom:"30px"}}>
              <div>
              <img src={delhi} />
                <p>Chennai</p>
              </div>
              <div>
              <img src={delhi} />
                <p>Jaipur</p>
              </div>
              <div>
              <img src={delhi} />
                <p>Ahmdabad</p>
              </div>
              </div>
              <div style={{display:"flex" , justifyContent:"space-between" , alignItems:"center" , marginBottom:"30px"}}>
              <div>
              <img src={delhi} />
                <p>Chandigarh</p>
              </div>
              <div>
              <img src={delhi} />
                <p>Kolkata</p>
              </div>
              <div>
              <img src={delhi} />
                <p>Locknow</p>
              </div>
              </div>
              <div style={{display:"flex" , justifyContent:"space-between" , alignItems:"center" , marginBottom:"30px"}}>
              <div>
              <img src={delhi} />
                <p>Kanpur</p>
              </div>
              <div>
              <img src={delhi} />
                <p>Indore</p>
              </div>
              <div>
              <img src={delhi} />
                <p>Surat</p>
              </div>
              </div>
              <div style={{display:"flex" , justifyContent:"space-between" , alignItems:"center" , marginBottom:"30px"}}>
              <div>
              <img src={delhi} />
                <p>Bhopal</p>
              </div>
              <div>
              <img src={delhi} />
                <p>Goa</p>
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
        width: '100%',
        backgroundColor:"#ededed",
    },
    contactUs:{
      backgroundColor:"#fff",
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
        background: 'rgba(0, 0, 0, 0.1)', /* Adjust overlay color and opacity as needed */
    },
    textContent: {
        textAlign: 'center',
        color: 'white',
    },
    secRight: {
      width: "80%",
      display:"flex",
      justifyContent:"space-between",
      alignItems:"center",
      margin: "27px auto 51px",
  },
  secRight1: {
    width: "75%",
    justifyContent:"space-between",
    alignItems:"center",
    margin: "0 auto 20px",
    flexDirection:"column",
},
  boxHow: {
      boxShadow:"0 0 32px -7px rgba(0, 0, 0, 0.1)",
      padding:"30px 25px",
      textAlign:"center",
      marignBottum:"20px",
      backgroundColor:"#fff",
      width:"300px",
  },
    };

export default ContactUs;
