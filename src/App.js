import React from "react";
import Switch from "react-bootstrap/esm/Switch";
import { Route } from "react-router-dom";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Partners from "./components/Partners";
import Services from "./components/Services";
import Consultation from "./components/Consultation";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header className="backHeader" />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/partners">
          <Partners />
        </Route>
        <Route path="/consultation">
          <Consultation />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
