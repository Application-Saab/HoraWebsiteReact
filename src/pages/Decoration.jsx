// import React, { useState, useEffect } from "react";
// import { Helmet } from 'react-helmet';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import { useParams } from "react-router-dom";
// import { BASE_URL, GET_DECORATION_CAT_ID, GET_DECORATION_CAT_ITEM } from '../utills/apiconstants';
// import BirthdayImage from '../assets/Birthday_dec_cat.jpeg';
// import FirstnightImage from '../assets/first_night_cat_dec.jpeg'
// import AnniversaryImage from '../assets/aniversary_Cat_Dec.jpeg'
// import KidsbirthdayImage from '../assets/kids_birthday_decoration.jpeg'
// import BabyShowerImage from '../assets/baby-shower-dec-cat.jpeg'
// import WelcomebabyImage from '../assets/welcome_baby_dec.jpeg'
// import PremiumImage from '../assets/preminumdecor.jpeg'
// import CarbootImage from '../assets/car_boot.jpg'
// import BallonBImage from '../assets/Balloon-B-new.jpeg'
// import { getDecorationOrganizationSchema } from '../utills/schema';
// import { setState } from '../actions/action';

// function Decoration() {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//   const schemaOrg = getDecorationOrganizationSchema();
//   const scriptTag = JSON.stringify(schemaOrg);
//   let { city } = useParams();
//   const hasCityPageParam = city ? true : false;
//     const [catalogueData, setCatalogueData] = useState([]);
//     const [decCat, setDecCat] = useState([
//         { id: '2', image: BirthdayImage, name: 'Birthday', subCategory: "Birthday" , catValue:"birthday-decoration" , imgAlt:"A Gorgeous Candy Birthday Decoration Surprise!" },
//         { id: '3', image: FirstnightImage, name: 'First Night', subCategory: "FirstNight" , catValue:"first-night-decoration" , imgAlt:"Add extra happiness quotient to your wedding night with our exclusive décor package"},
//         { id: '4', image: AnniversaryImage, name: 'Anniversary', subCategory: "Anniversary"  , catValue:"anniversary-decoration" , imgAlt:"Immerse yourself in a world of romance with our mesmerizing anniversary decorations."},
//         { id: '5', image: KidsbirthdayImage, name: 'Kids Birthday', subCategory: "KidsBirthday" , catValue:"kids-birthday-decoration" , imgAlt:"Flutter into a world of whimsy with our exclusive Whimsical Flutter-themed Welcome Baby Decorations." },
//         { id: '6', image: BabyShowerImage, name: 'Baby Shower', subCategory: "BabyShower" , catValue:"baby-shower-decoration" , imgAlt:"Celebrate the transformation into motherhood with Our Gilded Baby Shower Decorations." },
//         { id: '7', image: WelcomebabyImage, name: 'Welcome Baby', subCategory: "WelcomeBaby" , catValue:"welcome-baby-decoration" , imgAlt:"A Pastel Theme Oh Baby Decor for your Baby Shower Celebrations!"},
//         { id: '8', image: PremiumImage, name: 'premium Decoration', subCategory: "PremiumDecoration"  , catValue:"premium-decoration" , imgAlt:"Birthday party decoration ideas for adults" },
//         { id: '9', image: BallonBImage, name: 'Ballon Bouquets', subCategory: "BallonBouquets" , catValue:"balloon-bouquets-decoration" , imgAlt:"Balloon Bouquet" },
//        // { id: '10', image: CarbootImage, name: 'Car Boot', subCategory: "CarBoot" , catValue:"carboot-decoration"},
//     //     { id: '11', image: BachelorPartyImage, name: 'Bachelor Party', subCategory: "BachelorParty" , catValue:"bachelorparty-decoration"},
//     //     { id: '12', image: CandlelightdinnerImage, name: 'Candlelight Dinner', subCategory: "CandlelightDinner" , catValue:"candle-light-dinner-decoration"},
//     //     { id: '13', image: PartySupplyImage, name: 'Party Supply', subCategory: "PartySupply" , catValue:"party-supply-decoration"},
//     //     { id: '14', image: EntertainerImage, name: 'Entertainer', subCategory: "Entertainer" , catValue:"entainer-decoration"},
//     ]);

//     const getCatData = async (subCategory) => {
//         try {
//             const response = await axios.get(BASE_URL + GET_DECORATION_CAT_ID + subCategory);
//             const categoryId = response.data.data._id;
//             const result = await axios.get(BASE_URL + GET_DECORATION_CAT_ITEM + categoryId);
//             setCatalogueData(result.data.data);
//         } catch (error) {
//             console.log("Error:", error.message);
//         }
//     };

//     const openCatItems = (item) => {
//         dispatch(setState(item.subCategory, item.imgAlt));
//       if(hasCityPageParam){
//         navigate(`/${city}/balloon-decoration/${item.catValue}`);
//       }
//       else{
//       navigate(`/balloon-decoration/${item.catValue}`);
//       }
//     };
//     useEffect(() => {
//         decCat.forEach((item) => {
//             getCatData(item.subCategory); // Fetch catalogue data for each subcategory
//         });
//     }, []);

//     return (
//         <div>
//         <Helmet>
//         <title>Balloon and Flower Decoration @999</title>
//         <meta name="description" content="Celebrate Anniversary, Birthday & other Occasions with Candlelight Dinners, Surprises & Balloon Decorations" />
//         <meta name="keywords" content="Balloon and Flower Decoration @999" />
//         <meta property="og:title" content="Balloon and Flower Decoration by Professional Decorators" />
//         <meta property="og:description" content="Celebrate Anniversary, Birthday & other Occasions with Candlelight Dinners, Surprises & Balloon Decorations" />
//         <meta property="og:image" content="https://horaservices.com/api/uploads/attachment-1706520980436.png" />
//         <script type="application/ld+json">{scriptTag}</script>
//         <meta name="robots" content="index, follow" />
//         <meta name="author" content="Hora Services" />
//         <meta property="og:url" content="https://horaservices.com/balloon-decoration" />
//         <meta property="og:type" content="website" />
//       </Helmet>
//             <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", margin: "20px auto 0", width: "70%" , justifyContent:"space-between"}} className="decContainerSec decPage">
//                 {decCat.map((item, index) => (
//                     <div key={index} className="imageContainer">
//                         <img src={item.image} className="decCatimage" alt={item.name}  onClick={() => openCatItems(item)}/>
//                     </div>
//                 ))} 
//             {/* <div>
//             {decCat.map((item, index) => (
//             <url>
//             <loc>{`https://horaservices.com/balloon-decoration/${item.catValue}`}</loc>
//             <priority>1.00</priority>
//             </url>
//             ))} 
//             </div> */}
//             </div>
//         </div>
//     );
// }


// export default Decoration;


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

const birthdayData = [
  {
    image: 'https://horaservices.com/api/uploads/attachment-1705585951138.png',
    title: 'Birthday Special Balloon Decoration',
    price: '₹1499',
    rating: 4.8,
  },
  {
    image: 'https://horaservices.com/api/uploads/attachment-1706464222384.png',
    title: 'Pastel And Rosegold Birthday Decor',
    price: '₹2499',
    rating: 4.8,
  },
  {
    image: 'https://horaservices.com/api/uploads/attachment-1706520680774.png',
    title: 'Glitzy Silver and Black Birthday Decor',
    price: '₹1999',
    rating: 4.6,
  },
  {
    image: 'https://horaservices.com/api/uploads/attachment-1706810405540.png',
    title: 'Underwater Wonderland: Mermaid',
    price: '₹3999',
    rating: 4.7,
  },
  {
    image: 'https://horaservices.com/api/uploads/attachment-1706810405540.png',
    title: 'Underwater Wonderland: Mermaid',
    price: '₹3999',
    rating: 4.7,
  },
  {
    image: 'https://horaservices.com/api/uploads/attachment-1706810405540.png',
    title: 'Underwater Wonderland: Mermaid',
    price: '₹3999',
    rating: 4.7,
  },
  {
    image: 'https://horaservices.com/api/uploads/attachment-1706810405540.png',
    title: 'Underwater Wonderland: Mermaid',
    price: '₹3999',
    rating: 4.7,
  },
  {
    image: 'https://horaservices.com/api/uploads/attachment-1706810405540.png',
    title: 'Underwater234dsasdasd Wonderland: Mermaid',
    price: '₹3999',
    rating: 4.7,
  },
];


const firstNightData = [
    {
      image: 'https://horaservices.com/api/uploads/attachment-1705582807178.png',
      title: 'Romantic Heart Balloon',
      price: '₹1429',
      rating: 4.5,
    },
    {
      image: 'https://horaservices.com/api/uploads/attachment-1706470026330.png',
      title: 'Wedding Night Room Decoration',
      price: '₹1900',
      rating: 4.5,
    },
    {
      image: 'https://horaservices.com/api/uploads/attachment-1706470815566.png',
      title: 'Wedding Night Decoration',
      price: '₹2250',
      rating: 4.5,
    },
    {
      image: 'https://horaservices.com/api/uploads/attachment-1711614540709.png',
      title: 'Lightning With Heart Room Decor',
      price: '₹1450',
      rating: 4.3,
    },
  ];


  const haldiAndMehndiData = [
    {
      image: 'https://horaservices.com/api/uploads/attachment-1722688345222.png',
      title: 'Mehendi Decoration Green Look',
      price: '₹16200',
      rating: 4.6,
    },
    {
      image: 'https://horaservices.com/api/uploads/attachment-1722692831708.png',
      title: 'Haldi With Green Backdrop',
      price: '₹9680',
      rating: 4.5,
    },
    {
      image: 'https://horaservices.com/api/uploads/attachment-1722935098782.png',
      title: 'Mehendi Decoration Look',
      price: '₹17200',
      rating: 4.6,
    },
    {
      image: 'https://horaservices.com/api/uploads/attachment-1722969484208.png',
      title: 'Mehendi With Orange Theme',
      price: '₹7000',
      rating: 4.6,
    },
  ];

function Decoration() {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const schemaOrg = getDecorationOrganizationSchema();
    const scriptTag = JSON.stringify(schemaOrg);
    let { city } = useParams();
    const hasCityPageParam = city ? true : false;
    const [catalogueData, setCatalogueData] = useState([]);
    const [decCat, setDecCat] = useState([

        { id: '2', image: BirthdayImage, name: 'Birthday', subCategory: "Birthday", catValue:"birthday-decoration", imgAlt:"A Gorgeous Candy Birthday Decoration Surprise!" },
        { id: '3', image: FirstnightImage, name: 'First Night', subCategory: "FirstNight", catValue:"first-night-decoration", imgAlt:"Add extra happiness quotient to your wedding night with our exclusive décor package"},
        { id: '4', image: AnniversaryImage, name: 'Anniversary', subCategory: "Anniversary", catValue:"anniversary-decoration", imgAlt:"Immerse yourself in a world of romance with our mesmerizing anniversary decorations."},
        { id: '5', image: KidsbirthdayImage, name: 'Kids Birthday', subCategory: "KidsBirthday", catValue:"kids-birthday-decoration", imgAlt:"Flutter into a world of whimsy with our exclusive Whimsical Flutter-themed Welcome Baby Decorations." },
        { id: '6', image: BabyShowerImage, name: 'Baby Shower', subCategory: "BabyShower", catValue:"baby-shower-decoration", imgAlt:"Celebrate the transformation into motherhood with Our Gilded Baby Shower Decorations." },
        { id: '7', image: WelcomebabyImage, name: 'Welcome Baby', subCategory: "WelcomeBaby", catValue:"welcome-baby-decoration", imgAlt:"A Pastel Theme Oh Baby Decor for your Baby Shower Celebrations!"},
        { id: '8', image: PremiumImage, name: 'Premium Decoration', subCategory: "PremiumDecoration", catValue:"premium-decoration", imgAlt:"Birthday party decoration ideas for adults" },
        { id: '9', image: BallonBImage, name: 'Balloon Bouquets', subCategory: "BalloonBouquets", catValue:"balloon-bouquets-decoration", imgAlt:"Balloon Bouquet" },

        {id: '10', image: HaldiImage, name: "Haldi Event", subCategory: "Haldi-Mehandi", catValue: "haldi-mehendi-decoration", imgAlt: "Haldi Event"},
        
        
        {id: '11', image: MehendiImage, name: "Mehendi Event", subCategory: "Haldi-Mehandi", catValue: "haldi-mehendi-decoration", imgAlt: "Mehendi Event"},
   
        // { id: '10', image: BallonBImage, name: 'Car Boot', subCategory: "CarBoot" , catValue:"carboot-decoration"},
        // { id: '11', image: BachelorPartyImage, name: 'Bachelor Party', subCategory: "BachelorParty" , catValue:"bachelorparty-decoration"},
        // { id: '12', image: CandlelightdinnerImage, name: 'Candlelight Dinner', subCategory: "CandlelightDinner" , catValue:"candle-light-dinner-decoration"},
        // { id: '13', image: PartySupplyImage, name: 'Party Supply', subCategory: "PartySupply" , catValue:"party-supply-decoration"},
        // { id: '14', image: EntertainerImage, name: 'Entertainer', subCategory: "Entertainer" , catValue:"entainer-decoration"},
    
    ]);

    const [visibleItems, setVisibleItems] = useState(birthdayData.slice(0, 4));
    const [visibleItems2, setVisibleItems2] = useState(firstNightData.slice(0, 4)); 
    const [visibleItems3, setVisibleItems3] = useState(haldiAndMehndiData.slice(0,4));


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
        if (hasCityPageParam) {
            navigate(`/${city}/balloon-decoration/${item.catValue}`);
        } else {
            navigate(`/balloon-decoration/${item.catValue}`);
        }
    };

    const handleViewMore = (category) => {
        const categoryItem = decCat.find(cat => cat.name === category);
        if (categoryItem) {
            openCatItems(categoryItem);
        }
    };

    useEffect(() => {
        decCat.forEach((item) => {
            getCatData(item.subCategory);
        });
    }, [decCat]);

    // Slider settings
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
        {decCat.map((item, index) => (
          <div key={index} className="imageContainer" onClick={() => openCatItems(item)}>
            <img src={item.image} className="decCatimage" alt={item.imgAlt} />
          </div>
        ))}
      </div>

            <div className="container">
            <div className="header-container">
        <h1>Birthday Party Decorations</h1>
        <div className="view-more-container">
            <button style={{backgroundColor: "rgb(157, 74, 147)"}} className="view-more-button" onClick={() => handleViewMore('Birthday')}>View More</button>
        </div>
    
        </div>
                <div className="slider-container">
                    <Slider {...sliderSettings}>
                        {visibleItems.map((item, index) => (
                            <div className="decoration-card" key={index}>
                                <img style={{ width: "350px", height: "310px" }} src={item.image} alt={item.title} />
                                <h2>{item.title}</h2>
                                <div className="price-rating">
                                    <div className="price">
                                        {item.oldPrice && <span className="old-price">{item.oldPrice}</span>}
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

                {/* Second Slider */}
                <div className="header-container">
                    <h1>First Night Balloon Decoration</h1>
                    <div className="view-more-container">
            <button style={{backgroundColor: "rgb(157, 74, 147)"}} className="view-more-button" onClick={() => handleViewMore('First Night')}>View More</button>
        </div>
                </div>
                <div className="slider-container">
                    <Slider {...sliderSettings}>
                        {visibleItems2.map((item, index) => (
                            <div className="decoration-card" key={index}>
                                <img style={{ width: "350px", height: "310px" }} src={item.image} alt={item.title} />
                                <h2>{item.title}</h2>
                                <div className="price-rating">
                                    <div className="price">
                                        {item.oldPrice && <span className="old-price">{item.oldPrice}</span>}
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

                 {/* Third Slider */}
                 <div className="header-container">
                    <h1>Haldi & Mehndi Decoration</h1>
                    <div className="view-more-container">
            <button style={{backgroundColor: "rgb(157, 74, 147)"}} className="view-more-button" onClick={() => handleViewMore('Haldi Event')}>View More</button>
        </div>
                </div>
                <div className="slider-container">
                    <Slider {...sliderSettings}>
                        {visibleItems3.map((item, index) => (
                            <div className="decoration-card" key={index}>
                                <img style={{ width: "350px", height: "310px" }} src={item.image} alt={item.title} />
                                <h2>{item.title}</h2>
                                <div className="price-rating">
                                    <div className="price">
                                        {item.oldPrice && <span className="old-price">{item.oldPrice}</span>}
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
    );
}

export default Decoration;

