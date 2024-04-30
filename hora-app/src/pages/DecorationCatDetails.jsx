import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


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


  const getItemInclusion = (product) => {
    const inclusion = product.inclusion
    const htmlString = inclusion[0];
    const withoutDivTags = htmlString.replace(/<\/?div>/g, '');
    const statements = withoutDivTags.split('<div>');
    const bulletedList = statements
      .filter(statement => statement.trim() !== '')
      .map(statement => `- ${statement.trim()}`);
    const combinedString = bulletedList.join(' ');
    const finalList = combinedString.split(/--|-/);
    const filteredList = finalList.filter(item => item.trim() !== '');
    return filteredList.map((item, index) => `${index + 1}: ${item}`).join('\n');

  }
  return (
    <div className="App">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", marginTop: "50px"  , position:"relative"}}>

          <div style={{ width: "50%", textAlign: "center"  }}>
            <div style={{ width: "74%", boxShadow: "0 1px 8px rgba(0,0,0,.18)", padding: "10px", margin: "0 auto" }}>
              <img src={`https://horaservices.com/api/uploads/${product.featured_image}`} style={{ width: "100%" }} />
            </div>
          </div>
          <div style={{ width: "50%" , paddingLeft: "20px", paddingRight: "50px" }}>
            <div style={{ boxShadow: "0 1px 8px rgba(0,0,0,.18)", padding: "10px", marginBottom: "12px" }}>
              <h2 style={{ fontSize: "12px", color: "#9252AA" }}>{'Home'}{' > '}{subCategory}{' > '}{product.name}</h2>
              <h1 style={{ fontSize: "16px", color: "#222", fontSize: "21px", fontWeight: "#222" }}>{product.name}</h1>
              <p style={{ fontSize: "16px", color: "rgb(94 93 93)", fontWeight: "600" }}> ₹ {product.price}</p>
            </div>
            <div style={{ boxShadow: "0 1px 8px rgba(0,0,0,.18)", padding: "10px", marginBottom: "12px" }}>
              <p>{getItemInclusion(product)}</p>
              <button style={styles.Buttonstyle} onClick={() => handleCheckout(subCategory, product)}>Continue</button>
            </div>

            <div style={{ boxShadow: "0 1px 8px rgba(0,0,0,.18)", padding: "10px", marginBottom: "10px" }}>
              <p style={{ fontSize: "21px", color: "rgb(34, 34, 34)" }}>Why Hora</p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{}}>
                  <img src={require('../assets/buynow.png').default} />
                  <p style={{ color: "gray", fontSize: "12px" }}>Buy Now Pay Later</p>
                </div>
                <div>
                  <img src={require('../assets/secured.png').default} />
                  <p style={{ color: "gray", fontSize: "12px" }}>Secured Transactions</p>
                </div>
                <div>
                  <img src={require('../assets/service.png').default} />
                  <p style={{ color: "gray", fontSize: "12px" }}>Original Reviews</p>
                </div>
                <div>
                  <img src={require('../assets/photos.png').default} />
                  <p style={{ color: "gray", fontSize: "12px" }}>Original Photos</p>
                </div>
              </div>
            </div>

            <div style={{ boxShadow: "0 1px 8px rgba(0,0,0,.18)", padding: "10px" }}>
              <p style={{ fontSize: "21px", color: "rgb(34, 34, 34)" }}>Cancellation and Order Change Policy:</p>
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
    border: "2px solid #da584a",
    backgroundColor: "#da584a",
    color: "#fff",
    fontSize: "16px",
    padding: "10px",
    borderRadius: "5px"
  }
}

export default DecorationCatDetails;
