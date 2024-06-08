// import React, { useState, useEffect } from "react";
// import { useParams, useLocation, useNavigate } from "react-router-dom";
// import { Modal, Button, Container, Row, Col, Spinner } from 'react-bootstrap';
// import { BASE_URL, GET_DECORATION_CAT_ID, GET_DECORATION_CAT_ITEM, API_SUCCESS_CODE } from '../utills/apiconstants';
// import axios from 'axios';

// function DecorationCatPage() {
//   const location = useLocation();
//   let { city } = useParams();
//   const [orderType, setOrderType] = useState(1);
//   const hasCityPageParam = city ? true : false;
//   const item = location.state?.item;
//   const { subCategory, imgAlt } = location.state;
//   const { catValue } = useParams();
//   const [selCat, setSelCat] = useState("");
//   const [catId, setCatId] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [catalogueData, setCatalogueData] = useState([]);
//   const [hoveredIndex, setHoveredIndex] = useState(null); // State to track hovered container index
//   const navigate = useNavigate();
//   const [priceFilter, setPriceFilter] = useState("all"); // Default: Show all
//   const [themeFilter, setThemeFilter] = useState("all"); // Default: Show all

//   const themeFilters = [
//     { label: 'All Design', value: 'all' },
//     { label: 'Astronaut space theme', value: 'Astronaut-space' },
//     { label: 'Avengers theme', value: 'Avengers' },
//     { label: 'Boss baby theme', value: 'Boss' },
//     { label: 'Baby shark theme', value: 'shark' },
//     { label: 'Barbie theme', value: 'Barbie' },
//     { label: 'Cocomelon Theme', value: 'Cocomelon' },
//     { label: 'Car Theme', value: 'car' },
//     { label: 'Circus Theme', value: 'Circus' },
//     { label: 'Dinosuar Theme', value: 'Dinosuar' },
//     { label: 'Jungle Theme', value: 'Jungle' },
//     { label: 'Kitty Theme', value: 'Kitty' },
//     { label: 'Lion King', value: 'Lion' },
//     { label: 'Mickey Mouse Theme', value: 'Mickey-Mouse' },
//     { label: 'Mickey and Minnie Theme', value: 'Mickey-Minnie' },
//     { label: 'Minecraft Theme', value: 'Minecraft' },
//     { label: 'Mermaid Theme', value: 'Mermaid' },
//     { label: 'Pokemon and Pikachu theme', value: 'Pikachu-Pokemon' },
//     { label: 'Princess Theme', value: 'Princess' },
//     { label: 'Panda Theme', value: 'Panda' },
//     { label: 'Traffic Theme', value: 'Traffic' },
//     { label: 'Super dogs theme', value: 'dogs' },
//     { label: 'Unicorn Theme', value: 'Unicorn' },
//   ];

//   // Function to generate a random number between min and max (inclusive)
//   const getRandomNumber = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   };

//   // Function to generate a random rating between 4.1 to 4.8
//   const getRandomRating = () => {
//     return (Math.random() * (4.8 - 4.1) + 4.1).toFixed(1);
//   };

//   useEffect(() => {
//     addSpaces(subCategory);
//     getSubCatId(subCategory); // Fetch category ID based on the selected subcategory
//     window.addEventListener('scroll', handleScroll); // Add scroll event listener

//     return () => {
//       window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
//     };
//   }, [subCategory]);

//   const handleScroll = () => {
//     const filterElement = document.querySelector('.filterdropdown');
//     if (filterElement) {
//       if (window.scrollY > 50) {
//         filterElement.classList.add('sticky');
//       } else {
//         filterElement.classList.remove('sticky');
//       }
//     }
//   };

//   const filteredData = catalogueData.filter(item => {
//     let priceCondition = true;
//     let themeCondition = true;

//     // Filter by price
//     if (priceFilter === "under2000") {
//       priceCondition = item.price < 2000;
//     } else if (priceFilter === "2000to5000") {
//       priceCondition = item.price >= 2000 && item.price <= 5000;
//     } else if (priceFilter === "above5000") {
//       priceCondition = item.price > 5000;
//     }

//     // Filter by theme
//     if (themeFilter !== "all") {
//       const formattedThemeFilter = themeFilter.toLowerCase().split('-')[0];
//       const formattedItemName = item.name.toLowerCase().split('-')[0];
//       themeCondition = formattedItemName.includes(formattedThemeFilter);
//     }

//     // Return true if either price or theme condition is met
//     return priceCondition && themeCondition;
//   });

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

//   const getSubCatId = async (subCategory) => {
//     try {
//       const response = await axios.get(BASE_URL + GET_DECORATION_CAT_ID + subCategory);
//       const categoryId = response.data.data._id;
//       setCatId(categoryId);
//     } catch (error) {
//       console.log("Error:", error.message);
//     }
//   };

//   const getSubCatItems = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get(BASE_URL + GET_DECORATION_CAT_ITEM + catId);
//       if (response.status === API_SUCCESS_CODE) {
//         setCatalogueData(response.data.data);
//       }
//     } catch (error) {
//       console.log('Error Fetching Data:', error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleViewDetails = (subCategory, catValue, product) => {
//     const productName = product.name.replace(/ /g, "-");
//     if (hasCityPageParam) {
//       navigate(`/citypage/${city}/decoration/product/${catValue}/${productName}`, { state: { subCategory, product, orderType } });
//     }
//     else {
//       navigate(`/decoration/product/${catValue}/${productName}`, { state: { subCategory, product, orderType } });
//     }
//   };

//   useEffect(() => {
//     if (catId) {
//       getSubCatItems();
//     }
//   }, [catId]);

//   return (
//     <div style={{ backgroundColor: "#EDEDED" }} className="decCatPage">
//       {loading && (
//         <div className="d-flex justify-content-center align-items-center">
//           <Spinner animation="border" className="custom-spinner" />
//         </div>
//       )}
//       {!loading && (
//         <>
//           <div style={{ textAlign: "center", justifyContent: "center", alignItems: "center" }}>
//             <div style={{ marginTop: "0px" }}>
//               <h1 style={{ fontSize: "16px", color: "#000", padding: "14px 0 0" }}>{selCat} </h1>
//               <p style={{ padding: "0px 0px 16px", margin: "0px" }}>Balloon Decoration and Room Decoration Services for Anniversary, Birthdays, Kids Parties, Baby Showers and more!</p>
//               {selCat === 'Kids Birthday' ?
//                 <div style={{ marginBottom: "15px" }} className="filterdropdown">
//                   <select value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)}
//                     style={{ fontSize: "16px", color: 'rgb(157, 74, 147)', padding: "7px 10px", borderWidth: 1, borderColor: "rgb(157, 74, 147)", borderRadius: "5px", marginRight: "5px" }}
//                   >
//                     <option value="all">All Price</option>
//                     <option value="under2000">Under ₹ 2000</option>
//                     <option value="2000to5000">₹ 2000 - ₹ 5000</option>
//                     <option value="above5000">Above ₹ 5000</option>
//                   </select>
//                   {/* Theme filter */}
//                   <select value={themeFilter} onChange={(e) => setThemeFilter(e.target.value)}
//                     style={{ fontSize: "16px", color: 'rgb(157, 74, 147)', padding: "7px 10px", borderWidth: 1, borderColor: "rgb(157, 74, 147)", borderRadius: "5px", marginLeft: "5px" }}>
//                     {themeFilters.map((filter) => (
//                       <option key={filter.value} value={filter.value}>{filter.label}</option>
//                     ))}
//                   </select>
//                 </div>
//                 : null
//               }
//             </div>
//           </div>
//           <div style={styles.decContainer} className="decContainer">
//             {selCat === 'Kids Birthday' ? (
//               filteredData.length > 0 ? (
//                 filteredData.map((item, index) => (
//                   <div
//                     key={item._id}
//                     style={{
//                       ...styles.imageContainer,
//                       cursor: "pointer",
//                       ...(hoveredIndex === index && styles.zoomedContainer) // Apply zoom effect when hovered
//                     }}
//                     onMouseEnter={() => setHoveredIndex(index)}
//                     onMouseLeave={() => setHoveredIndex(null)}
//                     onClick={() => handleViewDetails(subCategory, catValue, item)}
//                     className="decimagecontainer"
//                   >
//                     <div style={{ position: "relative" }}>
//                       <img src={`https://horaservices.com/api/uploads/${item.featured_image}`} alt={imgAlt} style={styles.decCatimage} />
//                       {/* Watermark */}
//                       <div style={{ position: "absolute", bottom: 20, right: 20, borderRadius: "50%", padding: 10 }}>
//                         <span style={{ color: "rgba(157, 74, 147, 0.6)", fontWeight: "600" }}>Hora</span>
//                       </div>
//                     </div>
//                     {/* End of Watermark */}
//                     <p
//                       style={{
//                         marginHorizontal: 3,
//                         textAlign: 'left',
//                         fontWeight: '700',
//                         fontSize: "16px",
//                         marginTop: "4px",
//                         color: '#9252AA',
//                         // color: "#000",
//                         minHeight: "30px",
//                         marginBottom: "0px",
//                         textAlign: "left",
//                         padding: "0 15px 0 15px",
//                         padding: "0 0 0 10px",
//                       }}
//                     >
//                       {item.name}
//                     </p>
//                     <div>
//                       <div style={{ flexDirection: 'row', alignItems: 'left', paddingTop: 2, paddingLeft: 4, paddingRight: 10, justifyContent: 'space-between' }}>
//                         <p style={{
//                           color: '#9252AA',
//                           fontWeight: '500',
//                           fontSize: 17,
//                           textAlign: "left",
//                           margin: "0px",
//                           padding: "0 0 0 10px",
//                         }}> ₹ {item.price}</p>
//                       </div>
//                       <div className="d-flex justify-content-between">
//                         <p className="m-0 p-0" style={{ color: '#9252AA', fontWeight: '500', fontSize: 17, margin: "0px", padding: "0 0 0 10px" }}>Rating: {getRandomRating()}</p>
//                         <p className="m-0 p-0" style={{ color: '#9252AA', fontWeight: '500', fontSize: 17, margin: "0px", padding: "0 0 0 10px" }}>Users: {getRandomNumber(20, 500)}</p>
//                       </div>
//                     </div>

//                   </div>
//                 ))
//               ) : (
//                 <div style={{ textAlign: "center", width: "100%", padding: "20px 0" }}>
//                   <span>Reach out to our support team for this</span>
//                   <span style={{ marginLeft: "10px" }}>
//                     <a class="conactus" href="https://wa.me/+918982321487/?text=Hi%2CI%20saw%20your%20website%20and%20want%20to%20know%20more%20about%20the%20services" target="_blank">Click here</a>
//                   </span>
//                 </div>
//               )
//             ) : (
//               catalogueData.length > 0 ? (
//                 catalogueData.map((item, index) => (
//                   <div
//                     key={item._id}
//                     style={{
//                       ...styles.imageContainer,
//                       cursor: "pointer",
//                       ...(hoveredIndex === index && styles.zoomedContainer) // Apply zoom effect when hovered
//                     }}
//                     onMouseEnter={() => setHoveredIndex(index)}
//                     onMouseLeave={() => setHoveredIndex(null)}
//                     onClick={() => handleViewDetails(subCategory, catValue, item)}
//                     className="decimagecontainer"
//                   >
//                     <div style={{ position: "relative" }}>
//                       <img src={`https://horaservices.com/api/uploads/${item.featured_image}`} alt={imgAlt} style={styles.decCatimage} />
//                       {/* Watermark */}
//                       <div style={{ position: "absolute", bottom: 20, right: 20, borderRadius: "50%", padding: 10 }}>
//                         <span style={{ color: "rgba(157, 74, 147, 0.6)", fontWeight: "600" }}>Hora Services</span>
//                       </div>
//                     </div>
//                     <p
//                       style={{
//                         marginHorizontal: 3,
//                         textAlign: 'left',
//                         fontWeight: '700',
//                         fontSize: "16px",
//                         marginTop: "4px",
//                         color: '#9252AA',
//                         // color: "#000",
//                         minHeight: "30px",
//                         marginBottom: "0px",
//                         padding: "0 0 0 10px",
//                       }}
//                     >
//                       {item.name}
//                     </p>
//                     <div>
//                       <div style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 2, paddingLeft: 4, paddingRight: 10, justifyContent: 'space-between' }}>
//                         <p style={{
//                           color: '#9252AA',
//                           fontWeight: '500',
//                           fontSize: 17,
//                           textAlign: "left",
//                           margin: "0px",
//                           padding: "0 0 0 10px",
//                         }}> ₹ {item.price}</p>
//                       </div>
//                       <div className="d-flex justify-content-between">
//                         <p className="m-0 p-0" style={{ color: '#9252AA', fontWeight: '500', fontSize: 17, margin: "0px", padding: "0 0 0 10px" }}>Rating: {getRandomRating()}</p>
//                         <p className="m-0 p-0" style={{ color: '#9252AA', fontWeight: '500', fontSize: 17, margin: "0px", padding: "0 0 0 10px" }}>Users: {getRandomNumber(20, 500)}</p>
//                       </div>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <div style={{ textAlign: "center", width: "100%", padding: "20px 0" }}>
//                   <span>Reach out to our support team for this selection</span>
//                   <span style={{ marginLeft: "10px" }}>
//                     <a class="conactus" href="https://wa.me/+918982321487/?text=Hi%2CI%20saw%20your%20website%20and%20want%20to%20know%20more%20about%20the%20services" target="_blank">Click here</a>
//                   </span>
//                 </div>
//               )
//             )}
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// const styles = {
//   decContainer: {
//     flexDirection: 'row',
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     display: "inline-flex",
//     flexWrap: "wrap",
//   },
//   decCatimage: {
//     width: "100%",
//     height: "300px",
//     borderRadius: "5px",
//     objectFit: "cover",
//   },
//   imageContainer: {
//     position: "relative",
//     width: '21.6%',
//     backgroundColor: "#fff",
//     marginBottom: 40,
//     boxShadow: "0 6px 16px 0 rgba(0,0,0,.14)",
//     borderRadius: "5px",
//     overflow: "hidden", // Ensure the image stays within the container
//     transition: "transform 0.3s ease-in-out", // Smooth transition effect for zoom
//     margin: "10px 20px 20px",
//     padding: "6px 5px 10px",
//   },
//   zoomedContainer: {
//     transform: "scale(1.1)", // Scale the container by 10% on hover
//   },
//   itemName: {
//     textAlign: "center",
//     fontSize: "16px",
//     fontWeight: "500",
//     color: "#444",
//     padding: "10px",
//   },
//   priceContainer: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   price: {
//     fontSize: "17px",
//     fontWeight: "500",
//     color: "#444",
//     margin: "0",
//   },
// };

// export default DecorationCatPage;

import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Modal, Button, Container, Row, Col, Spinner } from 'react-bootstrap';
import { BASE_URL, GET_DECORATION_CAT_ID, GET_DECORATION_CAT_ITEM, API_SUCCESS_CODE } from '../utills/apiconstants';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons"

function DecorationCatPage() {
  const location = useLocation();
  let { city } = useParams();
  const [orderType, setOrderType] = useState(1);
  const hasCityPageParam = city ? true : false;
  const item = location.state?.item;
  const { subCategory, imgAlt } = location.state;
  const { catValue } = useParams();
  const [selCat, setSelCat] = useState("");
  const [catId, setCatId] = useState("");
  const [loading, setLoading] = useState(true);
  const [catalogueData, setCatalogueData] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null); // State to track hovered container index
  const navigate = useNavigate();
  const [priceFilter, setPriceFilter] = useState("all"); // Default: Show all
  const [themeFilter, setThemeFilter] = useState("all"); // Default: Show all

  const themeFilters = [
    { label: 'All Design', value: 'all' },
    { label: 'Astronaut space theme', value: 'Astronaut-space' },
    { label: 'Avengers theme', value: 'Avengers' },
    { label: 'Boss baby theme', value: 'Boss' },
    { label: 'Baby shark theme', value: 'shark' },
    { label: 'Barbie theme', value: 'Barbie' },
    { label: 'Cocomelon Theme', value: 'Cocomelon' },
    { label: 'Car Theme', value: 'car' },
    { label: 'Circus Theme', value: 'Circus' },
    { label: 'Dinosuar Theme', value: 'Dinosuar' },
    { label: 'Jungle Theme', value: 'Jungle' },
    { label: 'Kitty Theme', value: 'Kitty' },
    { label: 'Lion King', value: 'Lion' },
    { label: 'Mickey Mouse Theme', value: 'Mickey-Mouse' },
    { label: 'Mickey and Minnie Theme', value: 'Mickey-Minnie' },
    { label: 'Minecraft Theme', value: 'Minecraft' },
    { label: 'Mermaid Theme', value: 'Mermaid' },
    { label: 'Pokemon and Pikachu theme', value: 'Pikachu-Pokemon' },
    { label: 'Princess Theme', value: 'Princess' },
    { label: 'Panda Theme', value: 'Panda' },
    { label: 'Traffic Theme', value: 'Traffic' },
    { label: 'Super dogs theme', value: 'dogs' },
    { label: 'Unicorn Theme', value: 'Unicorn' },
  ];

  // Function to generate a random number between min and max (inclusive)
  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // Function to generate a random rating between 4.1 to 4.8
  const getRandomRating = () => {
    return (Math.random() * (4.8 - 4.1) + 4.1).toFixed(1);
  };

  useEffect(() => {
    addSpaces(subCategory);
    getSubCatId(subCategory); // Fetch category ID based on the selected subcategory
    window.addEventListener('scroll', handleScroll); // Add scroll event listener

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
    };
  }, [subCategory]);

  const handleScroll = () => {
    const filterElement = document.querySelector('.filterdropdown');
    if (filterElement) {
      if (window.scrollY > 50) {
        filterElement.classList.add('sticky');
      } else {
        filterElement.classList.remove('sticky');
      }
    }
  };

  const filteredData = catalogueData.filter(item => {
    let priceCondition = true;
    let themeCondition = true;

    // Filter by price
    if (priceFilter === "under2000") {
      priceCondition = item.price < 2000;
    } else if (priceFilter === "2000to5000") {
      priceCondition = item.price >= 2000 && item.price <= 5000;
    } else if (priceFilter === "above5000") {
      priceCondition = item.price > 5000;
    }

    // Filter by theme
    if (themeFilter !== "all") {
      const formattedThemeFilter = themeFilter.toLowerCase().split('-')[0];
      const formattedItemName = item.name.toLowerCase().split('-')[0];
      themeCondition = formattedItemName.includes(formattedThemeFilter);
    }

    // Return true if either price or theme condition is met
    return priceCondition && themeCondition;
  });

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

  const getSubCatId = async (subCategory) => {
    try {
      const response = await axios.get(BASE_URL + GET_DECORATION_CAT_ID + subCategory);
      const categoryId = response.data.data._id;
      setCatId(categoryId);
    } catch (error) {
      console.log("Error:", error.message);
    }
  };

  const getSubCatItems = async () => {
    try {
      setLoading(true);
      const response = await axios.get(BASE_URL + GET_DECORATION_CAT_ITEM + catId);
      if (response.status === API_SUCCESS_CODE) {
        const decoratedData = response.data.data.map(item => ({
          ...item,
          rating: getRandomRating(),
          userCount: getRandomNumber(20, 500)
        }));
        setCatalogueData(decoratedData);
      }
    } catch (error) {
      console.log('Error Fetching Data:', error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleViewDetails = (subCategory, catValue, product) => {
    const productName = product.name.replace(/ /g, "-");
    if (hasCityPageParam) {
      navigate(`/citypage/${city}/decoration/product/${catValue}/${productName}`, { state: { subCategory, product, orderType } });
    }
    else {
      navigate(`/decoration/product/${catValue}/${productName}`, { state: { subCategory, product, orderType } });
    }
  };

  useEffect(() => {
    if (catId) {
      getSubCatItems();
    }
  }, [catId]);

  return (
    <div style={{ backgroundColor: "#EDEDED" }} className="decCatPage">
      {loading && (
        <div className="d-flex justify-content-center align-items-center">
          <Spinner animation="border" className="custom-spinner" />
        </div>
      )}
      {!loading && (
        <>
          <div style={{ textAlign: "center", justifyContent: "center", alignItems: "center" }}>
            <div style={{ marginTop: "0px" }}>
              <h1 style={{ fontSize: "16px", color: "#000", padding: "14px 0 0" }}>{selCat} </h1>
              <p style={{ padding: "0px 0px 16px", margin: "0px" }}>Balloon Decoration and Room Decoration Services for Anniversary, Birthdays, Kids Parties, Baby Showers and more!</p>
              {selCat === 'Kids Birthday' ?
                <div style={{ marginBottom: "15px" }} className="filterdropdown">
                  <select value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)}
                    style={{ fontSize: "16px", color: 'rgb(157, 74, 147)', padding: "7px 10px", borderWidth: 1, borderColor: "rgb(157, 74, 147)", borderRadius: "5px", marginRight: "5px" }}
                  >
                    <option value="all">All Price</option>
                    <option value="under2000">Under ₹ 2000</option>
                    <option value="2000to5000">₹ 2000 - ₹ 5000</option>
                    <option value="above5000">Above ₹ 5000</option>
                  </select>
                  {/* Theme filter */}
                  <select value={themeFilter} onChange={(e) => setThemeFilter(e.target.value)}
                    style={{ fontSize: "16px", color: 'rgb(157, 74, 147)', padding: "7px 10px", borderWidth: 1, borderColor: "rgb(157, 74, 147)", borderRadius: "5px", marginLeft: "5px" }}>
                    {themeFilters.map((filter) => (
                      <option key={filter.value} value={filter.value}>{filter.label}</option>
                    ))}
                  </select>
                </div>
                : null
              }
            </div>
          </div>
          <div style={styles.decContainer} className="decContainer">
            {selCat === 'Kids Birthday' ? (
              filteredData.length > 0 ? (
                filteredData.map((item, index) => (
                  <div
                    key={item._id}
                    style={{
                      ...styles.imageContainer,
                      cursor: "pointer",
                      ...(hoveredIndex === index && styles.zoomedContainer) // Apply zoom effect when hovered
                    }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => handleViewDetails(subCategory, catValue, item)}
                    className="decimagecontainer"
                  >
                    <div style={{ position: "relative" }}>
                      <img src={`https://horaservices.com/api/uploads/${item.featured_image}`} alt={imgAlt} style={styles.decCatimage} />
                      {/* Watermark */}
                      <div style={{ position: "absolute", bottom: 20, right: 20, borderRadius: "50%", padding: 10 }}>
                        <span style={{ color: "rgba(157, 74, 147, 0.6)", fontWeight: "600" }}>Hora</span>
                      </div>
                    </div>
                    {/* End of Watermark */}
                    <p
                      style={{
                        marginHorizontal: 3,
                        textAlign: 'left',
                        fontWeight: '700',
                        fontSize: "16px",
                        marginTop: "4px",
                        color: '#9252AA',
                        // color: "#000",
                        minHeight: "30px",
                        marginBottom: "0px",
                        textAlign: "left",
                        padding: "0 15px 0 15px",
                        padding: "0 0 0 10px",
                      }}
                    >
                      {item.name}
                    </p>
                    <div>
                      <div style={{ flexDirection: 'row', alignItems: 'left', paddingTop: 2, paddingLeft: 4, paddingRight: 10, justifyContent: 'space-between' }}>
                        <p style={{
                          color: '#9252AA',
                          fontWeight: '500',
                          fontSize: 17,
                          textAlign: "left",
                          margin: "0px",
                          padding: "0 0 0 10px",
                        }}> ₹ {item.price}</p>
                      </div>
                      <div className="d-flex align-items-center mt-1">
                        <p className="m-0 p-0 px-3" style={{ fontWeight: '500', fontSize: 17, margin: "0px", }}>{item.rating}<span className='px-1 m-0 py-0 img-fluid' style={{color:'#FFBF00'}}><FontAwesomeIcon style={{margin:0}} icon={faStar} /></span></p>
                        <p className="m-0 p-0" style={{ color: '#9252AA', fontWeight: '500', fontSize: 17, margin: "0px", padding: "0 0 0 10px" }}>Users: {item.userCount}</p>
                      </div>
                    </div>

                  </div>
                ))
              ) : (
                <div style={{ textAlign: "center", width: "100%", padding: "20px 0" }}>
                  <span>Reach out to our support team for this</span>
                  <span style={{ marginLeft: "10px" }}>
                    <a class="conactus" href="https://wa.me/+918982321487/?text=Hi%2CI%20saw%20your%20website%20and%20want%20to%20know%20more%20about%20the%20services" target="_blank">Click here</a>
                  </span>
                </div>
              )
            ) : (
              catalogueData.length > 0 ? (
                catalogueData.map((item, index) => (
                  <div
                    key={item._id}
                    style={{
                      ...styles.imageContainer,
                      cursor: "pointer",
                      ...(hoveredIndex === index && styles.zoomedContainer) // Apply zoom effect when hovered
                    }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => handleViewDetails(subCategory, catValue, item)}
                    className="decimagecontainer"
                  >
                    <div style={{ position: "relative" }}>
                      <img src={`https://horaservices.com/api/uploads/${item.featured_image}`} alt={imgAlt} style={styles.decCatimage} />
                      {/* Watermark */}
                      <div style={{ position: "absolute", bottom: 20, right: 20, borderRadius: "50%", padding: 10 }}>
                        <span style={{ color: "rgba(157, 74, 147, 0.6)", fontWeight: "600" }}>Hora Services</span>
                      </div>
                    </div>
                    <p
                      style={{
                        marginHorizontal: 3,
                        textAlign: 'left',
                        fontWeight: '700',
                        fontSize: "16px",
                        marginTop: "4px",
                        color: '#9252AA',
                        // color: "#000",
                        minHeight: "30px",
                        marginBottom: "0px",
                        padding: "0 0 0 10px",
                      }}
                    >
                      {item.name}
                    </p>
                    <div>
                      <div style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 2, paddingLeft: 4, paddingRight: 10, justifyContent: 'space-between' }}>
                        <p style={{
                          color: '#9252AA',
                          fontWeight: '500',
                          fontSize: 17,
                          textAlign: "left",
                          margin: "0px",
                          padding: "0 0 0 10px",
                        }}> ₹ {item.price}</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mt-1">
                        <p className="m-0 p-0 px-3" style={{ fontWeight: '500', fontSize: 17, margin: "0px", }}>{item.rating}<span className='px-1 m-0 py-0 img-fluid' style={{color:'#FFBF00'}}><FontAwesomeIcon style={{margin:0}} icon={faStar} /></span></p>
                        <p className="m-0 p-0" style={{ color: '#9252AA', fontWeight: '500', fontSize: 17, margin: "0px" }}>{item.userCount} Users</p>
                      </div>
                  </div>
                ))
              ) : (
                <div style={{ textAlign: "center", width: "100%", padding: "20px 0" }}>
                  <span>Reach out to our support team for this selection</span>
                  <span style={{ marginLeft: "10px" }}>
                    <a class="conactus" href="https://wa.me/+918982321487/?text=Hi%2CI%20saw%20your%20website%20and%20want%20to%20know%20more%20about%20the%20services" target="_blank">Click here</a>
                  </span>
                </div>
              )
            )}
          </div>
        </>
      )}
    </div>
  );
}

const styles = {
  decContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    // alignItems: 'center',
    display: "inline-flex",
    flexWrap: "wrap",
  },
  decCatimage: {
    width: "100%",
    height: "300px",
    borderRadius: "5px",
    objectFit: "cover",
  },
  imageContainer: {
    position: "relative",
    width: '21.6%',
    backgroundColor: "#fff",
    marginBottom: 40,
    boxShadow: "0 6px 16px 0 rgba(0,0,0,.14)",
    borderRadius: "5px",
    overflow: "hidden", // Ensure the image stays within the container
    transition: "transform 0.3s ease-in-out", // Smooth transition effect for zoom
    margin: "10px 20px 20px",
    padding: "6px 5px 10px",
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

export default DecorationCatPage;