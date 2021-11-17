import React from "react";
import "./ExpenseDate.css";
import moment from "moment";

function ExpenseDate(props) {
  // console.log(moment(props.date).format("MM/DD/YYYY"));
  const month = moment(props.date).format("MM");
  const day = moment(props.date).format("DD");
  const year = moment(props.date).format("YY");

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
