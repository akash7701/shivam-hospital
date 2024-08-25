import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaPhoneAlt, FaBars, FaTimes, FaEnvelope, FaInstagram, FaFacebookF, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <StyledTopHeader>
        <div className="top-header-container">
          <div className="contact-left">
            <a href="mailto:info@shivamhospital.com" className="email">
              <FaEnvelope className="icon" />
              info@shivamhealthcare.in
            </a>
            <span className="phone">
              <FaPhoneAlt className="icon" />
              +91-124-4039002
            </span>
          </div>
          <div className="social-links">
            <a href="https://www.instagram.com/shivamhospitalgurugram/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" />
            </a>
            <a href="https://www.facebook.com/shivamhospital2004/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="social-icon" />
            </a>
            <a href="https://www.youtube.com/@shivamhospital" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/company/shivam-hospital/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="social-icon" />
            </a>
          </div>
        </div>
      </StyledTopHeader>
      <StyledHeader>
        <div className="header-container">
            <div className="hospital-name">
            <h1>SHIVAM</h1>
            <h1>HOSPITAL</h1>
            </div>
          <div className="logo">
            <Link to="/">
              <img src="logo.png" alt="Shivam Hospital" />
            </Link>
          </div>
          <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
            <ul>
              <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
              <li><Link to="/about" onClick={toggleMenu}>About Us</Link></li>
              <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
              <li><Link to="/departments" onClick={toggleMenu}>Departments</Link></li>
              <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
            </ul>
          </nav>
          <Link to="/appointment" className="appointment-button" onClick={toggleMenu}>
            Make an Appointment
          </Link>
          <div className="menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </StyledHeader>
      <StyledSmallHeader>
        <div className="small-header-container">
          <div className="small-logo">
            <img src="logo.png" alt="Small Logo" /> {/* Replace with your small logo */}
          </div>
          <div className="slogan">
            Care, Compassion, Commitment & Cost Effective
          </div>
        </div>
      </StyledSmallHeader>
    </>
  );
};

const StyledTopHeader = styled.header`
  width: 100%;
  background-color: #b30000; /* Red color for top header */
  color: #fff;
  padding: 5px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;

  .top-header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    width: 100%;

    .contact-left {
      display: flex;
      align-items: center;
      gap: 20px;

      .email, .phone {
        display: flex;
        align-items: center;
        color: #fff;
        text-decoration: none;
      }

      .email .icon, .phone .icon {
        margin-right: 8px;
      }
    }

    .social-links {
      display: flex;
      gap: 15px;

      .social-icon {
        color: #fff;
        font-size: 18px;
        transition: color 0.3s ease;
      }

      .social-icon:hover {
        color: #ffd700; /* Change color on hover */
      }
    }
  }
`;

const StyledHeader = styled.header`
  width: 100%;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  padding: 10px 0;

  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    width: 100%;
  }

  .hospital-name {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 20px;
    color: #b30000; 
  }

  .hospital-name h1 {
    font-size: 25px;
    font-weight: bold;
    margin: 0;
    line-height: 1;
  }

  .hospital-name h2 {
    font-size: 20px;
    font-weight: bold;
    margin: 0;
    line-height: 1;
  }

  .logo {
    display: flex;
    align-items: center;
  }

  .logo img {
    height: 50px;
    margin-left: 0px; 
  }

  .nav-menu {
    flex: 1;
    display: flex;
    justify-content: center; 
  }

  .nav-menu ul {
    display: flex;
    list-style: none;
    align-items: center;
    gap: 20px;
    padding: 0;
    margin: 0;
  }

  .nav-menu ul li a {
    text-decoration: none;
    color: #333;
    font-weight: 600;
    position:relative;
    padding: 5px 0;
    transition: color 0.3s ease;
  }

  .nav-menu ul li a::after {
    content: '';
    position: absolute;
    width: 0;
    height: 3px;
    background: #ff0000;
    left: 0;
    bottom: -5px;
    transition: width 0.3s ease;
  }

  .nav-menu ul li a:hover {
    color: #ff0000;
  }

  .nav-menu ul li a:hover::after {
    width: 100%;
  }

  .appointment-button {
    background-color: #b30000;
    color: #fff;
    padding: 8px 16px;
    text-decoration: none;
    border-radius: 20px;
    font-weight: bold;
    transition: background-color 0.3s ease, transform 0.3s ease;
    border: 2px solid #b30000;
    margin-left: 20px; 
  }

  .appointment-button:hover {
    background-color: #fff;
    color: #ff0000;
    transform: scale(1.05);
    border: 2px solid #ff0000;
  }

  .menu-toggle {
    display: none;
    font-size: 24px;
    color: #333;
    cursor: pointer;
    transition: color 0.3s ease;
    margin-left: 10px; 
  }

  @media (max-width: 768px) {
    .nav-menu {
      justify-content: flex-end; 
    }

    .nav-menu ul {
      display: none;
    }

    .nav-menu.open ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      padding: 20px 0;
      position: absolute;
      top: 60px;
      left: 0;
      right: 0;
      background-color: #fff;
      border-top: 1px solid #eee;
    }

    .menu-toggle {
      display: block;
      margin-right:50px; 
    }
  }
`;


const StyledSmallHeader = styled.header`
  width: 100%;
  background-color: #b3000;
  padding: 10px 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;

  .small-header-container {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    gap: 20px;
    position: relative;
    z-index: 1;
  }

  .small-logo img {
    height: 30px; /* Adjust size as needed */
  }

  .slogan {
    font-size: 16px;
    font-weight: bold;
    color: #333;
    text-align: center;
    margin-right:40px;
  }


`;

export default Header;
