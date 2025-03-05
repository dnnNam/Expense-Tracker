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
      <div>
        <ul>
          {transactions.map((transaction) => (
            <li
              key={transaction.id}
              className=" group flex items-center justify-between m-1 pl-4 bg-white shadow border-black relative h-auto"
            >
              <button className="bg-red-500 text-white text-xs w-4 h-4  rounded-none absolute left-[-17px] hidden group-hover:block">
                X
              </button>
              {/* nội dung giao dịch */}
              <span className=" ml-5">{transaction.category}</span>
              <span className="mr-5">
                {transaction.type === "income"
                  ? `+${transaction.amount}`
                  : transaction.amount}
              </span>

              <div
                className={`  absolute h-full mt-1 w-1 right-0 top-[-3.8px]
            bg ${
              transaction.type === "income" ? "bg-green-500 " : "bg-red-500"
            }`}
              ></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExpenseList;
