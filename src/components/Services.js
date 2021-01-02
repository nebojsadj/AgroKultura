import React from "react";
import { Accordion, Card, Button, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import About from "./About";
import img1 from "./Data/imgs/img1.jpg";
import img2 from "./Data/imgs/img2.jpg";
import img3 from "./Data/imgs/img3.jpg";
// import img4 from "./Data/imgs/img4.jpg";
import img5 from "./Data/imgs/img5.jpg";
import img6 from "./Data/imgs/img6.jpg";

function Services() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-10 offset-1 contactWrap border">
          <Accordion className="mt-3 mb-3">
            <Card className="text-center accordionCard">
              <Card.Header className="border">
                <Accordion.Toggle
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
                  <p className="accFont">
                    Kompletna usluga u vidu odabira parcele, uzimanje uzoraka
                    zemljišta, odabira sortimenta, rasporeda sadnje, održavanja
                    postojećih zasada, pravljenje plana prehrane i zaštite
                    izabranog voća, rezidba voća i obilazak samih voćnjaka.
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="text-center accordionCard">
              <Card.Header className="border">
                <Accordion.Toggle
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
                  <p className="accFont">
                    Komunikacija putem Viber-a, Skype-a, Zoom-a, Microsoft
                    times-a, u sistemu jedan na jedan ili organizovanje
                    radionica sa više učesnika.
                  </p>
                  <p className="accFont">
                    Kako biste se posavetovali sa nama potrebno je popuniti
                    kratku anketu na nasoj stranici za{" "}
                    <Link to="/consultation">konsultacije</Link>.
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>
      <div className="row">
        <div className="col-10 offset-1 contactWrap border mt-4">
          <Carousel className="mt-3 mb-3">
            <Carousel.Item interval={1000}>
              <img className="d-block w-100 slajd" src={img1} alt="vocnjak" />
              <Carousel.Caption>
                {/* <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img className="d-block w-100 slajd" src={img2} alt="vocnjak" />
              <Carousel.Caption>
                {/* <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img className="d-block w-100 slajd" src={img3} alt="vocnjak" />
              <Carousel.Caption>
                {/* <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img className="d-block w-100 slajd" src={img6} alt="vocnjak" />
              <Carousel.Caption>
                {/* <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img className="d-block w-100 slajd" src={img5} alt="vocnjak" />
              <Carousel.Caption>
                {/* <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            {/* <Carousel.Item>
              <img className="d-block w-100 slajd" src={img4} alt="vocnjak" />
            </Carousel.Item> */}
          </Carousel>
        </div>
      </div>
      <div className="row mt-4">
        <About />
      </div>
    </div>
  );
}

export default Services;
