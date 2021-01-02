import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="container-fluid bg-dark">
      <div className="row">
        <div className="col-3 ml-4 p-3">
          <h5 className="text-white">Stranice</h5>
          <ul className="list-unstyled mt-3">
            <li>
              <Link to="/" className="colorLink">
                Pocetna
              </Link>
            </li>
            <li>
              <Link to="/services" className="colorLink">
                Usluge
              </Link>
            </li>
            <li>
              <Link to="/partners" className="colorLink">
                Partneri
              </Link>
            </li>
            <li>
              <Link to="/contact" className="colorLink">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
        <div className="col p-3">
          <h5 className="text-white">Usluge</h5>
          <ul className="list-unstyled mt-3">
            <li className="colorFooter">Poljoprivredni plan</li>
            <li className="colorFooter">Online savetovanje</li>
            <li className="colorFooter">Terenske posete</li>
            <li className="colorFooter">Postavi pitanje</li>
          </ul>
        </div>
        <div className="col p-3">
          <h5 className="text-white">AGRONOM S platforma</h5>
          <ul className="list-unstyled mt-3">
            <li className="colorFooter">
              Nas cilj je pametno ulaganje, planska sadnja i veliki prinos. Tu
              samo da Vam damo sve neophodne informacije.
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div id="line"></div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <p className="text-center sizeCopy colorFooter">
            &copy;{new Date().getFullYear()} AGRONOM S
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
