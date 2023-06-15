import TimelineList from "../Timeline/TimelineList";

const Timeline = () => {
    return (
        <div className="w-full md:w-6/12 flex flex-col page">
            <div className="text-6xl mt-12 indent-10">
                Order of <span className="block font-sacramento indent-14">Events</span>
            </div>
            <TimelineList />
        </div>
    ); 
}

export default Timeline;