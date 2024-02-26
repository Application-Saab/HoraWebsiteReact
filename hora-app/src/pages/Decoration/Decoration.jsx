import React  , {useState } from "react";


function Home(){

    const tabs = [
        { label: 'Tab 1', component: <Component1 /> },
        { label: 'Tab 2', component: <Component2 /> },
        { label: 'Tab 3', component: <Component3 /> }
      ]; // Define your tabs here
      const defaultTab = tabs[0].label;
    const [decCat, setDecCat] = useState([
        { id: '1', image: require('../../assets/Birthday_dec_cat.jpg'), name: 'Birthday', category: "decoration" , subCategory:"Birthday"},
        { id: '2', image: require('../../assets/first_night_cat_dec.jpg'), name: 'First Night', category: "decoration", subCategory:"FirstNight" },
        { id: '3', image: require('../../assets/aniversary_Cat_Dec.jpg'), name: 'Anniversary', category: "decoration" , subCategory:"Anniversary"},
        { id: '4', image: require('../../assets/kids_birthday_decoration.jpg'), name: 'Kids Birthday', category: "decoration" , subCategory:"KidsBirthday"},
        { id: '5', image: require('../../assets/baby-shower-dec-cat.jpg'), name: 'Baby Shower', category: "decoration" , subCategory:"BabyShower" },
        { id: '6', image: require('../../assets/welcome_baby_dec.jpg'), name: 'Welcome Baby', category: "decoration"  , subCategory:"WelcomeBaby"},
        { id: '7', image: require('../../assets/preminumdecor.jpg'), name: 'premium Decoration', category: "decoration" , subCategory:"PremiumDecoration" },
        { id: '8', image: require('../../assets/Balloon-B.jpeg'), name: 'Ballon Bouquets', category: "decoration"  , subCategory:"BallonBouquets"},
         { id: '12', image: require('../../assets/Balloon-B.jpeg'), name: 'Gift', category: "gift" }
      ]);
      
    
    return(
     <div>
        <h1>Decoration</h1>
     </div>
    )
}

export default Home;