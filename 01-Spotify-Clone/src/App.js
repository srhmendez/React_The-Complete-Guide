import './App.css';

function App() {

  return (
    <div className="App">
      <div className="nav-bar">
        <form className='filter-genres'>
          <label className='genre-dropdown' for="genre" id='genre'>Choose A Genre:</label>
          <select name='genre'>
            <option value="Pop">Pop</option>
            <option value="Rock">Rock</option>
            <option value="Rap">Rap</option>
            <option value="Electronic">Electronic</option>
          </select>
        </form>
      </div>
    </div>
  );
}

export default App;
