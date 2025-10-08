import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MenuIcon, PhoneCall, Search } from "lucide-react";
import React, { useState } from "react";

const Header = () => {
  const [navOpen, setnavOpen] = useState(false);
  return (
    <div className="header">
      <div className="logo">
        <img src="/appartment/logo_aprtement.svg" alt="logo_icon" />
        <span className="logo_title">IMMOBILIER</span>
      </div>
      <nav className="nav">
        <ul className="nav-links">
          <li className="nav_item">
            <a href="#">Accueil</a>
          </li>
          <li className="nav_item">
            <a href="#">Propriétés</a>
          </li>
          <li className="nav_item">
            <a href="#">Agents</a>
          </li>
          <li className="nav_item">
            <a href="#">Services</a>
          </li>
        </ul>
        <div
          className="search"
          onMouseEnter={(e) => (e.currentTarget.style.width = "300px")}
          onMouseLeave={(e) => (e.currentTarget.style.width = "fit-content")}>
          <Search className="nav_item" />
        </div>
      </nav>
      <div className="num_contact">
        <PhoneCall color="#CDB876" /> +212 XXXXXXXXX
      </div>
      <div className="menu-mobile">
        <MenuIcon color="#CDB876" onClick={() => setnavOpen(!navOpen)} />

        <div className={`mobile-nav ${navOpen ? "open-nav" : ""}`}>
          <ul className="mobile-nav-links">
            <li className="mobile-nav_item">
              <a href="#">Accueil</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
