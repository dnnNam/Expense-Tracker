import React from "react";
import PropTypes from "prop-types";

ExpenseItem.propTypes = {
  deleteFunc: PropTypes.func,
  transaction: PropTypes.object.isRequired,
};

ExpenseItem.defaultProps = {
  deleteFunc: null,
};

function ExpenseItem(props) {
  const { deleteFunc, transaction } = props;

  function deleteTransaction(transaction) {
    console.log("bấm rôi");

    if (!deleteFunc) return;
    deleteFunc(transaction.id);
  }
  return (
    <div>
      <li
        key={transaction.id}
        className=" group flex items-center justify-between m-1 pl-4 bg-white shadow border-black relative h-auto"
      >
        <button
          className="bg-red-500 text-white text-xs w-4 h-4  
        rounded-none absolute left-[-16px] 
        hidden group-hover:block"
          onClick={() => deleteTransaction(transaction)}
        >
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
        bg ${transaction.type === "income" ? "bg-green-500 " : "bg-red-500"}`}
        ></div>
      </li>
    </div>
  );
}

export default ExpenseItem;
