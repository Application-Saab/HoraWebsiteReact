import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import "../css/popup.css";
import orderWarning from "../assets/OrderWarning.png";

const Popup = ({ onClose, message }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div className="popup-header">
          <AiOutlineClose className="close-icon" onClick={onClose} size={20} />
        </div>
        <div className="popup-body">
          <img src={orderWarning} alt="Order Amount" className="popup-image" />
          <h1>
            Total Order Amount is less than <span>₹400</span>
          </h1>
          <p>
            Total Order amount cannot be less than ₹400. Add more to continue.
          </p>
          <button className="add-more-button">+ Add More</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
