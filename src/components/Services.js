import React from "react";
import {
  Accordion,
  Card,
  Button,
  Carousel,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import About from "./About";
import img1 from "./Data/imgs/img1.jpg";
import img2 from "./Data/imgs/img2.jpg";
import img3 from "./Data/imgs/img3.jpg";
import img5 from "./Data/imgs/img5.jpg";
import img6 from "./Data/imgs/img6.jpg";
import img8 from "./Data/imgs/img8.jpg";
import img10 from "./Data/imgs/img10.jpg";
import img12 from "./Data/imgs/img12.jpg";
import img13 from "./Data/imgs/img13.jpg";
import img15 from "./Data/imgs/img15.jpg";
import img16 from "./Data/imgs/img16.jpg";
import img17 from "./Data/imgs/img17.jpg";
import img18 from "./Data/imgs/img18.jpg";
import img20 from "./Data/imgs/img20.jpg";
import img21 from "./Data/imgs/img21.jpg";
import img22 from "./Data/imgs/img22.jpg";
import { services } from "./Data/DataText";

function Services() {
  const imgs = [
    img1,
    img2,
    img3,
    img5,
    img6,
    img8,
    img10,
    img12,
    img13,
    img15,
    img16,
    img17,
    img18,
    img20,
    img21,
    img22,
  ];

  return (
    <Container className="mt-5 mb-5">
      <Row>
        <Col
          md={{ span: 10, offset: 1 }}
          xs={{ span: 12 }}
          className="contactWrap border"
        >
          <Accordion className="mt-3 mb-3">
            <Card className="text-center accordionCard">
              <Card.Header className="border">
                <Accordion.Toggle
                  className="btnServices"
                  as={Button}
                  variant="outline-light"
                  size="lg"
                  block
                  eventKey="0"
                  style={{ backgroundColor: "rgb(105, 175, 105)" }}
                >
                  Podizanje novih zasada i održavanje postojećih
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <p className="accFont btnServices text-danger">
                    Kod podizanja novih zasada vršimo usluge:
                  </p>
                  <p className="accFont btnServices">
                    <span className="text-danger">A.</span> Izrada Projekta (2D
                    prikaz i Biznis plan) u koje spada:
                  </p>
                  <ul className="list-group-flush list-unstyled accFont btnServices">
                    {services.map((el, i) => (
                      <li className="list-group-item" key={el}>
                        <span className="text-danger">{`${i + 1}.`}</span> {el}
                      </li>
                    ))}
                  </ul>
                  <p className="accFont btnServices">
                    <span className="text-danger">
                      Kod održavanja već postojećih zasada vršimo usluge:
                    </span>
                  </p>
                  <ul className="list-group-flush list-unstyled accFont btnServices">
                    <li className="list-group-item">
                      <span className="text-danger">1.</span> Izrade plana
                      prihrane i zaštite.
                    </li>
                    <li className="list-group-item">
                      <span className="text-danger">2.</span> Rezidbe voća.
                    </li>
                    <li className="list-group-item">
                      <span className="text-danger">3.</span> Redovne kontrole i
                      obilaska zasada.
                    </li>
                  </ul>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="text-center accordionCard">
              <Card.Header className="border">
                <Accordion.Toggle
                  className="btnServices"
                  as={Button}
                  variant="outline-light"
                  size="lg"
                  block
                  eventKey="1"
                  style={{ backgroundColor: "rgb(105, 175, 105)" }}
                >
                  Online savetovanje
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <p className="accFont btnServices">
                    Komunikacija putem Viber-a, Skype-a, Zoom-a, Microsoft
                    times-a, u sistemu jedan na jedan ili organizovanje
                    radionica sa više učesnika.
                  </p>
                  <p className="accFont btnServices">
                    Kako biste se posavetovali sa nama potrebno je popuniti
                    kratku anketu na nasoj stranici za{" "}
                    <Link to="/consultation">konsultacije</Link>.
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Col>
      </Row>
      <Row>
        <Col
          md={{ span: 10, offset: 1 }}
          xs={{ span: 12 }}
          className="contactWrap border mt-4"
        >
          <Carousel
            className="mt-3 mb-3"
            prevIcon={
              <span
                aria-hidden="true"
                className="carousel-control-prev-icon carouselControl"
              />
            }
            nextIcon={
              <span
                aria-hidden="true"
                className="carousel-control-next-icon carouselControl"
              />
            }
          >
            {imgs.map((item) => (
              <Carousel.Item interval={1000} key={item + "vocnjak"}>
                <img className="d-block w-100 slajd" src={item} alt="vocnjak" />
                <Carousel.Caption>
                  <h5>Agronom S</h5>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
      <Row className="mt-4">
        <About />
      </Row>
    </Container>
  );
}

export default Services;
