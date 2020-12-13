import React from "react";

function Footer() {
  return (
    <div className="container-fluid bg-dark">
      <div className="row">
        <div className="col-3 ml-4 p-3">
          <h5 className="text-white">Stranice</h5>
          <ul className="list-unstyled mt-3">
            <li className="colorFooter">Pocetna</li>
            <li className="colorFooter">Usluge</li>
            <li className="colorFooter">Partneri</li>
            <li className="colorFooter">Kontakt</li>
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
          <h5 className="text-white">Agro kultura platforma</h5>
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
          <p className="text-center colorFooter">
            &copy;{new Date().getFullYear()} AgroKultura
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
