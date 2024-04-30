import React from "react";
import { useNavigate } from 'react-router-dom';
import hero_general from "../assets/hero_general.jpg";
import how_1 from '../assets/how_1.svg';
import how_2 from '../assets/how_2.svg';
import how_3 from "../assets/how_3.svg";


const AboutUs = () => {
    return (
        <div className="aboutUsContainer" style={style.aboutUsContainer}>
            <div className="heroSingle" style={{ ...style.heroSingle, backgroundImage: `url(${hero_general})` }}>
                <div className="imageOverlay" style={style.imageOverlay}>
                    <div className="textContent" style={style.textContent}>
                        <h1>About Us</h1>
                        <p>Cooking delicious food since 2005</p>
                    </div>
                </div>
                <div className="frame white"></div>
            </div>

            <div className="pattern2" style={style.pattern2}>
                <div style={{width:"1100px" , textAlign:"center" , margin:"0 auto"}}>
                <h2 style={{fontSize:"2.125rem" , color:"#222" , fontWeight:"500"}}>Our Story</h2>
                <p style={{fontSize:"0.875em" , color:"#444" , padding:"0 20%"}}>
                    At Hora, we understand the importance of creating unforgettable moments and extraordinary experiences. We are a premier provider of private chefs who bring their culinary expertise directly to your doorstep. Whether you're hosting a lavish party or a
                    cozy get-together, our talented chefs will transform your home into a gourmet dining destination, leaving you free to enjoy the company of your loved ones.
                </p>
                </div>
               
            </div>

            <div className="bgGray">
                    <div style={{display:"flex" , flexDirection:"column" , alignItems:"flex-start" , justifyContent:"space-around"}}>
                            <div className="introTxt">
                            <h2 style={{fontSize:"2.125rem" , color:"#222" , fontWeight:"500"}}>Why Choose Hora</h2>
                                <p style={{fontSize:"0.875em" , color:"#444" , padding:"0 20%"}}>Imagine indulging in a world-class dining experience without leaving the comfort of your home. With Hora, that dream becomes a reality. Our team of skilled private chefs is committed to delivering culinary excellence
                                    tailored to your unique preferences and occasion. From crafting tantalizing menus to showcasing their culinary artistry, our chefs will create a feast that will leave a lasting impression on your guests.</p>
                                <strong> Hygiene: Our Top Priority </strong>
                                <br />
                                <strong> Exquisite Menus for Every Occasion </strong>
                                <br />
                                <strong> Savor the Convenience </strong>
                                <br />
                                <strong> Discover the Hora Difference </strong>
                                <br />
                                <br />
                                <p><a className="btn1" target="_blank" href="https://play.google.com/store/apps/details?id=com.hora" role="button">Download Application </a>
                                </p>
                            </div>
                            <div className="secLeft">
                            <div className="colLG6">
                                    <div className="boxHow">
                                       <img src={how_1} />
                                        <h3>Assurity of Dedicated call support</h3>
                                    </div>
                                    <div className="boxHow">
                                    <img src={how_2} />
                                        <h3>Amazing Experience</h3>
                                    </div>
                                </div>
                                <div className="colLG6">
                                    <div className="boxHow">
                                    <img src={how_3} />
                                        <h3>Trained & Verified Professionals</h3>
                                    </div>
                                </div>
                            </div>
                               
                          
                  
                  
                </div>
            </div>
        </div>
    );
};

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
    
    pattern2: {
        textAlign: 'center',
        marginTop: '50px', /* Adjust spacing as needed */
    },
    bgGray:{
        backgroudColor:"#f4f4f4",
        textAlign:"center"
    },

    introTxt: {
        width: "48%",
    },
    boxHow:{
        backgroudColor:"#fff",
        bocShadow:"0 0 32px -7px rgba(0, 0, 0, 0.1)",
        padding:"30px 25px",
        textAlign:"center",
        marginBottom:"20px"
    },
    secLeft:{
        width: "48%",
        display:"flex",
        justifyContent:"spae-between",
        alignItems:"center"
    },
};

export default AboutUs;
