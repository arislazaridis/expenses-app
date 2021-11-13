import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import NewExpense from "./NewExpense";
function Expenses() {
  // const initialValue = [{ id: 0, type: "", date: "", price: "" }];
  // const [newExpense, setNewExpense] = useState(initialValue);
  const expenses = [];

  const newExpenseHandler = (expense) => {
    // new expense from child
    expenses.push(expense);
  };

  return (
    <div>
      {" "}
      <NewExpense newExpense={newExpenseHandler} />
      {expenses.length
        ? expenses.map((expense) => (
            <ExpenseItem
              key="id"
              type={expense.type}
              date={expense.date}
              amount={expense.amount}
            />
          ))
        : null}
    </div>
  );
}

export default Expenses;
