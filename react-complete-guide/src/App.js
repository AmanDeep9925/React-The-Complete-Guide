import React from "react";
import Expenses from "./expense-tracker/Components/Expenses/Expenses";
import NewExpense from "./expense-tracker/Components/NewExpense/NewExpense";

function App() {
    const expenses = [
        {
            id: "0",
            title: "Phone",
            amount: "14,999",
            date: new Date(2020, 2, 12),
        },
        {
            id: "1",
            title: "Mouse",
            amount: "1,999",
            date: new Date(2020, 4, 2),
        },
        {
            id: "2",
            title: "Etnernet Adapter",
            amount: "999",
            date: new Date(2020, 5, 20),
        },
        {
            id: "3",
            title: "Key Board",
            amount: "1,999",
            date: new Date(2020, 12, 1),
        },
    ];

    expenses.map((expense) => console.log(expense));

    return (
        <div className="App">
            <NewExpense />
            <Expenses expenses={expenses} />
        </div>
    );
}

export default App;
