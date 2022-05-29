import { useState } from "react";
import React from "react";
import Card from "../Card";
import EmpytList from "../EmptyList";
import "./style.css";

function List(props) {
  const [select, setSelect] = useState("");

  function selectedItem(item) {
    setSelect(item);
  }
  return (
    <section className="transaction-list">
      <section className="transaction-filter">
        <h2>Resumo financeiro</h2>
        <ul className="filter">
          <li
            className={select === "0" ? "selected-item" : "menu-item"}
            onClick={() => {
              props.filterAll();
              selectedItem("0");
            }}
          >
            Todos
          </li>
          <li
            className={select === "1" ? "selected-item" : "menu-item"}
            onClick={() => {
              props.filterEntries();
              selectedItem("1");
            }}
          >
            Entradas
          </li>
          <li
            className={select === "2" ? "selected-item" : "menu-item"}
            onClick={() => {
              props.filterSpents();
              selectedItem("2");
            }}
          >
            Despesas
          </li>
        </ul>
      </section>

      <section className="card-list">
        {props.listTransactions.length === 0 ? (
          <EmpytList></EmpytList>
        ) : (
          props.listTransactions.map((transaction, index) => (
            <Card
              listTransactions={props.listTransactions}
              setListTransactions={props.setListTransactions}
              transaction={transaction}
              key={index}
              getAll={props.getAll}
              completeList={props.completeList}
            />
          ))
        )}
        {}
      </section>
    </section>
  );
}

export default List;
