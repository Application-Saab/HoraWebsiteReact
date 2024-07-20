import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import "../css/popup.css";
import orderWarning from "../assets/OrderWarning.png";

const Popup = ({ onClose, popupMessage }) => {
  const handleContinue = () => {
    onClose();
  };

  const handleContactUs = () => {
    window.open(
      "whatsapp://send?phone=+917338584828&text=Hello%20I%20have%20some%20queries%20for%20food%20delivey%20and%20live%20Catering%20service"
    );
    onClose();
  };

  const handleAddMore = () => {
    onClose();
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div className="popup-header">
          <AiOutlineClose className="close-icon" onClick={onClose} size={20} />
        </div>
        <div className="popup-body">
          <img
            src={popupMessage?.image}
            alt="Order Amount"
            className="popup-image"
          />
          <h1>{popupMessage?.title}</h1>
          <p>{popupMessage?.body}</p>
          {popupMessage?.button == "Continue" && (
            <button className="add-more-button" onClick={handleContinue}>
              {popupMessage?.button}
            </button>
          )}
          {popupMessage?.button == "Contact Us" && (
            <button className="add-more-button" onClick={handleContactUs}>
              {popupMessage?.button}
            </button>
          )}

          {popupMessage?.button == "Add More" && (
            <button className="add-more-button" onClick={handleAddMore}>
              + {popupMessage?.button}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Popup;
