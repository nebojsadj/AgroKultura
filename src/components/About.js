import React from "react";
import img4 from "./Data/imgs/img4.jpg";

function About() {
  return (
    <div className="col-10 offset-1 contactWrap border text-light">
      <div className="row">
        <div className="col text-center mt-3">
          <img src={img4} alt="kupina" className="aboutImg" />
        </div>
        <div className="col mt-3 mb-3">
          <h4 className="text-center">Nekoliko reči o nama.</h4>
          <p>
            <b className="ml-4">Platforma AGRONOM S</b> nastala je kao pozitivno
            razmišljanje i uspostavljanje pravih sistema vrednosti u
            Poljoprivredi. Zasnovana na tradicionalnom pristupu(gostoprimstvu)
            pružanja stručnih informacija uz pomoc modernih(online) načina
            komunikacije čini da postanemo <b>JEDINSTVENI I NAJBOLJI.</b>
          </p>
          <p>
            <b className="ml-4">Cilj:</b> upoznavanje proizvođača sa savremenim
            načinom proizvodnje koji je prilagođen datim uslovima u kojima se
            nalazi.
          </p>
          <p>
            <b className="ml-4">Moto:</b> ne robovati sterotipima,vec uzdignute
            glave sa čvrstim nogama na zemlji učiniti nemoguće.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;