import React, { useState } from "react";

function ExpenseForm() {
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
    console.log(expenseData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Type: </label>
          <input type="text" onChange={typeChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Amount: </label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date: </label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-01-01"
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
