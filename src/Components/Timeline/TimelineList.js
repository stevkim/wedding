import TimelineItem from './TimelineItem';

const timeline = [
	{
		time: '3:00 PM',
		event: 'Guest Arrival',
	},
	{
		time: '3:30 PM',
		event: 'Ceremony',
	},
	{
		time: '4:00 PM',
		event: 'Wine Hour',
	},
	{
		time: '5:00 PM',
		event: 'Dinner Reception',
	},
	{
		time: '6:30 PM',
		event: 'Bouquet Toss & Dance Floor Opens',
	},
	{
		time: '7:45 PM',
		event: 'Send Off',
	},
];

const TimelineList = () => {
	return (
		<ul className='w-5/6 mx-auto'>
			{timeline.map((event) => {
				return (
					<li  key={event.time} className='border-b-2 whitespace-nowrap'>
						<TimelineItem props={event}/>
					</li>
				);
			})}
		</ul>
	);
};

export default TimelineList;
