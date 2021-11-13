import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredtype, setEnteredType] = useState("");
  const [enteredamount, setEnteredAmount] = useState("");
  const [entereddate, setEnteredDate] = useState("");

  const typeChangeHandler = (e) => {
    setEnteredType(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(enteredtype);
    // console.log(enteredamount);
    // console.log(entereddate);

    const expenseData = {
      type: enteredtype,
      amount: enteredamount,
      date: new Date(entereddate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredDate("");
    setEnteredAmount("");
    setEnteredType("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Type: </label>
          <input type="text" value={enteredtype} onChange={typeChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Amount: </label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredamount}
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date: </label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-01-01"
            value={entereddate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add an expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
