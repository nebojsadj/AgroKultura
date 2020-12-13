import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navbar() {
  // const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  return (
    <Nav
      fill
      variant="tabs"
      defaultActiveKey="/"
      // onSelect={handleSelect}
      className="navNone"
    >
      <Nav.Item className="n">
        <Nav.Link as={Link} to="/" eventKey="link-1" className="navNone">
          Pocetna
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className="n">
        <Nav.Link
          as={Link}
          to="/services"
          eventKey="link-2"
          className="navNone"
        >
          Usluge
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className="n">
        <Nav.Link
          as={Link}
          to="/partners"
          eventKey="link-3"
          className="navNone"
        >
          Partneri
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className="n">
        <Nav.Link as={Link} to="/contact" eventKey="link-4" className="navNone">
          Kontakt
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navbar;
