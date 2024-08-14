import React from 'react';
import '../testing/testing.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">HORA</div>
      <div className="location">
        <span>📍 Set Location</span>
      </div>
      <div className="search">
        <input type="text" placeholder="Search for Services" />
      </div>
      <div className="categories">
        <span>Categories ▼</span>
      </div>
      <div className="cart">🛒</div>
      <div className="profile">👤</div>
      <div className="language">EN 🌐</div>
    </nav>
  );
}

export default Navbar;