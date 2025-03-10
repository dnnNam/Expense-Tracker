// lấy danh sách từ localStorage về
export const getList = () => {
  return JSON.parse(localStorage.getItem("expense_tracker")) || [];
};
// thêm các item  lên local Storage
export const addItemToLS = (transactionList) => {
  const newList = [...transactionList];
  localStorage.setItem("expense_tracker", JSON.stringify(newList));
  return newList;
};

// xóa giao dich theo id
export const deleteTransaction = (id) => {
  const list = getList();
  const updateList = list.filter((transaction) => transaction.id !== id);
  localStorage.setItem("expense_tracker", JSON.stringify(updateList));
  return updateList;
};
