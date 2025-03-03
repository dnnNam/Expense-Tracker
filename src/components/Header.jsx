import React, { use, useEffect, useState } from "react";
import PropTypes from "prop-types";

// có nhiệm vụ hiển thị tổng số dư , thu nhập và chi tiêu

Header.propTypes = {
  transactions: PropTypes.func,
};

Header.defaultProps = {
  transactions: [],
};

function Header(props) {
  const { transactions } = props;
  console.log(transactions);

  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [balance, setBaLance] = useState(0);

  useEffect(() => {
    const totalIncome = transactions
      .filter((transaction) => transaction.type === "income")
      .reduce((prevTran, currTran) => prevTran + currTran.amount, 0);

    const totalExpense = transactions
      .filter((transaction) => transaction.type === "expense")
      .reduce((prevTran, currTran) => prevTran + currTran.amount, 0);

    setBaLance(totalIncome - totalExpense);

    setIncome(totalIncome);
    setExpense(totalExpense);
  }, [transactions]);
  console.log(balance);

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semiblod">Expense Tracker</h2>
      <h3 className="text-3xl font-bold  text-center my-3">
        {balance.toLocaleString("vi-VN")}VND
      </h3>

      {/* <div className="flex justify-between p-4 bg-gray-100 rounded-lg">
        <div className="text-green-600 font-semibold">
          INCOME
          <br />${income.toFixed(2)}
        </div>
        <div className="text-red-600 font-semibold">
          EXPENSE
          <br />${Math.abs(expense).toFixed(2)}
        </div>
      </div> */}
    </div>
  );
}

export default Header;
