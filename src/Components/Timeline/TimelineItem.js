const TimelineItem = ({props}) => {
  // time then event
  const { time, event } = props;

  return (
    <div className="text-xl p-4">
      <p><span className="mr-8">{time}</span>{event}</p>
    </div>
  )
}

export default TimelineItem;