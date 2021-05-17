import ExpenseItem from "./ExpenseItem";
import Card from './Card';
import './ExpenseArray.css';

function ExpenseArray() {
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

  return (
    <Card className="expenseCard">
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>

      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>

      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>

      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
   </Card>
  );
}

export default ExpenseArray;
