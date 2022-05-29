import "./style.css";
import { useState } from "react";
import React from "react";

function Form(props) {
  const [transactionDesc, setTransactionDesc] = useState("");
  const [transactionValue, setTransactionValue] = useState("");
  const [transactionType, setTransactionType] = useState("");

  function setData() {
    const transaction = {
      description: transactionDesc,
      type: transactionType,
      value: Number(transactionValue),
    };
    props.setListTransactions([...props.listTransactions, transaction]);
    props.getAll([...props.listTransactions, transaction]);

    setTransactionDesc("");
    setTransactionValue("");
    setTransactionType("");
  }

  return (
    <section className="form-section">
      <form
        onSubmit={(event) => setData(event.preventDefault())}
        className="add-transaction-form"
      >
        <div className="desc-text-input">
          <label for="description">Descrição</label>
          <input
            value={transactionDesc}
            name="description"
            className="add-input"
            type="text"
            placeholder="Digite aqui sua descrição"
            onChange={(event) => setTransactionDesc(event.target.value)}
          />
          <small>Ex. Compra de roupas</small>
        </div>

        <div className="single-input">
          <label for="value">Valor</label>
          <input
            value={transactionValue}
            name="value"
            className="value-input"
            type="number"
            placeholder="0"
            onChange={(event) => setTransactionValue(event.target.value)}
          />
        </div>

        <div className="single-input">
          <label for="transaction-type">Tipo de valor</label>
          <select
            value={transactionType}
            className="select-menu"
            name="value-type"
            onInput={(event) => setTransactionType(event.target.value)}
          >
            <option value="none" selected disbabled hidden>
              Transação
            </option>
            <option value="despesa">Despesa</option>
            <option value="entrada">Entrada</option>
          </select>
        </div>

        <button className="add-value-btn">Inserir valor</button>
      </form>
    </section>
  );
}

export default Form;
