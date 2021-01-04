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
                Some quick example text to build on the card title and make up
                the bulk of the card's content.Some quick example text to build
                on the card title and make up the bulk of the card's content.
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
                Some quick example text to build on the card title and make up
                the bulk of the card's content.Some quick example text to build
                on the card title and make up the bulk of the card's content.
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
                Some quick example text to build on the card title and make up
                the bulk of the card's content.Some quick example text to build
                on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Partners;
