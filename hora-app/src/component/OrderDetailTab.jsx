import React, { useState } from 'react';
import daal_image from '../assets/daal-image.png'

const OrderDetailTab = ({orderDetail}) => {
  const [tab, setTab] = useState("Menu");
console.log("order",orderDetail)
  return (
    <>
      {/* <div className="chef-details">
        <img src="chef-image.jpg" alt="Chef" className="chef-image" />
        <div className="chef-info">
          <h3>Rahul Kumar Gupta</h3>
          <p>⭐⭐⭐⭐</p>
          <button className="rate-us-button">Rate Us</button>
        </div>
      </div> */}
      <div className="tabs">
        <button
          className={`${tab === "Menu" ? "tab active" : "tab"}`}
          onClick={() => setTab("Menu")}
        >
          Menu
        </button>
        <button
          className={`${tab === "Appliances" ? "tab active" : "tab"}`}
          onClick={() => setTab("Appliances")}
        >
          Appliances
        </button>
        <button
          className={`${tab === "Ingredients" ? "tab active" : "tab"}`}
          onClick={() => setTab("Ingredients")}
        >
          Ingredients
        </button>
      </div>
      <div className="menu-section">
        <h4 className='mb-3'>Appetizer (20)</h4>
        <div className="menu-items">
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="menu-item">
              <div>
                <img className='manu-item-img' src={daal_image} alt="Daal Tadka" height={20} width={20}/>
              </div>
              <div>
                <p>Daal Tadka</p>
                <p className="price">₹199</p>
              </div>
            </div>
          ))}
        </div>
        <h4 className='mt-3 mb-3'>Breakfast (20)</h4>
        <div className="menu-items">
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="menu-item">
              <div>
                <img className='manu-item-img' src={daal_image} alt="Daal Tadka" height={20} width={20}/>
              </div>
              <div>
                <p>Daal Tadka</p>
                <p className="price">₹199</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="rate-us-footer">
        <button className="rate-us-button">Rate Us</button>
      </div>
    </>
  );
}

export default OrderDetailTab;
