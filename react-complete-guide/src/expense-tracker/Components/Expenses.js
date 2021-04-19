import React from "react";
import "./Expenses.css";

import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
    const expenses = props.expenses;

    return (
        <div className="expenses">
            {expenses.map((expense) => (
                <ExpenseItem
                    title={expense.title}
                    date={expense.date}
                    amount={expense.amount}
                />
            ))}
        </div>
    );
}

export default Expenses;
