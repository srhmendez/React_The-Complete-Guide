import './App.css';
import { cocktails } from './cocktails';
import CocktailCard from './Components/CocktailCard';

function App() {

  return (
    <div>
      <h1 className="title"> Cocktails </h1>
    <div  className="card-container">
      {cocktails.map((cocktail) => {
        console.log(cocktail.idDrink);
        return (
          <CocktailCard
            drinkName={cocktail.strDrink}
            drinkImage={cocktail.strDrinkThumb}
            category={cocktail.strCategory}
          />
        )
      })}
    </div>
    </div>
  )
}

export default App;
