import ExpenseArray from "./components/Expenses/ExpenseArray";


const App = (props) => {
  
  return (
    <div>
      <div className="budgetTitle">
        <h1>Hello! Welcome to Financial Freedom.</h1>
        <h4 className="expenseBudgetLog">Expense Budget Log</h4>
      </div>
      <ExpenseArray />
    </div>
  );
}

export default App;
