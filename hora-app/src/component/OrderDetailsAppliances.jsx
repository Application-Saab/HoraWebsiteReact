import React from "react";
import daal_image from "../assets/daal-image.png";

const OrderDetailsAppliances = () => {
  return (
    <>
      <div className="appliances-section">
        <h4 className="application-section-heading">Required Burners</h4>
        <p className="application-section-para">
          (Burners would be used at your location)
        </p>
        <div className="burner-count">
          <img src={daal_image} alt="Burner Icon" />
          <span>04</span>
        </div>
        <h4 className="application-section-heading">
          Requires Special Appliances
        </h4>
        <p className="application-section-para">
          (Keep these appliances ready at your location)
        </p>
        <div className="appliance-items">
          <div className="appliance-item">
            <img src={daal_image} alt="Charcoal Burner" />
            <p>Charcoal Burner</p>
          </div>
          <div className="appliance-item">
            <img src={daal_image} alt="Electric Tandoor" />
            <p>Electric Tandoor</p>
          </div>
          <div className="appliance-item">
            <img src={daal_image} alt="Idly Stand" />
            <p>Idly Stand</p>
          </div>
          <div className="appliance-item">
            <img src={daal_image} alt="Idly Stand" />
            <p>Idly Stand</p>
          </div>
          <div className="appliance-item">
            <img src={daal_image} alt="Idly Stand" />
            <p>Idly Stand</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetailsAppliances;
