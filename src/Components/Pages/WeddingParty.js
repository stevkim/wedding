import Card from '../Card/Card';
import { WEDDINGPARTY } from '../../data/wedding-party';
import background from '../../images/background-main.png';
import heart from '../../images/heart.png';

const WeddingParty = () => {
	return (
		<div className="page w-full background-overlay flex-col">
			<div className="text-6xl font-parisienne text-center my-8 whitespace-nowrap">
				Wedding Party
			</div>
			<div className="divider"></div>
			<div className="block overflow-scroll w-full h-2/3 drop-shadow-lg">
				{WEDDINGPARTY.map((person, index) => {
					return (
						<Card
							key={index}
							props={{ person, index }}
						/>
					);
				})}
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
