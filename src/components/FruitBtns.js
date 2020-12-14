import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";

function FruitBtns() {
  return (
    <>
      <ButtonGroup size="sm" className="mt-2" aria-label="First group">
        <Button variant="success" className="border">
          Jabuka
        </Button>{" "}
        <Button variant="success" className="ml-1 border">
          Kruska
        </Button>
        <Button variant="success" className="ml-1 border">
          Dunja
        </Button>
        <Button variant="success" className="ml-1 border">
          Jagoda
        </Button>{" "}
        <Button variant="success" className="ml-1 border">
          Malina
        </Button>{" "}
      </ButtonGroup>
      <br />
      <ButtonGroup size="sm" className="mt-2" aria-label="First group">
        <Button variant="success" className="ml-1 border">
          Kupina
        </Button>
        <Button variant="success" className="ml-1 border">
          Breskva
        </Button>
        <Button variant="success" className="ml-1 border">
          Kajsija
        </Button>
        <Button variant="success" className="ml-1 border">
          Tresnja
        </Button>
        <Button variant="success" className="ml-1 border">
          Visnja
        </Button>
      </ButtonGroup>
      <br />
      <ButtonGroup size="sm" className="mt-2 mb-2" aria-label="First group">
        <Button variant="success" className="ml-1 border">
          Sljiva
        </Button>
        <Button variant="success" className="ml-1 border">
          Orah
        </Button>
        <Button variant="success" className="ml-1 border">
          Lesnik
        </Button>
        <Button variant="success" className="ml-1 border">
          Kesten
        </Button>
        <Button variant="success" className="ml-1 border">
          Badem
        </Button>
      </ButtonGroup>
    </>
  );
}

export default FruitBtns;
