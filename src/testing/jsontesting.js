import React from 'react';
import './Modal.css';

const dummyData = [
  {
    image: 'https://via.placeholder.com/300x200', // Placeholder image
    title: 'Birthday Special Balloon Decoration',
    price: '₹1499',
    rating: 4.8,
    oldPrice: '₹1699',
  },
  {
    image: 'https://via.placeholder.com/300x200',
    title: 'Pastel And Rosegold Birthday Decor',
    price: '₹2499',
    rating: 4.8,
    oldPrice: '₹2799',
  },
  {
    image: 'https://via.placeholder.com/300x200',
    title: 'Glitzy Silver and Black Birthday Decor',
    price: '₹1999',
    rating: 4.6,
  },
  {
    image: 'https://via.placeholder.com/300x200',
    title: 'Underwater Wonderland: Mermaid',
    price: '₹3999',
    rating: 4.7,
    oldPrice: '₹4999',
  },
];

function App() {
  return (
    <div className="container">
      <h1>Birthday Decorations For Home Or Room</h1>
      <div className="decorations-grid">
        {dummyData.map((item, index) => (
          <div className="decoration-card" key={index}>
            <img src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
            <div className="price">
              {item.oldPrice && <span className="old-price">{item.oldPrice}</span>}
              <span>{item.price}</span>
            </div>
            <div className="rating">
              <span>{item.rating}</span> <span role="img" aria-label="like">❤️</span>
            </div>
          </div>
        ))}
      </div>
      <div className="view-more-container">
        <button className="view-more-button">View More</button>
      </div>
    </div>
  );
}

export default App;
