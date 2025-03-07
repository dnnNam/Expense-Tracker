import { useState } from "react";
import "./App.css";
import ExpenseFilter from "./components/ExpenseFilter/ExpenseFilter";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import Header from "./components/Header/Header";
import { getList } from "./store";
import { addItemToLS } from "./store";
import { handleChange, handleDelete } from "./utils";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
function App() {
  const transactionList = getList();

  // const transactions = [
  //   {
  //     id: 1,
  //     date: "2025-03-01",
  //     category: "Food",
  //     amount: 120000,
  //     type: "expense",
  //   },
  //   {
  //     id: 2,
  //     date: "2025-03-01",
  //     category: "Salary",
  //     amount: 15000000,
  //     type: "income",
  //   },
  //   {
  //     id: 3,
  //     date: "2025-03-02",
  //     category: "Transport",
  //     amount: 50000,
  //     type: "expense",
  //   },
  //   {
  //     id: 4,
  //     date: "2025-03-03",
  //     category: "Shopping",
  //     amount: 300000,
  //     type: "expense",
  //   },
  //   {
  //     id: 5,
  //     date: "2025-03-04",
  //     category: "Freelance",
  //     amount: 5000000,
  //     type: "income",
  //   },
  //   {
  //     id: 6,
  //     date: "2025-03-05",
  //     category: "Entertainment",
  //     amount: 200000,
  //     type: "expense",
  //   },
  //   {
  //     id: 7,
  //     date: "2025-03-05",
  //     category: "Bills",
  //     amount: 1000000,
  //     type: "expense",
  //   },
  // ];

  // addItemToLS(transactions);

  const [transaction, setTransaction] = useState(transactionList);

  const handleFilterChange = (filter) => {
    console.log(filter);

    const filteredTransaction = handleChange(filter, transactionList);
    console.log(filteredTransaction);

    setTransaction(filteredTransaction);
  };

  console.log(transaction);

  return (
    <div className=" max-w-md mx-auto p-6 bg-slate-100 shadow-lg rounded-lg">
      {<Header transactions={transaction} />}
      <ExpenseFilter onFilterChange={handleFilterChange} />
      <ExpenseList
        transactions={transaction}
        onDelete={(id) => handleDelete(id, setTransaction)}
      />
      <ExpenseForm />
    </div>
  );
}

export default App;
