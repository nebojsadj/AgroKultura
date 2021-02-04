import React, { useState } from "react";
import { data } from "./Data/DataCity";
import svg from "./Data/serbia.svg";
import { Col, Container, Dropdown, Modal, Row, Button } from "react-bootstrap";
import { GiShinyApple, GiStrawberry, GiCherry, GiAlmond } from "react-icons/gi";
import kajsijaImg from "./Data/imgs/kajsijaImg.jpg";
import bademImg from "./Data/imgs/bademImg.jpg";
import breskvaImg from "./Data/imgs/breskvaImg.jpg";
import dunjaImg from "./Data/imgs/dunjaImg.jpg";
import jabukaImg from "./Data/imgs/jabukaImg.jpg";
import jagodaImg from "./Data/imgs/jagodaImg.jpg";
import kruskaImg from "./Data/imgs/kruskaImg.jpg";
import kupinaImg from "./Data/imgs/kupinaImg.jpg";
import leskaImg from "./Data/imgs/leskaImg.jpg";
import malinaImg from "./Data/imgs/malinaImg.jpg";
import orahImg from "./Data/imgs/orahImg.jpg";
import sljivaImg from "./Data/imgs/sljivaImg.jpg";
import tresnjaImg from "./Data/imgs/tresnjaImg.jpg";
import visnjaImg from "./Data/imgs/visnjaImg.jpg";
import borovnicaImg from "./Data/imgs/borovnicaImg.jpg";
import ogrozdImg from "./Data/imgs/ogrozdImg.jpg";
import ribizlaImg from "./Data/imgs/ribizlaImg.jpg";
import ColorsInDistricts from "./ColorsInDistricts";
import {
  jagoda,
  orah,
  lešnik,
  badem,
  višnja,
  trešnja,
  šljiva,
  breskva,
  malina,
  kupina,
  jabuka,
  kruška,
  dunja,
  kajsija,
  borovnica,
  ogrozd,
  ribizla,
} from "./Data/DataFruits";
import { Link } from "react-router-dom";

function Home() {
  const [centers, setCenters] = useState({
    red: [],
    orange: [],
    yellow: [],
  });
  const [district, setDistrict] = useState(false);
  const [fruit, setFruit] = useState(jagoda);
  const [title, setTitle] = useState("Izaberite okrug!");
  const [showModal, setShowModal] = useState(false);

  const mark = (option) => {
    const red = data.filter((el) => el.isRed.includes(option));
    const orange = data.filter((el) => el.isOrange.includes(option));
    const yellow = data.filter((el) => el.isYellow.includes(option));
    setCenters({ red: red, orange: orange, yellow: yellow });
  };

  const jabucasto = [jabuka, kruška, dunja];
  const jagodasto = [jagoda, malina, kupina, borovnica, ogrozd, ribizla];
  const kosticavo = [breskva, kajsija, trešnja, višnja, šljiva];
  const jezgrasto = [orah, lešnik, badem];

  const pictFruit = () => {
    switch (fruit.name) {
      case "Badem":
        return bademImg;
      case "Breskva":
        return breskvaImg;
      case "Dunja":
        return dunjaImg;
      case "Jabuka":
        return jabukaImg;
      case "Jagoda":
        return jagodaImg;
      case "Kajsija":
        return kajsijaImg;
      case "Kruška":
        return kruskaImg;
      case "Kupina":
        return kupinaImg;
      case "Lešnik":
        return leskaImg;
      case "Malina":
        return malinaImg;
      case "Orah":
        return orahImg;
      case "Šljiva":
        return sljivaImg;
      case "Trešnja":
        return tresnjaImg;
      case "Višnja":
        return visnjaImg;
      case "Borovnica":
        return borovnicaImg;
      case "Ogrozd":
        return ogrozdImg;
      case "Ribizla":
        return ribizlaImg;
      default:
        return bademImg;
    }
  };

  return (
    <>
      <Container className="mt-5 mb-5 home">
        <Row>
          <Col md={{ span: 2 }} xs={{ span: 2 }} className="mt-5">
            <Dropdown>
              <Dropdown.Toggle
                variant="light"
                className="m3 m333"
                id="dropdown-basic"
              >
                <GiShinyApple
                  size="2em"
                  className="mIcon"
                  style={{ color: "#2db300" }}
                />
              </Dropdown.Toggle>
              <Dropdown.Menu className="bgItems">
                {jabucasto.map((el) => (
                  <Dropdown.Item
                    key={el.id}
                    onClick={() => {
                      mark(el.name.toLowerCase());
                      setFruit(el);
                    }}
                    className="bgItem"
                  >
                    {el.name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown style={{ marginTop: "330%" }}>
              <Dropdown.Toggle
                variant="light"
                className="m3 m33 m333"
                id="dropdown-basic"
              >
                <GiStrawberry
                  size="2em"
                  className="mIcon"
                  style={{ color: "#ff0000" }}
                />{" "}
              </Dropdown.Toggle>
              <Dropdown.Menu className="bgItems">
                {jagodasto.map((el) => (
                  <Dropdown.Item
                    key={el.id}
                    onClick={() => {
                      mark(el.name.toLowerCase());
                      setFruit(el);
                    }}
                    className="bgItem"
                  >
                    {el.name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col
            md={{ span: 8 }}
            xs={{ span: 8 }}
            style={{ textAlign: "center" }}
          >
            <h4 className="text-center text-light mt-3 mb-2 m2">
              {centers.orange.length > 0 ? title : "Izaberite voćnu vrstu!"}
            </h4>
            <svg
              className="svgStyle mt-3"
              width="560"
              height="650"
              viewBox="0 0 550 850"
              fill="white"
              stroke="black"
            >
              {data.map((location) => {
                return (
                  <use
                    onMouseOver={() => setTitle(location.title)}
                    onMouseLeave={() => setTitle("Izaberite okrug!")}
                    key={location.id}
                    onClick={
                      centers.orange.length > 0
                        ? () => {
                            setDistrict(location);
                            setShowModal(true);
                          }
                        : null
                    }
                    style={
                      centers.orange.length > 0 ? { cursor: "pointer" } : null
                    }
                    xlinkHref={`${svg}#${location.id}`}
                    fill={
                      centers.red.includes(location)
                        ? "red"
                        : centers.orange.includes(location)
                        ? "orange"
                        : centers.yellow.includes(location)
                        ? "yellow"
                        : null
                    }
                  />
                );
              })}
            </svg>
          </Col>
          <Col md={{ span: 2 }} xs={{ span: 2 }} className="mt-5">
            <Dropdown>
              <Dropdown.Toggle
                variant="light"
                className="m3 m334"
                id="dropdown-basic"
              >
                <GiCherry
                  size="2em"
                  className="mIcon"
                  style={{ color: "#990000" }}
                />
              </Dropdown.Toggle>
              <Dropdown.Menu className="bgItems">
                {kosticavo.map((el) => (
                  <Dropdown.Item
                    key={el.id}
                    onClick={() => {
                      mark(el.name.toLowerCase());
                      setFruit(el);
                    }}
                    className="bgItem"
                  >
                    {el.name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown style={{ marginTop: "330%" }}>
              <Dropdown.Toggle
                variant="light"
                className="m3 m33 m334"
                id="dropdown-basic"
              >
                <GiAlmond
                  size="2em"
                  className="mIcon"
                  style={{ color: "#996633" }}
                />{" "}
              </Dropdown.Toggle>
              <Dropdown.Menu className="bgItems">
                {jezgrasto.map((el) => (
                  <Dropdown.Item
                    key={el.id}
                    onClick={() => {
                      mark(el.name.toLowerCase());
                      setFruit(el);
                    }}
                    className="bgItem"
                  >
                    {el.name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
        <ColorsInDistricts />
      </Container>

      <Modal
        size="lg"
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        className="modalCenter"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={{ span: 10, offset: 1 }} xs={{ span: 12 }}>
              <h4 className="text-center text-danger">
                {` ${district.title}, ${district.city}`}
              </h4>
              <p className="mt-3">{district.p1}</p>
            </Col>
            <hr />
          </Row>
          <Row className="mt-3">
            <Col md={{ span: 10, offset: 1 }} xs={{ span: 12 }}>
              <h3 className="text-center">{fruit.name}</h3>
              <img src={pictFruit()} alt={fruit.name} className="img" />
              <p>{fruit.content.uvod}</p>
              <h4 className="text-center">{fruit.content.h1}</h4>
              <h5 className="text-center">{fruit.content.h2}</h5>
              <p>{fruit.content.p2}</p>
              <h5 className="text-center">{fruit.content.h3}</h5>
              <p>{fruit.content.p3}</p>
              <h5 className="text-center">{fruit.content.h4}</h5>
              <p>{fruit.content.p4}</p>
              <h5 className="text-center">{fruit.content.h5}</h5>
              <p>{fruit.content.p5}</p>
              <h5 className="text-center">{fruit.content.h6}</h5>
              <p>{fruit.content.p6}</p>
              <h5 className="text-center">{fruit.content.h7}</h5>
              <p>{fruit.content.p7}</p>
              <h5 className="text-center">{fruit.content.h8}</h5>
              <p>{fruit.content.p8}</p>
              <h5 className="text-center">{fruit.content.h9}</h5>
              <p>{fruit.content.p9}</p>
              <h5 className="text-center">{fruit.content.h10}</h5>
              <p>{fruit.content.p10}</p>
              <h5 className="text-center">{fruit.content.h11}</h5>
              <p>{fruit.content.p11}</p>
              <h5 className="text-center">{fruit.content.h12}</h5>
              <p>{fruit.content.p12}</p>
              <h5 className="text-center">{fruit.content.h13}</h5>
              <p>{fruit.content.p13}</p>
            </Col>
            <Col
              md={{ span: 4, offset: 4 }}
              xs={{ span: 8, offset: 2 }}
              className="mt-3 mb-3"
            >
              <Link to="/contact">
                <Button variant="success" className="form-control">
                  Postavi pitanje
                </Button>
              </Link>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Home;
