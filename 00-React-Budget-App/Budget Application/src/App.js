import ExpenseArray from "./components/Expenses/ExpenseArray";
import NewExpense from './components/UserInputExpense/NewExpense';
import Banner from './components/Interface_Elements/Banner';


const App = () => {  
  
  const onAddExpense = (expense) => {
    let newExpenseItem = expense;
    console.log(newExpenseItem)
    return newExpenseItem;
  }


  return (
    <div>
      <div className="budgetTitle">
        <h1>Hello! Welcome to Financial Freedom.</h1>
        <h4 className="expenseBudgetLog">Expense Budget Log</h4>
      </div>
      <Banner />
      <NewExpense onSaveExpenseDataHandler={onAddExpense} />
      <ExpenseArray onSaveExpenseDataHandler={onAddExpense}/>
    </div>
  );
}

export default App;
