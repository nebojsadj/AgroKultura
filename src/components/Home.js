import React, { useState } from "react";
import { data } from "./Data/DataCity";
import svg from "./Data/serbia.svg";
import { Dropdown, Modal } from "react-bootstrap";
import { GiShinyApple, GiStrawberry, GiCherry, GiAlmond } from "react-icons/gi";
import FruitBtns from "./FruitBtns";
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

function Home() {
  const [state, setState] = useState("");
  const [show, setShow] = useState(false);
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState("Izaberite okrug");

  const mark = (option) => {
    let current = data.filter((el) => el.isCenter.includes(option));
    let currentId = current.map((el) => el.id);
    setState(currentId);
  };

  const pictures = () => {
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
      <div className="container mt-5">
        <div className="row">
          <div className="hl"></div>
          <div className="col-12 mt-2 drop">
            <Dropdown onSelect={() => mark("jabucasto")}>
              <Dropdown.Toggle
                variant="success"
                style={{ backgroundColor: "rgb(79, 141, 79)" }}
                id="dropdown-basic"
              >
                <GiShinyApple size="2em" />
              </Dropdown.Toggle>
              <Dropdown.Menu className="bgItems">
                <Dropdown.Item className="bgItem">Jabuka</Dropdown.Item>
                <Dropdown.Item className="bgItem">Kruska</Dropdown.Item>
                <Dropdown.Item className="bgItem">Dunja</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown onSelect={() => mark("jagodasto")} className="ml-4">
              <Dropdown.Toggle
                variant="success"
                style={{ backgroundColor: "rgb(79, 141, 79)" }}
                id="dropdown-basic"
              >
                <GiStrawberry size="2em" />
              </Dropdown.Toggle>
              <Dropdown.Menu className="bgItems">
                <Dropdown.Item className="bgItem">Jagoda</Dropdown.Item>
                <Dropdown.Item className="bgItem">Malina</Dropdown.Item>
                <Dropdown.Item className="bgItem">Kupina</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown onSelect={() => mark("kosticavo")} className="ml-4">
              <Dropdown.Toggle
                variant="success"
                style={{ backgroundColor: "rgb(79, 141, 79)" }}
                id="dropdown-basic"
              >
                <GiCherry size="2em" />
              </Dropdown.Toggle>
              <Dropdown.Menu className="bgItems">
                <Dropdown.Item className="bgItem">Breskva</Dropdown.Item>
                <Dropdown.Item className="bgItem">Kajsija</Dropdown.Item>
                <Dropdown.Item className="bgItem">Tresnja</Dropdown.Item>
                <Dropdown.Item className="bgItem">Visnja</Dropdown.Item>
                <Dropdown.Item className="bgItem">Sljiva</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown onSelect={() => mark("jezgrasto")} className="ml-4">
              <Dropdown.Toggle
                variant="success"
                style={{ backgroundColor: "rgb(79, 141, 79)" }}
                id="dropdown-basic"
              >
                <GiAlmond size="2em" />
              </Dropdown.Toggle>
              <Dropdown.Menu className="bgItems">
                <Dropdown.Item className="bgItem">Orah</Dropdown.Item>
                <Dropdown.Item className="bgItem">Lesnik</Dropdown.Item>
                <Dropdown.Item className="bgItem">Badem</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="hl mt-2"></div>
        </div>
        <div className="row">
          <div className="col-10 offset-1">
            <h4 className="text-center mt-3" style={{ color: "darkGreen" }}>
              {(state && title) || "."}
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-12 drop">
            <svg
              width="560"
              height="650"
              viewBox="0 0 550 850"
              fill="rgb(79, 141, 79)"
              stroke="white"
            >
              {data.map((location) => {
                return (
                  <use
                    onMouseOver={() => setTitle(location.title)}
                    onMouseLeave={() => setTitle("Izaberite okrug")}
                    key={location.id}
                    onClick={
                      state.includes(location.id)
                        ? () => {
                            setShow(true);
                            setModal(location);
                          }
                        : null
                    }
                    style={
                      state.includes(location.id) ? { cursor: "pointer" } : null
                    }
                    xlinkHref={`${svg}#${location.id}`}
                    fill={
                      state.includes(location.id)
                        ? "rgb(255, 102, 102)"
                        : "rgb(79, 141, 79)"
                    }
                  />
                );
              })}
            </svg>
          </div>
        </div>
      </div>
      <div className="hl"></div>
      <FruitBtns />
      <div className="hl mt-2 mb-5"></div>
      <Modal
        size="lg"
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        centered
      >
        <Modal.Header closeButton className="text-light border">
          <Modal.Title id="example-custom-modal-styling-title">
            <h2>{modal.title}</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>{modal.city}</h3>
          <div className="col-10 offset-1">
            <img src={pictures()} alt={modal.city} className="img" />
          </div>
          <h4>{modal.h1}</h4>
          <p>{modal.p1}</p>
          <h5>{modal.h2}</h5>
          <p>{modal.p2}</p>
          <p>{modal.p3}</p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Home;
