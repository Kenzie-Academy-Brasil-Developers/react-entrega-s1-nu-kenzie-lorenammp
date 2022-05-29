import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import Circle from "./img/circle.png";
import Card1 from "./img/card1.png";
import Card2 from "./img/card2.png";
import Card3 from "./img/card3.png";

function App() {
  return (
    <section className="start-page">
      <div className="start-content">
        <section className="start-text">
          <section className="start-logo">
            <h1>
              <span className="pink-text">Nu</span> Kenzie
            </h1>
          </section>

          <section className="text-large">
            Centralize o controle das suas finanças de forma rápida e segura
          </section>

          <Link to="/Main">
            <button className="start-btn">Iniciar</button>
          </Link>
        </section>

        <section className="main-img">
          <img className="circle-img" src={Circle} alt="circle" />
          <img className="card1-img" src={Card1} alt="card" />
          <img className="card2-img" src={Card2} alt="card" />
          <img className="card3-img" src={Card3} alt="card" />
        </section>
      </div>
    </section>
  );
}

export default App;
