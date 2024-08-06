import React, {useState, useEffect} from "react";
import {useParams, useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {Helmet} from "react-helmet";
import checkImage from '../assets/tick.jpeg.jpeg';
import {getDecorationProductOrganizationSchema} from "../utills/schema";
import '../css/decoration.css';
import addOnProductsData from '../utills/addOnProduct.json';



function DecorationCatDetails() {
  const [selCat, setSelCat] = useState("");
  const [orderType, setOrderType] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAddOnProduct, setSelectedAddOnProduct] = useState([]);
  const [itemQuantities, setItemQuantities] = useState({});
  const [totalAmount, setTotalAmount] = useState();
  const [buttonClickCount, setButtonClickCount] = useState(0);
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

 
  const showAddOnmodal = () => {
    setIsModalOpen(true);
  };

  const updateTotalAmount = () => {
    let newTotalAmount = Number(product.price);
    selectedAddOnProduct.forEach(item => {
      newTotalAmount += item.price * itemQuantities[item.title];
    });
    setTotalAmount(newTotalAmount);
  };

  useEffect(() => {
    updateTotalAmount();
  }, [selectedAddOnProduct, itemQuantities, product.price]);

  const handleAddToCart = (item) => {
    const updatedSelectedAddOnProduct = [...selectedAddOnProduct];
    const existingItemIndex = updatedSelectedAddOnProduct.findIndex(addonproductItem => addonproductItem.title === item.title);
  
    if (existingItemIndex !== -1) {
      updatedSelectedAddOnProduct[existingItemIndex].quantity += 1;
    } else {
      updatedSelectedAddOnProduct.push({ ...item, quantity: 1 });
    }
  
    setSelectedAddOnProduct(updatedSelectedAddOnProduct);
    setItemQuantities({
      ...itemQuantities,
      [item.title]: (itemQuantities[item.title] || 0) + 1,
    });
    updateTotalAmount();
  };
  
  const handleRemoveFromCart = (item) => {
    const updatedSelectedAddOnProduct = [...selectedAddOnProduct];
    const existingItemIndex = updatedSelectedAddOnProduct.findIndex(addonproductItem => addonproductItem.title === item.title);
  
    if (existingItemIndex !== -1) {
      if (updatedSelectedAddOnProduct[existingItemIndex].quantity > 1) {
        updatedSelectedAddOnProduct[existingItemIndex].quantity -= 1;
      } else {
        updatedSelectedAddOnProduct.splice(existingItemIndex, 1);
      }
    }
  
    const updatedQuantities = { ...itemQuantities };
  
    if (updatedQuantities[item.title] > 1) {
      updatedQuantities[item.title] -= 1;
    } else {
      delete updatedQuantities[item.title];
    }
  
    setSelectedAddOnProduct(updatedSelectedAddOnProduct);
    setItemQuantities(updatedQuantities);
    updateTotalAmount();
  };
  
  const calculateTotalPrice = (productPrice) => {
    let totalPrice = Number(productPrice); // Ensure productPrice is a number
    selectedAddOnProduct.forEach(item => {
      totalPrice += item.price * itemQuantities[item.title];
    });
    return totalPrice;
  };

  const handleContinue = () => {
    setIsModalOpen(false);
  }

  const handleButtonClick = (subCategory , product) => {
    if (buttonClickCount === 0) {
      showAddOnmodal(subCategory , product);
    } else {
      handleCheckout(subCategory , product);
    }
    setButtonClickCount(buttonClickCount + 1);
  };

  const handleCheckout = (subCategory, product) => {
    const stateData = {from: window.location.pathname, subCategory, product, totalAmount , orderType, catValue , selectedAddOnProduct };

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
                   style={{fontSize: "18px", color: "#9252AA", fontWeight: "600"}}> ₹ {product.price}
                   </p>
                   {selectedAddOnProduct.length > 0 && (
   <ul className="decoration-addons">
    <>
    <div className="addon-sec">
      <h1  style={{color: "#222", fontSize: "16px", fontWeight: "#222"}}>{product.name} : </h1>
      <div style={{fontSize: "16px", color: "#222", fontWeight: "600"}}> ₹ {product.price}</div>
    </div>
      <h6>Customisations : </h6>
      {selectedAddOnProduct.map((item, index) => (
        <li key={index} className="addon-sec">
          <div>
          {item.title} :     
          </div>
          <div>
          ₹ {item.price} x {itemQuantities[item.title]} = ₹ {item.price * itemQuantities[item.title]}
          </div>
        </li>
      ))}
      <p style={{fontSize: "18px", color: "#9252AA", fontWeight: "600"}} className="addon-sec">
        <div>
        Total:
        </div>
        <div>
        ₹ {totalAmount}
        </div>
        
      </p>
      <button style={styles.Buttonstyle} className="dec-continueButton" onClick={() => handleButtonClick(subCategory, product)}>Continue</button>
    </>
</ul>
  )}      
              </div>
              <div style={{ boxShadow: "0 1px 8px rgba(0,0,0,.18)", padding: "10px", marginBottom: "12px" , backgroundColor:"#fff"}}>
                {getItemInclusion(product.inclusion)}
                {selectedAddOnProduct.length == 0 && (
                <button style={styles.Buttonstyle} className="dec-continueButton" onClick={() => handleButtonClick(subCategory, product)}>Continue</button>
              )}  
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
        <h2>Select Customizations</h2>
      </div>
      <div className="modal-middle-box">
        <div className="modal-card-container">
          {addOnProductsData.addOnProducts.map((item, index) => (
            <div key={index} className="modal-card">
              <img style={{width: "150px", height: "150px"}} src={item.image} alt={item.title}className="model-image"/>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              
              <div className="price-container">
                <span className="price">₹ {item.price}</span>
                {itemQuantities[item.title] ? (
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
        
      <p>Total: ₹ {calculateTotalPrice(Number(product.price))}</p>
        <button className="book-now-button" onClick={handleContinue}>Continue</button>
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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "23px auto 14px",
    width: "93%",
  },
}
export default DecorationCatDetails;
