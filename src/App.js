import { useState } from "react";
import "./App.css";
import ExpenseFilter from "./components/ExpenseFilter/ExpenseFilter";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import Header from "./components/Header/Header";
import { getList } from "./store";

import { handleChange, handleDelete, onSubmit } from "./utils";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
function App() {
  const transactionList = getList();

  const [transaction, setTransaction] = useState(transactionList);

  const handleFilterChange = (filter) => {
    console.log(filter);

    const filteredTransaction = handleChange(filter, transactionList);
    console.log(filteredTransaction);

    setTransaction(filteredTransaction);
  };

  const handleForm = (newExpense) => {
    onSubmit(newExpense, transaction, setTransaction);
  };

  return (
    <div className=" max-w-md mx-auto p-6 bg-slate-100 shadow-lg rounded-lg">
      {<Header transactions={transaction} />}
      <ExpenseFilter onFilterChange={handleFilterChange} />
      <ExpenseList
        transactions={transaction}
        onDelete={(id) => handleDelete(id, setTransaction)}
      />
      <ExpenseForm handleSubmit={handleForm} />
    </div>
  );
}

export default App;
