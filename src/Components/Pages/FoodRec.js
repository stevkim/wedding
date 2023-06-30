import WineCard from "../DrinkCard/WineCard";
import background from '../../images/background-main.png'
import { DRINKPAIRINGS } from "../../data/drink-pairings";
import BeerCard from "../DrinkCard/BeerCard";

const FoodRec = () => {
  return (
    <div className="page w-full background-overlay flex flex-col items-center">
      <h1 className="text-6xl font-parisienne w-full text-center my-8">Steph's Drink Pairings!</h1>
      <div className="divider"></div>
      <div className="overflow-scroll flex flex-wrap">
        {
          DRINKPAIRINGS.map(drink => {
            if (drink.type === 'wine') {
              return ( <WineCard props={drink} />)
            } else {
              return (<BeerCard props={drink} />)
            }
          })  
        }
      </div>
    	<img
				src={background}
				className="background"
				alt="background"
			/>
  </div>
  )
}

export default FoodRec;