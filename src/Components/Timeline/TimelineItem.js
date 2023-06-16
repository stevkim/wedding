const TimelineItem = ({ props }) => {
	const { event } = props;

	return <div className="timeline-item">{event}</div>;
};

export default TimelineItem;
