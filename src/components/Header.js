import React from "react";
import logo from "./Data/imgs/agroLogo.png";

function Header() {
  return (
    <div className="container-fluid text-center border">
      <img className="logoImg mt-4 mb-3" src={logo} alt={logo} />
    </div>
  );
}

export default Header;
