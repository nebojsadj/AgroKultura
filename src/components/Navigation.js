import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <Nav fill variant="tabs" className="navNone">
      <Nav.Item>
        <Nav.Link as={Link} to="/" eventKey="link-1" className="navNone">
          Pocetna
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          as={Link}
          to="/services"
          eventKey="link-2"
          className="navNone"
        >
          Usluge
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          as={Link}
          to="/partners"
          eventKey="link-3"
          className="navNone"
        >
          Partneri
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          as={Link}
          to="/consultation"
          eventKey="link-4"
          className="navNone"
        >
          Konsultacije
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/contact" eventKey="link-5" className="navNone">
          Kontakt
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navigation;
