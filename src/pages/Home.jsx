import React, { useState, useEffect } from "react";
import { BASE_URL, PAYMENT, PAYMENT_STATUS, API_SUCCESS_CODE,UPDATE_ORDER_STATUS } from '../utills/apiconstants';
import axios from 'axios';
import Success from './Success';
import Failure from './Failure';
import { useNavigate , Link, useLocation } from 'react-router-dom'; // Import useNavigate
import bannerSvgImage from '../assets/banner-home-bg.svg';
// import bannerDecorationImage from '../assets/decoration-home-banner.png';
import bannerChefImage from '../assets/chef-home-banner.png';
import bannerDecorationImage from '../assets/decoration3.png';
// import bannerChefImage from '../assets/live_catering3.png';
import bannerEntertainmentImage from '../assets/entertainment-banner-home.png';
import bannerFoodDeliveryImage from '../assets/food-delivery-home-banner.png';
import Celebrate1Image from '../assets/Birthday&Celebration.png';
import Celebrate2Image from '../assets/corporate-party.png';
import Celebrate3Image from '../assets/house-party.png';
import Celebrate4Image from '../assets/wedding-event.png';
import Celebrate5Image from '../assets/gathering.png';
import Celebrate6Image from '../assets/kids-event.png';
import service1Image from '../assets/service-decoration.png';
import service2Image from '../assets/food-banner-image.png';
import service3Image from '../assets/chef-banner-image.png';
// import service4Image from '../assets/live-buffet-service.png';
import service4Image from '../assets/live_catering2.png';
import service5Image from '../assets/hospitality-services.png';
import service7Image from '../assets/entertainment-home-banner-sec.png';
import service6Image from '../assets/return-home-banner-sec.png';
import downloadAppImage from '../assets/download-app-sec.png';
import HomeSlider from "../component/HomeSlider";
import { Helmet } from 'react-helmet';
import { getHomeOrganizationSchema } from "../utills/schema";
function Home() {
    const navigate = useNavigate();
    const [showButton, setShowButton] = useState(window.innerWidth > 800);
    const openLink = () => {
        window.open("https://play.google.com/store/apps/details?id=com.hora", "_blank");
    };
    const schemaOrg = getHomeOrganizationSchema();
    const scriptTag = JSON.stringify(schemaOrg);
    useEffect(() => {
        function handleResize() {
            setShowButton(window.innerWidth > 800);
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const location = useLocation();

    useEffect(() => {
        const checkPaymentStatus = async (transactionId) => {
            try {
                const storedUserID = await localStorage.getItem('userID');
                const apiUrl = BASE_URL + PAYMENT_STATUS + '/' + transactionId;

                const response = await axios.post(apiUrl, {}, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (response.data && response.data.message) {
                    const message = response.data.message;

                    if (message === 'PAYMENT_SUCCESS') 
                    {
                        const url = BASE_URL + UPDATE_ORDER_STATUS;

                        const token = await localStorage.getItem('token');

                        const requestData = {
                            
                            "status": 1,
                            "_id":transactionId

                          }
                        
                        const response = await axios.post(url, requestData, {
                        headers: {
                            'Content-Type': 'application/json',
                            'authorization': token
                        },
                        });

                        navigate('success')
                    }
                    else{
                        navigate('failure')
                    }
                } else {
                    console.log('API response does not contain a message field');
                }
            } catch (error) {
                console.error('Error checking payment status:', error);
                throw error; // Rethrow the error for the caller to handle
            }
        };

        const queryParams = new URLSearchParams(location.search);
        const transactionId = queryParams.get('transaction');

        if (transactionId) {
            checkPaymentStatus(transactionId);
        }
    }, [location.search]);

    return (
        <div>
        <Helmet>
        <title>Chef for Party | Balloon Decoration for Party | food Delivery for Party | chef Near me | Decoration at home | Ballon Decoration Near me  - Hora</title>
        <meta name="description" content="Want to book a cook for home near you? Hire skilled cooks for a day or book a chef for a party at home with Hora. Get chef for a birthday or house party in Mumbai, Bangalore & Delhi NCR, Hora, Hora services, Horaservices" />
        <meta name="keywords" content="Personal chef, private chef to cook in home in India, home chef, book a cook near you, chef at home, Private cook in Mumbai, Book a cook for home near you, Hire Chef in Bangalore, Private Chef in Delhi, Catering service, Hora, Hora services, Horaservices" />
        <meta property="og:title" content="Chef for Party | Balloon Decoration for Party | food Delivery for Party | chef Near me | Decoration at home | Ballon Decoration Near me  - Hora" />
        <meta property="og:description" content="Want to book a cook for home near you? Hire skilled cooks for a day or book a chef for a party at home with Hora. Get chef for a birthday or house party in Mumbai, Bangalore & Delhi NCR, Hora, Hora services, Horaservices" />
        <meta property="og:image" content="https://horaservices.com/api/uploads/attachment-1706520980436.png" />
        <script type="application/ld+json">{scriptTag}</script>
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Hora Services" />
        <meta property="og:url" content="https://horaservices.com" />
        <meta property="og:type" content="website" />
      </Helmet>
            <div style={styles.homebanner} className="homebanner">
                <div style={styles.bgImg} className="bgImg">
                    <div style={styles.pageWidth}>
                        <div style={styles.textContainer} className="textContainerhome">
                            <h1 style={{ fontSize: "40px", fontWeight: "500", margin: "0" }}>{"Simplifying and Enhancing celebrations."}</h1>
                            <h2 style={{ fontSize: "72px", fontWeight: "900", margin: "0 0 10px", lineHeight: "77px", margin: "0px 0 10px", padding: "3px 14% 5px 14%" }}>{"ALL PARTY SERVICE ONE PLATFORM"}</h2>
                            {/* {showButton && (
                                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <div className="home-btn" onClick={openLink}>
                                        Download Our App
                                    </div>
                                </div>
                            )} */}
                        </div>
                    </div>
                    <div style={styles.bannerBottomSec} className="bannerBottomSec">
                        <div style={styles.bannerDecorationImage} className="bannerDecorationImage">
                        <Link to="/balloon-decoration">
                        {/* <img src={bannerDecorationImage} alt="Decoration Near me" /> */}
                        <img style = {{borderRadius: "12px"}} src={bannerDecorationImage} alt="Decoration Near me" />
                        <h2 style={{ fontSize: "16px", fontWeight: "600", color: "#fff", textAlign: "center" , margin:"10px 0 0 0" }}>Decoration</h2>
                     </Link>
                        </div>
                        <div style={styles.bannerDecorationImage} className="bannerDecorationImage">
                        <Link to="/book-chef-cook-for-party">
                                <img src={bannerChefImage} alt="Chef Near me" />
                                <h2 style={{ fontSize: "16px", fontWeight: "600", color: "#fff", textAlign: "center" , margin:"10px 0 0 0"  }}>Chef for Party</h2>
                            </Link>
                        </div>
                        <div style={styles.bannerDecorationImage} className="bannerDecorationImage">
                        <Link to="/party-food-delivery-live-catering-buffet/party-food-delivery">
                                <img src={bannerFoodDeliveryImage} alt="Food Delivery Near me" />
                                <h2 style={{ fontSize: "16px", fontWeight: "600", color: "#fff", textAlign: "center" , margin:"10px 0 0 0"  }}>Food Delivery</h2>
                            </Link>
                        </div>
                        <div style={styles.bannerDecorationImage} className="bannerDecorationImage">
                        <Link to="/party-food-delivery-live-catering-buffet/party-live-buffet-catering">
                                {/* <img src={service4Image} alt="Return Gift Near me" /> */}
                                <img style = {{borderRadius: "12px"}} src={service4Image} alt="Return Gift Near me" />
                                <h2 style={{ fontSize: "16px", fontWeight: "600", color: "#fff", textAlign: "center" , margin:"10px 0 0 0"  }}>Live Catering</h2>
                            </Link>
                        </div>
                        <div style={styles.bannerDecorationImage} className="bannerDecorationImage">
                            <a href="/" style={{ textDecoration: "none" }}>
                                <img src={bannerEntertainmentImage} alt="Entertainment Near me" />
                                <h2 style={{ fontSize: "16px", fontWeight: "600", color: "#fff", textAlign: "center" , margin:"10px 0 0 0"  }}>Entertainment</h2>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
            <div style={styles.celebrateWithUs} className="celebrateWithUs">
                <div style={{ padding: "0 6%" }}>
                    <h3 style={{ fontSize: "70px", fontWeight: "bold", color: "#E6756B", margin: "35px 0 20px", textAlign: "center" }}>CELEBRATE WITH US</h3>
                    <div style={styles.celebrateBottomSec} className="celebrateBottomSec">
                        <div style={styles.celebrateBox} className="celebrateBox">
                            <img src={Celebrate1Image} alt="Birthday and Anniversary" style={styles.celebrateDecorationImage} className="celebrateDecorationImage" />
                            <h3 style={{ fontSize: "16px", color: "#0f0f0f", fontWeight: "600", textAlign: "center", margin: "7px 0 20px 0" }}>{'Birthday and Anniversary'}</h3>
                        </div>
                        <div style={styles.celebrateBox} className="celebrateBox">
                            <img src={Celebrate2Image} alt="House Parties" style={styles.celebrateDecorationImage} className="celebrateDecorationImage" />
                            <h3 style={{ fontSize: "16px", color: "#0f0f0f", fontWeight: "600", textAlign: "center", margin: "7px 0 20px 0" }}>{'House Parties'}</h3>
                        </div>
                        <div style={styles.celebrateBox} className="celebrateBox">
                            <img src={Celebrate3Image} alt="Corporate Events" style={styles.celebrateDecorationImage} className="celebrateDecorationImage" />
                            <h3 style={{ fontSize: "16px", color: "#0f0f0f", fontWeight: "600", textAlign: "center", margin: "7px 0 20px 0" }}>{'Corporate Events'}</h3>
                        </div>
                        <div style={styles.celebrateBox} className="celebrateBox">
                            <img src={Celebrate4Image} alt="Wedding Events" style={styles.celebrateDecorationImage} className="celebrateDecorationImage" />
                            <h3 style={{ fontSize: "16px", color: "#0f0f0f", fontWeight: "600", textAlign: "center", margin: "7px 0 20px 0" }}>{'Wedding Events'}</h3>
                        </div>
                        <div style={styles.celebrateBox} className="celebrateBox">
                            <img src={Celebrate5Image} alt="Gatherings" style={styles.celebrateDecorationImage} className="celebrateDecorationImage" />
                            <h3 style={{ fontSize: "16px", color: "#0f0f0f", fontWeight: "600", textAlign: "center", margin: "7px 0 20px 0" }}>{'Gatherings'}</h3>
                        </div>
                        <div style={styles.celebrateBox} className="celebrateBox">
                            <img src={Celebrate6Image} alt="Kids Events" style={styles.celebrateDecorationImage} className="celebrateDecorationImage" />
                            <h3 style={{ fontSize: "16px", color: "#0f0f0f", fontWeight: "600", textAlign: "center", margin: "7px 0 20px 0" }}>{'Kids Events'}</h3>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div style={styles.celebrateWithUs} className="celebrateWithUs">
            <div style={{padding:"0 6%"}}>
            <h3 style={{fontSize:"70px" , fontWeight:"bold" , color:"#E6756B" , margin:"35px 0 20px" , textAlign:"center"}}>WHAT OUR CLIENT SAYS</h3>
            <div style={styles.pageWidth}>
            <HomeSlider/>
           </div>
            </div>
            </div>
            <div style={styles.celebrateWithUs} celebrateWithUs>
            <div style={{padding:"0 6%"}}>
            <h3 style={{fontSize:"70px" , fontWeight:"bold" , color:"#E6756B" , margin:"35px 0 20px" , textAlign:"center"}}>OUR SERVICES</h3>
            <div>
                <div style={styles.serviceSec} className="serviceSec">
                    <div style={styles.serviceSecLeft} className="serviceSecLeft"> 
                    <img src={service1Image} alt="Decoration Near me" />
                    </div>
                    <div style={styles.serviceSecRight} className="serviceSecRight">
                        <p style={{fontSize:"25px" , margin:"0"}}>{'Transform Your Event Venue with Magical Decor:'}</p>
                        <h4 style={{fontSize:"44px" , margin:"10px 0px" , width:"72%" , lineHeight:"50px"}}>{'THEMED, BALLOONS, FLOWERS & MORE!'}</h4>
                        <ul>
                            <li style={{fontSize:"22px" , margin:"0" , listStyle:"none" , fontWeight:600}}>Best Price</li>
                            <li style={{fontSize:"22px" , margin:"0" , listStyle:"none" , fontWeight:600}}>1000+ Designs</li>
                            <li style={{fontSize:"22px" , margin:"0" , listStyle:"none" , fontWeight:600}}> Professional Executors </li>
                            <li style={{fontSize:"22px" , margin:"0" , listStyle:"none" , fontWeight:600}}>Staring 1200 Rs</li>
                        </ul>
                        <div style={{display:"flex", justifyContent:"flex-start", alignItems:"flex-start" , paddingTop:"30px"}}>
                            <div className="btn">{'check Design'}</div>
                        </div>
                    </div>
                </div>
                <div style={styles.serviceSec} className="serviceSec">
                <div style={{...styles.serviceSecRight, width:"60%"}} className="serviceSec">
                        <p style={{fontSize:"25px" , margin:"0 10px"}}>{'“Convenient Bulk Food Delivery:'}</p>
                        <h4 style={{fontSize:"44px" , margin:"0 10px" , width:"79%" , lineHeight:"50px"}}>{'ORDER DELICIOUS MEALS FROM OUR PARTNERED RESTAURANTS FOR YOUR EVENT!”'}</h4>
                        <ul>
                            <li style={{fontSize:"22px" , margin:"0 10px" , listStyle:"none"}}>Best Price</li>
                            <li style={{fontSize:"22px" , margin:"0 10px" , listStyle:"none"}}>200+ Dishes to choose from </li>
                            <li style={{fontSize:"22px" , margin:"0 10px" , listStyle:"none"}}> Best suites for small Gathering </li>
                        </ul>
                        <div style={{display:"flex", justifyContent:"flex-start", alignItems:"center" , paddingTop:"30px"}}>
                            <div className="btn">{'check Design'}</div>
                        </div>
                    </div>
                    <div style={styles.serviceSecLeft} className="serviceSecLeft"> 
                    <img src={service2Image} alt="Food Delivery Near me" />
                    </div>
                </div>
                <div style={styles.serviceSec} className="serviceSec">
                <div style={styles.serviceSecLeft} className="serviceSecLeft"> 
                    <img src={service3Image} alt="Food Delivery Near me" />
                    </div>
                    <div style={styles.serviceSecRight} className="serviceSecRight">
                        <p style={{fontSize:"25px" , margin:"0"}}>{'Best suites for small Gathering'}</p>
                        <h4 style={{fontSize:"40px" , margin:"10px 0px" , width:"100%" , lineHeight:"50px"}}>{'HIRE PROFESSIONAL CHEFS FROM TOP RESTAURANTS FOR STRESS-FREE COOKING USING YOUR INGREDIENTS AND KITCHEN'}</h4>
                        <ul>
                            <li style={{fontSize:"22px" , margin:"0" , listStyle:"none" , fontWeight:600}}>Best Suites for small gatherings</li>
                            <li style={{fontSize:"22px" , margin:"0" , listStyle:"none" , fontWeight:600}}>Verified Chefs through 10 step process</li>
                            <li style={{fontSize:"22px" , margin:"0" , listStyle:"none" , fontWeight:600}}>Connecting to Chefs fit for your cuisines</li>
                            <li style={{fontSize:"22px" , margin:"0" , listStyle:"none" , fontWeight:600}}>Best Prices 400+ dishes to choose</li>
                        </ul>
                        <div style={{display:"flex", justifyContent:"flex-start", alignItems:"center" , paddingTop:"30px"}}>
                            <div className="btn">{'check Design'}</div>
                        </div>
                    </div>
                </div>
                <div style={styles.serviceSec} className="serviceSec">
                <div style={styles.serviceSecRight} className="serviceSecRight">
                        <p style={{fontSize:"28px" , margin:"0"}}>{'“Convenient Bulk Food Delivery:'}</p>
                        <h4 style={{fontSize:"44px" , margin:"10px 0"}}>{'LIVE BUFFET'}</h4>
                        <ul>
                            <li style={{fontSize:"22px" , margin:"0" , listStyle:"none" , fontWeight:600}}>Best Price</li>
                            <li style={{fontSize:"22px" , margin:"0" , listStyle:"none" , fontWeight:600}}>Best Price 200+ Dishes to choose from</li>
                            <li style={{fontSize:"22px" , margin:"0" , listStyle:"none" , fontWeight:600}}>Best suites for Gathering</li>
                        </ul>
                        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                            <div className="btn">{'Explore Dishes and Prices'}</div>
                        </div>
                </div>
                <div style={styles.serviceSecLeft} className="serviceSecLeft"> 
                    <img src={service4Image} alt="Food Delivery Near me" />
                </div>
               
                </div>
                <div style={styles.serviceSec} className="serviceSec">
                <div style={styles.serviceSecLeft} className="serviceSecLeft"> 
                    <img src={service5Image} alt="Food Delivery Near me" />
                    </div>
                    <div style={styles.serviceSecRight} className="serviceSecRight">
                        <p style={{fontSize:"28px" , margin:"0"}}>{'Relax and Enjoy Your Party:'}</p>
                        <h4 style={{fontSize:"44px" , margin:"10px 0"}}>{'HOSPITALITY SERVICES'}</h4>
                        <ul>
                            <li style={{fontSize:"22px" , margin:"0" , listStyle:"none" , fontWeight:600}}>Best Suites for small gatherings</li>
                            <li style={{fontSize:"22px" , margin:"0" , listStyle:"none" , fontWeight:600}}>Verified Chefs through 10 step process </li>
                            <li style={{fontSize:"22px" , margin:"0" , listStyle:"none" , fontWeight:600}}>Connecting to Chefs fit for your cuisines</li>
                            <li style={{fontSize:"22px" , margin:"0" , listStyle:"none" , fontWeight:600}}> Best Prices </li>
                            <li style={{fontSize:"22px" , margin:"0" , listStyle:"none" , fontWeight:600}}>400+ dishes to choose</li>
                        </ul>
                        <div style={{display:"flex", justifyContent:"flex-start", alignItems:"center" , paddingTop:"30px"}}>
                            <div className="btn">{'check Design'}</div>
                        </div>
                    </div>
                </div>
                <div style={styles.serviceSec}>
              
                    <div style={styles.serviceSecRight}>
                        <p style={{fontSize:"28px" , margin:"0"}}>{'Transform Your Event Venue with Magical Decor:'}</p>
                        <h4 style={{fontSize:"44px" , margin:"10px 0"}}>{'GIFT & PARTY SUPPLIES'}</h4>
                        <ul>
                            <li style={{fontSize:"22px" , margin:"0" , listStyle:"none" , fontWeight:600}}>Best Price</li>
                            <li style={{fontSize:"22px" , margin:"0" , listStyle:"none" , fontWeight:600}}>1000+ Designs</li>
                            <li style={{fontSize:"22px" , margin:"0" , listStyle:"none" , fontWeight:600}}> Professional Executors </li>
                            <li style={{fontSize:"22px" , margin:"0" , listStyle:"none" , fontWeight:600}}>Staring 1200 Rs</li>
                        </ul>
                        <div style={{display:"flex", justifyContent:"flex-start", alignItems:"center" , paddingTop:"30px"}}>
                            <div className="btn">{'check Design'}</div>
                        </div>
                    </div>
                    <div style={styles.serviceSecLeft}> 
                    <img src={service6Image} alt="Food Delivery Near me" />
                    </div>
                </div>
                <div style={styles.serviceSec}>
                <div style={styles.serviceSecLeft}> 
                    <img src={service7Image} alt="Food Delivery Near me" />
                    </div>
                    <div style={styles.serviceSecRight}>
                        <p style={{fontSize:"28px" , margin:"0"}}>{'Relax and Enjoy Your Party:'}</p>
                        <h4 style={{fontSize:"44px" , margin:"10px 0"}}>{'ENTERTAINMENT'}</h4>
                        <ul>
                            <li style={{fontSize:"22px" , margin:"0" , listStyle:"none" , fontWeight:600}}>Best Price</li>
                            <li style={{fontSize:"22px" , margin:"0" , listStyle:"none" , fontWeight:600}}>1000+ Designs</li>
                            <li style={{fontSize:"22px" , margin:"0" , listStyle:"none" , fontWeight:600}}> Professional Executors </li>
                            <li style={{fontSize:"22px" , margin:"0" , listStyle:"none" , fontWeight:600}}>Staring 1200 Rs</li>
                        </ul>
                        <div style={{display:"flex", justifyContent:"flex-start", alignItems:"center" , paddingTop:"30px"}}>
                            <div className="btn">{'check Design'}</div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div> */}
            <div style={{ justifyContent: "center", alignContent: "center", fontSize: "5px", padding: "0 2px" }}>
                <p>Online chef for hire in Bangalore, Best caterers for small parties in Bangalore, Best home made cooking service in Bangalore, Mini party caterers in Bangalore, Book a chef in Bangalore, Book a cook in Bangalore, Book a private chef in Bangalore, Book a private cook in Bangalore, Book a trained verified cook near you in Bangalore, Bookacook in Bangalore, Caterers for small parties in Bangalore, Top caterers in Bangalore, Chef for party in Bangalore, Catering services in Bangalore, Chef at home service in Bangalore, Chef for a day in Bangalore, Chef for a night in Bangalore, Chef for hire in Bangalore, Chef cooking at my home in Bangalore, Chef near me in Bangalore, Chef on demand in Bangalore, Chef required at home in Bangalore, Chefs for hire in Bangalore, Chefs for home in Bangalore, Hire a private chef in Bangalore, Chefs on hire in Bangalore, Cook chef near me in Bangalore, Cook at home services in Bangalore, Cook for a day in Bangalore, Cook for a night in Bangalore, Cook for one day in Bangalore, Cook for party in Bangalore, Cook service near me in Bangalore, Cook home services in Bangalore, Cook near me in Bangalore, Cook on demand in Bangalore, Cook on hire near me in Bangalore, Cook required at home in Bangalore, Cooking as a service in Bangalore, Cooking maids near me in Bangalore, Cooking services near me in Bangalore, Cooks for hire in Bangalore, Cooks for home in Bangalore, Cooks near me in Bangalore, Cooks on hire in Bangalore, Domestic cook near me in Bangalore, Find a chef in Bangalore, Find a cook in Bangalore, Hire a chef in Bangalore, Hire a chef for a day in Bangalore, Hire personal chef in Bangalore, Hire a chef for home in Bangalore, Hire a chef near me in Bangalore, Take a Chef in Bangalore, Hire a cook in Bangalore, Hire a cook at home in Bangalore, Hire a cook for home in Bangalore, Hire a cook near me in Bangalore, Hire a personal chef for a night in Bangalore, Hire a personal cook in Bangalore, Hire a professional chef in Bangalore, Hire chef at home in Bangalore, Hire cook near me in Bangalore, Hire cook online in Bangalore, Hire private chef in Bangalore, Hire someone to cook for you in Bangalore, Hiring a personal chef in Bangalore, Home caterers in Bangalore, Home chef near me in Bangalore, Home cook near me in Bangalore, Home cooking service in Bangalore, Home cooking service near me in Bangalore, Home party catering in Bangalore, House chef near me in Bangalore, House cook near me in Bangalore, In home cooking service in Bangalore, In house cooking service in Bangalore, Local chefs for hire in Bangalore, Looking for chef in Bangalore, Looking for cook in Bangalore, Mini cater</p>
                <p>Online chef for hire in Delhi, Best caterers for small parties in Delhi, Best home made cooking service in Delhi, Mini party caterers in Delhi, Book a chef in Delhi, Book a cook in Delhi, Book a private chef in Delhi, Book a private cook in Delhi, Book a trained verified cook near you in Delhi, Bookacook in Delhi, Caterers for small parties in Delhi, Top caterers in Delhi, Chef for party in Delhi, Catering services in Delhi, Chef at home service in Delhi, Chef for a day in Delhi, Chef for a night in Delhi, Chef for hire in Delhi, Chef cooking at my home in Delhi, Chef near me in Delhi, Chef on demand in Delhi, Chef required at home in Delhi, Chefs for hire in Delhi, Chefs for home in Delhi, Hire a private chef in Delhi, Chefs on hire in Delhi, Cook chef near me in Delhi, Cook at home services in Delhi, Cook for a day in Delhi, Cook for a night in Delhi, Cook for one day in Delhi, Cook for party in Delhi, Cook service near me in Delhi, Cook home services in Delhi, Cook near me in Delhi, Cook on demand in Delhi, Cook on hire near me in Delhi, Cook required at home in Delhi, Cooking as a service in Delhi, Cooking maids near me in Delhi, Cooking services near me in Delhi, Cooks for hire in Delhi, Cooks for home in Delhi, Cooks near me in Delhi, Cooks on hire in Delhi, Domestic cook near me in Delhi, Find a chef in Delhi, Find a cook in Delhi, Hire a chef in Delhi, Hire a chef for a day in Delhi, Hire personal chef in Delhi, Hire a chef for home in Delhi, Hire a chef near me in Delhi, Take a Chef in Delhi, Hire a cook in Delhi, Hire a cook at home in Delhi, Hire a cook for home in Delhi, Hire a cook near me in Delhi, Hire a personal chef for a night in Delhi, Hire a personal cook in Delhi, Hire a professional chef in Delhi, Hire chef at home in Delhi, Hire cook near me in Delhi, Hire cook online in Delhi, Hire private chef in Delhi, Hire someone to cook for you in Delhi, Hiring a personal chef in Delhi, Home caterers in Delhi, Home chef near me in Delhi, Home cook near me in Delhi, Home cooking service in Delhi, Home cooking service near me in Delhi, Home party catering in Delhi, House chef near me in Delhi, House cook near me in Delhi, In home cooking service in Delhi, In house cooking service in Delhi, Local chefs for hire in Delhi, Looking for chef in Delhi, Looking for cook in Delhi, Mini cater</p>
                <p>Online chef for hire in Mumbai, Best caterers for small parties in Mumbai, Best home made cooking service in Mumbai, Mini party caterers in Mumbai, Book a chef in Mumbai, Book a cook in Mumbai, Book a private chef in Mumbai, Book a private cook in Mumbai, Book a trained verified cook near you in Mumbai, Bookacook in Mumbai, Caterers for small parties in Mumbai, Top caterers in Mumbai, Chef for party in Mumbai, Catering services in Mumbai, Chef at home service in Mumbai, Chef for a day in Mumbai, Chef for a night in Mumbai, Chef for hire in Mumbai, Chef cooking at my home in Mumbai, Chef near me in Mumbai, Chef on demand in Mumbai, Chef required at home in Mumbai, Chefs for hire in Mumbai, Chefs for home in Mumbai, Hire a private chef in Mumbai, Chefs on hire in Mumbai, Cook chef near me in Mumbai, Cook at home services in Mumbai, Cook for a day in Mumbai, Cook for a night in Mumbai, Cook for one day in Mumbai, Cook for party in Mumbai, Cook service near me in Mumbai, Cook home services in Mumbai, Cook near me in Mumbai, Cook on demand in Mumbai, Cook on hire near me in Mumbai, Cook required at home in Mumbai, Cooking as a service in Mumbai, Cooking maids near me in Mumbai, Cooking services near me in Mumbai, Cooks for hire in Mumbai, Cooks for home in Mumbai, Cooks near me in Mumbai, Cooks on hire in Mumbai, Domestic cook near me in Mumbai, Find a chef in Mumbai, Find a cook in Mumbai, Hire a chef in Mumbai, Hire a chef for a day in Mumbai, Hire personal chef in Mumbai, Hire a chef for home in Mumbai, Hire a chef near me in Mumbai, Take a Chef in Mumbai, Hire a cook in Mumbai, Hire a cook at home in Mumbai, Hire a cook for home in Mumbai, Hire a cook near me in Mumbai, Hire a personal chef for a night in Mumbai, Hire a personal cook in Mumbai, Hire a professional chef in Mumbai, Hire chef at home in Mumbai, Hire cook near me in Mumbai, Hire cook online in Mumbai, Hire private chef in Mumbai, Hire someone to cook for you in Mumbai, Hiring a personal chef in Mumbai, Home caterers in Mumbai, Home chef near me in Mumbai, Home cook near me in Mumbai, Home cooking service in Mumbai, Home cooking service near me in Mumbai, Home party catering in Mumbai, House chef near me in Mumbai, House cook near me in Mumbai, In home cooking service in Mumbai, In house cooking service in Mumbai, Local chefs for hire in Mumbai, Looking for chef in Mumbai, Looking for cook in Mumbai, Mini cater</p>
            </div>
        </div>
    );
}

const styles = {
    homebanner: {
        marginTop: "-76px",
    },
    bgImg: {
        background: `url(${bannerSvgImage})`,
        backgroundSize: "cover",
        paddingTop: "110px",
        paddingBottom: "30px",
    },
    pageWidth: {
        maxWidth: "100%",
        width: "1200px",
        margin: "0 auto",
    },
    textContainer: {
        textAlign: "center",
        color: "white", // Adjust text color as needed
        margin: "0 0 70px 0",
    },
    bannerBottomSec: {
        display: "flex",
        justifyContent: "center",
        alignItems: "top",
        flexDirection: "row",
        padding: "0px 6%",
        margin: "0 auto",
        flexWrap: "wrap",
    },
    celebrateBottomSec: {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        flexDirection: "row",
        margin: "0 auto",
        flexWrap: "wrap",
    },
    celebrateBox: {
        margin: "0 1%",
        width: "20%",
    },
    bannerDecorationImage: {
        margin: "0 1%",
        width: "14%",
    },
    serviceSec: {
        backgroundColor: "rgba(230, 117, 107, 0.2)",
        borderRadius: "59px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "60px",
        marginBottom: "50px",
    },
    serviceSecRight: {
        width: "53%",
    },
    serviceSecLeft: {
        width: "40%",
    }

};

export default Home;
