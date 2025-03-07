import React, { useState } from "react";
import PropTypes from "prop-types";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import { deleteTransaction } from "../../store";

// danh sách chi tiêu

ExpenseList.propTypes = {
  transactions: PropTypes.array.isRequired,
};

ExpenseList.defaultProps = {
  transactions: [],
};

function ExpenseList(props) {
  const { transactions } = props;
  const [transactionList, setTransactionList] = useState(transactions);

  function deleteItem(_id) {
    // xóa item trong local Storage
    deleteTransaction(_id);
    // xóa item trên UI
    const updateTransactions = transactionList.filter((t) => t.id !== _id);

    setTransactionList(updateTransactions);
  }

  return (
    <div>
      <h3 className="font-semibold mt-3 ">History</h3>
      <div className="border-b border-gray-900 mb-5"></div>
      <div>
        <ul>
          {transactionList.map((transaction) => (
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
