import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import img4 from "./Data/imgs/img4.jpg";

function About() {
  return (
    <Col
      md={{ span: 10, offset: 1 }}
      xs={{ span: 12 }}
      className="contactWrap border text-light"
    >
      <Row>
        <Col className="text-center mt-3">
          <Image src={img4} alt="kupina" className="aboutImg" />
        </Col>
        <Col className="mt-3 mb-3">
          <h4 className="text-center m22">Nekoliko reči o nama.</h4>
          <p className="m212">
            <b className="ml-4">Platforma AGRONOM S</b> nastala je kao pozitivno
            razmišljanje i uspostavljanje pravih sistema vrednosti u
            Poljoprivredi. Zasnovana na tradicionalnom pristupu(gostoprimstvu)
            pružanja stručnih informacija uz pomoc modernih(online) načina
            komunikacije čini da postanemo <b>JEDINSTVENI I NAJBOLJI.</b>
          </p>
          <p className="m212">
            <b className="ml-4">Cilj:</b> upoznavanje proizvođača sa savremenim
            načinom proizvodnje koji je prilagođen datim uslovima u kojima se
            nalazi.
          </p>
        </Col>
      </Row>
    </Col>
  );
}

export default About;
