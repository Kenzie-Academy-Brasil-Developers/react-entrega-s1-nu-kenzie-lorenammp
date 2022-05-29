import "./style.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="main-header">
      <div className="header-content">
        <section className="logo">
          <h1>
            <span className="pink-text">Nu</span> Kenzie
          </h1>
        </section>

        <section className="leave-btn">
          <Link to="/">
            <button className="btn">Início</button>
          </Link>
        </section>
      </div>
    </header>
  );
}

export default Header;
