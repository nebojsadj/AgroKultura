import React, { useState, useRef } from "react";
import { Form, Col, Button, Overlay, Popover } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail, AiFillFacebook } from "react-icons/ai";
import { GrInstagram } from "react-icons/gr";
import emailjs from "emailjs-com";

function Contact() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const [valid, setValid] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const { name, lastName, email, phone, message } = valid;
  const [check, setCheck] = useState("check");

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  const validate = (e) => {
    e.preventDefault();
    setCheck("");
  };
  const success = Object.values(valid).filter((el) => el === "");
  console.log(success.length);

  const sendCheck = () => {
    if (email !== "") {
      sendEmail();
    }
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
                    +381 65 6922333
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
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=new"
            target="blanc"
          >
            <AiOutlineMail size="3em" className="iconColor mt-2 mb-2 icon1" />
          </a>

          <a
            href="https://www.facebook.com/Agronom-S-102574891795506"
            target="blanc"
          >
            <AiFillFacebook size="2.8em" className="ml-2 iconColor icon2" />
          </a>
          <a
            href="https://www.facebook.com/Agronom-S-102574891795506"
            target="blanc"
          >
            <GrInstagram size="2.4em" className="ml-2 iconColor icon3" />
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-10 offset-1 mt-4 mb-5 contactWrap border">
          <Form onSubmit={sendEmail} className="mt-4 mb-4 formFont">
            <Form.Row>
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label className="text-light">Ime</Form.Label>
                <Form.Control
                  // onChange={(e) => setValid({ ...valid, name: e.target.value })}
                  type="text"
                  placeholder="Vaše ime"
                  autoComplete="off"
                  name="name"
                  // className={name === check && "red"}
                />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label className="text-light">Prezime</Form.Label>
                <Form.Control
                  // onChange={(e) =>
                  //   setValid({ ...valid, lastName: e.target.value })
                  // }
                  type="text"
                  placeholder="Vaše prezime"
                  autoComplete="off"
                  name="lastName"
                  // className={lastName === check && "red"}
                />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                <Form.Label className="text-light">Telefon</Form.Label>
                <Form.Control
                  // onChange={(e) =>
                  //   setValid({ ...valid, phone: e.target.value })
                  // }
                  type="text"
                  placeholder="Vaš telefon"
                  autoComplete="off"
                  name="phone"
                  // className={phone === check && "red"}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="12" controlId="validationCustom03">
                <Form.Label className="text-light">Poruka</Form.Label>
                <Form.Control
                  // onChange={(e) =>
                  //   setValid({ ...valid, message: e.target.value })
                  // }
                  as="textarea"
                  type="text"
                  placeholder="Vaša poruka"
                  autoComplete="off"
                  name="message"
                  // className={message === check && "red"}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="12" controlId="validationCustom03">
                <Form.Label className="text-light">Email</Form.Label>
                <Form.Control
                  // onChange={(e) =>
                  //   setValid({ ...valid, email: e.target.value })
                  // }
                  type="email"
                  placeholder="Vaš_email@gmail.com"
                  autoComplete="off"
                  name="email"
                  // className={email === check && "red"}
                  required
                />
              </Form.Group>
            </Form.Row>
            <Button
              // onClick={validate}
              variant="light"
              type="submit"
              className="mb-3 posaljiBtn"
            >
              Pošalji
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
