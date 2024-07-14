import React from "react";
import "../css/success.css";
import confirmOrder from "../assets/confirmOrder.png";
import { Link, useNavigate } from "react-router-dom";
const Success = () => {
  const navigate = useNavigate();

  const contactUsRedirection = async () => {
    try {
      window.open(
        `whatsapp://send?phone=+918982321487&text=I've canceled my order, kindly assist with the refund process. Thanks!`
      );
    } catch (error) {
      console.log("contactUsRedirection error", error);
    }
  };

  const handleContinue = () => {
    navigate("/orderList");
  };

  return (
    <div className="confirm-order">
      <div className="confirm-order-image">
        <img
          src={confirmOrder}
          alt="Order Confirmed"
          className="success-image"
        />
      </div>
      <div className="confirm-order-details">
        <h2>Your order is confirmed!</h2>
        <p>
          Our Executor will contact 5 hours before the scheduled time. Have a great
          feast!
        </p>
        {/* <Link to="/" className="track-order">
          Track Order
        </Link> */}
        <div className="need-help" onClick={contactUsRedirection}>Need help? Call us.</div>
        <button className="continue-button" onClick={handleContinue}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default Success;
