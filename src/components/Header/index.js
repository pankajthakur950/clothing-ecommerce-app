import React from "react";
import { Link } from "react-router-dom";

import "components/Header/Header.scss";
import { ReactComponent as Logo } from "assets/Logo.svg";

function Header() {
  return (
    <div className="header">
      <Link className="header__logo" to={"/"}>
        <Logo />
      </Link>
      <div className="header__nav-links">
        <Link className="nav-link" to={"/shop"}>
          SHOP
        </Link>
        <Link className="nav-link" to={"/contact"}>
          CONTACT
        </Link>
      </div>
    </div>
  );
}

export default Header;
