import WineCard from '../DrinkCard/WineCard';
import background from '../../images/background-main.png';
import { DRINKPAIRINGS } from '../../data/drink-pairings';
import BeerCard from '../DrinkCard/BeerCard';
import { useRef, createContext, useEffect } from 'react';

export const ContainerContext = createContext(null);

const FoodRec = () => {
	const container = useRef(null);

	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	}, []);

	return (
		<div className="page w-full background-overlay flex flex-col items-center">
			<h1 className="text-6xl font-parisienne w-full text-center my-8">
				Steph's Drink Pairings!
			</h1>
			<div className="divider"></div>
			<div
				className="overflow-scroll flex flex-wrap"
				ref={container}
			>
				<ContainerContext.Provider value={container}>
					{DRINKPAIRINGS.map((drink) => {
						return (
							<div
								className={`${
									drink.type === 'wine' ? 'w-full' : 'w-5/12 md:w-[30%]'
								} mx-auto`}
								key={drink.name}
							>
								{drink.type === 'wine' ? (
									<WineCard props={drink} />
								) : (
									<BeerCard props={drink} />
								)}
							</div>
						);
					})}
				</ContainerContext.Provider>
			</div>
			<img
				src={background}
				className="background"
				alt="background"
			/>
		</div>
	);
};

export default FoodRec;
