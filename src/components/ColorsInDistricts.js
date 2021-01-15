import React from "react";
import red from "./Data/imgs/redMap.png";
import orange from "./Data/imgs/orangeMap.png";
import yellow from "./Data/imgs/yellowMap.png";

function ColorsInDistricts() {
  return (
    <div className="container mt-2 text-center m14">
      <div className="row">
        <h5 className="text-light mx-auto mhp">Proizvodnja</h5>
        <div className="col-10 offset-1">
          <div className="row">
            <div className="col">
              <img src={red} alt={red} className="karta m4" />
              <span className="ml-3 text-light m44">
                Idealno voćarski centri
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <img src={orange} alt={orange} className="karta m4" />
              <span className="ml-3 text-light m44">
                Povoljno-uz više parametara ispitivanja
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col mb-4">
              <img src={yellow} alt={yellow} className="karta m4" />
              <span className="ml-3 text-light m44">
                Manje povoljno-uz punu ekspertizu
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ColorsInDistricts;
