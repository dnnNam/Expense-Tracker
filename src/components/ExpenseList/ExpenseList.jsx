import React, { useState } from "react";
import PropTypes from "prop-types";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
// danh sách chi tiêu

ExpenseList.propTypes = {
  transactions: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

ExpenseList.defaultProps = {
  transactions: [],
  onDelete: null,
};

function ExpenseList(props) {
  const { transactions, onDelete } = props;

  function deleteItem(_id) {
    if (!onDelete) return;
    // xóa item trên UI
    onDelete(_id);
  }

  return (
    <div>
      <h3 className="font-semibold mt-3 ">History</h3>
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

export default ExpenseList;
