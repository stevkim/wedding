import TimelineList from "../Timeline/TimelineList";
import backgroundSub from '../../images/background-sub.png';

const Timeline = () => {
    return (
        <div className="w-full md:w-6/12 flex flex-col page items-center">
            <div className="mt-12 mb-6 w-full leading-3">
                <span className="block font-oswald indent-10 text-6xl">Order of</span> 
                <span className="block font-sacramento indent-20 text-8xl">Events</span>
            </div>
            <TimelineList />
            <img className="background" src={backgroundSub} alt="background"/>
        </div>
    ); 
}

export default Timeline;