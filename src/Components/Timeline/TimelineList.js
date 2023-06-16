import TimelineItem from './TimelineItem';
import TimelineTime from './TimelineTime';

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
		event: 'Dance Floor Opens',
	},
	{
		time: '7:45 PM',
		event: 'Send Off',
	},
];

const TimelineList = () => {
	return (
		<div className='w-full'>
			<div className='w-11/12 ml-auto flex'>
			<ul className='w-1/3'>
				{
					timeline.map(time => {
						return (
							<li className=''>
								<TimelineTime props={time}/>
							</li>
						)
					})
				}
			</ul>
			<ul className='w-2/3 whitespace-nowrap'>
				{
					timeline.map(event => {
						return (
							<li>
								<TimelineItem props={event}/>
							</li>
						)
					})
				}
			</ul>
			</div>
		</div>
	);
};

export default TimelineList;
