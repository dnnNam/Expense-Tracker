import { addItemToLS, deleteTransaction } from "./store";
import { getList } from "./store";
export const handleChange = (filter, transactionList) => {
  return transactionList.filter((transaction) => {
    // kiểm tra danh mục khớp không
    if (filter.category && transaction.category !== filter.category)
      return false;

    // kiểm tra ngày
    if (filter.date && transaction.date !== filter.date) return false;

    return true;
  });
};

export const handleDelete = (_id, setTransaction) => {
  deleteTransaction(_id);
  const updateList = getList();

  setTransaction(updateList);
};

export const onSubmit = (newExpense, transaction, setTransaction) => {
  const updateTransactions = [...transaction, newExpense];
  setTransaction(updateTransactions);
  addItemToLS(updateTransactions);
};
