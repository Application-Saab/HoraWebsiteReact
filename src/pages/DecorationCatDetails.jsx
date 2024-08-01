import React, {useState, useEffect} from "react";
import {useParams, useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {Helmet} from "react-helmet";
import checkImage from '../assets/tick.jpeg.jpeg';
import {getDecorationProductOrganizationSchema} from "../utills/schema";
import '../css/decoration.css';

function DecorationCatDetails() {
  const [selCat, setSelCat] = useState("");
  const [orderType, setOrderType] = useState(1);


  const navigate = useNavigate();
  const {subCategory: urlSubCategory, catValue: urlCatValue, productName} = useParams();
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

 


  const handleCheckout = (subCategory, product) => {
    const stateData = {from: window.location.pathname, subCategory, product, orderType, catValue};

    if (localStorage.getItem("isLoggedIn") !== "true") {
      navigate('/login', {state: stateData});
    } else {
      navigate('/checkout', { state: stateData });
    }
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
    const statements = withoutSpecialChars.split('<div>');
    const inclusionItems = statements.flatMap(statement => statement.split("-").filter(item => item.trim() !== ''));
    const inclusionList = inclusionItems.map((item, index) => (
      <li key={index} className="inclusionstyle">
        <img src={checkImage} alt="Info" style={{ height: 13, width: 13 , marginRight:10}} />
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
  }
  

  return (
      <div className="App" style={{backgroundColor: "#EDEDED"}}>
        <Helmet>
          <title>Balloon and Flower Decoration @999</title>
          <meta name="description"
                content="Celebrate Anniversary, Birthday & other Occasions with Candlelight Dinners, Surprises & Balloon Decorations"/>
          <meta name="keywords" content="Balloon and Flower Decoration @999"/>
          <meta property="og:title" content="Balloon and Flower Decoration by Professional Decorators"/>
          <meta property="og:description"
                content="Celebrate Anniversary, Birthday & other Occasions with Candlelight Dinners, Surprises & Balloon Decorations"/>
          <meta property="og:image" content="https://horaservices.com/api/uploads/attachment-1706520980436.png"/>
          <script type="application/ld+json">{JSON.stringify(getDecorationProductOrganizationSchema(product))}</script>
          <meta name="robots" content="index, follow"/>
          <meta name="author" content="Hora Services"/>
          <meta property="og:url"
                content={`https://horaservices.com/balloon-decoration/${catValue}/product/${product.name}`}/>
          <meta property="og:type" content="website"/>
        </Helmet>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            paddingTop: "10px",
            position: "relative"
          }}
               className="decDetails">
            <div style={{width: "50%", textAlign: "center"}} className="decDetailsLeft">
              <div style={{
                width: "80%",
                boxShadow: "0 1px 8px rgba(0,0,0,.18)",
                padding: "10px",
                margin: "0 auto",
                position: "relative"
              }}
                   className="decDetailsImage">
                <img src={`https://horaservices.com/api/uploads/${product.featured_image}`} style={{width: "100%"}}/>
                <div style={{position: "absolute", bottom: 20, right: 20, borderRadius: "50%", padding: 10}}>
                  <span style={{color: "rgba(157, 74, 147, 0.6)", fontWeight: "600"}}>Hora</span>
                </div>
              </div>
            </div>
            <div style={{width: "50%", paddingLeft: "20px", paddingRight: "50px"}} className="decDetailsRight">
              <div style={{
                boxShadow: "0 1px 8px rgba(0,0,0,.18)",
                padding: "10px",
                marginBottom: "12px",
                backgroundColor: "#fff"
              }}>
                <h2 style={{fontSize: "12px", color: "#9252AA"}}>{'Home'}{' > '}{subCategory}{' > '}{product.name}</h2>
                <h1 style={{color: "#222", fontSize: "21px", fontWeight: "#222"}}>{product.name}</h1>
                <p className='mb-2'
                   style={{fontSize: "18px", color: "#9252AA", fontWeight: "600"}}> ₹ {product.price}</p>
              </div>

              <div style={{ boxShadow: "0 1px 8px rgba(0,0,0,.18)", padding: "10px", marginBottom: "12px" , backgroundColor:"#fff"}}>
                {getItemInclusion(product.inclusion)}
                 
                   <button style={styles.Buttonstyle} className="dec-continueButton" onClick={() => handleCheckout(subCategory, product)}>Continue</button>

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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "23px auto 14px",
    width: "93%",
  },
}
export default DecorationCatDetails;
