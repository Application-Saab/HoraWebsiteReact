import React from "react";
import frame_footer from "../assets/frame_footer.png";
import { Link } from 'react-router-dom';
import horaFooterImage from '../assets/hora-footer-bg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';

const footerColumns = [
  {
    title: 'About Hora',
    links: [
      { text: 'My Order', to: '/orderlist' },
      { text: 'About Us', href: 'https://horaservices.com/AboutUs.html' },
      { text: 'Private Policy', href: 'https://horaservices.com/privacy-policy.html' },
      { text: 'Terms & Condition', href: 'https://horaservices.com/termCondition.html' },
      { text: 'Sitemap', href: 'https://horaservices.com/sitemap.xml' },
    ],
  },
  {
    title: 'Services',
    links: [
      { text: 'Chef for Party and Occasions', href: '/chefOrder' },
      { text: 'Decorations for Party and Occasions', href: '/decoration' },
      { text: 'Food Delivery for Party and Occasions', href: 'https://horaservices.com/ContactUs.html' },
      { text: 'Catering Service for Party and Occasions', href: 'https://horaservices.com/ContactUs.html' },
      { text: 'Waiter for Party and Occasions', href: 'https://horaservices.com/ContactUs.html' },
      { text: 'Bar Tender for Party and Occasions', href: 'https://horaservices.com/ContactUs.html' },
      { text: 'Cleaner for Party and Occasions', href: 'https://horaservices.com/ContactUs.html' },
      { text: 'Occasions', href: 'https://horaservices.com/Occasion.html' },
      { text: 'Cuisine', href: 'https://horaservices.com/Cuisine.html' },
    ],
  },
  {
    title: 'Chef in your city',
    links: [
      { text: 'Delhi', to: 'citypage/delhi' },
      { text: 'Gurugram', to: 'citypage/gurugram' },
      { text: 'Ghaziabad', to: 'citypage/ghaziabad' },
      { text: 'Faridabad', to: 'citypage/faridabad' },
      { text: 'Noida', to: 'citypage/noida' },
      { text: 'Bengaluru', to: 'citypage/bengaluru' },
      { text: 'Hyderabad', to: 'citypage/hyderabad' },
      { text: 'Mumbai', to: 'citypage/mumbai' },
      { text: 'Indore', to: 'citypage/indore' },
      { text: 'Chennai', to: 'citypage/chennai' },
      { text: 'Pune', to: 'citypage/pune' },
      { text: 'Surat', to: 'citypage/surat' },
      { text: 'Bhopal', to: 'citypage/bhopal' },
      { text: 'Kanpur', to: 'citypage/kanpur' },
      { text: 'Lucknow', to: 'citypage/lucknow' },
      { text: 'Goa', to: 'citypage/goa' },
    ],
  },
  {
    title: 'Decorations in your city',
    links: [
      { text: 'Delhi', to: 'decorationcitypage/delhi' },
      { text: 'Gurugram', to: 'citypage/gurugram' },
      { text: 'Ghaziabad', to: 'citypage/ghaziabad' },
      { text: 'Faridabad', to: 'citypage/faridabad' },
      { text: 'Noida', to: 'citypage/noida' },
      { text: 'Bengaluru', to: 'citypage/bengaluru' },
      { text: 'Hyderabad', to: 'citypage/hyderabad' },
      { text: 'Mumbai', to: 'citypage/mumbai' },
      { text: 'Indore', to: 'citypage/indore' },
      { text: 'Chennai', to: 'citypage/chennai' },
      { text: 'Pune', to: 'citypage/pune' },
      { text: 'Surat', to: 'citypage/surat' },
      { text: 'Bhopal', to: 'citypage/bhopal' },
      { text: 'Kanpur', to: 'citypage/kanpur' },
      { text: 'Lucknow', to: 'citypage/lucknow' },
      { text: 'Goa', to: 'citypage/goa' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { text: '+918982321487', href: 'tel:+918982321487' },
      { text: 'dev@horaservices.com', href: 'mailto:dev@horaservices.com', style: { textTransform: 'lowercase' } },
      { text: 'Contact Us', href: 'https://horaservices.com/ContactUs.html' },
    ],
  },
];

function Footer() {
  return (
    <footer style={style.footer}>
      <div style={style.frameBlack}></div>
      <Container>
        <Row className="py-4">
          {footerColumns.map((column, index) => (
            <Col key={index} md={3} sm={6} xs={12} className="mb-3">
              <h2 className="footerheading">{column.title}</h2>
              <ul className="list-unstyled">
                {column.links.map((link, idx) => (
                  <li key={idx}>
                    {link.to ? (
                      <Link to={link.to} style={style.link}>{link.text}</Link>
                    ) : (
                      <a href={link.href} style={style.link}>{link.text}</a>
                    )}
                  </li>
                ))}
              </ul>
            </Col>
          ))}
        </Row>
        <Row className="text-center align-items-center justify-content-center">
          <Col>
            <div className="social-icons">
              <a href="https://www.facebook.com/profile.php?id=61550111701616" target="_blank" rel="noopener noreferrer" className="mx-2" style={{ color: "inherit" }}>
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://www.instagram.com/horaservices/?fbclid=IwAR0PktJ-rl5rKC6YGSZ8BSw3m8o9qMfLpJchO17FCEZuCXKxvASZWRymifA" target="_blank" rel="noopener noreferrer" className="mx-2" style={{ color: "inherit" }}>
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://www.youtube.com/channel/UCj5gMUjptHut0aGYHxCbE5g" target="_blank" rel="noopener noreferrer" className="mx-2" style={{ color: "inherit" }}>
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </Col>
          <Col>
            <p className="copy p-0 m-0">© HORA - All rights reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

const style = {
  footer: {
    background: `url(${horaFooterImage})`,
    padding: '10px 0',
    color: '#fff',
  },
  frameBlack: {
    background: `url(${frame_footer}) 0 0 repeat-x`,
    backgroundSize: '10px 3px',
    height: '3px',
    width: '100%',
    position: 'absolute',
    top: '-3px',
  },
  link: {
    color: 'inherit',
    textDecoration: 'none',
  },
}

export default Footer;


