import React from "react";
import "../styles/Navbar.css";

import Logo from "../assets/pizzaLogo.png";
import { useState } from "react";

import { Link } from "react-router-dom";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { ShoppingCart } from "phosphor-react";

const carttext = "CART";

//Added Functionality

const Navbar = () => {
  const [openLinks, setOpenLinks] = useState(false);
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="./cart">
            <ShoppingCart size={32} />
          </Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="./cart">
          <ShoppingCart size={32} />
          {carttext}
        </Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={toggleNavbar}>
          <AcUnitIcon />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
