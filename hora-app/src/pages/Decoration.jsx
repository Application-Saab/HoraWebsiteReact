import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import BirthdayImage from '../assets/Birthday_dec_cat.jpg';
import FirstnightImage from '../assets/first_night_cat_dec.jpg'
import AnniversaryImage from '../assets/aniversary_Cat_Dec.jpg'
import KidsbirthdayImage from '../assets/kids_birthday_decoration.jpg'
import BabyShowerImage from '../assets/baby-shower-dec-cat.jpg'
import WelcomebabyImage from '../assets/welcome_baby_dec.jpg'
import PremiumImage from '../assets/preminumdecor.jpg'
import CarbootImage from '../assets/car_boot.jpg'
import BallonBImage from '../assets/Balloon-B.jpeg'
import BachelorPartyImage from '../assets/bechelor_party.jpg'
import CandlelightdinnerImage from '../assets/candlelightdinner.jpg'
import PartySupplyImage from '../assets/Party_Supply.jpg'
import EntertainerImage from '../assets/entertainer.jpg'
import allpartyImage from '../assets/allpartydecoration.jpg'

function Decoration() {
    const navigate = useNavigate(); // Initialize the navigate function
    const [decCat, setDecCat] = useState([
        { id: '1', image: allpartyImage, name: 'Party Decoration', subCategory: "Birthday" },
        { id: '2', image: BirthdayImage, name: 'Birthday', subCategory: "Birthday" },
        { id: '3', image: FirstnightImage, name: 'First Night', subCategory: "FirstNight" },
        { id: '4', image: AnniversaryImage, name: 'Anniversary', subCategory: "Anniversary" },
        { id: '5', image: KidsbirthdayImage, name: 'Kids Birthday', subCategory: "KidsBirthday" },
        { id: '6', image: BabyShowerImage, name: 'Baby Shower', subCategory: "BabyShower" },
        { id: '7', image: WelcomebabyImage, name: 'Welcome Baby', subCategory: "WelcomeBaby" },
        { id: '8', image: PremiumImage, name: 'premium Decoration', subCategory: "PremiumDecoration" },
        { id: '9', image: BallonBImage, name: 'Ballon Bouquets', subCategory: "BallonBouquets" },
        { id: '10', image: CarbootImage, name: 'Car Boot', subCategory: "CarBoot" },
        { id: '11', image: BachelorPartyImage, name: 'Bachelor Party', subCategory: "BachelorParty" },
        { id: '12', image: CandlelightdinnerImage, name: 'Candlelight Dinner', subCategory: "CandlelightDinner" },
        { id: '13', image: PartySupplyImage, name: 'Party Supply', subCategory: "PartySupply" },
        { id: '14', image: EntertainerImage, name: 'Entertainer', subCategory: "Entertainer" },
    ]);

    const openCatItems = (subCategory) => {
        navigate(`/decoration-cat-page/${subCategory}`); // Navigate to the decoration category page with the subcategory
    };

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", alignItems: "center", margin: "0 auto", width: "1100px" }}>
                <h1>Decorations</h1>
            </div>
            <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", margin: "0 auto", width: "1100px", flexWrap: "wrap" }}>
                {
                    decCat.map((item, index) => (
                        <div key={index} style={{ marginBottom: "10px", width: "19%" }} onClick={() => openCatItems(item.subCategory)}>
                            <img src={item.image} style={{ borderRadius: "5px", boxShadow: "0 1px 1px rgba(0,0,0,.3)", cursor: "pointer", width: "100%", height: "130px" }} alt={item.name} />
                            {/* <div style={{fontSize:"14px"  , marginBottom:"10px" , marginTop:"6px" , fontWeight:"600" , color:"#da584a" , cursor:"pointer"}}>{item.name}</div> */}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Decoration;
