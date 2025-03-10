import React from "react";
import PropTypes from "prop-types";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

BarChart.propTypes = {
  incomeData: PropTypes.array.isRequired,
  expenseData: PropTypes.array.isRequired,
};

function BarChart(props) {
  const { incomeData, expenseData } = props;
  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Income",
        data: incomeData,
        backgroundColor: "rgba(75, 192, 192, 0.6)", // Màu xanh
      },
      {
        label: "Expense",
        data: expenseData, // Dữ liệu chi tiêu
        backgroundColor: "rgba(255, 99, 132, 0.6)", // Màu đỏ
      },
    ],
  };

  // Tùy chỉnh biểu đồ
  const options = {
    responsive: true, // biểu đồ có thể co giãn theo kích thước màn hình
    plugins: {
      // dùng để tùy chỉnh các plugin Legend , Title , ToolTip(gọi ý)
      legend: {
        position: "top",
      },
      title: {
        display: true, // thể hiện tiêu đề
        text: "Income & Expense by Month",
      },
    },
  };
  return <Bar data={data} options={options} />;
}

export default BarChart;
