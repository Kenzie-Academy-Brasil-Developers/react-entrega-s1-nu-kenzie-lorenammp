import { useState } from "react";
import React from "react";
import "./style.css";
import Header from "../Header";
import Form from "../Form";
import List from "../List";
import Total from "../Total";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Main() {
  const [listTransactions, setListTransactions] = useState([]);
  const [completeList, setCompleteList] = useState([]);

  function changeValues() {
    listTransactions.forEach((item) => {
      if (item.value > 0 && item.type === "despesa") {
        item.value = item.value * -1;
      }
    });
  }

  function totalValue() {
    changeValues();
    const total = listTransactions.reduce((a, b) => a + b.value, 0);
    return total;
  }

  function getAll(allItemsList) {
    setCompleteList(allItemsList);
  }

  function filterEntries() {
    const filtered = completeList.filter((item) => item.type === "entrada");
    setListTransactions(filtered);
  }

  function filterSpents() {
    const filtered = completeList.filter((item) => item.type === "despesa");
    setListTransactions(filtered);
  }

  function filterAll() {
    setListTransactions(completeList);
  }

  return (
    <div className="App">
      <Header></Header>
      <main className="main-content">
        <aside className="sidebar">
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
            getAll={getAll}
            completeList={completeList}
          />

          <Total totalValue={totalValue} />
        </aside>
        <main className="card-content">
          <List
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
            completeList={completeList}
            getAll={getAll}
            filterEntries={filterEntries}
            filterSpents={filterSpents}
            filterAll={filterAll}
          />
        </main>
      </main>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default Main;
