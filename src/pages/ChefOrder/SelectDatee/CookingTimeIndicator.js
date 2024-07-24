// src/CookingTimeIndicator.js
import React from 'react';
import './CookingTimeIndicator.css';

const CookingTimeIndicator = ({ time }) => {
    return (
        <div className="cooking-time-indicator">
            <img
                src="https://upload.wikimedia.org/wikipedia/en/b/bd/Doraemon_character.png"
                alt="Cooking icon"
                className="cooking-icon"
            />
            <span className="cooking-text">Expected cooking time of your food</span>
            <strong className="cooking-time">{time} Hrs</strong>
        </div>
    );
};

export default CookingTimeIndicator;
