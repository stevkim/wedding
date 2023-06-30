import { useInView } from 'framer-motion';
import { useContext, useRef } from 'react';
import { ContainerContext } from '../Pages/FoodRec';

const WineCard = ({ props }) => {
	const { name, image, description, pair } = props;

	const ref = useRef(null);
	const container = useContext(ContainerContext);
	const isInView = useInView(ref, {root: container, once: true})

	return (
		<div className={`w-10/12 mx-auto glassmorphism p-2 flex items-center flex-wrap justify-center relative rounded-sm my-8 ${isInView ? 'animate-right' : ''}`} ref={ref}>
			<div className="font-parisienne font-bold md:text-3xl w-full text-center whitespace-nowrap z-[1] mb-2">
				- {name} -
			</div>
			<div className="z-0 absolute left-0 w-4/12 flex justify-center items-center">
				<img
					src={image}
					className="w-10 md:w-12 rotate-[-15deg] blend"
					alt=""
				/>
			</div>
			<div className="w-8/12 z-[1] font-oswald ml-auto p-2 leading-3">
				<div className="font-extrabold text-sm md:text-lg">{description}</div>
				<div className="mt-2 font-thin text-xs md:text-sm">{pair}</div>
			</div>
		</div>
	);
};

export default WineCard;
