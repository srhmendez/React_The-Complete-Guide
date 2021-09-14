import React, { useState } from 'react';
import "./ExpenseItem.css";
import Card from "../Interface_Elements/Card";
import ExpenseDate from './ExpenseDate';


const ExpenseItem = (props) => {
  //useState is a React Hook. All hooks start with the word use. All hooks have to be called directly inside component functions with one exception. The hook below returns an array of two values, the props.title variable is the first value, and the second element in the array is the updating function. 

  //The naming convention on how you name the two elements returned by useState is this: this hook returns two elements in array ALWAYS. The first element is the current state value and the second is the function for updating the value.
  const [title, setTitle] = useState(props.title);

  const changeExpenseTitle = () => {
    //we call the updating state function with a value to update the value with as the parameter.
    setTitle('Updated!');
  };

  return (
    <Card className="expenseItemPriceContainer">
      
      <ExpenseDate date={props.date}/>

      <h2 className="expenseItem">{title}</h2>

      <div className="expenseItemPriceContainer">
        <div className="expenseItemPrice">${props.amount}</div>
      </div>
      <button className="change-title" onClick={changeExpenseTitle}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
