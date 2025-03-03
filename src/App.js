import "./App.css";
import Header from "./components/Header";
import { getList } from "./store";
function App() {
  const transactionList = getList();

  return <div className="App">{<Header transactions={transactionList} />}</div>;
}

export default App;
