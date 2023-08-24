import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-center'>
        <div className='footer-logo'>GoFoodsNG</div>
        <ul className='footer-links'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About Us</Link>
          </li>
          <li>
            <Link to='/contact'>Contact Us</Link>
          </li>
        </ul>
        <div className='footer-socials'>
          <a href='https://www.instagram.com/'>
            <FaInstagram color='white' className='icons' />
          </a>
          <a href='https://www.facebook.com/'>
            <FaFacebookF color='white' className='icons'/>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
