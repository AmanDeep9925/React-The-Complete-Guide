import React from "react";
import "./Expenses.css";

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
    const expenses = props.expenses;

    return (
        <Card className="expenses">
            {expenses.map((expense) => (
                <ExpenseItem
                    title={expense.title}
                    date={expense.date}
                    amount={expense.amount}
                />
            ))}
        </Card>
    );
}

export default Expenses;
