import React from "react";
import Expenses from "./expense-tracker/Components/Expenses";

function App() {
    const expenses = [
        {
            title: "Phone",
            amount: "14,999",
            date: new Date(2020, 2, 12),
        },
        {
            title: "Mouse",
            amount: "1,999",
            date: new Date(2020, 4, 2),
        },
        {
            title: "Etnernet Adapter",
            amount: "999",
            date: new Date(2020, 5, 20),
        },
        {
            title: "Key Board",
            amount: "1,999",
            date: new Date(2020, 12, 1),
        },
    ];

    expenses.map((expense) => console.log(expense));

    return (
        <div className="App">
            <Expenses expenses={expenses} />
        </div>
    );
}

export default App;
