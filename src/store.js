// lấy danh sách từ localStorage về
const getList = () => {
  return JSON.parse(localStorage.getItem("expense_tracker")) || [];
};
// thêm các item  lên local Storage
const addItemToLS = (transactionList) => {
  let list = getList();
  list = [...list, ...transactionList];
  localStorage.setItem("expense_tracker", JSON.stringify(list));
};
