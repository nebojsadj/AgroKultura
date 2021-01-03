import React from "react";
import logo from "./Data/imgs/1.png";

function Header() {
  return (
    <div className="container-fluid text-center border">
      <img className="logoImg mt-4 mb-3 m1" src={logo} alt={logo} />
    </div>
  );
}

export default Header;
