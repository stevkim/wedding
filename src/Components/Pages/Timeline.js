import TimelineList from '../Timeline/TimelineList';
import backgroundSub from '../../images/background-sub.png';
import heart from '../../images/heart.png';

const Timeline = () => {
	return (
		<div className="w-full md:w-6/12 flex flex-col page items-center">
			<div className="mt-12 mb-6 mx-auto leading-3 border-2 border-gray-500 justify-center items-center flex flex-col">
				<span className="block font-oswald text-6xl timeline-title text-start">
					Order of
				</span>
				<span className="block font-sacramento text-8xl timeline-title text-end">
					Events
				</span>
			</div>
			<p className="mx-auto text-center text-gray-500 flex flex-col leading-3 mb-4">
				<span className="inline-block font-parisienne text-xl">
					Steph + Steven
				</span>
				<span className="inline-block">7.9.2023</span>
			</p>
			<div className="divider"></div>
			<TimelineList />
			<div className="divider"></div>
			<img
				src={heart}
				alt="little heart"
				className="aspect-square w-[50px] mx-auto mt-4"
			/>
			<img
				className="background sm:w-full"
				src={backgroundSub}
				alt="background"
			/>
		</div>
	);
};

export default Timeline;
