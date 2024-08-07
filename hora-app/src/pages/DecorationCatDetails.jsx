import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import buynowImage from '../assets/experts.png';
import buynowImage1 from '../assets/secured.png';
import buynowImage2 from '../assets/service.png';
import buynowImage3 from '../assets/originalreviews.png';

function DecorationCatDetails() {
  const [selCat, setSelCat] = useState("");
  const navigate = useNavigate();
  const { subCategory, product } = useLocation().state || {}; // Accessing subCategory and itemName safely

  const handleCheckout = (subCategory, product) => {
    navigate(`/checkout`, { state: { subCategory, product } });
  }

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
        <li key={index} className="inclusionstyle">{index + 1}: {item.trim()}</li>
    ));
    return (
        <div>
          <div style={{fontSize:"21px" , borderBottom: "1px solid #e7eff9"}}>Inclusions</div>
          <ul>
            {inclusionList}
        </ul>
        </div>
       
    );
}
  return (
    <div className="App">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", marginTop: "50px"  , position:"relative"}}>

          <div style={{ width: "50%", textAlign: "center"  }}>
            <div style={{ width: "74%", boxShadow: "0 1px 8px rgba(0,0,0,.18)", padding: "10px", margin: "0 auto" , position:"relative"}}>
              <img src={`https://horaservices.com/api/uploads/${product.featured_image}`} style={{ width: "100%" }} />
              <div style={{ position: "absolute", bottom: 20, right: 20, borderRadius: "50%", padding: 10 }}>
          <span style={{ color: "rgba(157, 74, 147, 0.6)", fontWeight: "600" }}>Hora</span>
          </div>
            </div>
          </div>
          <div style={{ width: "50%" , paddingLeft: "20px", paddingRight: "50px" }}>
            <div style={{ boxShadow: "0 1px 8px rgba(0,0,0,.18)", padding: "10px", marginBottom: "12px" }}>
              <h2 style={{ fontSize: "12px", color: "#9252AA" }}>{'Home'}{' > '}{subCategory}{' > '}{product.name}</h2>
              <h1 style={{ fontSize: "16px", color: "#222", fontSize: "21px", fontWeight: "#222" }}>{product.name}</h1>
              <p style={{ fontSize: "16px", color: "rgb(94 93 93)", fontWeight: "600" }}> ₹ {product.price}</p>
            </div>
            <div style={{ boxShadow: "0 1px 8px rgba(0,0,0,.18)", padding: "10px", marginBottom: "12px" }}>
          {getItemInclusion(product.inclusion)}
              <button style={styles.Buttonstyle} onClick={() => handleCheckout(subCategory, product)}>Continue</button>
            </div>

            <div style={{ boxShadow: "0 1px 8px rgba(0,0,0,.18)", padding: "10px", marginBottom: "10px" }}>
              <p style={{ fontSize: "21px", color: "rgb(34, 34, 34)",  borderBottom: "1px solid #e7eff9" }}>Why Hora</p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{}}>
                <img src={buynowImage} />
                  <p style={{ color: "gray", fontSize: "12px" }}>Experts Decorations</p>
                </div>
                <div>
                <img src={buynowImage1} />
                  <p style={{ color: "gray", fontSize: "12px" }}>Secured Transactions</p>
                </div>
                <div>
                <img src={buynowImage2} />
                  <p style={{ color: "gray", fontSize: "12px" }}>100% Service Guaranteed</p>
                </div>
                <div>
                <img src={buynowImage3} />
                  <p style={{ color: "gray", fontSize: "12px" }}>Original Reviews</p>
                </div>
              </div>
            </div>

            <div style={{ boxShadow: "0 1px 8px rgba(0,0,0,.18)", padding: "10px" }}>
              <p style={{ fontSize: "21px", color: "rgb(34, 34, 34)", borderBottom: "1px solid #e7eff9" }}>Cancellation and Order Change Policy:</p>
              <p>- Till the order is not assigned to service provider, 100% of the amount will be refunded, otherwise 50% of advance will be deducted as cancellation charges to compensate the service provider.</p>
              <p>- The order cannot be edited after paying advance. Customer can cancel the order and replace the new order with required changes.</p>
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
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    margin:"0 auto",
    width:"93%",
  },
  inclusionstyle: {
  },
}

export default DecorationCatDetails;
