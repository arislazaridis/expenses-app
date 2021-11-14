import React, { useState } from "react";

import "./ExpenseItem.css";

function ExpenseItem(props) {
  const { date, type, amount } = props;

  return (
    <div className="expense-item">
      <div>Date: {date}</div>
      <div className="expense-item__description">
        <h2>Type: {type}</h2>
        <div className="expense-item__price">Amount: {amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
