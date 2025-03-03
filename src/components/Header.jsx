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
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [balance, setBaLance] = useState(0);

  useEffect(() => {
    const totalIncome = transactions
      .filter((transaction) => transaction.type === "income")
      .reduce((prevTran, currTran) => prevTran + currTran, 0);

    const totalExpense = transactions
      .filter((transaction) => transaction.type === "expense")
      .reduce((prevTran, currTran) => prevTran + currTran, 0);

    balance = totalIncome - totalExpense;

    setIncome(totalIncome);
    setExpense(totalExpense);
    setBaLance(balance);
  }, [transactions]);
  return <div></div>;
}

export default Header;
