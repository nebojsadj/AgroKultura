import React, { useState, useRef } from "react";
import { Form, Col, Button, Overlay, Popover } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail, AiFillFacebook } from "react-icons/ai";
import { GrInstagram } from "react-icons/gr";
import emailjs from "emailjs-com";

function Contact() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    sendEmail();
  };

  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jiuu8zf",
        "template_cp09lds",
        e.target,
        "user_C6R6NBvn6aXViZOCdS2ms"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 offset-1 mt-5 contactWrap border">
          <div className="text-center mt-4">
            <FaPhoneAlt className="text-light call" size="2em" />
            <br />
            <div ref={ref}>
              <Button
                variant="light"
                className="mt-4 contBtn"
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
            className="mt-4 mb-4 mConsult"
          >
            <b className="ml-4">Zainteresovani ste za naše usluge</b> i cene
            naših usluga? Budite slobodni da nam pošaljete informativni email sa
            opisom, vašeg zasada ili zasada koji planirate da podignete, a jedan
            od naših inženjera će Vas kontaktirati u najkraćem mogućem roku.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-6 offset-3 text-center mt-4 iconBorder">
          <AiOutlineMail size="3em" className="iconColor mt-2 mb-2 icon1" />
          <AiFillFacebook size="2.8em" className="ml-2 iconColor icon2" />
          <GrInstagram size="2.4em" className="ml-2 iconColor icon3" />
        </div>
      </div>
      <div className="row">
        <div className="col-10 offset-1 mt-4 mb-5 contactWrap border">
          <Form
            noValidate
            validated={validated}
            onSubmit={sendEmail}
            className="mt-4 mb-4 formFont"
          >
            <Form.Row>
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label className="text-light">Ime</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Vaše ime"
                  autoComplete="off"
                  name="name"
                />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label className="text-light">Prezime</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Vaše prezime"
                  autoComplete="off"
                  name="lastName"
                />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                <Form.Label className="text-light">Telefon</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Vaš telefon"
                  autoComplete="off"
                  required
                  name="phone"
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="12" controlId="validationCustom03">
                <Form.Label className="text-light">Poruka</Form.Label>
                <Form.Control
                  as="textarea"
                  type="text"
                  placeholder="Vaša poruka"
                  autoComplete="off"
                  required
                  name="message"
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="12" controlId="validationCustom03">
                <Form.Label className="text-light">Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Vaš_email@gmail.com"
                  autoComplete="off"
                  required
                  name="email"
                />
              </Form.Group>
            </Form.Row>
            <Button variant="light" type="submit" className="mb-3 posaljiBtn">
              Pošalji
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
