import React from "react";
import logo from "./Data/imgs/agroKulturaLogo.png";

function Header() {
  return (
    <div className="container-fluid text-center border">
      <img className="logoImg mb-1" src={logo} alt={logo} />
    </div>
  );
}

export default Header;
