import React, { useState } from "react";
import { Button, ButtonGroup, Modal } from "react-bootstrap";
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
  leska,
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

function FruitBtns() {
  const [showModal, setShowModal] = useState(false);
  const [fruit, setFruit] = useState(jagoda);

  const forModal = (name) => {
    setFruit(name);
    setShowModal(true);
  };

  const pictures = () => {
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
      case "Leska":
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

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <ButtonGroup size="sm" className="mt-2" aria-label="group1">
            <Button
              onClick={() => {
                forModal(jabuka);
              }}
              variant="success"
              className="border"
            >
              Jabuka
            </Button>
            <Button
              onClick={() => {
                forModal(kruska);
              }}
              variant="success"
              className="ml-1 border"
            >
              Kruska
            </Button>
            <Button
              onClick={() => {
                forModal(dunja);
              }}
              variant="success"
              className="ml-1 border"
            >
              Dunja
            </Button>
            <Button
              onClick={() => {
                forModal(jagoda);
              }}
              variant="success"
              className="ml-1 border"
            >
              Jagoda
            </Button>
            <Button
              onClick={() => {
                forModal(malina);
              }}
              variant="success"
              className="ml-1 border"
            >
              Malina
            </Button>
          </ButtonGroup>
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center">
          <ButtonGroup size="sm" className="mt-2" aria-label="group2">
            <Button
              onClick={() => {
                forModal(kupina);
              }}
              variant="success"
              className="ml-1 border"
            >
              Kupina
            </Button>
            <Button
              onClick={() => {
                forModal(breskva);
              }}
              variant="success"
              className="ml-1 border"
            >
              Breskva
            </Button>
            <Button
              onClick={() => {
                forModal(kajsija);
              }}
              variant="success"
              className="ml-1 border"
            >
              Kajsija
            </Button>
            <Button
              onClick={() => {
                forModal(sljiva);
              }}
              variant="success"
              className="ml-1 border"
            >
              Sljiva
            </Button>
          </ButtonGroup>
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center">
          <ButtonGroup size="sm" className="mt-2" aria-label="group3">
            <Button
              onClick={() => {
                forModal(tresnja);
              }}
              variant="success"
              className="ml-1 border"
            >
              Tresnja
            </Button>
            <Button
              onClick={() => {
                forModal(visnja);
              }}
              variant="success"
              className="ml-1 border"
            >
              Visnja
            </Button>

            <Button
              onClick={() => {
                forModal(orah);
              }}
              variant="success"
              className="ml-1 border"
            >
              Orah
            </Button>
            <Button
              onClick={() => {
                forModal(leska);
              }}
              variant="success"
              className="ml-1 border"
            >
              Leska
            </Button>
            <Button
              onClick={() => {
                forModal(badem);
              }}
              variant="success"
              className="ml-1 border"
            >
              Badem
            </Button>
          </ButtonGroup>
        </div>
      </div>
      <Modal
        size="lg"
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton className="text-light border">
          <Modal.Title id="example-modal-sizes-title-lg">
            {fruit.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row">
              <div className="col-10 offset-1">
                <img src={pictures()} alt={fruit.name} className="img" />
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
    </div>
  );
}

export default FruitBtns;
