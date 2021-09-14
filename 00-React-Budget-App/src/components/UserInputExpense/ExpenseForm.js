import './ExpenseForm.css';
import {useState} from 'react';

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value); 
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);

        setEnteredDate('');
        setEnteredAmount('');
        setEnteredTitle('');
    };

    return (
    
    <form onSubmit={submitHandler}>
        <div className="newExpenseControls">
            <div className="expenseControl">
                <label className="inputLabel">Title</label>
                <input className="inputField" type="text" value={enteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className="expenseControl">
                <label className="inputLabel">Amount</label>
                <input className="inputField"  type="number" value={enteredAmount} onChange={amountChangeHandler}  min="0.01" step="0.01" />
            </div>
            <div className="expenseControl">
                <label className="inputLabel">Date</label>
                <input className="inputField"  type="date" value={enteredDate} onChange={dateChangeHandler} min="2019-01-01" max="2022-12-31" />
            </div>
            <div className="newExpenseActions">
                <button className="add-expense" type="submit">Add Expense</button>
            </div>
        </div>
    </form>
    )
};

export default ExpenseForm;