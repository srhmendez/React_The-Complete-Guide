import "./ExpenseItem.css";
import ExpenseDate from './ExpenseDate';


function ExpenseItem(props) {


  return (
    <div className="expenseCard">
      <ExpenseDate date={props.date}/>
      <div className="expenseItemPriceContainer">
        <h2 className="expenseItem">{props.title}</h2>
        <div className="expenseItemPrice">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
