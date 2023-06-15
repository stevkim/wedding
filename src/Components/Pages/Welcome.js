
const Welcome = () => {
    return (
        <div className="w-full md:w-10/12 md:mt-0 box-border flex flex-col page">
            <div className='md:hidden text-center flex flex-col mt-8 hero-title'>
                    <span className='text-6xl mt-10 font-parisienne'>Steph & Steven</span>
                    <span className='mb-1 font-oswald'>July 9, 2023 - Snohomish, WA</span>
            </div>
            <div className="flex flex-col justify-center items-center mt-20">
                <span className="block hero-caption-1">Welcome</span>
                <span className="block hero-caption-2">to our</span>
                <span className="block hero-caption-3">Happily ever after...</span>
            </div>
        </div>
    );
}

export default Welcome;