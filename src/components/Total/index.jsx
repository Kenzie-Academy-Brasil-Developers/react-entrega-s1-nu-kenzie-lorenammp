import "./style.css";

function Total(props) {
  const formatedValue = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(props.totalValue());
  return (
    <section className="total-account">
      <div className="text">
        <h2>Valor total:</h2>
        <div>O valor se refere ao saldo</div>
      </div>

      <div className="acc-value">{formatedValue}</div>
    </section>
  );
}

export default Total;
