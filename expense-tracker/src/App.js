import React, { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

let DUMMY_EXPENSES = [
  {
    id: "0",
    title: "Phone",
    amount: 14999,
    date: new Date(2020, 2, 12),
  },
  {
    id: "1",
    title: "Mouse",
    amount: 1999,
    date: new Date(2020, 4, 2),
  },
  {
    id: "2",
    title: "Etnernet Adapter",
    amount: 999,
    date: new Date(2020, 5, 20),
  },
  {
    id: "3",
    title: "Key Board",
    amount: 1999,
    date: new Date(2020, 12, 1),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpenseHandler={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
