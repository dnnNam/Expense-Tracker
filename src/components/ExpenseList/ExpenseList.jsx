import React from "react";
import { propsTypeList } from "../../expenseType";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
// danh sách chi tiêu

function ExpenseList(props) {
  const { transactions, onDelete } = props;

  function deleteItem(_id) {
    if (!onDelete) return;
    // xóa item trên UI
    onDelete(_id);
  }

  return (
    <div>
      <h3 className="text-xl font-semibold m-2 text-gray-800 ">History</h3>
      <div className="border-b border-gray-900 mb-5"></div>
      <div>
        <ul>
          {transactions.map((transaction) => (
            <ExpenseItem
              key={transaction.id}
              transaction={transaction}
              deleteFunc={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

ExpenseList.propTypes = propsTypeList;

export default ExpenseList;
