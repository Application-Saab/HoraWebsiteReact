import React from "react";
import Slider from "../component/Slider"; // Import the Slider component
import banner1 from '../assets/Cooks_and_Chefs_at_Home.jpg';
import banner3 from '../assets/banner3.jpeg';
import how_1 from '../assets/how_1.svg';
import how_2 from '../assets/how_2.svg';
import birthday_homesec from '../assets/birthday_homesec.jpg';
import gathering_homesec from '../assets/gathering.jpg';
import house_party_homesec from '../assets/house_party.jpg';
import wedding_homesec from '../assets/wedding_homesec.jpg';
import corporate_homesec from '../assets/corporate_homesec.jpg';
import reviewfeedback1 from '../assets/reviewfeedback1.png';
import reviewimg1 from '../assets/review3.png';
import reviewimg2 from '../assets/reviewimg2.png';

function Home() {
    const slides = [
        { image: banner1, text: "Slide 1 Text" },
        { image: banner3, text: "Slide 3 Text" }
    ];

    return (
        <div>
            <Slider slides={slides} />
            <div className="pattern_2" style={{ backgroundColor: "#fff" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: "1200px", margin: "19px auto" }}>
                    <div style={styyle.homesec1left}>
                        <div style={{ backgroundColor: "#F46C5B", boxShadow: "0 0 32px -7px rgba(0, 0, 0, 0.1)", padding: "30px 25px", borderRadius: "15px", textAlign: "center", width: "64%", float: "left", marginBottom: "25px" }}>
                            <img src={how_1} alt="HORA best rated cooks chefs with highest ratings, reviews, feedback. Hire expert trending cooks for small house parties, private parties" width="70" height="80" />
                            <h3 style={{ color: "#fff", fontSize: "1.3125rem" }}>Trained & Certified Professional</h3>
                        </div>
                        <div style={{ backgroundColor: "#9498BF", boxShadow: "0 0 32px -7px rgba(0, 0, 0, 0.1)", padding: "30px 25px", borderRadius: "15px", textAlign: "center", width: "64%", float: "right" }}>
                            <img src={how_2} alt="Restaurant quality dishes at lower cost, HORA best rated cooks chefs with highest ratings, reviews, feedback. Hire expert trending cooks for small house parties, private parties" width="70" height="80" />
                            <h3 style={{ color: "#fff", fontSize: "1.3125rem", margin: "10px 0 0 0" }}>Restaurant Quality Dishes At Lower Cost</h3>
                        </div>
                    </div>
                    <div style={styyle.homesec1right}>
                        <div className="main_title">
                            <h2 style={{ fontSize: "2rem", maxWidth: "600px", margin: "20px 0 0 0", color: "#222", fontWeight: "400" }}>Indulge In A Personalized Culinary Journey With A Private Chef At Home.</h2>
                        </div>
                        <p style={{ marginBottom: "20px", marginTop: "0px" }}>At HORA, we bring the ultimate luxury dining experience to your doorstep in Mumbai, Delhi NCR, and Bangalore. Book a Private Chef to cook in the comfort of your own home. Whether it's an intimate dinner or a party, our talented chefs are here to make your culinary dreams a reality. Trust us when it comes to hiring a chef for your home, as we ensure privacy, exclusivity, and impeccable service. </p>
                        <p>Indulge in our curated menus, crafted with the finest ingredients sourced locally. Elevate your dining experience with HORA - the go-to brand for private chefs for home and hiring a chef for a party at home.</p>
                    </div>
                </div>
            </div>
            <div class="pattern_2" style={{ backgroundColor: "#f2ece0", padding: "80px 0" }}>
                <div>
                    <div>
                        <h2 style={{ fontSize: "2.125rem", margin: "20px 0 0 50px", color: "#222", fontWeight: "500", textAlign: "center" }}>We offer Our Services for </h2>
                    </div>

                    <ul style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", margin: "19px 0 0 0", padding: "0", listStyle: "none" }}>
                        <li className="img_container" style={{ flexBasis: "calc(33% - 10px)", position: "relative", overflow: "hidden" }}>
                            <img src={birthday_homesec}
                                alt="cooks and chef for birthday party"
                                style={{ width: "100%" }}
                            />
                            <div className="overlay" style={{ position: "absolute", top: "6%", left: "0", width: "100%", height: "24px", backgroundColor: "rgba(0,0,0,0.6)", display: "flex", justifyContent: "flex-start", alignItems: "center", color: "#fff", fontSize: "1.5rem", padding: "4% 0px 4% 16px" }}>
                                <h3 className="weoffersecheading">Birthday Party</h3>
                            </div>
                        </li>
                        <li className="img_container" style={{ flexBasis: "calc(33% - 10px)", position: "relative", overflow: "hidden" }}>
                            <img src={gathering_homesec}
                                alt="cooks and chef for house gatherings"
                                style={{ width: "100%" }}
                            />
                            <div className="overlay" style={{ position: "absolute", top: "6%", left: "0", width: "100%", height: "24px", backgroundColor: "rgba(0,0,0,0.6)", display: "flex", justifyContent: "flex-start", alignItems: "center", color: "#fff", fontSize: "1.5rem", padding: "4% 0px 4% 16px" }}>
                                <h3 className="weoffersecheading">Gatherings</h3>
                            </div>
                        </li>
                        <li className="img_container" style={{ flexBasis: "calc(33% - 10px)", position: "relative", overflow: "hidden" }}>
                            <img src={house_party_homesec}
                                alt="cooks and chef for house party"
                                style={{ width: "100%" }}
                            />
                            <div className="overlay" style={{ position: "absolute", top: "6%", left: "0", width: "100%", height: "24px", backgroundColor: "rgba(0,0,0,0.6)", display: "flex", justifyContent: "flex-start", alignItems: "center", color: "#fff", fontSize: "1.5rem", padding: "4% 0px 4% 16px" }}>
                                <h3 className="weoffersecheading">House Party</h3>
                            </div>
                        </li>
                        <li className="img_container" style={{ flexBasis: "calc(33% - 10px)", position: "relative", overflow: "hidden" }}>
                            <img src={birthday_homesec} alt="cooks and chef for guests at home" style={{ width: "100%" }} />
                            <div className="overlay" style={{ position: "absolute", top: "6%", left: "0", width: "100%", height: "24px", backgroundColor: "rgba(0,0,0,0.6)", display: "flex", justifyContent: "flex-start", alignItems: "center", color: "#fff", fontSize: "1.5rem", padding: "4% 0px 4% 16px" }}>
                                <h3 className="weoffersecheading">Inviting Guests</h3>
                            </div>
                        </li>
                        <li className="img_container" style={{ flexBasis: "calc(33% - 10px)", position: "relative", overflow: "hidden" }}>
                            <img src={wedding_homesec} alt="cooks and chef for wedding functions" style={{ width: "100%" }} />
                            <div className="overlay" style={{ position: "absolute", top: "6%", left: "0", width: "100%", height: "24px", backgroundColor: "rgba(0,0,0,0.6)", display: "flex", justifyContent: "flex-start", alignItems: "center", color: "#fff", fontSize: "1.5rem", padding: "4% 0px 4% 16px" }}>
                                <h3 className="weoffersecheading">Wedding Functions</h3>
                            </div>
                        </li>
                        <li className="img_container" style={{ flexBasis: "calc(33% - 10px)", position: "relative", overflow: "hidden" }}>
                            <img src={corporate_homesec} alt="cooks and chef for corporate event" style={{ width: "100%" }} />
                            <div className="overlay" style={{ position: "absolute", top: "6%", left: "0", width: "100%", height: "24px", backgroundColor: "rgba(0,0,0,0.6)", display: "flex", justifyContent: "flex-start", alignItems: "center", color: "#fff", fontSize: "1.5rem", padding: "4% 0px 4% 16px" }}>
                                <h3 className="weoffersecheading">Corporate Event</h3>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="pattern_2">
              <div>
              <h2 style={{ fontSize: "2.125rem", margin: "20px 0 0 50px", color: "#222", fontWeight: "500", textAlign: "center" }}>Our Happy customers</h2>

              </div>
                <div style={{display:"flex" , alignItems:"center" , justifyContent:"center" , flexWrap:"wrap"}}>
                    <div style={{ width: "22.5%" , marginRight:"7px" , marginBottom:"7px" }}>
                        <img src={reviewimg2} style={{ width: "100%" }} />
                        <img src={reviewfeedback1} style={{ width: "100%" }} />
                    </div>
                    <div style={{ width: "22.5%" , marginRight:"7px" , marginBottom:"7px"}}>
                        <img src={reviewfeedback1} style={{ width: "100%" }} />
                        <img src={reviewimg1} style={{ width: "100%" }} />
                    </div>
                   
                    <div style={{ width: "22.5%" , marginRight:"7px" , marginBottom:"7px" }}>
                        <img src={reviewimg1} style={{ width: "100%" }} />
                        <img src={reviewfeedback1} style={{ width: "100%" }} />
                        </div>
                    
                    <div style={{ width: "22.5%" , marginRight:"7px" , marginBottom:"7px"}}>
                        <img src={reviewfeedback1} style={{ width: "100%" }} />
                        <img src={reviewimg2} style={{ width: "100%" }} />
                        </div>
                </div>
            </div>

        </div>

    );
}

const styyle = {
    banners_grid: {
        display: "flex",
        justifyContent: "space-between",
        alignItem: "center",
        padding: "0",
        margin: "0"
    },
    banners_griditem: {
        width: "24.6%",
    },
    secimg: {
        width: "100%",
    },
    homesec1left: {
        width: "48%",
        margin: "0 auto",
    },
    homesec1right: {
        width: "41%",
        paddingLeft: "40px"
    },
    img_container: {
        flexBasis: "calc(33% - 20px)"
    },
    topsecreview: {
        display: "flex",
        justifyContent: "center",
        alignItem: "center",
        flexDirection: "row",
    },
    weoffersecheading: {
        fontSize: "1.425rem",
        textTransform: "uppercase"
    }
}

export default Home;
