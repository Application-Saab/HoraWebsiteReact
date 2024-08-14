// import React from 'react';
import './testing.css';
import React, { useState, useEffect } from 'react';

import DecorationImage from '../assets/homepage_decoration.png';
import PhotographyImage from '../assets/homepage_photography.png';

import img1 from '../assets/Birthday_dec_cat.jpeg';

import homepage_entertainment1 from '../assets/homepage_entertainment1.png';
import homepage_entertainment2 from '../assets/homepage_entertainment2.png';
import homepage_entertainment3 from '../assets/homepage_entertainment3.png';
import homepage_entertainment4 from '../assets/homepage_entertainment4.png';

import Slider from 'react-slick'; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Testing from '../testing/newfile';
import { Navbar } from 'react-bootstrap';


const CelebrateWithUs = () => {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const categories = [
    {
      id: 1,
      title: 'Birthday and Anniversary',
      imageUrl: require('../assets/homepage_Celebrate1.png'),
      link: "https://horaservices.com/balloon-decoration/birthday-decoration",
    },
    {
      id: 2,
      title: 'House Parties',
      imageUrl: require('../assets/homepage_Celebrate2.png'),
    },
    {
      id: 3,
      title: 'Corporate Events',
      imageUrl: require('../assets/homepage_Celebrate3.png'),
    },
    {
      id: 4,
      title: 'Wedding Events',
      imageUrl: require('../assets/homepage_Celebrate4.png'),
    },
    {
      id: 5,
      title: 'Gatherings',
      imageUrl: require('../assets/homepage_Celebrate5.png'),
    },
    {
      id: 6,
      title: 'Kids Events',
      imageUrl: require('../assets/homepage_Celebrate6.png'),
    },
    
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: require('../assets/homepage_slider1.png'),
      title: 'Decoration at your step',
      description: 'Transform your space with our expert decorators'
    },
    {
      image: require('../assets/banner3.jpeg'),
      title: 'Catering made easy',
      description: 'Delicious food for all your party needs'
    },
    {
      image: require('../assets/aniversary_Cat_Dec.jpeg'),
      title: 'Entertainment galore',
      description: 'Book top-notch performers for your event'
    }
  ];

  const foodData = [
    {
      id: 1,
      image: require('../assets/homepage_food1.png'),
      title: "Bulk Food Delivery"
    },
    {
      id: 2,
      image: require('../assets/homepage_food2.png'),
      title: "Chef For Party"
    },
    {
      id: 3,
      image: require('../assets/homepage_food3.png'),
      title: "Live Catering"
    },
  ];

  const options = [
    { id: 1, title: 'Tatto Artist', imageUrl: homepage_entertainment1, link: '#' },
    { id: 2, title: 'Magician', imageUrl: homepage_entertainment2, link: '#' },
    { id: 3, title: 'Party Host', imageUrl: homepage_entertainment3, link: '#' },
    { id: 4, title: 'Mascot', imageUrl: homepage_entertainment4, link: '#' },
  ];

  const jsonData = {
    title: "Amaira Turns 8",
    services: [
      {
        title: "Decoration",
        description: "Choose from 1000+ unique designs for any Event-Birthdays, Anniversaries, Baby showers, Weddings, and more! Get your venue decorated in just 2 hours, indoors or outdoors. Best prices, timely service, and support guaranteed!!....."
      },
      {
        title: "Chef For Party",
        description: "Choose from 1000+ unique designs for any Event-Birthdays, Anniversaries, Baby showers, Weddings, and more! Get your venue decorated in just 2 hours, indoors or outdoors. Best prices, timely service, and support guaranteed!...",
      },
      {
        title: "Food Delivery",
        description: "Choose from 1000+ unique designs for any Event-Birthdays, Anniversaries, Baby showers, Weddings, and more! Get your venue decorated in just 2 hours, indoors or outdoors. Best prices, timely service, and support guaranteed!....",
      }
    ]
  };
  

  const categoryData = [
    {
      id: 1,
      title: 'Decoration',
      link: '/decoration',
      imageUrl: require('../assets/homepage_whatareu1.png'),
      points: [
        '✨Choose from 1000+ unique designs for any Event - Birthdays, Anniversaries, Baby showers, Weddings, and more!',
        '✨Get your venue decorated in just 2 hours, indoors or outdoors.',
        '✨Best prices, timely service, and support guaranteed!...',
      ],
    },
    {
      id: 2,
      title: 'Chef For Party',
      link: '/chef-for-party',
      imageUrl: require('../assets/homepage_whatareu2.png'),
      points: [
        '✨Choose from 1000+ unique designs for any Event - Birthdays, Anniversaries, Baby showers, Weddings, and more!',
        '✨Get your venue decorated in just 2 hours, indoors or outdoors.',
        '✨Best prices, timely service, and support guaranteed!...',
      ],
    },
    {
      id: 3,
      title: 'Food Delivery',
      link: '/food-delivery',
      imageUrl: require('../assets/homepage_whatareu3.png'),
      points: [
        '✨Choose from 1000+ unique designs for any Event - Birthdays, Anniversaries, Baby showers, Weddings, and more!',
        'Get your venue decorated in just 2 hours, indoors or outdoors.',
        'Best prices, timely service, and support guaranteed!...',
      ],
    },
    {
      id: 4,
      title: 'Food Delivery',
      link: '/food-delivery',
      imageUrl: require('../assets/homepage_whatareu4.png'),
      points: [
        '✨ Choose from 1000+ unique designs for any Event - Birthdays, Anniversaries, Baby showers, Weddings, and more!',
        'Get your venue decorated in just 2 hours, indoors or outdoors.',
        'Best prices, timely service, and support guaranteed!...',
      ],
    },
    {
      id: 5,
      title: 'Food Delivery',
      link: '/food-delivery',
      imageUrl: require('../assets/homepage_whatareu5.png'),
      points: [
        '✨ Choose from 1000+ unique designs for any Event - Birthdays, Anniversaries, Baby showers, Weddings, and more!',
        'Get your venue decorated in just 2 hours, indoors or outdoors.',
        'Best prices, timely service, and support guaranteed!...',
      ],
    },
    {
      id: 6,
      title: 'Food Delivery',
      link: '/food-delivery',
      imageUrl: img1,
      points: [
        '✨ Choose from 1000+ unique designs for any Event - Birthdays, Anniversaries, Baby showers, Weddings, and more!',
        'Get your venue decorated in just 2 hours, indoors or outdoors.',
        'Best prices, timely service, and support guaranteed!...',
      ],
    },
  ];


  
const CustomerReview = [
  {
    id: 1,
    name: "Cameron Williamson",
    image: require('../assets/aniversary_Cat_Dec.jpeg'),
    rating: 5,
    review: "I would highly recommend Hora to anyone looking for reliable and effective financial planning services."
  },
  {
    id: 2,
    name: "Customer Name 2",
    image: require('../assets/aniversary_Cat_Dec.jpeg'),
    rating: 5,
    review: "Hora excelled in creating a financial plan that was tailored to my unique needs. Their attention to detail and personalized approach."
  },
  {
    id: 3,
    name: "Customer Name 3",
    image: require('../assets/aniversary_Cat_Dec.jpeg'),
    rating: 5,
    review: "The team at Hora is always responsive and supportive. They go above and beyond to ensure their clients are satisfied and well-informed."
  },
  {
    id: 4,
    name: "Jerome Bell",
    image: require('../assets/aniversary_Cat_Dec.jpeg'),
    rating: 4,
    review: "I appreciate the comprehensive range of services offered by Hora. From investment advice to retirement planning, they've got all bases covered."
  },
  {
    id: 4,
    name: "Jerome Bell",
    image: require('../assets/aniversary_Cat_Dec.jpeg'),
    rating: 4,
    review: "I appreciate the comprehensive range of services offered by Hora. From investment advice to retirement planning, they've got all bases covered."
  },
  {
    id: 4,
    name: "Jerome Bell",
    image: require('../assets/aniversary_Cat_Dec.jpeg'),
    rating: 4,
    review: "I appreciate the comprehensive range of services offered by Hora. From investment advice to retirement planning, they've got all bases covered."
  }
];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className="page-width">
      <div className="party-services">
        <h1 class="party-title">✨ All party services one platform ✨</h1>
        <div className="carousel">
          <img src={slides[currentSlide].image} alt={slides[currentSlide].title} />
          <div className="carousel-content">
            <h2 className='party-title1'>{slides[currentSlide].title}</h2>
            {/* <p>{slides[currentSlide].description}</p> */}
            <button className="book-now">Book Now</button>
          </div>
        </div>
      </div>

      <div className="food-container">
        <h1 className="food-title">Food 🍲</h1>
        <div className="food-cards">
          {foodData.map(item => (
            <div key={item.id} className="food-card">
              <a href="#" className="food-card-link">
                <img src={item.image} alt={item.title} className="food-image" />
                <p className="food-card-title">{item.title}</p>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
  <div className="service">
    <div className="service-header">
      <h2 style={{fontFamily : "'Montserrat', sans-serif", fontWeight: "bold"}}>Decoration 🎉</h2>
    </div>
    <div className="service-image-container">
      <img src={DecorationImage} alt="Decoration" className="service-image" />
      <button className="book-now">Book Now</button>
    </div>
  </div>
  <div className="service">
    <div className="service-header">
      <h2 style={{fontFamily : "'Montserrat', sans-serif", fontWeight: "bold"}}>Photography 📸</h2>
    </div>
    <div className="service-image-container">
      <img src={PhotographyImage} alt="Photography" className="service-image" />
      <button className="book-now">Book Now</button>
    </div>
  </div>
</div>


<div className="entertainment-container">
  <h1 className="entertainment-header">
    Entertainment <span role="img" aria-label="party face">🥳</span>
  </h1>
  <div className="entertainment-grid">
    {options.map(category => (
      <div key={category.id} className="category-card">
        <a href={category.link} rel="noopener noreferrer">
          <div className="category-image-wrapper">
            <img src={category.imageUrl} alt={category.title} className="category-image" />
            <p className="category-title">{category.title}</p>
          </div>
        </a>
      </div>
    ))}
  </div>
</div>


<div className="entertainment-container">
  <h1 className="entertainment-header">
  What are you into? <span role="img" aria-label="party face">🥳</span>
  </h1>
  <h3 style={{fontSize: "20px"}}>We offer a variety of services , differing in the total value of needed.</h3>
<div className="categoriesCard-container">
      {categoryData.map(category => (
        <div key={category.id} className="categoriesCard-card">
          <a href={category.link} rel="noopener noreferrer">
            <div className="categoriesCard-image-wrapper">
              <img src={category.imageUrl} alt={category.title} className="categoriesCard-image" />
            </div>
          </a>
          <p className="categoriesCard-title">{category.title}</p>
          <ul className="categoriesCard-points">
            {category.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          <a href={category.link} className="categoriesCard-explore-more">
            Explore More
          </a>
        </div>
      ))}
    </div>
    </div>


<div className="celebrate-container">
  <h1 className="celebrate-title">Celebrate With Us 🎉</h1>
  <p className="celebrate-subtitle">You can easily search for what category of item you want to order.</p>
  <div className="categories-cards">
    {categories.map(category => (
      <div key={category.id} className="categories-card">
        <a href={category.link} rel="noopener noreferrer">
          <img src={category.imageUrl} alt={category.title} className="categories-image" />
        </a>
        <p className="categories-title">{category.title}</p>
      </div>
    ))}
  </div>
</div>


<div className="customer-review-container">
        <h2>Customer Review</h2>
        <Slider {...settings}  >
          {CustomerReview.map(({ id, name, image, rating, review }) => (
            <div key={id} className="review-card">
              <div className="review-header">
                <img src={image} alt={name} className="review-image" />
                <div>
                  <h3 className="review-name">{name}</h3>
                  <div className="review-rating">{"⭐".repeat(rating)}</div>
                </div>
              </div>
              <p className="review-text">{review}</p>
            </div>
          ))}
        </Slider>
      </div>


<div>
<Testing />
</div>

</div>
    </>
  );
};

export default CelebrateWithUs;
