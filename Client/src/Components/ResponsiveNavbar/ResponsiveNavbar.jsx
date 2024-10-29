import React, { useState } from "react";
import { assets } from "../../assets/assets";
import styles from "./ResponsiveNavbar.module.css";
import {
  FaBars,
  FaTimes,
  FaAngleDown,
  FaAngleUp,
  FaSearch,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function ResponsiveNavbar() {
  const [isOpen, setIsOpen] = useState(false); // State for toggling main menu
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for toggling dropdown

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle main menu
    setDropdownOpen(false); // Close dropdown when main menu toggles
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen); // Toggle dropdown
  };

  const closeDropdown = () => {
    setDropdownOpen(false); // Close dropdown
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close main menu on link click
    closeDropdown(); // Close dropdown on link click
  };

  return (
    <nav className={styles.navbar}>
      <img className={styles.navImage} src={assets.logo} alt="Logo" />
      <div className={styles.toggleButton} onClick={toggleMenu}>
        {isOpen ? (
          <FaTimes className={styles.icon} />
        ) : (
          <FaBars className={styles.icon} />
        )}
      </div>
      <div className={`${styles.navbarLinks} ${isOpen ? styles.active : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/" onClick={handleLinkClick}>
              Destinations
            </Link>
          </li>

          <li>
            <Link to="" onClick={handleLinkClick}>
              Hotels
            </Link>
          </li>

          <li>
            <Link to="" onClick={handleLinkClick}>
              Foods and Restuarants
            </Link>
          </li>
          <li>
            <Link to="" onClick={handleLinkClick}>
              Things To Do
            </Link>
          </li>

          <li>
            <Link to="" onClick={handleLinkClick}>
              Events and Festivals
            </Link>
          </li>

          <li className={styles.dropdownContainer}>
            <div className={styles.dropdownToggle} onClick={toggleDropdown}>
              More.. {dropdownOpen ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {dropdownOpen && (
              <ul
                className={`${styles.dropdown} ${
                  dropdownOpen ? styles.active : ""
                }`}
              >
                <li>
                  <Link to="">Review</Link>
                </li>
                <li>
                  <Link to="">About-Us</Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <button className={styles.loginButton}>Login</button>
          </li>
          {/* New Search Bar */}
          <li className={styles.searchBar}>
            <input type="text" placeholder="Search..." />
            <button className={styles.searchButton}>
              <FaSearch />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default ResponsiveNavbar;

