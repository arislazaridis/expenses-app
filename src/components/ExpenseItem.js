import React, { useState } from "react";

import "./ExpenseItem.css";

function ExpenseItem(props) {
  const { date, type, amount, value } = props;

  return (
    <div className="expense-item">
      <div className="expense-item__description">
        <h4 style={{ color: "white" }}>Date: {date}</h4>
      </div>

      <div className="expense-item__description">
        <h2>Value: {value}</h2>
        <h2>Type: {type}</h2>
        <div className="expense-item__price">Amount: {amount} € </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
