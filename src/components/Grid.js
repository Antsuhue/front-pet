import React from "react";
import "../css/Grid.css";
import gato from "../static/images/gato1.jpg";
import gato2 from "../static/images/gato2.jpg";
import gato3 from "../static/images/gato3.jpg";

const Grid = () => {
  return (
    <div className="grid-container">
      <div className="card">
        <img src={gato} alt="Card" className="card-image" />
        <div className="card-content">
          <p>
            <strong>Nome:</strong> Napoleão
          </p>
          <p>
            <strong>idade:</strong> 2 anos
          </p>
          <p>
            <strong>Filhote:</strong> Não
          </p>
          <p>
            <strong>Possui FIV FeLV:</strong> Não
          </p>
          <p>
            <strong>Consegue Socializar</strong> Sim
          </p>
        </div>
      </div>
      ;
      <div className="card">
        <img src={gato2} alt="Card" className="card-image" />
        <div className="card-content">
          <p>
            <strong>Nome:</strong> Pedro
          </p>
          <p>
            <strong>idade:</strong> 2 meses
          </p>
          <p>
            <strong>Filhote:</strong> Sim
          </p>
          <p>
            <strong>Possui FIV FeLV:</strong> Não
          </p>
          <p>
            <strong>Consegue Socializar</strong> Não
          </p>
        </div>
      </div>
      ;
      <div className="card">
        <img src={gato3} alt="Card" className="card-image" />
        <div className="card-content">
          <p>
            <strong>Nome:</strong> Roger
          </p>
          <p>
            <strong>idade:</strong> 1 ano
          </p>
          <p>
            <strong>Filhote:</strong> Não
          </p>
          <p>
            <strong>Possui FIV FeLV:</strong> Sim
          </p>
          <p>
            <strong>Consegue Socializar</strong> Sim
          </p>
        </div>
      </div>
      ;
    </div>
  );
};

export default Grid;
