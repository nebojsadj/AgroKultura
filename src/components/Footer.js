import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail, AiFillFacebook } from "react-icons/ai";
import { GrInstagram } from "react-icons/gr";

function Footer() {
  return (
    <div className="container-fluid bg-dark">
      <div className="row footerFlex">
        <div className="col-3 ml-4 p-3">
          <h5 className="text-white mFooter">Stranice</h5>
          <ul className="list-unstyled mt-3">
            <li>
              <Link to="/" className="colorLink colorFooter">
                Početna
              </Link>
            </li>
            <li>
              <Link to="/services" className="colorLink colorFooter">
                Usluge
              </Link>
            </li>
            <li>
              <Link to="/partners" className="colorLink colorFooter">
                Partneri
              </Link>
            </li>
            <li>
              <Link to="/consultation" className="colorLink colorFooter">
                Konsultacije
              </Link>
            </li>
            <li>
              <Link to="/contact" className="colorLink colorFooter">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
        <div className="col p-3">
          <h5 className="text-white mFooter">Kontakti</h5>
          <ul className="list-unstyled mt-3">
            <li className="colorFooter colorLink">
              <FaPhoneAlt className="mlicon" size="1.2em" /> +381 65 6922333
            </li>
            <li className="colorFooter colorLink">
              <a
                className="colorLink"
                href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                target="blanc"
              >
                <AiOutlineMail size="1.6em" className="mt-1" />{" "}
                agronoms.contact@gmail.com
              </a>
            </li>
            <li className="colorFooter colorLink">
              <a
                className="colorLink"
                href="https://www.facebook.com/Agronom-S-102574891795506"
                target="blanc"
              >
                <AiFillFacebook size="1.7em" /> Potražite nas na Facebook-u
              </a>
            </li>
            <li className="colorFooter colorLink">
              <a
                className="colorLink"
                href="https://www.facebook.com/Agronom-S-102574891795506"
                target="blanc"
              >
                <GrInstagram size="1.5em" className="mlicon mt-1" /> Potražite
                nas na Instagram-u
              </a>
            </li>
          </ul>
        </div>
        <div className="col p-3">
          <h5 className="text-white text-center mFooter">
            Agronom S platforma
          </h5>
          <ul className="list-unstyled mt-3">
            <li className="colorFooter">
              Naš cilj je pametno ulaganje, planska sadnja i visoki prinos. Tu
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
            &copy;{new Date().getFullYear()} Agronom S
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
