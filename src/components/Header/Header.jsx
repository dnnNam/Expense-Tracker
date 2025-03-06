import React, { useEffect, useState } from "react";
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
    <div className="bg-none">
      <h2 className="text-sm font-semiblod text-center">Expense Tracker</h2>
      <div className="text-sm pt-10">YOUR BALANCE</div>
      <h3 className="text-xl font  mb-3">
        {balance.toLocaleString("vi-VN")} VND
      </h3>

      <div className="flex justify-between p-11 bg-zinc-50 rounded-lg">
        <div className="text-green-600 font-semibold">
          <span className="text-slate-950"> INCOME</span>
          <br />
          {income.toLocaleString("vi-VN")} VND
        </div>
        <div className="border-l border-gray-300 h-10 mt-1"></div>
        <div className="text-red-600 font-semibold">
          <span className="text-slate-950">EXPENSE</span>
          <br />
          {expense.toLocaleString("vi-VN")} VND
        </div>
      </div>
    </div>
  );
}

export default Header;
