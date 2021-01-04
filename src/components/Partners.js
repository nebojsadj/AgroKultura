import React from "react";
import { Card } from "react-bootstrap";
import img1 from "./Data/imgs/gazdinstvo0.jpg";
import img2 from "./Data/imgs/rai.jpg";
import img3 from "./Data/imgs/gazdinstvo1.jpg";

function Partners() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row contactWrap border">
        <div className="col mt-3 cardFlex mb-3">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={img1} className="cardsImgs" />
            <Card.Body>
              <Card.Title>Gazdinstvo Simović</Card.Title>
              <Card.Text className="partnersText">
                Gazdinstvo Simovic se tradicionalno bavi uzgojem voca vise vrsta
                kao sto su: tresnje, kajsije, borovnica i vinova loza.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col mt-3 cardFlex mb-3">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={img2} className="cardsImgs" />
            <Card.Body>
              <Card.Title>Raiffeisen</Card.Title>
              <Card.Text className="partnersText">
                Raiffeisen banka je nasa dugogodisnja podrska, i uvek je uz nas!
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col mt-3 cardFlex mb-3">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={img3} className="cardsImgs" />
            <Card.Body>
              <Card.Title>Gazdinstvo Perić</Card.Title>
              <Card.Text className="partnersText">
                Gazdinstvo Peric se tradicionalno bavi uzgojem voca vise vrsta
                kao sto su: tresnje, kajsije, borovnica i vinova loza.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Partners;
