import { useState } from "react";
import "./App.css";
import ExpenseFilter from "./components/ExpenseFilter/ExpenseFilter";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import Header from "./components/Header/Header";
import { getList } from "./store";

import { handleChange, handleDelete, onSubmit } from "./utils";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseChart from "./components/ExpenseChart/ExpenseChart";
function App() {
  const transactionList = getList();

  const [transaction, setTransaction] = useState(transactionList);

  const handleFilterChange = (filter) => {
    console.log(filter);

    const filteredTransaction = handleChange(filter, transactionList);

    setTransaction(filteredTransaction);
  };

  const handleForm = (newExpense) => {
    onSubmit(newExpense, setTransaction);
  };

  const deleteFunc = (_id) => {
    handleDelete(_id, setTransaction);
  };

  return (
    <div className=" max-w-md mx-auto p-6 bg-slate-100 shadow-lg rounded-lg">
      {<Header transactions={transaction} />}
      <ExpenseChart transactions={transaction} />
      <ExpenseFilter onFilterChange={handleFilterChange} />
      <ExpenseList transactions={transaction} onDelete={deleteFunc} />
      <ExpenseForm handleSubmit={handleForm} />
    </div>
  );
}

export default App;
