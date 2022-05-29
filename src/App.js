import { useState } from "react";
import React from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";
import Total from "./components/Total";

function App() {
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
    console.log(completeList);
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
    </div>
  );
}

export default App;
