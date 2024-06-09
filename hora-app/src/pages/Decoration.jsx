import React, { useState, useEffect } from "react";
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
import BachelorPartyImage from '../assets/bechelor_party.jpg'
import CandlelightdinnerImage from '../assets/candlelightdinner.jpg'
import PartySupplyImage from '../assets/Party_Supply.jpg'
import EntertainerImage from '../assets/entertainer.jpg'

function Decoration() {
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
        { id: '5', image: KidsbirthdayImage, name: 'Kids Birthday', subCategory: "KidsBirthday" , catValue:"anniversary-decoration" , imgAlt:"Flutter into a world of whimsy with our exclusive Whimsical Flutter-themed Welcome Baby Decorations." },
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
        navigate(`/citypage/${city}/decoration/occasions/${item.catValue}`, { state: { subCategory: item.subCategory , imgAlt:item.imgAlt } });
      }
      else{
      navigate(`/decoration/occasions/${item.catValue}`, { state: { subCategory: item.subCategory , imgAlt:item.imgAlt } });
      }
    };
    useEffect(() => {
        decCat.forEach((item) => {
            getCatData(item.subCategory); // Fetch catalogue data for each subcategory
        });
    }, []);

    return (
        <div>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", margin: "30px auto 0", width: "60%" }} className="decContainerSec decPage">
            <div style={styles.decContainer} className="decContainer gap-4">
                {decCat.map((item, index) => (
                    <div key={index} style={{...styles.imageContainer, ...(hoveredIndex === index ? styles.zoomedContainer : {})}} className="imageContainer">
                        <img src={item.image} style={styles.decCatimage} alt={item.name}  onClick={() => openCatItems(item)}/>
                    </div>
                ))}

            </div>
            </div>
        </div>
    );
    

}

    const styles = {
        decContainer: {
          flexDirection: 'row',
          alignItems: 'center',
          display: "flex",
          flexWrap: "wrap",
          width:"100%",
        },
        decCatimage: {
          width: "100%",
          height: "100%",
          borderRadius: "5px",
          objectFit: "cover",
        },
        imageContainer: {
          position:"relative",
          width: '31%',
          marginBottom: 40,
          boxShadow: "0 6px 16px 0 rgba(0,0,0,.14)",
          borderRadius: "5px",
          overflow: "hidden", // Ensure the image stays within the container
          transition: "transform 0.3s ease-in-out", // Smooth transition effect for zoom
          margin: "0 0px 30px",
          // padding:"0 0 10px 0",
        },
        zoomedContainer: {
          transform: "scale(1.1)", // Scale the container by 10% on hover
        },
        itemName: {
          textAlign: "center",
          fontSize: "16px",
          fontWeight: "500",
          color: "#444",
          padding: "10px",
        },
        priceContainer: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        price: {
          fontSize: "17px",
          fontWeight: "500",
          color: "#444",
          margin: "0",
        },
      };

export default Decoration;
