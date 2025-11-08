// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PhoneCall, Search } from "lucide-react";
import React from "react";

const Header = () => {
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
        <div className="search" onMouseEnter={(e) => (e.currentTarget.style.width = "300px")} onMouseLeave={(e) => (e.currentTarget.style.width = "fit-content")}>
          <Search className="nav_item"/>
        </div>
      </nav>
      <div className="num_contact"><PhoneCall color="#CDB876" /> +212 XXXXXXXXX</div>
    </div>
  );
};

export default Header;
