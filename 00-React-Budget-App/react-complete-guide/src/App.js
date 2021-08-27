import ExpenseArray from "./components/Expenses/ExpenseArray";
import NewExpense from './components/UserInputExpense/NewExpense';
import Banner from './components/Interface_Elements/Banner';
const App = (props) => {
  
  return (
    <div>
      <div className="budgetTitle">
        <h1>Hello! Welcome to Financial Freedom.</h1>
        <h4 className="expenseBudgetLog">Expense Budget Log</h4>
      </div>
      <Banner />
      <NewExpense />
      <ExpenseArray />
    </div>
  );
}

export default App;
