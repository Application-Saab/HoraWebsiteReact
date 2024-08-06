import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBars, faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import avtar from '../assets/avtar.jpg';
import backIcon from '../assets/back_arrow1.png';
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import useScrollToTop from './useScrollToTop'; // Import the custom hook
import ChefCitypage from "../pages/ChefCitypage";
import Popup from "../utills/popup";
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import '../css/header-footer.css';


function Header() {
  useScrollToTop(); // Use the custom hook

  const location = useLocation();
  const [showDrawer, setShowDrawer] = useState(false);
  const [showDecorationSubMenu, setShowDecorationSubMenu] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [pageTitle, setPageTitle] = useState("");
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';
  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };
  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };
  const drawerRef = useRef(null);

  const [showPopup, setShowPopup] = useState(false); // State for controlling popup visibility
  const [popupMessage, setPopupMessage] = useState({}); // State for popup message


  useEffect(() => {
    function handleClickOutside(event) {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        setShowDrawer(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [drawerRef]);

  const openCatItems = (subCategory) => {
    navigate(`/decoration-cat-page/${subCategory}`);
  };


useEffect(() => {
  const getTitle = () => {
    const pathname = location.pathname;

    switch (true) {
      case pathname === "/balloon-decoration":
        return "Decoration";
      case pathname === "/book-chef-cook-for-party":
        return "Create Order";
      case pathname === "/book-chef-cook-for-party/order-details":
        return "Order Details";
      case pathname === "/book-chef-checkout":
        return "Checkout";
      case pathname ===
        "/party-food-delivery-live-catering-buffet/party-food-delivery":
        return "Food Delivery";
      case pathname ===
        "/party-food-delivery-live-catering-buffet-select-date/party-food-delivery":
        return "Food Delivery Order Details";
      case pathname === "/party-food-delivery-live-catering-buffet-checkout":
        return "Checkout";
      case pathname ===
        "/party-food-delivery-live-catering-buffet/party-live-buffet-catering":
        return "Live Catering";
      case pathname ===
        "/party-food-delivery-live-catering-buffet-select-date/party-live-buffet-catering":
        return "Live Catering Order Details";
      case pathname === "/contactus":
        return "Contact Us";
      case pathname === "/aboutus":
        return "About Us";
      case pathname.match(/^\/balloon-decoration\/.+\/product\/.+$/) !== null:
        return "Product";
      case pathname.match(/^\/balloon-decoration\/.+$/) !== null:
        return "Decoration category";
      default:
        return "";
    }
  };

  setPageTitle(getTitle());
}, [location]);

  const openLink = () => {
    window.open("https://play.google.com/store/apps/details?id=com.hora", "_blank");
  };

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    localStorage.clear();
    // alert("LogOut in successfully");
    setPopupMessage({
      image: require('../assets/logout.png').default,
      title: "Logout Successful",
      body: "You have been logged out successfully.",
      button: "OK"
    });
   setShowPopup(true); // Show the popup
    // navigate("/");
  };

  return (
      <header style={styles.headerContainer}>
        <div className="pageWidth">
          <div style={styles.headerContainerinner} className="headerContainerinner">
            <div>
              <Link to="/">
                <img src={require("../assets/logo_white.svg").default} alt="Logo" style={styles.logo} />
              </Link>
            </div>
            <nav>
              <ul style={styles.desktopMenu}>
                <li style={styles.desktopMenuli}>
                  <Link to="/" style={styles.link}>Home</Link>
                </li>
                <li
                    style={styles.desktopMenuli}
                    onMouseEnter={() => {
                      setShowDecorationSubMenu(true);
                      setIsHovered(true);
                    }}
                    onMouseLeave={() => {
                      setShowDecorationSubMenu(false);
                      setIsHovered(false);
                    }}
                >
                  <span style={styles.link}>Services</span>
                  <FontAwesomeIcon
                      icon={isHovered ? faCaretUp : faCaretDown}
                      className={`dropdpwnarrow ${isHovered ? "rotate-icon" : ""}`}
                      style={{ paddingLeft: "8px" }}
                  />
                  {showDecorationSubMenu && (
                      <ul style={styles.subMenu}>
                        <li><Link to="/balloon-decoration" style={styles.subMenuLink}>Decoration</Link></li>
                        <li><Link to="/book-chef-cook-for-party" style={styles.subMenuLink}>Chef for Party</Link></li>
                        <li><Link to="/party-food-delivery-live-catering-buffet/party-food-delivery" style={styles.subMenuLink}>Food Delivery</Link></li>
                        <li><Link to="/party-food-delivery-live-catering-buffet/party-live-buffet-catering" style={styles.subMenuLink}>Live Catering</Link></li>
                        <li><Link to="/" style={{ ...styles.subMenuLink, ...styles.lastChild }} onClick={() => openCatItems("FirstNight")}>Entertainment</Link></li>
                      </ul>
                  )}
                </li>
                <li style={styles.desktopMenuli}>
                  <Link to="/contactus" style={styles.link}>Contact Us</Link>
                </li>
                <li style={styles.desktopMenuli}>
                  <Link to="https://horaservices.com/AboutUs.html" style={styles.link}>About Us</Link>
                </li>
                <li style={styles.desktopMenuli}>
                  <Link to="/reviews" style={styles.link}>Customer Reviews</Link>
                </li>
                <li style={styles.desktopMenuli}>

                  <div style={styles.rightSection}>
                    {localStorage.getItem("isLoggedIn") === "true" ? (
                        <>
                          <Link to="/myaccount" style={styles.link}>My Profile</Link>
                        </>
                    ) : (
                        <Link to="/login" style={styles.link}></Link>
                    )}
                  </div>
                </li>
              </ul>
            </nav>
            <div style={styles.rightSection}>
              {localStorage.getItem("isLoggedIn") === "true" ? (
                  <>
                    {/*<Link to="/myaccount" style={styles.link}>My Profile</Link>*/}
                    <a style={styles.linkicon} onClick={handleLogout}>
                      <FontAwesomeIcon icon={faUser} style={styles.icon} />
                      <span style={{ marginLeft: "3px" }}>Logout</span>
                    </a>
                  </>
              ) : (
                <>
                      <FontAwesomeIcon icon={faUser} style={styles.icon} />
                      <Link to="/login" style={styles.link}>Login</Link>
                    </>
                 
              )}
            </div>
          </div>
          <div style={styles.mobileViewHeader} className='mobileViewHeader py-2'>
            <div className="d-flex align-items-center gap-3" style={{ width:"100%" }}>
              {
                isHomePage && ChefCitypage ? (
                    <>
                      <FontAwesomeIcon
                          icon={faBars}
                          className="mobileMenuIcon"
                          style={styles.mobileMenuIcon}
                          onClick={toggleDrawer}
                      />
                      <Link to="/" style={{ display:"flex" , width:"80%" , textAlign:"center"}}>
                        <img src={require("../assets/logo_white.svg").default} alt="Logo" style={{ width: "85px", height: "auto", margin:"0 auto"}} />
                      </Link>
                    </>
                ) : (
                    <>
                      <img
                          src={backIcon}
                          alt="Back"
                          style={{
                            width: "35px",
                            height: "auto",
                            cursor: "pointer",
                          }}
                          onClick={handleBack}
                      />
                      <h1 style={{ margin: 0 , fontSize:"16px" }}>{pageTitle}</h1>
                    </>
                )}
            </div>
          </div>
        </div>
        {showDrawer && <Drawer closeDrawer={toggleDrawer} drawerRef={drawerRef} handleLogout={handleLogout} />}
        {showPopup && <Popup onClose={() => setShowPopup(false)} popupMessage={popupMessage} />} {/* Render the Popup */}
      </header>
  );
}



const Drawer = ({ closeDrawer, drawerRef, handleLogout }) => {

  const [showDecorationSubcategories, setShowDecorationSubcategories] = useState(false);

  const toggleDecorationSubcategories = () => {
    setShowDecorationSubcategories(!showDecorationSubcategories);
  };

  const style = {
    drawer: {
      width: "70%",
      backgroundColor: "#fff",
      padding: "0px",
      boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.2)",
      position: "fixed",
      top: "0%",
      left: "0%",
      zIndex: 999,
      height: "100vh",
      transition: "left 0.3s ease-in-out",
      overflowY: "auto", // Allows vertical scrolling
      overflowX: "hidden" // Prevents horizontal scrolling
    },
    drawerLink: {
      borderBottom: "1px solid #efefef",
      color: "#000",
      textDecoration: "none",
      fontSize: "16px",
      fontWeight: "500",
      margin: "10px 0",
      display: "block",
      cursor: "pointer",
      padding: "0 0 6px 0",
    },
    drawerLinkDisabled: {
      color: "#888",
      textDecoration: "none",
      fontSize: "16px",
      fontWeight: "500",
      margin: "10px 0",
      display: "flex",
      alignItems: "center",
      cursor: "not-allowed",
      gap: "38px",
    },
    subMenu: {
      paddingLeft: "20px",
      borderLeft: "1px solid #efefef",
    },
    subMenuLink: {
      color: "#444",
      padding: "8px 16px",
      textDecoration: "none",
      fontSize: "16px",
      fontWeight: "500",
    },
    divider: {
      borderBottom: "0.5px solid #B4A9A9FF",
      margin: "8px 0",
    },
    toggleIcon: {
      marginLeft: "55%",
      color: "#000",
      cursor: "pointer",
      fontSize: "12px", // Adjust this value to make the icon smaller
    },
    linkContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    }
  };


  return (
    <div style={style.drawer} ref={drawerRef}>
      <div className="drawer-header">
        <div className="profile">
          <div className="profile-icon">&#128100;</div>
          <div className="profile-text">Hi, Guest</div>
        </div>
        <div className="drawer-top-sec">
          <div className="drawer-sec-item">
          <Link to="/myaccount" onClick={closeDrawer}>
          MY ACCOUNT
        </Link>
            </div>
          <div className="drawer-sec-item">
          <Link to="/contactus" onClick={closeDrawer} style={{ marginLeft:8}}>
          HELP CENTER
        </Link>
          </div>
        </div>
      </div>
      <div style={{ padding:"0px 10px 20px 20px"}}>
        {/* Disable Decoration Link */}
        <span style={style.drawerLink} onClick={toggleDecorationSubcategories}>
          Decoration
          <FontAwesomeIcon
              icon={showDecorationSubcategories ? faMinus : faPlus}
              style={style.toggleIcon}
              className="plus-toggle"
          />
        </span>
        {showDecorationSubcategories && (
            <div style={style.subMenu}>
              <Link to="/balloon-decoration/birthday-decoration" style={style.subMenuLink} onClick={closeDrawer}>
                <label style={{fontWeight: "bold"}}> Birthday Party </label>
              </Link>
              <div style={style.divider}></div>
              <Link to="/balloon-decoration/first-night-decoration" style={style.subMenuLink} onClick={closeDrawer}>
                <label style={{fontWeight: "bold"}}> First Night </label>
              </Link>
              <div style={style.divider}></div>
              <Link to="/balloon-decoration/anniversary-decoration" style={style.subMenuLink} onClick={closeDrawer}>
                <label style={{fontWeight: "bold"}}> Anniversary </label>
              </Link>
              <div style={style.divider}></div>
              <Link to="/balloon-decoration/kids-birthday-decoration" style={style.subMenuLink} onClick={closeDrawer}>
                <label style={{fontWeight: "bold"}}> Kids Party </label>
              </Link>
              <div style={style.divider}></div>
              <Link to="/balloon-decoration/baby-shower-decoration" style={style.subMenuLink} onClick={closeDrawer}>
                <label style={{fontWeight: "bold"}}> Baby Shower </label>
              </Link>
              <div style={style.divider}></div>
              <Link to="/balloon-decoration/welcome-baby-decoration" style={style.subMenuLink} onClick={closeDrawer}>
                <label style={{fontWeight: "bold"}}> Welcome Baby </label>
              </Link>
              <div style={style.divider}></div>
              <Link to="/balloon-decoration/premium-decoration" style={style.subMenuLink} onClick={closeDrawer}>
                <label style={{fontWeight: "bold"}}> Premium Decors </label>
              </Link>
              <div style={style.divider}></div>
              <Link to="/balloon-decoration/balloon-bouquets-decoration" style={style.subMenuLink} onClick={closeDrawer}>
                <label style={{fontWeight: "bold"}}> Balloon Bouquets </label>
              </Link>
            </div>
        )}
      <Link to="/book-chef-cook-for-party" style={style.drawerLink} onClick={closeDrawer}>
        Chef for Party
      </Link>
      <Link to="/party-food-delivery-live-catering-buffet/party-food-delivery" style={style.drawerLink} onClick={closeDrawer}>
        Food Delivery
      </Link>
      <Link to="/party-food-delivery-live-catering-buffet/party-live-buffet-catering" style={style.drawerLink} onClick={closeDrawer}>
        Live Catering
      </Link>
      <Link to="/" style={style.drawerLink} onClick={closeDrawer}>
        Entertainment
      </Link>
      <Link to="/reviews" style={style.drawerLink} onClick={closeDrawer}>
       Happy Customers
      </Link>
      <Link to="/aboutus" style={style.drawerLink} onClick={closeDrawer}>
        About Us
      </Link>
      <Link to="/contactus" style={style.drawerLink} onClick={closeDrawer}>
        Contact Us
      </Link>
     
      {localStorage.getItem("isLoggedIn") !== "true" ? (
        <Link to="/login" style={style.drawerLink} onClick={closeDrawer} >
          Login
        </Link>
      ) : (
        <>
          <Link to="/" style={style.drawerLink} onClick={() => {
            handleLogout();
            closeDrawer();
          }}>
            Logout
          </Link>
        </>
      )}
      </div>
    </div>
  );
};

const styles = {
  headerContainer: {
    background: "linear-gradient(119deg, #6730B2 -20.39%, #EE7464 80.65%)",
    padding: "0 30px",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  },
  headerContainerinner: {
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    window: "1200px",
  },
  logo: {
    width: "109px",
    height: "56px",
    margin: "0px",
    padding: "0px",
  },
  desktopMenu: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    listStyle: "none",
    marginBottom: "0",
  },
  desktopMenuli: {
    paddingRight: "16px",
    position: "relative",
  },
  desktopMenuli1: {
    paddingRight: "3px",
    position: "relative",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "500",
    cursor: "pointer",
    marginLeft:"6px",
  },
  linkicon: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "500",
    marginLeft: '10px',
    cursor: "pointer",
  },
  linkicon1: {
    padding: "0 18px",
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
    marginLeft: "1px",
  },
  subMenu: {
    position: "absolute",
    top: "100%",
    left: 0,
    backgroundColor: "#fff",
    boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.2)",
    padding: "0 0 8px",
    minWidth: "300px",
    zIndex: 1,
    listStyle: "none",
  },
  subMenuLink: {
    display: "block",
    color: "#444",
    padding: "8px 16px",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "500",
    borderBottom: "1px solid #2222",
  },
  lastChild: {
    borderBottom: "none",
  },
  icon: {
    marginRight: "5px",
    color:"#fff",
  },
  mobileViewHeader: { display: "none" },
  mobileMenuIcon:{
    margin:'0px',
    height:'18px'
  }
};

export default Header;
