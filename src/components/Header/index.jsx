import "./style.css";

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
          <button className="btn">Inicio</button>
        </section>
      </div>
    </header>
  );
}

export default Header;
