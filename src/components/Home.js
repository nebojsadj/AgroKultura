import React, { useState } from "react";
import { data } from "./Data/DataCity";
import svg from "./Data/serbia.svg";
import { Dropdown, Modal } from "react-bootstrap";
import { GiShinyApple, GiStrawberry, GiCherry, GiAlmond } from "react-icons/gi";
import Beograd from "./Data/imgs/Beograd.jpg";
import Bor from "./Data/imgs/Bor.jpg";
import Cacak from "./Data/imgs/Cacak.jpg";
import Gnjilane from "./Data/imgs/Gnjilane.jpg";
import Kikinda from "./Data/imgs/Kikinda.jpg";
import KosovskaMitrovica from "./Data/imgs/KosovskaMitrovica.jpg";
import Kragujevac from "./Data/imgs/Kragujevac.jpg";
import Kraljevo from "./Data/imgs/Kraljevo.jpg";
import Krusevac from "./Data/imgs/Krusevac.jpg";
import Leskovac from "./Data/imgs/Leskovac.jpg";
import Nis from "./Data/imgs/Nis.jfif";
import NoviSad from "./Data/imgs/NoviSad.jpg";
import Pancevo from "./Data/imgs/Pancevo.png";
import Pec from "./Data/imgs/Pec.jpg";
import Pirot from "./Data/imgs/Pirot.jpg";
import Pozarevac from "./Data/imgs/Pozarevac.png";
import Pristina from "./Data/imgs/Pristina.jpg";
import Prizren from "./Data/imgs/Prizren.jpg";
import Prokuplje from "./Data/imgs/Prokuplje.jpg";
import Sabac from "./Data/imgs/Sabac.jpg";
import Smederevo from "./Data/imgs/Smederevo.jpg";
import Sombor from "./Data/imgs/Sombor.jpg";
import SremskaMitrovica from "./Data/imgs/SremskaMitrovica.jpg";
import Subotica from "./Data/imgs/Subotica.jpg";
import Uzice from "./Data/imgs/Uzice.jpg";
import Valjevo from "./Data/imgs/Valjevo.jpg";
import Vranje from "./Data/imgs/Vranje.jpg";
import Zajecar from "./Data/imgs/Zajecar.jpg";
import Zrenjanin from "./Data/imgs/Zrenjanin.jpg";

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
import {
  jagoda,
  orah,
  lesnik,
  badem,
  visnja,
  tresnja,
  sljiva,
  breskva,
  malina,
  kupina,
  jabuka,
  kruska,
  dunja,
  kajsija,
} from "./Data/DataFruits";
import ColorsInDistricts from "./ColorsInDistricts";

function Home() {
  const [centers, setCenters] = useState({
    red: [],
    orange: [],
    yellow: [],
  });
  const [show, setShow] = useState(false);
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState("Izaberite okrug");
  const [showModal, setShowModal] = useState(false);
  const [fruit, setFruit] = useState(jagoda);

  const mark = (option) => {
    const red = data.filter((el) => el.isRed.includes(option));
    const orange = data.filter((el) => el.isOrange.includes(option));
    const yellow = data.filter((el) => el.isYellow.includes(option));
    setCenters({ red: red, orange: orange, yellow: yellow });
  };

  const forModal = (name) => {
    setFruit(name);
    setShowModal(true);
  };

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
      case "Kruska":
        return kruskaImg;
      case "Kupina":
        return kupinaImg;
      case "Lesnik":
        return leskaImg;
      case "Malina":
        return malinaImg;
      case "Orah":
        return orahImg;
      case "Sljiva":
        return sljivaImg;
      case "Tresnja":
        return tresnjaImg;
      case "Visnja":
        return visnjaImg;
      default:
        return bademImg;
    }
  };

  const pictCity = () => {
    switch (modal.city) {
      case "Beograd":
        return Beograd;
      case "Bor":
        return Bor;
      case "Cacak":
        return Cacak;
      case "Gnjilane":
        return Gnjilane;
      case "Kikinda":
        return Kikinda;
      case "KosovskaMitrovica":
        return KosovskaMitrovica;
      case "Kragujevac":
        return Kragujevac;
      case "Kraljevo":
        return Kraljevo;
      case "Krusevac":
        return Krusevac;
      case "Leskovac":
        return Leskovac;
      case "Nis":
        return Nis;
      case "NoviSad":
        return NoviSad;
      case "Pancevo":
        return Pancevo;
      case "Pec":
        return Pec;
      case "Pirot":
        return Pirot;
      case "Pozarevac":
        return Pozarevac;
      case "Pristina":
        return Pristina;
      case "Prizren":
        return Prizren;
      case "Prokuplje":
        return Prokuplje;
      case "Sabac":
        return Sabac;
      case "Smederevo":
        return Smederevo;
      case "Sombor":
        return Sombor;
      case "SremskaMitrovica":
        return SremskaMitrovica;
      case "Subotica":
        return Subotica;
      case "Uzice":
        return Uzice;
      case "Valjevo":
        return Valjevo;
      case "Vranje":
        return Vranje;
      case "Zajecar":
        return Zajecar;
      case "Zrenjanin":
        return Zrenjanin;
      default:
        return Beograd;
    }
  };

  return (
    <>
      <div className="container mt-5 mb-5 home">
        <div className="row">
          <div className="col-2 mt-5">
            <Dropdown style={{ marginLeft: "55%" }}>
              <Dropdown.Toggle
                variant="light"
                className=" m3"
                id="dropdown-basic"
              >
                <GiShinyApple
                  size="2em"
                  className="mIcon"
                  style={{ color: "#2db300" }}
                />{" "}
                jabucasto
              </Dropdown.Toggle>
              <Dropdown.Menu className="bgItems">
                <Dropdown.Item
                  onClick={() => {
                    mark("jabuka");
                    forModal(jabuka);
                  }}
                  className="bgItem"
                >
                  Jabuka
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    mark("kruska");
                    forModal(kruska);
                  }}
                  className="bgItem"
                >
                  Kruska
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    mark("dunja");
                    forModal(dunja);
                  }}
                  className="bgItem"
                >
                  Dunja
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown style={{ marginTop: "500px", marginLeft: "55%" }}>
              <Dropdown.Toggle
                variant="light"
                className="m3"
                id="dropdown-basic"
              >
                <GiStrawberry
                  size="2em"
                  className="mIcon"
                  style={{ color: "#ff0000" }}
                />{" "}
                jagodasto
              </Dropdown.Toggle>
              <Dropdown.Menu className="bgItems">
                <Dropdown.Item
                  onClick={() => {
                    mark("jagoda");
                    forModal(jagoda);
                  }}
                  className="bgItem"
                >
                  Jagoda
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    mark("malina");
                    forModal(malina);
                  }}
                  className="bgItem"
                >
                  Malina
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    mark("kupina");
                    forModal(kupina);
                  }}
                  className="bgItem"
                >
                  Kupina
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    mark("borovnica");
                    // forModal(borovnica);
                  }}
                  className="bgItem"
                >
                  Borovnica
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    mark("ogrozd");
                    // forModal(ogrozd);
                  }}
                  className="bgItem"
                >
                  Ogrozd
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    mark("ribizla");
                    // forModal(ribizla);
                  }}
                  className="bgItem"
                >
                  Ribizla
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="col-8" style={{ textAlign: "center" }}>
            <h4 className="text-center text-light mt-3">
              {centers.orange.length > 0 ? title : "."}
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
                    onMouseLeave={() => setTitle("Izaberite okrug")}
                    key={location.id}
                    onClick={
                      centers.orange.length > 0
                        ? () => {
                            setShow(true);
                            setModal(location);
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
          </div>
          <div className="col-2 mt-5">
            <Dropdown className="m3">
              <Dropdown.Toggle
                variant="light"
                className="m3"
                id="dropdown-basic"
              >
                <GiCherry
                  size="2em"
                  className="mIcon"
                  style={{ color: "#990000" }}
                />{" "}
                kosticavo
              </Dropdown.Toggle>
              <Dropdown.Menu className="bgItems">
                <Dropdown.Item
                  onClick={() => {
                    mark("breskva");
                    forModal(breskva);
                  }}
                  className="bgItem"
                >
                  Breskva
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    mark("kajsija");
                    forModal(kajsija);
                  }}
                  className="bgItem"
                >
                  Kajsija
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    mark("tresnja");
                    forModal(tresnja);
                  }}
                  className="bgItem"
                >
                  Tresnja
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    mark("visnja");
                    forModal(visnja);
                  }}
                  className="bgItem"
                >
                  Visnja
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    mark("sljiva");
                    forModal(sljiva);
                  }}
                  className="bgItem"
                >
                  Sljiva
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown style={{ marginTop: "500px" }}>
              <Dropdown.Toggle
                variant="light"
                className="m3"
                id="dropdown-basic"
              >
                <GiAlmond
                  size="2em"
                  className="mIcon"
                  style={{ color: "#996633" }}
                />{" "}
                jezgrasto
              </Dropdown.Toggle>
              <Dropdown.Menu className="bgItems">
                <Dropdown.Item
                  onClick={() => {
                    mark("orah");
                    forModal(orah);
                  }}
                  className="bgItem"
                >
                  Orah
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    mark("lesnik");
                    forModal(lesnik);
                  }}
                  className="bgItem"
                >
                  Lesnik
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    mark("badem");
                    forModal(badem);
                  }}
                  className="bgItem"
                >
                  Badem
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <ColorsInDistricts />
      </div>

      <Modal
        size="lg"
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            <h2>{modal.title}</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>{modal.city}</h3>
          <div className="col-10 offset-1">
            <img src={pictCity()} alt={modal.city} className="img" />
          </div>
          <h4>{modal.h1}</h4>
          <p>{modal.p1}</p>
          <h5>{modal.h2}</h5>
          <p>{modal.p2}</p>
          <p>{modal.p3}</p>
        </Modal.Body>
      </Modal>

      <Modal
        size="lg"
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            {fruit.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row">
              <div className="col-10 offset-1">
                <img src={pictFruit()} alt={fruit.name} className="img" />
                <p>{fruit.content.uvod}</p>
                <h4>{fruit.content.h1}</h4>
                <h5>{fruit.content.h2}</h5>
                <p>{fruit.content.p2}</p>
                <h5>{fruit.content.h3}</h5>
                <p>{fruit.content.p3}</p>
                <h5>{fruit.content.h4}</h5>
                <p>{fruit.content.p4}</p>
                <h5>{fruit.content.h5}</h5>
                <p>{fruit.content.p5}</p>
                <h5>{fruit.content.h6}</h5>
                <p>{fruit.content.p6}</p>
                <h5>{fruit.content.h7}</h5>
                <p>{fruit.content.p7}</p>
                <h5>{fruit.content.h8}</h5>
                <p>{fruit.content.p8}</p>
                <h5>{fruit.content.h9}</h5>
                <p>{fruit.content.p9}</p>
                <h5>{fruit.content.h10}</h5>
                <p>{fruit.content.p10}</p>
                <h5>{fruit.content.h11}</h5>
                <p>{fruit.content.p11}</p>
                <h5>{fruit.content.h12}</h5>
                <p>{fruit.content.p12}</p>
                <h5>{fruit.content.h13}</h5>
                <p>{fruit.content.p13}</p>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Home;
