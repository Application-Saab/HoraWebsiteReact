import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import { useNavigate } from 'react-router-dom';

function Header() {
    const [showDeliverySubMenu, setShowDeliverySubMenu] = useState(false);
    const [showServicesSubMenu, setShowServicesSubMenu] = useState(false);
    const [showDecorationSubMenu , setShowDecorationSubMenu] = useState(false);
    const navigate = useNavigate();

    const openCatItems = (subCategory) => {
        navigate(`/decoration-cat-page/${subCategory}`); // Navigate to the decoration category page with the subcategory
    };
    return (
        <header style={styles.headerContainer}>
            <div style={styles.headerContainerinner}>
                <div>
                    {/* Redirect to /home on click of logo */}
                    <Link to="/home">
                        <img src={require('../assets/logo_white.svg').default} alt="Logo" style={styles.logo} />
                    </Link>
                </div>
                <nav>
                    <ul style={styles.desktopMenu}>
                    {/* <li style={styles.desktopMenuli}><Link to="/decoration" style={styles.link}>Decoration herer</Link></li> */}

                    <li style={styles.desktopMenuli} onMouseEnter={() => setShowDecorationSubMenu(true)} onMouseLeave={() => setShowDecorationSubMenu(false)}>
                            {/* <Link to="/decoration" style={styles.link}>Decoration</Link> */}
                            <span style={styles.link}>Decoration</span>
                            {showDecorationSubMenu && (
                                <ul style={styles.subMenu}>
                                  <li><Link to="/decoration-cat-page/KidsBirthday" style={styles.subMenuLink} onClick={() => openCatItems('KidsBirthday')}>Kids Birthday</Link></li>
                                      <li><Link to="/decoration-cat-page/BabyShower" style={styles.subMenuLink} onClick={() => openCatItems('BabyShower')}>Baby Shower</Link></li>
                                      <li><Link to="/decoration-cat-page/WelcomeBaby" style={styles.subMenuLink} onClick={() => openCatItems('WelcomeBaby')}>Welcome Baby</Link></li>
                                     <li><Link to="/decoration-cat-page/Birthday" style={styles.subMenuLink} onClick={() => openCatItems('Birthday')}>Birthday</Link></li>
                                    <li><Link to="/decoration-cat-page/FirstNight" style={styles.subMenuLink} onClick={() => openCatItems('FirstNight')}>First Night</Link></li>
                                    <li><Link to="/decoration-cat-page/Anniversary" style={{ ...styles.subMenuLink, ...styles.lastChild }} onClick={() => openCatItems('Anniversary')}>Anniversary</Link></li>
                                </ul>
                            )}
                            </li>
                        <li style={styles.desktopMenuli}><Link to="/chef" style={styles.link}>Chef at Home</Link></li>
                        <li style={styles.desktopMenuli} onMouseEnter={() => setShowDeliverySubMenu(true)} onMouseLeave={() => setShowDeliverySubMenu(false)}>
                            <span style={styles.link}>Food Delivery</span>
                            {showDeliverySubMenu && (
                                <ul style={styles.subMenu}>
                                    <li><Link to="/meal" style={styles.subMenuLink}>Hora Meal</Link></li>
                                    <li><Link to="/buffet" style={styles.subMenuLink}>Hora Buffet</Link></li>
                                    <li><Link to="/live-catering" style={{ ...styles.subMenuLink, ...styles.lastChild }}>Hora Live Catering</Link></li>
                                </ul>
                            )}
                        </li> 
                        <li style={styles.desktopMenuli} onMouseEnter={() => setShowServicesSubMenu(true)} onMouseLeave={() => setShowServicesSubMenu(false)}>
                            <span style={styles.link}>Other Services</span>
                            {showServicesSubMenu && (
                                <ul style={styles.subMenu}>
                                    <li><Link to="/waiter" style={styles.subMenuLink}>Waiter</Link></li>
                                    <li><Link to="/bartender" style={styles.subMenuLink}>Bartender</Link></li>
                                    <li><Link to="/cleaner" style={{ ...styles.subMenuLink, ...styles.lastChild }}>Cleaner</Link></li>
                                </ul>
                            )}
                        </li>
                   <li style={styles.desktopMenuli}><Link to="/decoration" style={styles.link}>Cakes</Link></li> 

                    </ul>
                </nav>
                <div>
                    <ul style={styles.desktopMenu}>
                        <li style={styles.desktopMenuli1}>
                            <Link to="/login" style={styles.linkicon}>
                                <FontAwesomeIcon icon={faUser} style={styles.icon} />
                                <span style={{marginLeft:"3px"}}>Login</span>
                            </Link>
                        </li>
                        <li style={styles.desktopMenuli}>
                            <Link to="/cart" style={styles.linkicon1}>
                                <FontAwesomeIcon icon={faShoppingCart} style={styles.icon} />
                                <span style={{marginLeft:"3px"}}>Cart</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

const styles = {
    headerContainer: {
        // background: 'linear-gradient(120deg, rgba(157,74,147,1) 0%, rgba(204,98,119,1) 35%, rgba(234,113,102,1) 100%)',
       backgroundColor:"rgb(157, 74, 147)",
        padding: "0 30px",
        boxShadow:"0px 4px 4px 0px rgba(0,0,0,0.25)",
    },
    headerContainerinner: {
        justifyContent: "space-between",
        alignItems: 'center',
        display: "flex",
        window: "1200px"
    },
    logo: {
        width: "109px",
        height: "56px"
    },
    desktopMenu: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        listStyle: "none",
    },
    desktopMenuli: {
        paddingRight: "16px",
        position: "relative", // Added position relative for the sub-menu
    },
    desktopMenuli1: {
        paddingRight: "3px",
        position: "relative", // Added position relative for the sub-menu
    },
    link: {
        color: "#fff",
        textDecoration: "none",
        fontSize:"16px",
        fontWeight:"500",
    },
    linkicon:{
        color: "#fff",
        textDecoration: "none",
        fontSize:"16px",
        fontWeight:"500", 
    },
    linkicon1:{
        padding:"0 18px",
        color: "#fff",
        textDecoration: "none",
        fontSize:"16px",
        marginLeft: "1px",
    },
    subMenu: {
        position: "absolute",
        top: "100%", // Position the sub-menu below the parent menu
        left: 0,
        backgroundColor: "#fff", // Background color for sub-menu
        boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)", // Box shadow for sub-menu
        padding: "8px 0",
        // borderRadius: "4px",
        minWidth: "300px",
        zIndex: 1, // Ensure the sub-menu is above other elements
        listStyle:"none"
    },
    subMenuLink: {
        display: "block",
        // color: "#da584a",
        color:"#444",
        padding: "8px 16px",
        textDecoration: "none",
        fontSize: "16px",
        fontWeight: "500",
        borderBottom:"1px solid #2222"
    },
    lastChild: {
        borderBottom: "none"
      },
    icon: {
        marginRight: "5px",
    },
};

export default Header;
