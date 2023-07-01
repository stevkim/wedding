import Card from '../Card/Card';
import { WEDDINGPARTY } from '../../data/wedding-party';
import background from '../../images/background-main.png';
import heart from '../../images/heart.png';
import { createContext, useRef } from 'react';

export const PartyContext = createContext(null);

const WeddingParty = () => {
	const container = useRef(null);

	return (
		<div className="page w-full background-overlay flex-col">
			<div className="text-6xl font-parisienne text-center my-8 whitespace-nowrap">
				Wedding Party
			</div>
			<div className="divider"></div>
			<div className="block overflow-y-scroll overflow-x-hidden w-full h-2/3 drop-shadow-lg">
				<PartyContext.Provider value={container}>
				{WEDDINGPARTY.map((person, index) => {
					return (
						<Card
							key={index}
							props={{ person, index }}
						/>
					);
				})}
				</PartyContext.Provider>
			</div>
			<div className="divider"></div>
			<img
				src={heart}
				alt="little heart"
				className="aspect-square w-[50px] mx-auto mt-8"
			/>
			<img
				src={background}
				className="background"
				alt="background"
			/>
		</div>
	);
};

export default WeddingParty;
