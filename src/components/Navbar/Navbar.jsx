import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import './Navbar.css';
import { Link as RouterLink } from 'react-router-dom';  // Import Link from react-router-dom
import { Link as ScrollLink } from 'react-scroll';      // Import Link from react-scroll

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='navbar'>
      <div className="navbar-container">
        <img className='logo' src={logo} alt="Logo" />
        <ul className={`navbar-ul ${isOpen ? 'open' : ''}`}>
          <li className='li-class-projects'><RouterLink to="/">Home</RouterLink></li>  {/* Use RouterLink for Home */}
          <li className='li-class-projects'>
            <ScrollLink
              to="section2"
              spy={true}
              smooth={true}
              duration={500}
            >
              Resume
            </ScrollLink>
          </li>
          <li className='li-class-projects'>
            <ScrollLink
              to="section3"
              spy={true}
              smooth={true}
              duration={500}
            >
              Projects
            </ScrollLink>
          </li>
          <li className='li-class-projects'>
          <ScrollLink
              to="section4"
              spy={true}
              smooth={true}
              duration={500}
            >
              Contact
            </ScrollLink>
          </li>
        </ul>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>
    </div>
  );
};

export default Navbar;
