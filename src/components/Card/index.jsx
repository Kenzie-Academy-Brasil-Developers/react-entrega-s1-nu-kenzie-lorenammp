import "./style.css";
import { FaTrash } from "react-icons/fa";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Card(props) {
  const positiveValue =
    props.transaction.value < 0
      ? (props.transaction.value = props.transaction.value * -1)
      : props.transaction.value;

  const formatedValue = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(positiveValue);

  const transactionType =
    props.transaction.type === "entrada"
      ? "single-card green-border"
      : "single-card red-border";

  function removeCard() {
    const removeTransaction = props.listTransactions.filter(
      (transaction) =>
        JSON.stringify(transaction) !== JSON.stringify(props.transaction)
    );

    props.setListTransactions(removeTransaction);

    const removeFromAll = props.completeList.filter(
      (transaction) =>
        JSON.stringify(transaction) !== JSON.stringify(props.transaction)
    );

    props.getAll(removeFromAll);

    notifyRemoval();
  }

  const notifyRemoval = () => toast.warn("Transação removida da lista");

  return (
    <section className={transactionType}>
      <div className="desc-type">
        <h2>{props.transaction.description}</h2>
        <div className="type">{props.transaction.type}</div>
      </div>

      <div className="value-delete">
        <div className="value">{formatedValue}</div>
        <div className="delete">
          <button
            type="button"
            className="delete-btn"
            onClick={() => removeCard()}
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Card;
