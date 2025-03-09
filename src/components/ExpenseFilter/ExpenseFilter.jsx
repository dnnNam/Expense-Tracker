import React, { useState } from "react";
import PropTypes from "prop-types";

// có nhiệm vụ lọc ra các giao dịch ăn uống , thể thao theo ngày tháng năm

ExpenseFilter.propTypes = {
  onFilterChange: PropTypes.func,
};

ExpenseFilter.defaultProps = {
  onFilterChange: null,
};

function ExpenseFilter(props) {
  const { onFilterChange } = props;
  const [Filter, setfilter] = useState({
    category: "",
    date: "",
  });

  const handleChange = (e) => {
    const newFilter = { ...Filter, [e.target.name]: e.target.value };
    setfilter(newFilter);
    onFilterChange(newFilter);
  };
  return (
    <div>
      <h3 className="font-semibold mt-3">Filter Transaction</h3>
      <div className="border-b border-gray-900 mb-5"></div>

      <div>
        <label>Ngày: </label>
        <input
          type="date"
          name="date"
          onChange={handleChange}
          className=" border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-400 [&::-webkit-calendar-picker-indicator]:hidden"
        />
      </div>

      <div>
        <label>Danh mục: </label>
        <select
          name="category"
          onChange={handleChange}
          className="appearance-none w-full px-4 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
        >
          <option value="">Tất cả</option>
          <option value="Food">Food</option>
          <option value="Shopping">Shopping</option>
          <option value="Bills">Bills</option>
          <option value="Transport">Transport</option>
          <option value="Freelance">Freelance</option>
          <option value="Entertainment">Entertainment</option>
        </select>
      </div>
    </div>
  );
}

export default ExpenseFilter;
