import React from "react";
import Switch from "react-bootstrap/esm/Switch";
import { Route } from "react-router-dom";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Partners from "./components/Partners";
import Services from "./components/Services";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
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
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
