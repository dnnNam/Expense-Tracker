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

export const onSubmit = (newExpense, setTransaction) => {
  // phải bỏ vào setTransaction để đồng bộ nếu không nó sẽ khi react không kịp state
  // khi thêm phần tử thứ 2 nó sẽ bị thêm 1 lần phần cũ nữa

  setTransaction((prevTransaction) => {
    const updateTransactions = [...prevTransaction, newExpense];
    console.log(updateTransactions);
    addItemToLS(updateTransactions);
    return updateTransactions;
  });
};
