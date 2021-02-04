import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail, AiFillFacebook } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io";
import { Col, Container, Row } from "react-bootstrap";

function Footer() {
  return (
    <Container fluid className="bg-dark">
      <Row className="footerFlex">
        <Col md={{ span: 3 }} xs={{ span: 3 }} className="ml-4 pt-3">
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
        </Col>
        <Col className="pt-3">
          <h5 className="text-white mFooter">Kontakti</h5>
          <ul className="list-unstyled mt-3">
            <li className="colorFooter colorLink">
              <FaPhoneAlt className="mlicon" size="1.2em" /> +381 65 6922333
            </li>
            <li className="colorFooter colorLink">
              <FaPhoneAlt className="mlicon" size="1.2em" /> +381 65 6922335
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
                href="https://www.youtube.com/channel/UCQyhPIsngZQXH_KJSqsQOQA"
                target="blanc"
              >
                <IoLogoYoutube size="1.5em" className="mlicon mt-1" />{" "}
                Pogledajte naš YouTube kanal
              </a>
            </li>
          </ul>
        </Col>
        <Col className="pt-3 footAgr">
          <h5 className="text-white text-center mFooter">
            Agronom S platforma
          </h5>
          <ul className="list-unstyled mt-3">
            <li className="colorFooter">
              Naš cilj je pametno ulaganje, planska sadnja i visoki prinos. Tu
              samo da Vam damo sve neophodne informacije.
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <div id="line"></div>
      </Row>
      <Row className="mt-3">
        <Col>
          <p className="text-center sizeCopy colorFooter">
            &copy;{new Date().getFullYear()} Agronom S
          </p>
          <p className="text-center sizeCopy colorFooter design">
            Design and development by DjordjevicN
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
