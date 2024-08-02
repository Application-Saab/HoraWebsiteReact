// src/utills/CustomPopup.js

import React from 'react';
import './Modal.css'; // Optional: If you want to add custom styles

const CustomPopup = ({ popupMessage, onClose }) => {
  if (!popupMessage) return null;

  const { image, title, body, button } = popupMessage;

  return (
    <div className="custom-popup-overlay">
      <div className="custom-popup-content">
        {image && <img src={image} alt="Popup" className="custom-popup-image" />}
        <h2 className="custom-popup-title">{title}</h2>
        <p className="custom-popup-body">{body}</p>
        <button className="custom-popup-button" onClick={onClose}>{button}</button>
      </div>
    </div>
  );
};

export default CustomPopup;
