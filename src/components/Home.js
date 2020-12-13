import React, { useState } from "react";
import { data } from "./Data";
import svg from "./SVG/serbia.svg";
import { jabucasto, jagodasto, kosticavo } from "./Fruits";
import { panes } from "./Panes";
import { Dropdown, Modal } from "react-bootstrap";
import { GiShinyApple, GiStrawberry, GiCherry, GiAlmond } from "react-icons/gi";

function Home() {
  const [state, setState] = useState("");
  const [show, setShow] = useState(false);
  const [modal, setModal] = useState(false);

  const mark = (option) => {
    let current = data.filter((el) => el.isCenter.includes(option));
    let currentId = current.map((el) => el.id);
    setState(currentId);
    console.log(state);
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 drop">
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
                <Dropdown.Item className="bgItem">Kesten</Dropdown.Item>
                <Dropdown.Item className="bgItem">Badem</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 drop">
            <svg
              width="560"
              height="750"
              viewBox="0 0 550 800"
              fill="rgb(79, 141, 79)"
              stroke="white"
            >
              {data.map((location) => {
                return (
                  <use
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
                      state.includes(location.id) ? "red" : "rgb(79, 141, 79)"
                    }
                  />
                );
              })}
            </svg>
          </div>
        </div>
      </div>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {modal.title}
            <br />
            {modal.city}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus
            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
            deleniti rem!
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Home;
