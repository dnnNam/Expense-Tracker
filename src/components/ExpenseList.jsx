import React from "react";
import PropTypes from "prop-types";
import ExpenseItem from "./ExpenseItem";
import { deleteTransaction } from "../store";

// danh sách chi tiêu

ExpenseList.propTypes = {
  transactions: PropTypes.func,
};

ExpenseList.defaultProps = {
  transactions: [],
};

function ExpenseList(props) {
  const { transactions } = props;

  return (
    <div>
      <h3 className="font-semibold mt-3 ">History</h3>
      <div className="border-b border-gray-900 mb-5"></div>
      <div>
        <ul>
          {transactions.map((transaction) => (
            <ExpenseItem
              transaction={transaction}
              deleteFunc={deleteTransaction}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExpenseList;
