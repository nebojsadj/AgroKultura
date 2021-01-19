import React, { useState } from "react";
import { Form, Col, Button } from "react-bootstrap";
import emailjs from "emailjs-com";

function Consultation() {
  const [success, setSuccess] = useState("");
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      event.preventDefault();
      emailjs
        .sendForm(
          "service_jiuu8zf",
          "template_j8upi9d",
          event.target,
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
      event.target.reset();
      setValidated(false);
      timeOut();
    }
  };

  const timeOut = () => {
    setTimeout(function () {
      setSuccess(
        "Anketa je uspešno poslata! Uskoro će Vas kontaktirati neko iz našeg tima!"
      );
    }, 800);

    setTimeout(function () {
      setSuccess("");
    }, 8000);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 offset-1 mt-5 contactWrap border">
          <h4 className="text-center text-light mt-3 m222">
            Želite da zakažete konsultacije?
          </h4>
          <p
            style={{ fontSize: "18px", color: "white" }}
            className="mt-4 mb-4 mConsult"
          >
            U slučaju da imate bilo kakve nedoumice u vezi sa zasadom, izborom
            sadnica i zemljista, održavanjem već postojećih zasada,
            navodnjavanjem i negovanjem zasada budite slobodni da popunite
            sledeća polja i neko iz našeg stručnog tima će Vam se obratiti u
            najkraćem mogućem roku.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-10 offset-1 mt-5 mb-5 contactWrap border">
          <Form
            className="mt-3 formFont"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <Form.Group as={Col} controlId="validationCustom01">
              <Form.Label className="text-light">Ime i prezime</Form.Label>
              <Form.Control
                type="text"
                placeholder="Vaše ime i prezime"
                name="ime"
                autoComplete="off"
                required
              />
            </Form.Group>
            <Form.Group as={Col} controlId="validationCustom02">
              <Form.Label className="text-light">Okrug</Form.Label>
              <Form.Control
                as="select"
                placeholder="Izaberite Vas okrug"
                name="okrug"
                autoComplete="off"
              >
                <option>Izaberite Vaš okrug</option>
                <option>Severno-bački</option>
                <option>Srednje-banatski</option>
                <option>Severno-banatski</option>
                <option>Južno-banatski</option>
                <option>Zapadno-bački</option>
                <option>Južno-bački</option>
                <option>Sremski</option>
                <option>Mačvanski</option>
                <option>Kolubarski</option>
                <option>Podunavski</option>
                <option>Braničevski</option>
                <option>Šumadijski</option>
                <option>Pomoravski</option>
                <option>Borski</option>
                <option>Zaječarski</option>
                <option>Zlatiborski</option>
                <option>Moravički</option>
                <option>Raški</option>
                <option>Rasinski</option>
                <option>Nišavski</option>
                <option>Toplički</option>
                <option>Pirotski</option>
                <option>Jablanički</option>
                <option>Pčinjski</option>
                <option>Kosovski</option>
                <option>Pećki</option>
                <option>Prizrenski</option>
                <option>Kosovsko-mitrovački</option>
                <option>Kosovsko-pomoravski</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="validationCustom03">
              <Form.Label className="text-light">Opština</Form.Label>
              <Form.Control
                autoComplete="off"
                type="text"
                placeholder="Vaša opština"
                name="opstina"
                required
              />
            </Form.Group>
            <Form.Group as={Col} controlId="validationCustom04">
              <Form.Label className="text-light">Kontakt telefon</Form.Label>
              <Form.Control
                type="text"
                placeholder="Vaš kontakt telefon"
                name="telefon"
                autoComplete="off"
                required
              />
            </Form.Group>
            <Form.Group as={Col} controlId="validationCustom05">
              <Form.Label className="text-light">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Vaš email"
                name="email"
                autoComplete="off"
                required
              />
            </Form.Group>
            <Form.Group as={Col} controlId="validationCustom06">
              <Form.Label className="text-light">
                Površina za podizanje zasada
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Površina zemljišta"
                name="povrsina"
                autoComplete="off"
                required
              />
            </Form.Group>
            <Form.Group as={Col} controlId="validationCustom07">
              <Form.Label className="text-light">Vrsta voća</Form.Label>
              <Form.Control
                type="text"
                placeholder="Vrsta voća"
                name="vrstaVoca"
                autoComplete="off"
                required
              />
            </Form.Group>
            <Form.Group className="ml-3" controlId="validationCustom08">
              <Form.Label className="text-light">
                Registrovano gazdinstvo?
              </Form.Label>
              <Form.Check
                className="text-light ml-4 checkPointer"
                name="gazdinstvo"
                value="Da"
                type="radio"
                id="disabledFieldsetCheck1"
                label="da"
                custom
                required
              />
              <Form.Check
                className="text-light ml-4 checkPointer"
                name="gazdinstvo"
                value="Ne"
                type="radio"
                id="disabledFieldsetCheck2"
                label="ne"
                custom
                required
              />
            </Form.Group>
            <Form.Group className="ml-3" controlId="validationCustom09">
              <Form.Label className="text-light">
                Način podizanja zasada?
              </Form.Label>
              <Form.Check
                className="text-light ml-4 checkPointer"
                name="nacinPodizanja"
                value="Kljuc u ruke"
                type="radio"
                id="disabledFieldsetCheck3"
                label="kjuč u ruke"
                custom
                required
              />
              <Form.Check
                className="text-light ml-4 checkPointer"
                name="nacinPodizanja"
                value="Savetodavni deo"
                type="radio"
                id="disabledFieldsetCheck4"
                label="savetodavni deo"
                custom
                required
              />
            </Form.Group>
            <Form.Group className="ml-3" controlId="validationCustom10">
              <Form.Label className="text-light">
                Želite da Vam odgovorimo mejlom?
              </Form.Label>
              <Form.Check
                className="text-light ml-4 checkPointer"
                name="odgovorMejlom"
                value="Da"
                type="radio"
                id="disabledFieldsetCheck7"
                label="da"
                custom
                required
              />
              <Form.Check
                className="text-light ml-4 checkPointer"
                name="odgovorMejlom"
                value="Ne"
                type="radio"
                id="disabledFieldsetCheck8"
                label="ne"
                custom
                required
              />
            </Form.Group>
            <Form.Group className="ml-3" controlId="validationCustom11">
              <Form.Label className="text-light">
                Želite da zakažete onlajn konsultacije?
              </Form.Label>
              <Form.Check
                className="text-light ml-4 checkPointer"
                name="konsultacije"
                value="Da"
                type="radio"
                id="disabledFieldsetCheck5"
                label="da"
                custom
                required
              />
              <Form.Check
                className="text-white ml-5 checkPointer"
                type="radio"
                value="ZOOM"
                name="radioBtn"
                id="custom-switch1"
                label="zoom"
                required
              />
              <Form.Check
                className="text-white ml-5 checkPointer"
                type="radio"
                value="SKYPE"
                name="radioBtn"
                id="custom-switch2"
                label="skype"
                required
              />
              <Form.Check
                className="text-white ml-5 checkPointer"
                type="radio"
                value="VIBER"
                name="radioBtn"
                id="custom-switch3"
                label="viber"
                required
              />
              <Form.Check
                className="text-light ml-4 checkPointer"
                name="konsultacije"
                value="Ne"
                type="radio"
                id="disabledFieldsetCheck6"
                label="ne"
                custom
                required
              />
            </Form.Group>
            <Button variant="light" type="submit" className="mb-3 posaljiBtn">
              Pošalji
            </Button>
          </Form>
          <div className="col-10 offset-1">
            <h4 className="text-white text-center mb-3 mSucMsg">{success}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Consultation;
