import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onSaveExpenseDataHandler(expenseData)
    };

    return ( <div className="newExpense">
        <ExpenseForm onSaveExpenseData={ saveExpenseDataHandler } />
    </div>
    );
};

export default NewExpense;