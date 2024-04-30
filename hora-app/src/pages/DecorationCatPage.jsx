import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { BASE_URL, GET_DECORATION_CAT_ID, GET_DECORATION_CAT_ITEM } from '../utills/apiconstants';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function DecorationCatPage() {
  const location = useLocation();
  const item = location.state?.item;
  const { subCategory } = useParams();
  const [selCat, setSelCat] = useState("");
  const [catId, setCatId] = useState("");
  const [catalogueData, setCatalogueData] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null); // State to track hovered container index
  const navigate = useNavigate();
  console.log("subCategory" + subCategory)

  useEffect(() => {
    addSpaces(subCategory);
    getSubCatId(subCategory); // Fetch category ID based on the selected subcategory
  }, [subCategory]);

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
      const response = await axios.get(BASE_URL + GET_DECORATION_CAT_ITEM + catId);
      setCatalogueData(response.data.data);
    } catch (error) {
      console.log("Error:", error.message);
    }
  };

  const handleViewDetails = (subCategory, product) => {
    const productName = product.name.replace(/ /g, "-");
    navigate(`/decoration-cat-details/${subCategory}/${productName}`, { state: { subCategory, product } });
  };

  useEffect(() => {
    if (catId) {
      getSubCatItems();
    }
  }, [catId]);

  return (
    <div>
      <div style={{textAlign:"center" , justifyContent:"center" , alignItems:"center" , marginTop:"20px"}}>
        <h1 style={{fontSize:"12px" }}>{selCat} Decoration Services at Home by Trained Decorators</h1>
        <p style={{ padding:"0px 0px 16px" , margin:"0px"}}>Balloon Decoration and Room Decoration Services for Anniversary, Birthdays, Kids Parties, Baby Showers and more!</p>
      </div>
      <div style={styles.decContainer}>
        {catalogueData.map((item, index) => (
          <div 
            key={item._id}
            style={{
              ...styles.imageContainer,
              cursor: "pointer" ,
              ...(hoveredIndex === index && styles.zoomedContainer) // Apply zoom effect when hovered
            }}
            
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => handleViewDetails(subCategory, item)}
          >
            <img src={`https://horaservices.com/api/uploads/${item.featured_image}`} alt={item.name} style={styles.decCatimage} />
            <p
              style={{
                marginHorizontal: 3,
                textAlign: 'left',
                fontWeight: '500',
                fontSize: "16px",
                marginTop: "4px",
                // color: '#9252AA',
                color:"#444",
                minHeight: "30px",
                marginBottom: "0px",
               textAlign:"center",
               padding:"0 15px 0 15px"
              }}
            >
              {item.name}
            </p>
            <div>
              <div style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 2, paddingLeft: 4, paddingRight: 10, justifyContent: 'space-between' }}>
                <p style={{
                  // color: '#9252AA',
                  fontWeight: '500',
                  fontSize: 17,
                  color:"#444",
                  textAlign: "center",
                  margin: "0px",
                }}> ₹ {item.price}</p>
              </div>
              <div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  decContainer: {
    flexDirection: 'row',
    paddingLeft: "10px",
    justifyContent: 'flex-start',
    alignItems: 'center',
    display: "flex",
    flexWrap:"wrap",
  },
  decCatimage: {
    width: "100%",
    height: "300px",
    borderRadius: "5px",
    objectFit: "cover",
  },
  imageContainer: {
    width: '21%',
    marginBottom: 30,
    boxShadow: "0 6px 16px 0 rgba(0,0,0,.14)",
    borderRadius: "5px",
    overflow: "hidden", // Ensure the image stays within the container
    transition: "transform 0.3s ease-in-out", // Smooth transition effect for zoom
    margin:"0 20px 20px"
  },
};

export default DecorationCatPage;
