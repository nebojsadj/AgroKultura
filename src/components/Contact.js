import React, { useState, useRef } from "react";
import { Form, Col, Button, Overlay, Popover } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail, AiFillFacebook } from "react-icons/ai";
import { GrInstagram } from "react-icons/gr";

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
              <FaPhoneAlt className="text-light" size="2em" />
              <br />
              <div ref={ref}>
                <Button
                  variant="outline-light"
                  className="mt-4"
                  onClick={handleClick}
                >
                  Kontak telefon!
                </Button>
                <Overlay
                  show={show}
                  target={target}
                  placement="bottom"
                  container={ref.current}
                  containerPadding={20}
                >
                  <Popover
                    id="popover-contained"
                    style={{
                      border: "1px solid black",
                      boxShadow: "0 0 9px black",
                    }}
                  >
                    <Popover.Title
                      as="h1"
                      style={{
                        textAlign: "center",
                        fontSize: "21px",
                      }}
                    >
                      +381 64 8066436
                    </Popover.Title>
                    <Popover.Content
                      as="h3"
                      style={{
                        textAlign: "center",
                        fontSize: "18px",
                      }}
                    >
                      Radnim danima: od 9h do 17h
                    </Popover.Content>
                  </Popover>
                </Overlay>
              </div>
            </div>
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
        <div className="col-6 offset-3 text-center mt-4 iconBorder">
          <AiOutlineMail size="3em" className="iconColor mt-2 mb-2" />
          <AiFillFacebook size="2.8em" className="ml-2 iconColor" />
          <GrInstagram size="2.4em" className="ml-2 iconColor" />
        </div>
      </div>
      <div className="row">
        <div className="col-10 offset-1 mt-4 mb-5 contactWrap border">
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            className="mt-4 mb-4"
          >
            <Form.Row>
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>Ime</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Vase ime"
                  autoComplete="off"
                />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Prezime</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Vase prezime"
                  autoComplete="off"
                />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                <Form.Label>Telefon</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Vas telefon"
                  autoComplete="off"
                  required
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="12" controlId="validationCustom03">
                <Form.Label>Poruka</Form.Label>
                <Form.Control
                  as="textarea"
                  type="text"
                  placeholder="Vasa poruka"
                  autoComplete="off"
                  required
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="12" controlId="validationCustom03">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Vas_email@gmail.com"
                  autoComplete="off"
                  required
                />
              </Form.Group>
            </Form.Row>
            <Button variant="dark" type="submit" className="mb-3">
              Posalji
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
