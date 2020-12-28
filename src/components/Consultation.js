import React from "react";
import { Form, Col, Button } from "react-bootstrap";

function Consultation() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 offset-1 mt-5 contactWrap border">
          <h4 className="text-center text-light mt-3">
            Zelite da zakazete konsultacije?
          </h4>
          <p style={{ fontSize: "18px", color: "white" }} className="mt-4 mb-4">
            U slucaju da imate bilo kakve nedoumice u vezi sa zasadom, izborom
            sadnica i zemljista, odravanjem vec postojecih zasada,
            navodnjavanjem i negovanjem zasada budite slobodni da popunite
            sledeca polja i neko iz naseg strucnog tima ce Vam se obratiti u
            najkracem mogucem roku.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-10 offset-1 mt-5 mb-5 contactWrap border">
          <Form className="mt-3">
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label className="text-light">Ime i prezime</Form.Label>
              <Form.Control type="text" placeholder="Vase ime i prezime" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridDistrict1">
              <Form.Label className="text-light">Okrug</Form.Label>
              <Form.Control as="select" placeholder="Izaberite Vas okrug">
                <option>Izaberite Vas okrug</option>
                <option>SEVERNO-BACKI</option>
                <option>SREDNJE-BANATSKI</option>
                <option>SEVERNO-BANATSKI</option>
                <option>JUZNO-BANATSKI</option>
                <option>ZAPADNO-BACKI</option>
                <option>JUZNO-BACKI</option>
                <option>SREMSKI</option>
                <option>MACVANSKI</option>
                <option>KOLUBARSKI</option>
                <option>PODUNAVSKI</option>
                <option>BRANICEVSKI</option>
                <option>SUMADIJSKI</option>
                <option>POMORAVSKI</option>
                <option>BORSKI</option>
                <option>ZAJECARSKI</option>
                <option>ZLATIBORSKI</option>
                <option>MORAVICKI</option>
                <option>RASKI</option>
                <option>RASINSKI</option>
                <option>NISAVSKI</option>
                <option>TOPLICKI</option>
                <option>PIROTSKI</option>
                <option>JABLANICKI</option>
                <option>PCINJSKI</option>
                <option>KOSOVSKI</option>
                <option>PECKI</option>
                <option>PRIZRENSKI</option>
                <option>KOSOVSKO-MITROVACKI</option>
                <option>KOSOVSKO-POMORAVSKI</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridDistrict2">
              <Form.Label className="text-light">Opstina</Form.Label>
              <Form.Control type="text" placeholder="Vasa opstina" required />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridDistrict2">
              <Form.Label className="text-light">Kontakt telefon</Form.Label>
              <Form.Control
                type="text"
                placeholder="Vas kontakt telefon"
                required
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridDistrict2">
              <Form.Label className="text-light">Email</Form.Label>
              <Form.Control type="email" placeholder="Vas email" required />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridDistrict2">
              <Form.Label className="text-light">
                Povrsina za podizanje zasada
              </Form.Label>
              <Form.Control type="text" placeholder="Povrsina zemljista" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridDistrict2">
              <Form.Label className="text-light">Vrsta voca</Form.Label>
              <Form.Control type="text" placeholder="Vrsta voca" />
            </Form.Group>
            <Form.Group className="ml-3">
              <Form.Label className="text-light">
                Registrovano gazdinstvo?
              </Form.Label>
              <Form.Check
                className="text-light ml-4 checkPointer"
                name="gazdinstvo"
                type="radio"
                id="disabledFieldsetCheck1"
                label="da"
                custom
                required
              />
              <Form.Check
                className="text-light ml-4 checkPointer"
                name="gazdinstvo"
                type="radio"
                id="disabledFieldsetCheck2"
                label="ne"
                custom
                required
              />
            </Form.Group>
            <Form.Group className="ml-3">
              <Form.Label className="text-light">
                Nacin podizanja zasada?
              </Form.Label>
              <Form.Check
                className="text-light ml-4 checkPointer"
                name="nacinPodizanja"
                type="radio"
                id="disabledFieldsetCheck3"
                label="kjuc u ruke"
                custom
                required
              />
              <Form.Check
                className="text-light ml-4 checkPointer"
                name="nacinPodizanja"
                type="radio"
                id="disabledFieldsetCheck4"
                label="savetodavni deo"
                custom
                required
              />
            </Form.Group>
            <Form.Group className="ml-3">
              <Form.Label className="text-light">
                Zelite da Vam odgovorimo mejlom?
              </Form.Label>
              <Form.Check
                className="text-light ml-4 checkPointer"
                name="odgovorMejlom"
                type="radio"
                id="disabledFieldsetCheck7"
                label="da"
                custom
                required
              />
              <Form.Check
                className="text-light ml-4 checkPointer"
                name="odgovorMejlom"
                type="radio"
                id="disabledFieldsetCheck8"
                label="ne"
                custom
                required
              />
            </Form.Group>
            <Form.Group className="ml-3">
              <Form.Label className="text-light">
                Zelite da zakazete onlajn konsultacije?
              </Form.Label>
              <Form.Check
                className="text-light ml-4 checkPointer"
                name="konsultacije"
                type="radio"
                id="disabledFieldsetCheck5"
                label="da"
                custom
                required
              />
              <Form.Check
                className="text-white ml-5 checkPointer"
                type="radio"
                name="radioBtn"
                id="custom-switch1"
                label="zoom"
              />
              <Form.Check
                className="text-white ml-5 checkPointer"
                type="radio"
                name="radioBtn"
                id="custom-switch2"
                label="skype"
              />
              <Form.Check
                className="text-white ml-5 checkPointer"
                type="radio"
                name="radioBtn"
                id="custom-switch3"
                label="viber"
              />
              <Form.Check
                className="text-light ml-4 checkPointer"
                name="konsultacije"
                type="radio"
                id="disabledFieldsetCheck6"
                label="ne"
                custom
                required
              />
            </Form.Group>

            <Button variant="light" type="submit" className="mb-3">
              Posalji
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Consultation;
