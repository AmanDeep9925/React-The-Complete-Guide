import React from "react";
import Chart from "../Charts/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { key: "", label: "Jan", value: 0 },
    { key: "", label: "Feb", value: 0 },
    { key: "", label: "Mar", value: 0 },
    { key: "", label: "Apr", value: 0 },
    { key: "", label: "May", value: 0 },
    { key: "", label: "Jun", value: 0 },
    { key: "", label: "Jul", value: 0 },
    { key: "", label: "Aug", value: 0 },
    { key: "", label: "Sep", value: 0 },
    { key: "", label: "Oct", value: 0 },
    { key: "", label: "Nov", value: 0 },
    { key: "", label: "Dec", value: 0 },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  console.log(chartDataPoints);

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
