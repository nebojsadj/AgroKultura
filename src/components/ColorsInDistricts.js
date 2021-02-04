import React from "react";
import red from "./Data/imgs/redMap.png";
import orange from "./Data/imgs/orangeMap.png";
import yellow from "./Data/imgs/yellowMap.png";
import { Container, Row, Col, Image } from "react-bootstrap";

function ColorsInDistricts() {
  return (
    <Container className="mt-2 text-center m14">
      <Row>
        <h5 className="text-light mx-auto mhp">Proizvodnja</h5>
        <Col md={{ span: 10, offset: 1 }} xs={{ span: 10, offset: 1 }}>
          <Row>
            <Col>
              <Image src={red} alt={red} className="karta m4" />
              <span className="ml-3 text-light m44">
                Idealno voćarski centri
              </span>
            </Col>
          </Row>
          <Row>
            <Col>
              <Image src={orange} alt={orange} className="karta m4" />
              <span className="ml-3 text-light m44">
                Povoljno-uz više parametara ispitivanja
              </span>
            </Col>
          </Row>
          <Row>
            <Col className="mb-4">
              <Image src={yellow} alt={yellow} className="karta m4" />
              <span className="ml-3 text-light m44">
                Manje povoljno-uz punu ekspertizu
              </span>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default ColorsInDistricts;
