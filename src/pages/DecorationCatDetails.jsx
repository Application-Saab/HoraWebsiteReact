// import React, {useState, useEffect} from "react";
// import {useParams, useNavigate} from 'react-router-dom';
// import {useSelector} from 'react-redux';
// import {Helmet} from "react-helmet";
// import checkImage from '../assets/tick.jpeg.jpeg';
// import {getDecorationProductOrganizationSchema} from "../utills/schema";
// import '../css/decoration.css';

// function DecorationCatDetails() {
//   const [selCat, setSelCat] = useState("");
//   const [orderType, setOrderType] = useState(1);


//   const navigate = useNavigate();
//   const {subCategory: urlSubCategory, catValue: urlCatValue, productName} = useParams();
//   const formattedProductName = productName.replace(/-/g, ' ');

//   const {
//     subCategory: stateSubCategory,
//     catValue: stateCatValue,
//     product: stateProduct
//   } = useSelector((state) => state.state || {});
//   const subCategory = stateSubCategory || urlSubCategory;
//   const catValue = stateCatValue || urlCatValue;
//   const product = stateProduct || formattedProductName;

//   const schemaOrg = getDecorationProductOrganizationSchema(product);
//   const scriptTag = JSON.stringify(schemaOrg);

 


//   const handleCheckout = (subCategory, product) => {
//     const stateData = {from: window.location.pathname, subCategory, product, orderType, catValue};

//     if (localStorage.getItem("isLoggedIn") !== "true") {
//       navigate('/login', {state: stateData});
//     } else {
//       navigate('/checkout', { state: stateData });
//     }
//   };

//   function addSpaces(subCategory) {
//     let result = "";
//     for (let i = 0; i < subCategory.length; i++) {
//       if (i !== 0 && subCategory[i] === subCategory[i].toUpperCase()) {
//         result += " ";
//       }
//       result += subCategory[i];
//     }
//     setSelCat(result);
//   }

//   useEffect(() => {
//     addSpaces(subCategory);
//   }, [subCategory]);


//   const getItemInclusion = (inclusion) => {
//     const htmlString = inclusion[0];
//     const withoutTags = htmlString.replace(/<[^>]*>/g, ''); // Remove HTML tags
//     const withoutSpecialChars = withoutTags.replace(/&#[^;]*;/g, ' '); // Replace &# sequences with space
//     const statements = withoutSpecialChars.split('<div>');
//     const inclusionItems = statements.flatMap(statement => statement.split("-").filter(item => item.trim() !== ''));
//     const inclusionList = inclusionItems.map((item, index) => (
//       <li key={index} className="inclusionstyle">
//         <img src={checkImage} alt="Info" style={{ height: 13, width: 13 , marginRight:10}} />
//         {item.trim()}
//           </li>
//     ));
//     return (
//       <div>
//         <div style={{ fontSize: "21px", borderBottom: "1px solid #e7eff9", marginBottom: "10px" }}>Inclusions</div>
//         <ul>
//           {inclusionList}
//         </ul>
//       </div>

//     );
//   }
  

//   return (
//       <div className="App" style={{backgroundColor: "#EDEDED"}}>
//         <Helmet>
//           <title>Balloon and Flower Decoration @999</title>
//           <meta name="description"
//                 content="Celebrate Anniversary, Birthday & other Occasions with Candlelight Dinners, Surprises & Balloon Decorations"/>
//           <meta name="keywords" content="Balloon and Flower Decoration @999"/>
//           <meta property="og:title" content="Balloon and Flower Decoration by Professional Decorators"/>
//           <meta property="og:description"
//                 content="Celebrate Anniversary, Birthday & other Occasions with Candlelight Dinners, Surprises & Balloon Decorations"/>
//           <meta property="og:image" content="https://horaservices.com/api/uploads/attachment-1706520980436.png"/>
//           <script type="application/ld+json">{JSON.stringify(getDecorationProductOrganizationSchema(product))}</script>
//           <meta name="robots" content="index, follow"/>
//           <meta name="author" content="Hora Services"/>
//           <meta property="og:url"
//                 content={`https://horaservices.com/balloon-decoration/${catValue}/product/${product.name}`}/>
//           <meta property="og:type" content="website"/>
//         </Helmet>
//         <div style={{maxWidth: '1200px', margin: '0 auto'}}>
//           <div style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "flex-start",
//             paddingTop: "10px",
//             position: "relative"
//           }}
//                className="decDetails">
//             <div style={{width: "50%", textAlign: "center"}} className="decDetailsLeft">
//               <div style={{
//                 width: "80%",
//                 boxShadow: "0 1px 8px rgba(0,0,0,.18)",
//                 padding: "10px",
//                 margin: "0 auto",
//                 position: "relative"
//               }}
//                    className="decDetailsImage">
//                 <img src={`https://horaservices.com/api/uploads/${product.featured_image}`} style={{width: "100%"}}/>
//                 <div style={{position: "absolute", bottom: 20, right: 20, borderRadius: "50%", padding: 10}}>
//                   <span style={{color: "rgba(157, 74, 147, 0.6)", fontWeight: "600"}}>Hora</span>
//                 </div>
//               </div>
//             </div>
//             <div style={{width: "50%", paddingLeft: "20px", paddingRight: "50px"}} className="decDetailsRight">
//               <div style={{
//                 boxShadow: "0 1px 8px rgba(0,0,0,.18)",
//                 padding: "10px",
//                 marginBottom: "12px",
//                 backgroundColor: "#fff"
//               }}>
//                 <h2 style={{fontSize: "12px", color: "#9252AA"}}>{'Home'}{' > '}{subCategory}{' > '}{product.name}</h2>
//                 <h1 style={{color: "#222", fontSize: "21px", fontWeight: "#222"}}>{product.name}</h1>
//                 <p className='mb-2'
//                    style={{fontSize: "18px", color: "#9252AA", fontWeight: "600"}}> ₹ {product.price}</p>
//               </div>

//               <div style={{ boxShadow: "0 1px 8px rgba(0,0,0,.18)", padding: "10px", marginBottom: "12px" , backgroundColor:"#fff"}}>
//                 {getItemInclusion(product.inclusion)}
                 
//                    <button style={styles.Buttonstyle} className="dec-continueButton" 
// onClick={() => handleCheckout(subCategory, product)}>Continue</button>

//               </div>

            
//               <div style={{ boxShadow: "0 1px 8px rgba(0,0,0,.18)", padding: "10px" , backgroundColor:"#fff"}} className="canceltionPolicy">
//                 <p style={{ fontSize: "21px", color: "rgb(34, 34, 34)", borderBottom: "1px solid #e7eff9" }}
//                    className="cancelltionPolicySecHeading">Cancellation and Order Change Policy:</p>
//                 <p className="cancelltionPolicySecSubHeading">- Till the order is not assigned to service provider,
//                   100% of the amount will be refunded, otherwise 50% of advance will be deducted as cancellation
//                   charges to compensate the service provider.</p>
//                 <p className="cancelltionPolicySecSubHeading">- The order cannot be edited after paying advance.
//                   Customer can cancel the order and replace the new order with required changes.</p>
//               </div>
//             </div>
//           </div>
//         </div>

      
//       </div>
//   );
// }

// const styles = {
//   Buttonstyle: {
//     border: "2px solid rgb(157, 74, 147)",
//     backgroundColor: "rgb(157, 74, 147)",
//     color: "#fff",
//     fontSize: "16px",
//     padding: "10px",
//     borderRadius: "5px",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     margin: "23px auto 14px",
//     width: "93%",
//   },
// }
// export default DecorationCatDetails;


import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Helmet } from "react-helmet";
import checkImage from '../assets/tick.jpeg.jpeg';
import {getDecorationProductOrganizationSchema} from "../utills/schema";
import '../css/decoration.css';


// Dummy JSON data with images
const dummyData = [
  {
    "title": "BOARD WITH STAND (SIZE- 2*3)",
    "description": "Elegant and customizable Welcome Sign with a sturdy stand for a professional and inviting.",
    "price": 985,
    "image": "https://lh3.google.com/u/0/d/1wSneGD8oHLB4qKEKi4a5qjtQB3YcagOI=w1366-h679-iv1"
  },
  {
    "title": "CAKE TABKE WITH STAND 1 PCS",
    "description": "Cake Table with Stand for displaying and serving cakes with style and stability.",
    "price": 571,
    "image": "https://lh3.google.com/u/0/d/1sEMUd4nM-h5ZEPqujo6lzXo57DOX0bfV=w1366-h679-iv1"
  },
  {
    "title": "SMALL HALL DECOR (100 Ballons)",
    "description": "Small Hall Decor to add charm and elegance to compact spaces.",
    "price": 385,
    "image": "https://lh3.google.com/u/0/d/1CjSKdT2UgB4XQLmSenC6MxeA047dDoyp=w1366-h679-iv1"
  },
  {
    "title": "SMALL HALL DECOR (200 Ballons)",
    "description": "Charming Small Hall Decor to enhance and personalize compact spaces with style.",
    "price": 700,
    "image": "https://lh3.google.com/u/0/d/1l9pOeb0KiJRLGOEdtlXmQk4ATVyakSZz=w1366-h679-iv1"
  },
  {
    "title": "LARGE ENTRY DECOR ( Arch of 300 Ballons)",
    "description": "Grand Large Entry Decor to make a striking first impression and set the tone for your space.",
    "price": 1700,
    "image": "https://lh3.google.com/u/0/d/1hS3bYrVQl_B7CSAXMO84bgOlurakLb5z=w1366-h679-iv1"
  },
  {
    "title": "CELLING DECOR Embellishments (100 ballons)",
    "description": "Ceiling Decor to add a touch of elegance and creativity to overhead spaces.",
    "price": 385,
    "image": "https://img.freepik.com/premium-photo/room-with-chandelier-table-with-red-hearts-it_1209326-325122.jpg?ga=GA1.1.542245671.1721663898&semt=ais_hybrid"
  },
  {
    "title": "SMALL PILLAR ( 20 Ballons without numbers foil )",
    "description": "Small Pillar for adding a touch of sophistication and structure to any space.",
    "price": 57,
    "image": "https://lh3.google.com/u/0/d/1jXQux8Rwajfz1zLkqnGZck5KwEt08xcv=w1366-h679-iv1"
  },
  {
    "title": "NAME AND PICTURE BANNER (Size- 6*6 )",
    "description": "Personalized Name and Picture Banner to showcase custom designs and memorable.",
    "price": 1211,
    "image": "https://lh3.google.com/u/0/d/1NujSdfxj6EcQW2iao8HCH5dF8Pqxkgl4=w1366-h679-iv1"
  },
  {
    "title": "NEON LIGHT (Small Size)",
    "description": "Neon Light for an electrifying and contemporary glow that transforms any space with dazzling brilliance.",
    "price": 428,
    "image": "https://lh3.google.com/u/0/d/15h_m1ivlc8iSuCYMGPqUxUGApmCDSOCG=w1366-h679-iv1"
  },
  {
    "title": "NEON LIGHT (Large Size)",
    "description": "Neon Light for an electrifying and contemporary glow that transforms any space with dazzling brilliance.",
    "price": 500,
    "image": "https://lh3.google.com/u/0/d/1IOIVXHfUyjIvGWpb9c1MPC803NDqit2E=w1366-h679-iv1"
  },
  {
    "title": "NAME MARQUE ( small Size 8 Inch)(Up to 7 Letter)",
    "description": "Name Marquee for a bold and personalized display of names or messages.",
    "price": 500,
    "image": "https://lh3.google.com/u/0/d/1E8DqOsCLkrSSElgmJ6Dbtp17sULnWIQ_=w1366-h679-iv1"
  },
  {
    "title": "NAME MARQUE ( Large Size 32 Inch) ( Up to 7 Letter)",
    "description": "Name Marquee for a bold and personalized display of names or messages.",
    "price": 4000,
    "image": "https://lh3.google.com/u/0/d/1DoHu1ZciSGYEGNZCauQB7bD-BygWv4Zw=w1366-h679-iv1"
  },
  {
    "title": "NAME MARQUE ( Small Size 8 inch)",
    "description": "Name Marquee for a bold and eye-catching display that highlights names or messages with style.",
    "price": 142,
    "image": "https://lh3.google.com/u/0/d/1v-GIZofTuewNAU0QkFOb4LOrfa5OVEgL=w1366-h679-iv1"
  },
  {
    "title": "NAME MARQUE ( Large Size 32 Inch )",
    "description": "Name Marquee for a bold and eye-catching display that highlights names or messages with style.",
    "price": 571,
    "image": "https://lh3.google.com/u/0/d/1OXNqlGbkOKAX8dIx8k02O0YQBAe2VlBP=w1366-h679-iv1"
  },
  {
    "title": "NAME FOIL BALLON ( Small Size ) ( Up 10 Character )",
    "description": "Name Foil Balloon for a festive and personalized touch to any celebration.",
    "price": 282,
    "image": "https://lh3.google.com/u/0/d/1vSogjumqNaAgk_sQ7rKZIVIfW0EwYqt-=w1366-h679-iv1"
  },
  {
    "title": "BACKDROP STAND WITH WHITE NET CLOTH AND FAIRY LIGHT",
    "description": "Backdrop Stand with White Net Cloth and Fairy Lights for a magical and elegant event setting.",
    "price": 2570,
    "image": "https://lh3.google.com/u/0/d/1dI8dROZ-bPKDw5tYre1Tm1o8Ev4M5bbk=w1366-h679-iv1"
  }
];


function DecorationCatDetails() {
  const [selCat, setSelCat] = useState("");
  const [orderType, setOrderType] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0); // State to track total price
  const [addOnPrice, setAddOnPrice] = useState(0); // State to track add-on price
  const [productPrice, setProductPrice] = useState(0); // State to track product price

  const [addedItems, setAddedItems] = useState(new Map()); // State to track added items and their quantities

  const [showPrices, setShowPrices] = useState(false); // State to control visibility of prices

  const [itemQuantities, setItemQuantities] = useState({}); // State to track quantities of items

  const [expandedDescription, setExpandedDescription] = useState({});

  const [isFirstClick, setIsFirstClick] = useState(true); // Track if it's the first click


  const navigate = useNavigate();
  const { subCategory: urlSubCategory, catValue: urlCatValue, productName } = useParams();
  const formattedProductName = productName.replace(/-/g, ' ');

  const {
    subCategory: stateSubCategory,
    catValue: stateCatValue,
    product: stateProduct
  } = useSelector((state) => state.state || {});
  const subCategory = stateSubCategory || urlSubCategory;
  const catValue = stateCatValue || urlCatValue;
  const product = stateProduct || formattedProductName;

  const schemaOrg = getDecorationProductOrganizationSchema(product);
  const scriptTag = JSON.stringify(schemaOrg);

  const AddingItems = () => {
    setModalData(dummyData);
    setIsModalOpen(true);
    setProductPrice(parseFloat(product.price)); // Ensure productPrice is a number
  };

  const handleCheckout = (subCategory, product) => {
    const stateData = {
        from: window.location.pathname,
        subCategory,
        product,
        orderType,
        catValue,
        productPrice,
        addOnPrice,
        itemQuantities,
        totalPrice,
        addedItems: Array.from(addedItems.entries()), // Convert Map to Array
        modalData // Include modalData if needed
    };

    console.log("Checkout Data:", stateData);

    if (localStorage.getItem("isLoggedIn") !== "true") {
        navigate('/login', { state: stateData });
    } else {
        navigate('/checkout', { state: stateData });
    }
};

  const handleAddToCart = (item) => {
    const currentQuantity = itemQuantities[item.title] || 0;
    const newQuantity = currentQuantity + 1;

    // Update item quantities and added items
    setItemQuantities(prev => ({ ...prev, [item.title]: newQuantity }));
    setAddedItems(prev => {
      const newMap = new Map(prev);
      newMap.set(item.title, newQuantity);
      return newMap;
    });

    // Update add-on price and total price
    setAddOnPrice(prevAddOnPrice => {
      const priceChange = parseFloat(item.price);
      const newAddOnPrice = prevAddOnPrice + priceChange;
      setTotalPrice(productPrice + newAddOnPrice); // Recalculate totalPrice
      return newAddOnPrice;
    });
  };

  const handleRemoveFromCart = (item) => {
    const currentQuantity = itemQuantities[item.title] || 0;
    if (currentQuantity > 0) {
      const newQuantity = currentQuantity - 1;

      // Update item quantities and added items
      setItemQuantities(prev => ({ ...prev, [item.title]: newQuantity }));
      setAddedItems(prev => {
        const newMap = new Map(prev);
        if (newQuantity === 0) {
          newMap.delete(item.title);
        } else {
          newMap.set(item.title, newQuantity);
        }
        return newMap;
      });

      // Update add-on price and total price
      setAddOnPrice(prevAddOnPrice => {
        const priceChange = parseFloat(item.price);
        const newAddOnPrice = prevAddOnPrice - priceChange;
        setTotalPrice(productPrice + newAddOnPrice); // Recalculate totalPrice
        return newAddOnPrice;
      });
    }
  };
  
  
  useEffect(() => {
    setTotalPrice(productPrice + addOnPrice);
  }, [productPrice, addOnPrice]);


  const handleContinue = () => {
    setShowPrices(true); // Show prices when Continue is clicked
    setIsModalOpen(false);
    
    // navigate('/checkout');
    // alert("Continue button click");
  };


  function addSpaces(subCategory) {
    let result = "";
    for (let i = 0; i < subCategory.length; i++) {
      if (i !== 0 && subCategory[i] === subCategory[i].toUpperCase()) {
        result += " ";
      }
      result += subCategory[i];
    }
    setSelCat(result);
  }

  useEffect(() => {
    addSpaces(subCategory);
  }, [subCategory]);

  const getItemInclusion = (inclusion) => {
    const htmlString = inclusion[0];
    const withoutTags = htmlString.replace(/<[^>]*>/g, ''); // Remove HTML tags
    const withoutSpecialChars = withoutTags.replace(/&#[^;]*;/g, ' '); // Replace &# sequences with space
    const statements = withoutTags.split('<div>');
    const inclusionItems = statements.flatMap(statement => statement.split("-").filter(item => item.trim() !== ''));
    const inclusionList = inclusionItems.map((item, index) => (
      <li key={index} className="inclusionstyle">
        <img src={checkImage} alt="Info" style={{ height: 13, width: 13, marginRight: 10 }} />
        {item.trim()}
      </li>
    ));
    return (
      <div>
        <div style={{ fontSize: "21px", borderBottom: "1px solid #e7eff9", marginBottom: "10px" }}>Inclusions</div>
        <ul>
          {inclusionList}
        </ul>
      </div>
    );
  };

  return (
    <div className="App" style={{ backgroundColor: "#EDEDED" }}>
      <Helmet>
        <title>Balloon and Flower Decoration @999</title>
        <meta name="description"
          content="Celebrate Anniversary, Birthday & other Occasions with Candlelight Dinners, Surprises & Balloon Decorations" />
        <meta name="keywords" content="Balloon and Flower Decoration @999" />
        <meta property="og:title" content="Balloon and Flower Decoration by Professional Decorators" />
        <meta property="og:description"
          content="Celebrate Anniversary, Birthday & other Occasions with Candlelight Dinners, Surprises & Balloon Decorations" />
        <meta property="og:image" content="https://horaservices.com/api/uploads/attachment-1706520980436.png" />
        <script type="application/ld+json">{JSON.stringify(getDecorationProductOrganizationSchema(product))}</script>
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Hora Services" />
        <meta property="og:url"
          content={`https://horaservices.com/balloon-decoration/${catValue}/product/${product.name}`} />
        <meta property="og:type" content="website" />
      </Helmet>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          paddingTop: "10px",
          position: "relative"
        }}
          className="decDetails">
          <div style={{ width: "50%", textAlign: "center" }} className="decDetailsLeft">
            <div style={{
              width: "80%",
              boxShadow: "0 1px 8px rgba(0,0,0,.18)",
              padding: "10px",
              margin: "0 auto",
              position: "relative"
            }}
              className="decDetailsImage">
              <img src={`https://horaservices.com/api/uploads/${product.featured_image}`} style={{ width: "100%" }} />
              <div style={{ position: "absolute", bottom: 20, right: 20, borderRadius: "50%", padding: 10 }}>
                <span style={{ color: "rgba(157, 74, 147, 0.6)", fontWeight: "600" }}>Hora</span>
              </div>
            </div>
          </div>
          <div style={{ width: "50%", paddingLeft: "20px", paddingRight: "50px" }} className="decDetailsRight">
            <div style={{
              boxShadow: "0 1px 8px rgba(0,0,0,.18)",
              padding: "10px",
              marginBottom: "12px",
              backgroundColor: "#fff"
            }}>
              <h2 style={{ fontSize: "12px", color: "#9252AA" }}>{'Home'}{' > '}{subCategory}{' > '}{product.name}</h2>
              <h1 style={{ color: "#222", fontSize: "21px", fontWeight: "#222" }}>{product.name}</h1>
              <p className='mb-2'
                style={{ fontSize: "18px", color: "#9252AA", fontWeight: "600" }}> Product Price: ₹ {product.price}</p>

<div style={{ fontSize: "18px", color: "#9252AA", fontWeight: "600"}} >
              {showPrices && (
                <div>
                  <p>Add-On Price: ₹{addOnPrice}</p>
                
                  {modalData.map((item, index) => (
          addedItems.has(item.title) && (
            <p key={index} style={{ fontSize: "14px", color: "#9252AA", fontWeight: "600", marginBottom: "10px" }}>
              {item.title} * {itemQuantities[item.title]} = ₹{(item.price * itemQuantities[item.title])}
            </p>
          )
        ))}
         <p>Total Price: ₹{totalPrice}</p>
                </div>
              )}
            </div>
            </div>
                        <div style={{ boxShadow: "0 1px 8px rgba(0,0,0,.18)", padding: "10px", marginBottom: "12px" , backgroundColor:"#fff"}}>
                 {getItemInclusion(product.inclusion)}
                 
                 <div style={{marginLeft: "100px"}}>
                    <button style={styles.Buttonstyle} className="dec-continueButton" 
                    onClick={() => AddingItems(subCategory, product)}>Add Items</button>

                    <button style={styles.Buttonstyle} className="dec-continueButton" 
                     onClick={() => handleCheckout(subCategory, product)}>Continue</button>

                    </div>
                 </div>

         

                 <div style={{ boxShadow: "0 1px 8px rgba(0,0,0,.18)", padding: "10px" , backgroundColor:"#fff"}} className="canceltionPolicy">
                   <p style={{ fontSize: "21px", color: "rgb(34, 34, 34)", borderBottom: "1px solid #e7eff9" }}
                   className="cancelltionPolicySecHeading">Cancellation and Order Change Policy:</p>
                <p className="cancelltionPolicySecSubHeading">- Till the order is not assigned to service provider,
                  100% of the amount will be refunded, otherwise 50% of advance will be deducted as cancellation
                  charges to compensate the service provider.</p>
                <p className="cancelltionPolicySecSubHeading">- The order cannot be edited after paying advance.
                  Customer can cancel the order and replace the new order with required changes.</p>
              </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
  <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <button className="modal-close" onClick={() => setIsModalOpen(false)}>×</button>
      <div className="modal-top-box">
        <button className="back-button">Back</button>
        <h2>Select Customizations</h2>
      </div>
      <div className="modal-middle-box">
        <div className="modal-card-container">
          {modalData.map((item, index) => (
            <div key={index} className="modal-card">
              <img style={{width: "150px", height: "150px"}} src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              
              <div className="price-container">
                <span className="price">₹ {item.price}</span>
                {addedItems.has(item.title) ? (
                  <div>
                    <button onClick={() => handleRemoveFromCart(item)} className="quantity-button">-</button>
                    <span>{itemQuantities[item.title]}</span>
                    <button onClick={() => handleAddToCart(item)} className="quantity-button">+</button>
                  </div>
                ) : (
                  <button onClick={() => handleAddToCart(item)} className="add-button">Add</button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="modal-bottom-box">
        <p>Total: ₹ {totalPrice.toFixed(2)}</p>
        <button className="book-now-button" onClick={handleContinue}>Book Now</button>
      </div>
    </div>
  </div>
)}


    </div>
  );
}

const styles = {
  Buttonstyle: {
    border: "2px solid rgb(157, 74, 147)",
    backgroundColor: "rgb(157, 74, 147)",
    color: "#fff",
    fontSize: "16px",
    padding: "10px",
    borderRadius: "5px",
    margin: "5px",
    cursor: "pointer"
  }
};

export default DecorationCatDetails;
