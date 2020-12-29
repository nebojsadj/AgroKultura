import React from "react";
import red from "./Data/imgs/redMap.png";
import orange from "./Data/imgs/orangeMap.png";
import yellow from "./Data/imgs/yellowMap.png";

function ColorsInDistricts() {
  return (
    <div className="container mt-2 text-center">
      <div className="row">
        <div className="col-8 offset-2">
          <div className="row">
            <div className="col">
              <img src={red} alt={red} className="karta" />
              <span className="ml-3 text-light">Idealno vocarski centri</span>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <img src={orange} alt={orange} className="karta" />
              <span className="ml-3 text-light">
                Povoljno-potrebno vise parametara ispitivanja
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <img src={yellow} alt={yellow} className="karta mb-4" />
              <span className="ml-3 text-light">
                Manje povoljno-potrebna puna ekspertiza svih parametara
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ColorsInDistricts;
