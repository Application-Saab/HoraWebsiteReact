import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Modal, Button, Container, Row, Col, Spinner, Card } from 'react-bootstrap';
import { BASE_URL, GET_DECORATION_CAT_ID, GET_DECORATION_CAT_ITEM, API_SUCCESS_CODE } from '../utills/apiconstants';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons"
import Slider from "react-slick";
import { CardSkeleton } from "../component/CardSkeleton";

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
    { label: 'Select Design', value: 'all' },
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
      navigate(`/${city}/balloon-decoration/${catValue}/product/${productName}`, { state: { subCategory, product, orderType } });
    }
    else {
      navigate(`/balloon-decoration/${catValue}/product/${productName}`, { state: { subCategory, product, orderType } });
    }
  };

  useEffect(() => {
    if (catId) {
      getSubCatItems();
    }
  }, [catId]);

  function trimText(text) {
    if (text.length > 60) {
      return text.slice(0, 60) + '...';
    }
    return text;
  }

  return (
    <div style={{ backgroundColor: "#EDEDED" }} className="decCatPage">
      <>
        <div style={{ textAlign: "center", justifyContent: "center", alignItems: "center" }}>
          <div style={{ marginTop: "0px" }}>
            <h1 style={{ fontSize: "16px", color: "#000", padding: "14px 0 0" , color: '#9252AA'}}>{selCat} {'Balloon Decoration'} </h1>
            <p style={{ padding: "0px 0px 16px", margin: "0px" }} className="subheading">{trimText('Balloon Decoration and Room Decoration Services for Anniversary, Birthdays, Kids Parties, Baby Showers and more!')}</p>
            <div style={{ marginBottom: "15px" }} className="filterdropdown d-flex flex-column flex-lg-row align-items-center justify-content-center gap-3" >

              <div className="d-flex gap-lg-4 gap-2">
                <div className="py-1 rounded-5 d-flex justify-content-center align-itmes-center filter-tag" style={priceFilter === 'all' ? { backgroundColor: '#9252AA', cursor: 'pointer' } : { backgroundColor: '#D9D9D9', cursor: 'pointer' }} onClick={() => setPriceFilter('all')}>
                  <p className="m-0 p-0 fw-bold filter-price-tag" style={priceFilter === 'all' ? { color: "#fff" } : { color: '#9252AA' }}>All</p>
                </div>
                <div className="py-1 rounded-5 d-flex justify-content-center align-itmes-center filter-tag" style={priceFilter === 'under2000' ? { backgroundColor: '#9252AA', cursor: 'pointer' } : { backgroundColor: '#D9D9D9', cursor: 'pointer' }} onClick={() => setPriceFilter('under2000')}>
                  <p className="m-0 p-0 fw-bold filter-price-tag" style={priceFilter === 'under2000' ? { color: "#fff" } : { color: '#9252AA' }}>Under ₹ 2000</p>
                </div>
                <div className="py-1 rounded-5 d-flex justify-content-center align-itmes-center filter-tag" style={priceFilter === '2000to5000' ? { backgroundColor: '#9252AA', cursor: 'pointer' } : { backgroundColor: '#D9D9D9', cursor: 'pointer' }} onClick={() => setPriceFilter('2000to5000')}>
                  <p className="m-0 p-0 fw-bold filter-price-tag" style={priceFilter === '2000to5000' ? { color: "#fff" } : { color: '#9252AA' }}>₹ 2000 - ₹ 5000</p>
                </div>
                <div className="py-1 rounded-5 d-flex justify-content-center align-itmes-center filter-tags" style={priceFilter === 'above5000' ? { backgroundColor: '#9252AA', cursor: 'pointer' } : { backgroundColor: '#D9D9D9', cursor: 'pointer' }} onClick={() => setPriceFilter('above5000')}>
                  <p className="m-0 p-0 fw-bold filter-price-tag" style={priceFilter === 'above5000' ? { color: "#fff" } : { color: '#9252AA' }}>Above ₹ 5000</p>
                </div>
              </div>


              {/* Theme filter */}
              {selCat === "Kids Birthday" ? <select value={themeFilter} onChange={(e) => setThemeFilter(e.target.value)}
                style={{ fontSize: "16px", color: 'rgb(157, 74, 147)', padding: "7px 10px", borderWidth: 1, borderColor: "rgb(157, 74, 147)", borderRadius: "5px", marginLeft: "5px" }}>
                {themeFilters.map((filter) => (
                  <option key={filter.value} value={filter.value}>{filter.label}</option>
                ))}
              </select> : null}
            </div>
          </div>
        </div>
        <div style={styles.decContainer} className="decContainer">
          {loading ? ([1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
            <div className="decimagecontainer" style={styles.imageContainer}>
              <CardSkeleton key={index} />
            </div>
          ))) :
            (
              (filteredData.length > 0) ? (
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
                    <div className='px-2 py-2'>
                      <p
                        style={{
                          marginHorizontal: 3,
                          textAlign: 'left',
                          fontWeight: '600',
                          fontSize: "16px",
                          marginTop: "4px",
                          color: '#9252AA',
            
                          lineHeight: "18px",
                          marginBottom: "0px",
                          textAlign: "left",
                        }}
                        className="pro_name"
                      >
                         {item.name}
                      </p>
                      <div style={{ display:"flex" , flexDirection:"row" , justifyContent:"space-between" , alignItems:"top"}} className="pri_details">
                        <div style={{ flexDirection: 'row', alignItems: 'left', justifyContent: 'space-between' }} className="pro_price">
                          <p style={{
                           color: '#9252AA',
                            fontWeight: '700',
                            fontSize: 17,
                            textAlign: "left",
                            margin: "10px 0px 7px",
                          }}
                          class="pro_price"
                          > ₹ {item.price}</p>
                        </div>
                        <div className="d-flex align-items-center rating-sec">
                          <p className="m-0 p-0" style={{ fontWeight: '500', fontSize: 17, margin: "0px", color: '#9252AA'}}>{item.rating}<span className='px-1 m-0 py-0 img-fluid' style={{ color: '#ffc107' }}><FontAwesomeIcon style={{ margin: 0 , height:"14px" }} icon={faStar} /></span></p>
                          <p style={{ color: '#9252AA', fontWeight: '600', fontSize: 17, margin: "0px", padding: "0 0 0 2px" }}>({item.userCount})</p>
                        </div>
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
            )
          }
          |
        </div>
      </>
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
    width: '270px',
    backgroundColor: "#fff",
    marginBottom: 40,
    boxShadow: "0 6px 16px 0 rgba(0,0,0,.14)",
    borderRadius: "5px",
    overflow: "hidden", // Ensure the image stays within the container
    transition: "transform 0.3s ease-in-out", // Smooth transition effect for zoom
    margin: "10px 12px 20px",
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