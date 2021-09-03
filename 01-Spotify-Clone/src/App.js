import './App.css';
import LoginCard from './Components/UI/LoginCard';
import Dashboard from './Components/Dashboard';

const code = new URLSearchParams(window.location.search).get('code')

function App() {
  
  return (code ? <Dashboard code={code} /> :
    <div className="App">
      <LoginCard></LoginCard>
    </div>
  );
}

export default App;
