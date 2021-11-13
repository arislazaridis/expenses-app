import React, { useState } from "react";

import "./ExpenseItem.css";

function ExpenseItem(props) {
  const { date, type, price } = props;

  return (
    <div className="expense-item">
      <div>{date}</div>
      <div className="expense-item__description">
        <h2>{type}</h2>
        <div className="expense-item__price">{price}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
