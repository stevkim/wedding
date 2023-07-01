import { timeline } from '../../data/timeline.js';

const TimelineList = () => {
	return (
		<div className="w-10/12 flex">
			<ul className="w-full mx-auto">
				{timeline.map((item) => {
					const { time, event } = item;
					return (
						<li
							key={event}
							className="text-[1.2rem] border-b-2 indent-2 mb-2 w-10/12 mx-auto md:text-[1.5rem] md:indent-[40%]"
						>
							<span className="font-oswald mr-6 md:mr-12">{time}</span>
							<span className="font-edu">{event}</span>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default TimelineList;
