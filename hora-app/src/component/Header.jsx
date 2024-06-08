import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBars,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import avtar from '../assets/avtar.jpg';
import backIcon from '../assets/back_arrow1.png';
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const [showDrawer, setShowDrawer] = useState(false);
  const [showDecorationSubMenu, setShowDecorationSubMenu] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };
  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };
  const drawerRef = useRef(null);

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

  const openLink = () => {
    window.open("https://play.google.com/store/apps/details?id=com.hora", "_blank");
  };

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    localStorage.clear();
    navigate("/");
    alert("Logout Successfully");
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
                <Link to="/" style={styles.link}>
                  Home
                </Link>
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
                    <li>
                      <Link to="/decoration" style={styles.subMenuLink} onClick={() => openCatItems("KidsBirthday")}>
                        Decoration
                      </Link>
                    </li>
                    <li>
                      <Link to="/chefOrder" style={styles.subMenuLink} onClick={() => openCatItems("BabyShower")}>
                        Hire a Chef
                      </Link>
                    </li>
                    <li>
                      <Link to="/" style={styles.subMenuLink} onClick={() => openCatItems("FirstNight")}>
                        Entertainment
                      </Link>
                    </li>
                    <li>
                      <Link to="/" style={styles.subMenuLink} onClick={() => openCatItems("Birthday")}>
                        Gift & Party Supplies
                      </Link>
                    </li>

                    <li>
                      <Link to="/" style={{ ...styles.subMenuLink, ...styles.lastChild }} onClick={() => openCatItems("Anniversary")}>
                        Food Delivery
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li style={styles.desktopMenuli}>
                <Link to="https://horaservices.com/ContactUs.html" style={styles.link}>
                  Contact Us
                </Link>
              </li>
              <li style={styles.desktopMenuli}>
                <Link to="https://horaservices.com/AboutUs.html" style={styles.link}>
                  About Us
                </Link>
              </li>
              <li style={styles.desktopMenuli}>
                <Link to="/" style={styles.link}>
                  Customer Reviews
                </Link>
              </li>
            </ul>
          </nav>
          <div>
            <ul style={styles.desktopMenu}>
              <li style={styles.desktopMenuli1}>
                {localStorage.getItem("isLoggedIn") !== "true" ? (
                  <Link to="/login" style={styles.linkicon}>
                    <FontAwesomeIcon icon={faUser} style={styles.icon} />
                    <span style={{ marginLeft: "3px" }}>Login</span>
                  </Link>
                ) : (
                  <a style={styles.linkicon} onClick={handleLogout}>
                    <FontAwesomeIcon icon={faUser} style={styles.icon} />
                    <span style={{ marginLeft: "3px" }}>Logout</span>
                  </a>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div style={styles.mobileViewHeader} className='mobileViewHeader py-2'>
          <div className="d-flex align-items-center gap-3">
            {/* Conditional rendering based on pathname */}
            {location.pathname.includes("/decoration/product") ||
              location.pathname.includes("/selectDate") ||
              location.pathname.includes("decoration/occasions") ||
              location.pathname.includes("selectdate") ||
              location.pathname.includes("/checkout") ? (
              <a>
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
              </a>

            ) : (
              <>
                <FontAwesomeIcon
                  icon={faBars}
                  className="mobileMenuIcon"
                  style={styles.mobileMenuIcon}
                  onClick={toggleDrawer}
                />
                <Link to="/">
                  <img src={require("../assets/logo_white.svg").default} alt="Logo" style={{ width: "85px", height: "auto" }} />
                </Link>
              </>
            )}


          </div>

          <div className="btn mobiledownloadappbutn home-btn" onClick={openLink}>{'Download Our App'}</div>
        </div>
      </div>
      {showDrawer && <Drawer closeDrawer={toggleDrawer} drawerRef={drawerRef} handleLogout={handleLogout} />}
    </header>
  );
}

const Drawer = ({ closeDrawer, drawerRef, handleLogout }) => {
  const style = {
    drawer: {
      width: "70%",
      backgroundColor: "rgb(237, 237, 237)",
      padding: "20px",
      boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.2)",
      position: "fixed",
      top: "0%",
      left: "0%",
      zIndex: 999,
      height: "100vh",
      transition: "left 0.3s ease-in-out",
      padding: "20px 0 0 20px",
    },
    drawerLink: {
      color: "#000",
      textDecoration: "none",
      fontSize: "16px",
      fontWeight: "500",
      margin: "10px 0",
      display: "block",
    },
  };

  return (
    <div style={style.drawer} ref={drawerRef}>
      <Link to="/">
        <img src={avtar} alt="Logo" style={{ width: "80px" }} />
      </Link>
      {localStorage.getItem("isLoggedIn") !== "true" ? (
        <Link to="/login" style={style.drawerLink} onClick={closeDrawer}>
          Login
        </Link>
      ) : (
        <>
          <h1 style={{ fontSize: "16px", marginBottom: "12px" }}>Welcome to Hora</h1>
          <Link to="/" style={style.drawerLink} onClick={() => {
            handleLogout();
            closeDrawer();
          }}>
            Logout
          </Link>
        </>
      )}


      <Link to="/decoration" style={style.drawerLink} onClick={closeDrawer}>
        Decoration
      </Link>
      <Link to="/chefOrder" style={style.drawerLink} onClick={closeDrawer}>
        Hire a Chef
      </Link>
      <Link to="/" style={style.drawerLink} onClick={closeDrawer}>
        Food Delivery
      </Link>
      <Link to="/" style={style.drawerLink} onClick={closeDrawer}>
        Gift & Party Supplies
      </Link>
      <Link to="/" style={style.drawerLink} onClick={closeDrawer}>
        Entertainment
      </Link>
      <Link to="/" style={style.drawerLink} onClick={closeDrawer}>
        Hospitality Service
      </Link>
      <Link to="https://horaservices.com/AboutUs.html" style={style.drawerLink} onClick={closeDrawer}>
        About Us
      </Link>
      <Link to="https://horaservices.com/ContactUs.html" style={style.drawerLink} onClick={closeDrawer}>
        Contact Us
      </Link>
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
  },
  linkicon: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "500",
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
  },
  mobileViewHeader: { display: "none" },
  mobileMenuIcon:{
    margin:'0px',
    height:'18px'
  }
};

export default Header;