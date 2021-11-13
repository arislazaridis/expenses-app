import React from "react";
import ExpenseItem from "./ExpenseItem";
import NewExpense from "./NewExpense";
function Expenses() {
  const expenses = [
    {
      id: 1,
      type: "Moto Insurance",
      date: "1/2/2021",
      price: "153,13",
    },
    {
      id: 2,
      type: "Car Insurance",
      date: "9/11/2021",
      price: "152,73",
    },
    {
      id: 3,
      type: "Bike Insurance",
      date: "10/11/2021",
      price: "52,73",
    },
  ];

  return (
    <div>
      <NewExpense />
      <div>
        {expenses.map((expense) => (
          <ExpenseItem
            key="id"
            type={expense.type}
            date={expense.date}
            price={expense.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Expenses;
