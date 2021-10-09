import './CocktailCard.css';

const CocktailCard = (props) => {

    const {drinkName, drinkImage, category} = props
    
    return(
        <div className="cardContainer">
            <h3> {drinkName} </h3>
            <img className="cocktail-image" alt='cocktail' src={drinkImage}/>
            <h4> {category} </h4>
        </div>
    )
}

export default CocktailCard;
