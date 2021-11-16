import React from "react";
import "./ExpenseDate.css";

function ExpenseDate(props) {
  const formattedDate = props.date.split("-");
  const month = formattedDate[2];
  const day = formattedDate[1];
  const year = formattedDate[0];

  //   const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  //   const year = date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;