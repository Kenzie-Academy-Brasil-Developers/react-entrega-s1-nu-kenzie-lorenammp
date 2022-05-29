import "./style.css";
import { useState } from "react";
import React from "react";
import Select from "react-select";

function Form(props) {
  const tipoValor = [
    { value: "entrada", label: "Entrada" },
    { value: "despesa", label: "Despesa" },
  ];

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
  }

  return (
    <section className="form-section">
      <form
        onSubmit={(event) => setData(event.preventDefault())}
        className="add-transaction-form"
      >
        <label for="description">Descrição</label>
        <input
          name="description"
          className="add-input"
          type="text"
          placeholder="Digite aqui sua descrição"
          onChange={(event) => setTransactionDesc(event.target.value)}
        />

        <div className="single-input">
          <label for="value">Valor</label>
          <input
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
            className="select-menu"
            name="value-type"
            onInput={(event) => setTransactionType(event.target.value)}
          >
            <option value="entrada">Entrada</option>
            <option value="despesa">Despesa</option>
          </select>
        </div>

        <button className="add-value-btn">Inserir valor</button>
      </form>
    </section>
  );
}

export default Form;
