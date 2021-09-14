import { React, useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from '../Interface_Elements/Card';
import './ExpenseArray.css';

//Right now the expenses array is 
const ExpenseArray = (props) => {

  const [filteredYear, updateFilteredYear] = useState('2020');

  // updateNewItem(props.onSaveExpenseDataHandler());


  const expenses = [
    {
      title: "Car Insurance",
      amount: 294,
      date: new Date(2021, 2, 28),
    },
    {
      title: "Gas Bill",
      amount: 70.0,
      date: new Date(2021, 2, 28),
    },
    {
      title: "Groceries",
      amount: 200.0,
      date: new Date(2021, 2, 28),
    },
    {
      title: "Health Insurance",
      amount: 498.0,
      date: new Date(2021, 2, 28),
    },
  ];

  const filterChangeHandler = (selectedYear) =>{
    return updateFilteredYear(selectedYear);
  }


  return (
    <Card className="expenseCard">
      <div className="filterByYear">
        <ExpenseFilter selectedYear={filteredYear} onChangeFilter={filterChangeHandler}/>
      </div>
      {expenses.map(expense => (
        <ExpenseItem title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
      ))}

   </Card>
  );
}

export default ExpenseArray;
