import "./style.css";

function EmpytList() {
  return (
    <div className="empty-list">
      <div className="message">Você ainda não possui nenhum lançamento</div>
      <section className="empty-card">
        <div className="first-line"></div>
        <div className="second-line"></div>
      </section>

      <section className="empty-card">
        <div className="first-line"></div>
        <div className="second-line"></div>
      </section>

      <section className="empty-card">
        <div className="first-line"></div>
        <div className="second-line"></div>
      </section>
    </div>
  );
}

export default EmpytList;
