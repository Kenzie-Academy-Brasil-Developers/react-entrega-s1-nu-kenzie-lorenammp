import "./style.css";
import { useState } from "react";
import React from "react";
import FormAlert from "../FormAlert";

function Form(props) {
  const [transactionDesc, setTransactionDesc] = useState("");
  const [transactionValue, setTransactionValue] = useState("");
  const [transactionType, setTransactionType] = useState("");
  const [alert, setAlert] = useState(false);

  function setData() {
    setAlert(true);
    const transaction = {
      description: transactionDesc,
      type: transactionType,
      value: Number(transactionValue),
    };
    props.setListTransactions([...props.listTransactions, transaction]);
    props.getAll([...props.completeList, transaction]);

    setTransactionDesc("");
    setTransactionValue("");
    setTransactionType("");
  }

  return (
    <>
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
              required
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
              required
            />
          </div>

          <div className="single-input">
            <label for="transaction-type">Tipo de valor</label>
            <select
              value={transactionType}
              className="select-menu"
              name="value-type"
              onInput={(event) => setTransactionType(event.target.value)}
              required
            >
              <option value="" disbabled hidden>
                Transação
              </option>
              <option value="despesa">Despesa</option>
              <option value="entrada">Entrada</option>
            </select>
          </div>

          <button className="add-value-btn">Inserir valor</button>
        </form>
      </section>
      {alert && <FormAlert setAlert={setAlert} alert={alert} />}
    </>
  );
}

export default Form;
