import React from "react";
import { Link } from 'react-router-dom';



function Header() {
    return (
        <header style={styles.headerContainer}>
            <div style={styles.headerContainerinner}>
                <div>
                    <img src={require('../assets/logo_white.svg').default} alt="Logo" style={styles.logo} />
                </div>
                <nav>
                    <ul style={styles.desktopMenu}>
                        <li style={styles.desktopMenuli}><Link to="/">Home</Link></li>
                        <li style={styles.desktopMenuli}><Link to="/decoration">Our Services</Link></li>
                        <li style={styles.desktopMenuli}><Link to="/decoration">Our Services</Link></li>
                        <li style={styles.desktopMenuli}><Link to="/decoration">About Us</Link></li>
                        <li style={styles.desktopMenuli}><Link to="/decoration">Contact Us</Link></li>
                        {/* <li><Link to="/contact">Contact</Link></li> */}
                    </ul>
                </nav>
            </div>
        </header>
    )
}


const styles = {
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        display: "flex",
        justifyContent: "center",
        backgroundImage: 'linear-gradient(to right, #6730B2, #EE7464)',

    },
    headerContainerinner: {
        flexDirection: 'row',
        alignItems: 'space-between',
        display: "flex",
        window: "1200px"
    },
    logo: {
        window: "124px",
        height: "74px"
    },
    desktopMenu: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        listStyle: "none",
    },
    desktopMenuli: {
        paddiingRight: "10px"
    },

};

export default Header;