import React from "react";
import ExpenseItem from "./expense-tracker/Components/ExpenseItem";

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
            <h1>Learning ReactJS</h1>

            {expenses.map((expense) => (
                <ExpenseItem
                    title={expense.title}
                    date={expense.date}
                    amount={expense.amount}
                />
            ))}

            <ExpenseItem
                title={expenses[0].title}
                date={expenses[0].date}
                amount={expenses[0].amount}
            />
        </div>
    );
}

export default App;
