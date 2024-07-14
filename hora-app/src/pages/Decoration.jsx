import React, { useState, useEffect } from "react";
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
import { useParams } from "react-router-dom";
import { BASE_URL, GET_DECORATION_CAT_ID, GET_DECORATION_CAT_ITEM } from '../utills/apiconstants';
import BirthdayImage from '../assets/Birthday_dec_cat.jpeg';
import FirstnightImage from '../assets/first_night_cat_dec.jpeg'
import AnniversaryImage from '../assets/aniversary_Cat_Dec.jpeg'
import KidsbirthdayImage from '../assets/kids_birthday_decoration.jpeg'
import BabyShowerImage from '../assets/baby-shower-dec-cat.jpeg'
import WelcomebabyImage from '../assets/welcome_baby_dec.jpeg'
import PremiumImage from '../assets/preminumdecor.jpeg'
import CarbootImage from '../assets/car_boot.jpg'
import BallonBImage from '../assets/Balloon-B-new.jpeg'
import { getDecorationOrganizationSchema } from '../utills/schema';

function Decoration() {
  const schemaOrg = getDecorationOrganizationSchema();
  const scriptTag = JSON.stringify(schemaOrg);
  let { city } = useParams();
  const hasCityPageParam = city ? true : false;
    const navigate = useNavigate();
    const [catalogueData, setCatalogueData] = useState([]);
    const [subCategory, setSubCategory] = useState("");
    const [hoveredIndex, setHoveredIndex] = useState(null); // State to track hovered container index
    const [decCat, setDecCat] = useState([
        { id: '2', image: BirthdayImage, name: 'Birthday', subCategory: "Birthday" , catValue:"birthday-decoration" , imgAlt:"A Gorgeous Candy Birthday Decoration Surprise!" },
        { id: '3', image: FirstnightImage, name: 'First Night', subCategory: "FirstNight" , catValue:"firstnight-decoration" , imgAlt:"Add extra happiness quotient to your wedding night with our exclusive décor package"},
        { id: '4', image: AnniversaryImage, name: 'Anniversary', subCategory: "Anniversary"  , catValue:"anniversary-decoration" , imgAlt:"Immerse yourself in a world of romance with our mesmerizing anniversary decorations."},
        { id: '5', image: KidsbirthdayImage, name: 'Kids Birthday', subCategory: "KidsBirthday" , catValue:"kids-birthday-decoration" , imgAlt:"Flutter into a world of whimsy with our exclusive Whimsical Flutter-themed Welcome Baby Decorations." },
        { id: '6', image: BabyShowerImage, name: 'Baby Shower', subCategory: "BabyShower" , catValue:"baby-shower-decoration" , imgAlt:"Celebrate the transformation into motherhood with Our Gilded Baby Shower Decorations." },
        { id: '7', image: WelcomebabyImage, name: 'Welcome Baby', subCategory: "WelcomeBaby" , catValue:"welcome-baby-decoration" , imgAlt:"A Pastel Theme Oh Baby Decor for your Baby Shower Celebrations!"},
        { id: '8', image: PremiumImage, name: 'premium Decoration', subCategory: "PremiumDecoration"  , catValue:"premium-decoration" , imgAlt:"Birthday party decoration ideas for adults" },
        { id: '9', image: BallonBImage, name: 'Ballon Bouquets', subCategory: "BallonBouquets" , catValue:"ballonbouquets-decoration" , imgAlt:"Balloon Bouquet" },
       // { id: '10', image: CarbootImage, name: 'Car Boot', subCategory: "CarBoot" , catValue:"carboot-decoration"},
    //     { id: '11', image: BachelorPartyImage, name: 'Bachelor Party', subCategory: "BachelorParty" , catValue:"bachelorparty-decoration"},
    //     { id: '12', image: CandlelightdinnerImage, name: 'Candlelight Dinner', subCategory: "CandlelightDinner" , catValue:"candle-light-dinner-decoration"},
    //     { id: '13', image: PartySupplyImage, name: 'Party Supply', subCategory: "PartySupply" , catValue:"party-supply-decoration"},
    //     { id: '14', image: EntertainerImage, name: 'Entertainer', subCategory: "Entertainer" , catValue:"entainer-decoration"},
    ]);

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
      if(hasCityPageParam){
        navigate(`/${city}/balloon-decoration/${item.catValue}`, { state: { subCategory: item.subCategory , imgAlt:item.imgAlt } });
      }
      else{
      navigate(`/balloon-decoration/${item.catValue}`, { state: { subCategory: item.subCategory , imgAlt:item.imgAlt } });
      }
    };
    useEffect(() => {
        decCat.forEach((item) => {
            getCatData(item.subCategory); // Fetch catalogue data for each subcategory
        });
    }, []);

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
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", margin: "20px auto 0", width: "70%" , justifyContent:"space-between"}} className="decContainerSec decPage">
                {decCat.map((item, index) => (
                    <div key={index} className="imageContainer">
                        <img src={item.image} className="decCatimage" alt={item.name}  onClick={() => openCatItems(item)}/>
                    </div>
                ))} 
            {/* <div>
            {decCat.map((item, index) => (
            <url>
            <loc>{`https://horaservices.com/balloon-decoration/${item.catValue}`}</loc>
            <priority>1.00</priority>
            </url>
            ))} 
            </div> */}
            </div>
        </div>
    );
}


export default Decoration;
