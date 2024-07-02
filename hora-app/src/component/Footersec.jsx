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
      { text: 'Chef for Party and Occasions', href: '/book-chef-cook-for-party' },
      { text: 'Decorations for Party and Occasions', href: '/balloon-decoration' },
      { text: 'Food Delivery for Party and Occasions', href: 'party-food-delivery-live-catering-buffet/party-food-delivery' },
      { text: 'Catering Service for Party and Occasions', href: '/party-food-delivery-live-catering-buffet/party-live-buffet-catering' },
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
      { text: 'Delhi', to: '/delhi/chef-near-you' },
      { text: 'Gurugram', to: '/gurugram/chef-near-you' },
      { text: 'Ghaziabad', to: 'ghaziabad/chef-near-you' },
      { text: 'Faridabad', to: 'faridabad/chef-near-you' },
      { text: 'Noida', to: 'noida/chef-near-you' },
      { text: 'Bengaluru', to: 'bengaluru/chef-near-you' },
      { text: 'Hyderabad', to: 'hyderabad/chef-near-you' },
      { text: 'Mumbai', to: 'mumbai/chef-near-you' },
      { text: 'Indore', to: 'indore/chef-near-you' },
      { text: 'Chennai', to: 'chennai/chef-near-you' },
      { text: 'Pune', to: 'pune/chef-near-you' },
      { text: 'Surat', to: 'surat/chef-near-you' },
      { text: 'Bhopal', to: 'bhopal/chef-near-you' },
      { text: 'Kanpur', to: 'kanpur/chef-near-you' },
      { text: 'Lucknow', to: 'lucknow/chef-near-you' },
      { text: 'Goa', to: 'goa/chef-near-you' },
    ],
  },
  {
    title: 'Decorations in your city',
    links: [
      { text: 'Delhi', to: '/delhi' },
      { text: 'Gurugram', to: '/gurugram' },
      { text: 'Ghaziabad', to: '/ghaziabad' },
      { text: 'Faridabad', to: '/faridabad' },
      { text: 'Noida', to: '/noida' },
      { text: 'Bengaluru', to: '/bengaluru' },
      { text: 'Hyderabad', to: '/hyderabad' },
      { text: 'Mumbai', to: '/mumbai' },
      { text: 'Indore', to: '/indore' },
      { text: 'Chennai', to: '/chennai' },
      { text: 'Pune', to: '/pune' },
      { text: 'Surat', to: '/surat' },
      { text: 'Bhopal', to: '/bhopal' },
      { text: 'Kanpur', to: '/kanpur' },
      { text: 'Lucknow', to: '/lucknow' },
      { text: 'Goa', to: '/goa' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { text: '+917338584828', href: 'tel:+918982321487' },
      { text: 'dev@horaservices.com', href: 'mailto:dev@horaservices.com', style: { textTransform: 'lowercase' } },
      { text: 'Contact Us', href: '/contactus' },
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


