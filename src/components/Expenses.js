import React, { useState } from "react";
import moment from "moment";

import ExpenseItem from "./ExpenseItem";
import NewExpense from "./NewExpense";
import ExpensesFilter from "./ExpensesFilter";
function Expenses() {
  const [expenses, setExpenses] = useState([]);
  const [filteredYear, setFiltedYear] = useState("2021");

  const newExpenseHandler = (expense) => {
    // new expense from child

    setExpenses([...expenses, expense]);
  };

  const filterHandler = (selectedYear) => {
    setFiltedYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return moment(expense.date).format("yyyy") === filteredYear;
  });
  let expensesContent = (
    <h3 align="center" color="black">
      No expenses found...
    </h3>
  );

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        value={expense.value}
        type={expense.type}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <NewExpense newExpense={newExpenseHandler} />
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterHandler} />
      {expensesContent}
    </div>
  );
}

export default Expenses;
