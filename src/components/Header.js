import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

import logo from "../images/logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

function Header() {
  return (
    <div className="header">
      <Link to={"/"}>
        <img className="header__icon" src={logo} alt="Logo" />
      </Link>
      <div className="header__center">
        <div className="nav-menu">
          <ul className="nav-ul">
            <li className="nav-item">New Releases</li>
            <li className="nav-item">Men</li>
            <li className="nav-item">Women</li>
            <li className="nav-item">Sale</li>
            <li className="nav-item">Collections</li>
          </ul>
        </div>
      </div>
      <div className="header__search">
        <input type="text" placeholder="What are you looking for?" />
        <SearchIcon />
      </div>
      <div className="header__icons">
        <FavoriteBorderOutlinedIcon className="favorite-icon" />
        <ShoppingBagOutlinedIcon className="shoppingbag-icon" />
      </div>
    </div>
  );
}

export default Header;
