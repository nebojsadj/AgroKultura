import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
// import { useLocation } from "react-router-dom";

function Navigation() {
  return (
    <>
      <Navbar collapseOnSelect expand="md" className="border" variant="dark">
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="bg-light mNav"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <NavLink to="/" exact className="d-inline p-2 nav">
              Početna
            </NavLink>
            <NavLink to="/services" className="d-inline p-2 nav">
              Usluge
            </NavLink>
            <NavLink to="/partners" className="d-inline p-2 nav">
              Partneri
            </NavLink>
            <NavLink to="/consultation" className="d-inline p-2 nav">
              Konsultacije
            </NavLink>
            <NavLink to="/contact" className="d-inline p-2 nav">
              Kontakt
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Navigation;
