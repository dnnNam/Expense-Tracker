import "./App.css";
import ExpenseList from "./components/ExpenseList";
import Header from "./Header/Header";
import { getList } from "./store";
function App() {
  const transactionList = getList();

  return (
    <div className=" max-w-md mx-auto p-6 bg-slate-100 shadow-lg rounded-lg">
      {<Header transactions={transactionList} />}
      <ExpenseList transactions={transactionList} />
    </div>
  );
}

export default App;
