import React, { useState } from "react";
import moment from "moment";

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
    // console.log(expenses);
    // console.log(expense.date);
  };

  const filterHandler = (selectedYear) => {
    setFiltedYear(selectedYear);
  };
  // console.log(filteredYear);

  const filteredExpenses = expenses.filter((expense) => {
    // console.log(filteredYear);
    // console.log(moment(expense.date).format("yyyy"));
    return moment(expense.date).format("yyyy") === filteredYear;
  });
  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <NewExpense newExpense={newExpenseHandler} />
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterHandler} />
      {/* {expenses.length */}
      {/* ? expenses.map((expense) => ( */}
      {/* <ExpenseItem */}
      {/* key={expense.id} */}
      {/* value={expense.value} */}
      {/* type={expense.type} */}
      {/* date={expense.date.toString()} */}
      {/* amount={expense.amount} */}
      {/* /> */}
      {/* )) */}
      {/* : null} */}
      {expensesContent}
    </div>
  );
}

export default Expenses;
