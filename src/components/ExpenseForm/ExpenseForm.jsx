import React, { useState } from "react";
import PropTypes from "prop-types";

// form nhập chi tiêu
ExpenseForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

function ExpenseForm(props) {
  const { handleSubmit, transactions } = props;
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();

    if (!date || !category || !amount) return;

    const type = ["Salary", "Freelance"].includes(category)
      ? "income"
      : "expense";
    const newExpense = {
      id: Date.now(),
      date,
      category,
      amount: Number(amount),
      type,
    };

    handleSubmit(newExpense);
    // reset

    setAmount("");
    setCategory("");
    setDate("");
  };

  return (
    <form onSubmit={onSubmit}>
      <h3 className="font-semibold mt-3">Add New Transaction</h3>
      <div className="border-b border-gray-900 mb-5"></div>

      <div>
        <label>Date: </label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          className="border p-2 rounded w-full"
        ></input>
      </div>
      <div>
        <label>📂 Danh mục:</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">-- choose your category --</option>
          <option value="Food"> Food</option>
          <option value="Salary"> Salary</option>
          <option value="Transport"> Transport</option>
          <option value="Shopping"> Shopping</option>
          <option value="Freelance"> Freelance</option>
          <option value="Entertainment">Entertainment</option>
        </select>
      </div>
      <div>
        <label>Amount: </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          required
          className="border p-2 rounded w-full"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded mt-3 w-full"
      >
        Add New Transaction
      </button>
    </form>
  );
}

export default ExpenseForm;
