import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredtype, setEnteredType] = useState("");
  const [enteredamount, setEnteredAmount] = useState("");
  const [entereddate, setEnteredDate] = useState("");
  const [selectValue, setSelectValue] = useState("");

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
    if (
      entereddate.length != 0 ||
      enteredamount.length != 0 ||
      enteredtype.length != 0
    ) {
      const expenseData = {
        type: enteredtype,
        amount: enteredamount,
        date: entereddate,
        value: selectValue,
      };
      console.log(expenseData);

      props.onSaveExpenseData(expenseData);
      setEnteredDate("");
      setEnteredAmount("");
      setEnteredType("");
    } else {
      alert("Please fill out all required fields");
    }
  };

  const selectHandleChange = (e) => {
    setSelectValue(e.target.value);
    // console.log(selectValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <select id="dropdown" value={selectValue} onChange={selectHandleChange}>
          <option value="N/A">N/A</option>
          <option value="Car">Car</option>
          <option value="Shopping">Shopping</option>
          <option value="Coffee">Coffee</option>
          <option value="Food">Food</option>
          <option value="Supermarket">Supermarket</option>
        </select>
        <div className="new-expense__control">
          <label>Info: </label>
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
