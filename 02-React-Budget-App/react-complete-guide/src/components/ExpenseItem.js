import "./ExpenseItem.css";
import Card from "./Card";
import ExpenseDate from './ExpenseDate';


function ExpenseItem(props) {


  return (
    <Card className="expenseItemPriceContainer">
      <ExpenseDate date={props.date}/>
      <h2 className="expenseItem">{props.title}</h2>
      <div className="expenseItemPriceContainer">
        <div className="expenseItemPrice">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
