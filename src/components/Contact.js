import React, { useState, useRef } from "react";
import { Form, Col, Button, Overlay, Popover } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";

function Contact() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 offset-1 mt-5 contactWrap border">
          <div className="holder">
            <div className="text-center mt-4">
              <FaPhoneAlt size="1.8em" />
              <br />
              <div ref={ref}>
                <Button variant="dark" className="mt-4" onClick={handleClick}>
                  Kontak telefon!
                </Button>
                <Overlay
                  show={show}
                  target={target}
                  placement="bottom"
                  container={ref.current}
                  containerPadding={20}
                >
                  <Popover id="popover-contained">
                    <Popover.Title
                      as="h1"
                      style={{
                        textAlign: "center",
                        fontSize: "20px",
                      }}
                    >
                      +381645553331
                    </Popover.Title>
                    <Popover.Content>
                      <strong>Radnim danima:</strong> od 9h do 17h
                    </Popover.Content>
                  </Popover>
                </Overlay>
              </div>
            </div>
            {/* <h4 className="text-center mt-3">Kontakt</h4> */}
            <p
              style={{ fontSize: "18px", color: "white" }}
              className="mt-4 mb-4"
            >
              Zainteresovani ste za nase usluge i cene nasih usluga? Budite
              slobodni da nam posaljete informativni email sa opisom, vaseg
              postojeceg zasada ili zasada koji planirate da podignete, a jedan
              od nasih inzenjera ce Vas kontaktirati u najkracem mogucem roku u
              cilju problema.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10 offset-1 mt-5 mb-5 contactWrap border">
          <div className="holder">
            <Form
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
              className="mt-4 mb-4"
            >
              <Form.Row>
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                  <Form.Label>Ime</Form.Label>
                  <Form.Control required type="text" placeholder="Vase ime" />
                  <Form.Control.Feedback type="invalid">
                    Molimo Vas unesite vase ime.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                  <Form.Label>Prezime</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Vase prezime"
                  />
                  <Form.Control.Feedback type="invalid">
                    Molimo Vas unesite vase prezime.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationCustomUsername"
                >
                  <Form.Label>Telefon</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Vas telefon"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Molimo Vas unesite vas telefon.
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md="12" controlId="validationCustom03">
                  <Form.Label>Poruka</Form.Label>
                  <Form.Control
                    as="textarea"
                    type="text"
                    placeholder="Vasa poruka"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Molimo Vas unesite vasu poruku.
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md="12" controlId="validationCustom03">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="text" placeholder="Email" required />
                  <Form.Control.Feedback type="invalid">
                    Molimo vas unesite vasu email adresu.
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Form.Group>
                <Form.Check required label="Pristanite na uslove i odredbe" />
              </Form.Group>
              <Button variant="dark" type="submit" className="mb-3">
                Posalji
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
