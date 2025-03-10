import React from "react";
import PropTypes from "prop-types";
import BarChart from "./BarChart";

ExpenseChart.propTypes = {
  transactions: PropTypes.array.isRequired,
};

function ExpenseChart(props) {
  const { transactions } = props;

  const processTransactions = (transactions) => {
    // tạo 2 mảng lưu income và expense
    const incomeData = Array(12).fill(0); // tạo ra mảng có sãn 12 ô trông xuống dưới nhận month là key
    const expenseData = Array(12).fill(0);

    transactions.forEach((transaction) => {
      const month = new Date(transaction.date).getMonth(); // lấy tháng của ngày đăng kí
      // lỗi form lười fix vì nhập mm/dd//yy

      if (transaction.type === "income") {
        incomeData[month] += transaction.amount;
      } else {
        expenseData[month] += transaction.amount;
      }
    });

    return { incomeData, expenseData };
  };

  const { incomeData, expenseData } = processTransactions(transactions);

  return (
    <div>
      <h2 className="text-xl font-semibold m-2 text-gray-800">
        Expense Tracker Dashboard
      </h2>
      <div className="border-b border-gray-900 mb-5"></div>
      <BarChart incomeData={incomeData} expenseData={expenseData} />
    </div>
  );
}

export default ExpenseChart;
