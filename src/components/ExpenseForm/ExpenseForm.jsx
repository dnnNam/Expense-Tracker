import React, { useState } from "react";
import { propsTypeForm } from "../../expenseType";

// form nhập chi tiêu

function ExpenseForm(props) {
  const { handleSubmit } = props;
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();

    if (!date || !category || !amount) return;

    const [year, day, month] = date.split("-");
    const formattedDate = `${year}-${month}-${day}`;

    const type = ["Salary", "Freelance"].includes(category)
      ? "income"
      : "expense";
    const newExpense = {
      id: crypto.randomUUID(),
      date: formattedDate,
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
      <h3 className="text-xl font-semibold m-2 text-gray-800">
        Add New Transaction
      </h3>
      <div className="border-b border-gray-900 mb-5"></div>

      <div className="mb-4">
        <label className="block text-gray-600 font-medium">Date: </label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          className=" border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-400 [&::-webkit-calendar-picker-indicator]:hidden "
        ></input>
      </div>
      <div className="mb-4">
        <label className="block text-gray-600 font-medium">Danh mục:</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          className="border border-gray-300 rounded-lg p-2 w-full  focus:ring-blue-400 focus:outline-none focus:ring-0 appearance-none"
        >
          <option value=""> Choose your category </option>
          <option value="Food"> Food</option>
          <option value="Salary"> Salary</option>
          <option value="Transport"> Transport</option>
          <option value="Shopping"> Shopping</option>
          <option value="Freelance"> Freelance</option>
          <option value="Entertainment">Entertainment</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-600 font-medium">Amount: </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          required
          className="block text-gray-600 font-medium [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
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

ExpenseForm.propTypes = propsTypeForm;

export default ExpenseForm;
