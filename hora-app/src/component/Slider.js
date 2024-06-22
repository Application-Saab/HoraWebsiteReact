import React, { useState, useEffect } from "react";

function Slider({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(intervalId);
  }, [slides.length]);

  return (
    <div className="slider" style={styyle.slider}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={index === currentSlide ? "slideActive" : "slide"}
          style={{ ...styyle.slide, ...(index === currentSlide && styyle.slideActive) }}
        >
          <img src={slide.image} alt={`Slide ${index + 1}`} style={styyle.slideImg} />
          <div className="overlay"></div> {/* Add overlay */}

          <div className="slideText">{slide.text}</div>
        </div>
      ))}
    </div>
  );
}

const styyle = {
    slider: {
      position: "relative",
      width: "100%",
      height: "500px", /* Adjust height as needed */
      overflow: "hidden"
    },
    slide: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      opacity: 0,
      transition: "opacity 0.5s ease"
    },
    slideActive: {
      opacity: 1
    },
    slideImg: {
      width: "100%",
      height: "100%",
      objectFit: "cover" /* Ensures the image covers the entire slide */
    },
    
    slideText: {
      position: "absolute",
      top: "50%", /* Move the text 50% from the top */
      left: "20px", /* 20px from the left */
      transform: "translateY(-50%)", /* Center the text vertically */
      color: "#fff",
      fontSize: "24px",
      fontWeight: "bold",
      zIndex: 1 /* Ensure the text appears above the image */
    }
  };
  
export default Slider;
