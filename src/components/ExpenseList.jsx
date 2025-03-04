import React from "react";
import PropTypes from "prop-types";

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
      <div class="border-b border-gray-900 mb-5"></div>
      <ul>
        {transactions.map((transaction) => (
          <li
            key={transaction.id}
            className="flex items-center justify-between"
          >
            <span className="flex-1">{transaction.text}</span>
            <span
              className={`font-medium ${
                transaction.type === "income"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {transaction.type === "income"
                ? `+${transaction.amount}`
                : transaction.amount}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
