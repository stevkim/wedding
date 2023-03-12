import WeddingPic from '../../images/weddingp2.jpg'

const Welcome = () => {
    return (
        <div className="w-full md:w-10/12 mx-auto mt-20 md:mt-0 h-screen md:h-auto box-border flex flex-col bg-white">
            <div className='md:hidden flex text-center flex flex-col'>
                    <span className='text-6xl mt-10'>Steph & Steven</span>
                    <span className='mb-1'>July 9, 2023 - Snohomish, WA</span>
            </div>
            <div className='px-3 md:px-10'>
                <img className='rounded-sm' src={WeddingPic} alt='Steph & Steven' />
            </div>
            <div className="text-center text-4xl mt-10 md:my-10">
                Welcome to our Happily Ever After!
            </div>
        </div>
    );
}

export default Welcome;