import React from "react";
import Slider from "react-slick";
import video1 from "../assets/decoration-review.mp4";
import thumb1 from "../assets/video1-thumbanail.png";
import thumb2 from "../assets/video-thum.png";
import reviewicon from "../assets/review-icon.png";
import arrowLeftIcon from "../assets/arroe-left.png";
import arrowRightIcon from "../assets/right-arrow.png";

export default function SimpleSlider() {
  const slides = [
    {
      videoUrl: video1,
      thumbnail: thumb2,
      content: {
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        name: 'Jevika Panwar1',
      },
    },
    {
      videoUrl: video1,
      thumbnail: thumb1,
      content: {
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        name: 'Jevika Panwar2',
      },
    },
    
  ];

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    speed: 1500,
    autoplaySpeed: 900,
    cssEase: "linear",
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />
  };

 // Custom Previous Arrow Component
 function CustomPrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="slick-arrow slick-prev"
        onClick={onClick}
        style={{ backgroundImage: `url(${arrowRightIcon})` ,  content: "none" ,backgroundSize:"cover" , backgroundRepeat:"no-repeat" , width: "50px" , height:"50px"}} // Set background image to arrow icon
      />
    );
  }

  // Custom Next Arrow Component
  function CustomNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="slick-arrow slick-next"
        onClick={onClick}
        style={{ backgroundImage: `url(${arrowLeftIcon})` ,  content: "none" ,backgroundSize:"cover" , backgroundRepeat:"no-repeat" , width: "50px" , height:"50px" }} // Set background image to arrow icon and rotate for next arrow
      />
    );
  }

  return (
    <div className="videoContainer">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide111">
            <div style={styles.videoContainer}>
              {/* Video with Thumbnail */}
              <video controls width="100%" height="400px" style={{ width: "100%", height: "400px" }} poster={slide.thumbnail}>
                <source src={slide.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            {/* Content */}
            <div style={styles.content}>
              <h2 style={styles.description}>{slide.content.description}</h2>
              <p style={styles.reviewerName}>{slide.content.name}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

const styles = {
  slide111: {
    display: "flex",
  },
  videoContainer: {
    position: "relative",
    width: "32%",
    borderRadius: "20px",
    padding: "20px 10px",
    backgroundColor: "rgba(230, 117, 107, 0.2)",
  },
  content: {
    width: "60%",
    textAlign: "left",
    padding: "52px 0 0 50px",
    background: `url(${reviewicon})`,
    backgroundSize: "190px 175px",
    backgroundRepeat: "no-repeat",
    margin: "0",
  },
  description: {
    color: "#1B1C31",
    fontSize: "26px",
    margin: "0",
    lineHeight: "38px",
  },
  reviewerName: {
    color: "#E6756B",
    fontSize: "25px",
    fontWeight: "bold",
  },
};
