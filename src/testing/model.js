import React from "react";
import './Modal.css'; // Ensure the CSS file is correctly linked

const Modal = ({ isOpen, onClose, modalData, totalPrice, handleAddItem, handleRemoveItem }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>Product Details</h2>
                    <button className="modal-close" onClick={onClose}>X</button>
                </div>
                <div className="modal-body">
                    <p style={{ fontSize: '20px', color: '#9252AA', fontWeight: '600' }}>₹ {totalPrice}</p>
                    <div className="modal-items">
                        {modalData.map((item, index) => (
                            <div key={index} className="modal-item">
                                <img src={item.image} alt={item.title} className="modal-item-image" />
                                <div className="modal-item-details">
                                    <h4>{item.title}</h4>
                                    <button onClick={() => handleAddItem(item.title)}>Add</button>
                                    <button onClick={() => handleRemoveItem(item.title)}>Remove</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
