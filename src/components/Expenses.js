import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import NewExpense from "./NewExpense";
import ExpensesFilter from "./ExpensesFilter";
function Expenses() {
  // const initialValue = [{ id: 0, type: "", date: "", price: "" }];
  // const [newExpense, setNewExpense] = useState(initialValue);
  const [expenses, setExpenses] = useState([]);
  const [filteredYear, setFiltedYear] = useState("2021");

  const newExpenseHandler = (expense) => {
    // new expense from child

    setExpenses([...expenses, expense]);
    console.log(expenses);
    console.log(expense.date);
  };

  const filterHandler = (selectedYear) => {
    setFiltedYear(selectedYear);
  };
  console.log(filteredYear);

  return (
    <div>
      <NewExpense newExpense={newExpenseHandler} />
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterHandler} />
      {expenses.length
        ? expenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              value={expense.value}
              type={expense.type}
              date={expense.date.toString()}
              amount={expense.amount}
            />
          ))
        : null}
    </div>
  );
}

export default Expenses;
