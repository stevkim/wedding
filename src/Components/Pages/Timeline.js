

const Timeline = () => {
    const timeline = [
        {name: 'CEREMONY', time:'3:30 PM - 4:00 PM', icon: '👰🤵'},
        {name: 'WINE HOUR', time:'4:00 PM - 5:00 PM', icon:'🍷🍺'},
        {name: 'DINNER RECEPTION', time:'5:00 PM - 7:00 PM', icon:'🍽️🍗'},
        {name: 'CELEBRATION', time:'7:00 PM - 8:00 PM', icon:'💃🪩'}
    ]

    return (
        <div className="w-full md:w-10/12 bg-white flex flex-col mx-auto border-solid">
            <div className="text-2xl text-center">
                Wedding Day
            </div>
            <ul className="mx-auto w-10/12 md:w-6/12 mx-auto">
                {
                    timeline.map((time) => {
                        return(
                            <li className="my-1" key={time.name}><span className="mr-10">{time.time}</span>{time.name}<span className="ml-2">{time.icon}</span></li>
                        );
                    })
                }
            </ul>
        </div>
    ); 
}

export default Timeline;