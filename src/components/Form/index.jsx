import "./style.css";
import { useState } from "react";
import React from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Form(props) {
  const [transactionDesc, setTransactionDesc] = useState("");
  const [transactionValue, setTransactionValue] = useState("");
  const [transactionType, setTransactionType] = useState("");

  function setData() {
    if (transactionType === "") {
      return notifyError();
    }
    notifySuccess();
    const transaction = {
      description: transactionDesc,
      type: transactionType,
      value: Number(transactionValue),
    };
    props.setListTransactions([transaction, ...props.listTransactions]);
    props.getAll([transaction, ...props.completeList]);

    setTransactionDesc("");
    setTransactionValue("");
    setTransactionType("");
  }

  const notifySuccess = () => toast.success("Transação adicionada à lista");

  const notifyError = () => toast.error("Selecione o tipo corretamente");
  return (
    <>
      <section className="form-section">
        <form
          onSubmit={(event) => setData(event.preventDefault())}
          className="add-transaction-form"
        >
          <div className="desc-text-input">
            <label>Descrição</label>
            <input
              value={transactionDesc}
              name="description"
              className="add-input"
              type="text"
              placeholder="Digite aqui sua descrição"
              onChange={(event) => setTransactionDesc(event.target.value)}
              required
            />
            <small>Ex. Compra de roupas</small>
          </div>

          <div className="single-input">
            <label>Valor</label>
            <input
              value={transactionValue}
              name="value"
              className="value-input"
              type="number"
              placeholder="R$ 00,00"
              onChange={(event) => setTransactionValue(event.target.value)}
              required
            />
          </div>

          <div className="single-input">
            <label>Tipo de valor</label>
            <select
              value={transactionType}
              className="select-menu"
              name="value-type"
              onInput={(event) => setTransactionType(event.target.value)}
              required
            >
              <option hidden>Transação</option>
              <option value="despesa">Despesa</option>
              <option value="entrada">Entrada</option>
            </select>
          </div>

          <button className="add-value-btn" type="submit">
            Inserir valor
          </button>
        </form>
      </section>
    </>
  );
}

export default Form;
