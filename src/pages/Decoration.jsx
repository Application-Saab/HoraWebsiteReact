import React, { useState, useEffect } from "react";
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { BASE_URL, GET_DECORATION_CAT_ID, GET_DECORATION_CAT_ITEM } from '../utills/apiconstants';
import BirthdayImage from '../assets/Birthday_dec_cat.jpeg';
import FirstnightImage from '../assets/first_night_cat_dec.jpeg';
import AnniversaryImage from '../assets/aniversary_Cat_Dec.jpeg';
import KidsbirthdayImage from '../assets/kids_birthday_decoration.jpeg';
import BabyShowerImage from '../assets/baby-shower-dec-cat.jpeg';
import WelcomebabyImage from '../assets/welcome_baby_dec.jpeg';
import PremiumImage from '../assets/preminumdecor.jpeg';
import BallonBImage from '../assets/Balloon-B-new.jpeg';
import HaldiImage from '../assets/HaldiImage.png';
import MehendiImage from '../assets/MehendiImage.png';
import { getDecorationOrganizationSchema } from '../utills/schema';
import { setState } from '../actions/action';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

import '../css/decoration.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import decorationPageshowData from '../utills/decorationCatShow.json'; // Adjust path as needed

function Decoration() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const schemaOrg = getDecorationOrganizationSchema();
    const scriptTag = JSON.stringify(schemaOrg);
    let { city } = useParams();
    const hasCityPageParam = !!city;

    const [catalogueData, setCatalogueData] = useState([]);
    const [decCat, setDecCat] = useState([
        { id: '2', image: BirthdayImage, name: 'Birthday', subCategory: "Birthday", catValue: "birthday-decoration", imgAlt: "A Gorgeous Candy Birthday Decoration Surprise!" },
        { id: '3', image: FirstnightImage, name: 'First Night', subCategory: "FirstNight", catValue: "first-night-decoration", imgAlt: "Add extra happiness quotient to your wedding night with our exclusive décor package" },
        { id: '4', image: AnniversaryImage, name: 'Anniversary', subCategory: "Anniversary", catValue: "anniversary-decoration", imgAlt: "Immerse yourself in a world of romance with our mesmerizing anniversary decorations." },
        { id: '5', image: KidsbirthdayImage, name: 'Kids Birthday', subCategory: "KidsBirthday", catValue: "kids-birthday-decoration", imgAlt: "Flutter into a world of whimsy with our exclusive Whimsical Flutter-themed Welcome Baby Decorations." },
        { id: '6', image: BabyShowerImage, name: 'Baby Shower', subCategory: "BabyShower", catValue: "baby-shower-decoration", imgAlt: "Celebrate the transformation into motherhood with Our Gilded Baby Shower Decorations." },
        { id: '7', image: WelcomebabyImage, name: 'Welcome Baby', subCategory: "WelcomeBaby", catValue: "welcome-baby-decoration", imgAlt: "A Pastel Theme Oh Baby Decor for your Baby Shower Celebrations!" },
        { id: '8', image: PremiumImage, name: 'Premium Decoration', subCategory: "PremiumDecoration", catValue: "premium-decoration", imgAlt: "Birthday party decoration ideas for adults" },
        { id: '9', image: BallonBImage, name: 'Balloon Bouquets', subCategory: "BalloonBouquets", catValue: "balloon-bouquets-decoration", imgAlt: "Balloon Bouquet" },
        { id: '10', image: HaldiImage, name: "Haldi Event", subCategory: "Haldi-Mehandi", catValue: "haldi-mehendi-decoration", imgAlt: "Haldi Event" },
        { id: '11', image: MehendiImage, name: "Mehendi Event", subCategory: "Haldi-Mehandi", catValue: "haldi-mehendi-decoration", imgAlt: "Mehendi Event" }
    ]);

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const [birthdayData, setBirthdayData] = useState([]);
    const [firstNightData, setFirstNightData] = useState([]);
    const [haldiAndMehndiData, setHaldiAndMehndiData] = useState([]);

    useEffect(() => {
        // Update state with data from the JSON file
        setBirthdayData(decorationPageshowData.decorationPageshowData.birthdayData);
        setFirstNightData(decorationPageshowData.decorationPageshowData.firstNightData);
        setHaldiAndMehndiData(decorationPageshowData.decorationPageshowData.haldiAndMehndiData);
    }, []);

    const getCatData = async (subCategory) => {
        try {
            const response = await axios.get(BASE_URL + GET_DECORATION_CAT_ID + subCategory);
            const categoryId = response.data.data._id;
            const result = await axios.get(BASE_URL + GET_DECORATION_CAT_ITEM + categoryId);
            setCatalogueData(result.data.data);
        } catch (error) {
            console.log("Error:", error.message);
        }
    };

    const openCatItems = (item) => {
        dispatch(setState(item.subCategory, item.imgAlt));
        const path = hasCityPageParam ? `/${city}/balloon-decoration/${item.catValue}` : `/balloon-decoration/${item.catValue}`;
        navigate(path);
    };

    useEffect(() => {
        decCat.forEach((item) => {
            getCatData(item.subCategory);
        });
    }, [decCat]);

    const handleViewMore = (category) => {
        const categoryItem = decCat.find(cat => cat.name === category);
        if (categoryItem) {
            openCatItems(categoryItem);
        }
    };

    return (
        <div>
            <Helmet>
                <title>Balloon and Flower Decoration @999</title>
                <meta name="description" content="Celebrate Anniversary, Birthday & other Occasions with Candlelight Dinners, Surprises & Balloon Decorations" />
                <meta name="keywords" content="Balloon and Flower Decoration @999" />
                <meta property="og:title" content="Balloon and Flower Decoration by Professional Decorators" />
                <meta property="og:description" content="Celebrate Anniversary, Birthday & other Occasions with Candlelight Dinners, Surprises & Balloon Decorations" />
                <meta property="og:image" content="https://horaservices.com/api/uploads/attachment-1706520980436.png" />
                <script type="application/ld+json">{scriptTag}</script>
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Hora Services" />
                <meta property="og:url" content="https://horaservices.com/balloon-decoration" />
                <meta property="og:type" content="website" />
            </Helmet>

            <div className="decContainerSec">
                {decCat.map((item) => (
                    <div key={item.id} className="imageContainer" onClick={() => openCatItems(item)}>
                        <img src={item.image} className="decCatimage" alt={item.imgAlt} />
                    </div>
                ))}
            </div>

            <div className="container">
                <div className="header-container">
                    <h1>Decoration Collection</h1>
                  
                </div>

                <div className="slider-container">
                    <div className="slider-sec">
                        <div>
                        <h2>Birthday Decorations</h2>
                        <div className="view-more-container">
                        <button style={{ backgroundColor: "rgb(157, 74, 147)" }} className="view-more-button" onClick={() => handleViewMore('Birthday')}>View More</button>
                    </div>
                        </div>
                 
                    <Slider {...sliderSettings}>
                        {birthdayData.map((item, index) => (
                            <div className="decoration-card" key={index}>
                                <img style={{ width: "350px", height: "310px" }} src={item.image} alt={item.title} />
                                <h2>{item.title}</h2>
                                <div className="price-rating">
                                    <div className="price">
                                        <span>{item.price}</span>
                                    </div>
                                    <div className="rating">
                                        <FontAwesomeIcon icon={faThumbsUp} /> <span>{item.rating}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                    </div>
                 
                    <div className="slider-sec">
                    <div>
                    <h2>First Night Decorations</h2>
                    <div className="view-more-container">
                        <button style={{ backgroundColor: "rgb(157, 74, 147)" }} className="view-more-button" onClick={() => handleViewMore('First Night')}>View More</button>
                    </div>
                    </div>
                    <Slider {...sliderSettings}>
                        {firstNightData.map((item, index) => (
                            <div className="decoration-card" key={index}>
                                <img style={{ width: "350px", height: "310px" }} src={item.image} alt={item.title} />
                                <h2>{item.title}</h2>
                                <div className="price-rating">
                                    <div className="price">
                                        <span>{item.price}</span>
                                    </div>
                                    <div className="rating">
                                        <FontAwesomeIcon icon={faThumbsUp} /> <span>{item.rating}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                    </div>
                    
                        <div>

                     <div  className="slider-sec"> 
                     <div>
                     <h2>Haldi and Mehndi Decorations</h2>
                     <div className="view-more-container">
                        <button style={{ backgroundColor: "rgb(157, 74, 147)" }} className="view-more-button" onClick={() => handleViewMore('Haldi Event')}>View More</button>
                    </div>
                    <Slider {...sliderSettings}>
                        {haldiAndMehndiData.map((item, index) => (
                            <div className="decoration-card" key={index}>
                                <img style={{ width: "350px", height: "310px" }} src={item.image} alt={item.title} />
                                <h2>{item.title}</h2>
                                <div className="price-rating">
                                    <div className="price">
                                        <span>{item.price}</span>
                                    </div>
                                    <div className="rating">
                                        <FontAwesomeIcon icon={faThumbsUp} /> <span>{item.rating}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                    </div>
                    </div> 
                   
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Decoration;
