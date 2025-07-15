import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo1 from "../../images/sarthak/logo.jpg";
import "../css/Navbar.css";

const navLinks = [
  { to: "/", label: { hi: "होम", en: "Home" } },
  { to: "/about", label: { hi: "हमारे बारे में", en: "About Us" } },
  { to: "/benefits", label: { hi: "सोलर के लाभ", en: "Solar Benefits" } },
  { to: "/services", label: { hi: "सेवाएँ", en: "Services" } },
  { to: "/process", label: { hi: "कैसे काम करता है", en: "How It Works" } },
  { to: "/faq", label: { hi: "प्रश्न", en: "FAQ" } },
  { to: "/gallery", label: { hi: "परियोजनाएँ", en: "Gallery" } },
  { to: "/contact", label: { hi: "संपर्क करें", en: "Contact" } },
];

const Navbar = ({ language, setLanguage }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const handleLanguageToggle = () => setLanguage(language === "hi" ? "en" : "hi");

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo-link">
          <img src={logo1} alt="Sarthak Solar" className="navbar-logo" />
        </Link>
        <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.to} className={location.pathname === link.to ? "active" : ""}>
              <Link to={link.to} onClick={() => setMenuOpen(false)}>
                <span>{link.label[language]}</span>
              </Link>
            </li>
          ))}
          <li className="lang-toggle-li">
            <label className="switch">
              <input
                type="checkbox"
                checked={language === "en"}
                onChange={handleLanguageToggle}
              />
              <span className="slider"></span>
            </label>
            <span className="lang-label">{language === "hi" ? "हिंदी" : "EN"}</span>
          </li>
        </ul>
        <button className="navbar-menu-btn" onClick={toggleMenu} aria-label="Menu">
          <span className="navbar-menu-icon">&#8942;</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;