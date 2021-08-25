import ExpenseForm from './ExpenseForm';

const NewExpense = () => {

    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log(expenseData)
    }

    return ( <div className="newExpense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
    );
};

export default NewExpense;