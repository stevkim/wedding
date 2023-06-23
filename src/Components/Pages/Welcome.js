import heroImage from '../../images/hero.jpg';

const Welcome = () => {
	return (
		<div className="w-full md:mt-0 box-border flex flex-col page background-overlay items-center">
			<div className="md:hidden text-center flex flex-col mt-16 hero-title justify-center items-center z-10">
				<span className="text-6xl font-parisienne block mt-2">Steph &</span><span className="text-6xl font-parisienne block"> Steven</span>
				<span className="my-2 font-oswald">July 9, 2023 - Snohomish, WA</span>
			</div>
			<div className="flex flex-col justify-center items-center mt-8 font-parisienne">
				<span className="block hero-caption-1 w-full indent-4">Welcome</span>
				<span className="block hero-caption-2 w-full text-center">to our</span>
				<span className="block hero-caption-3 w-full indent-4 whitespace-nowrap">Happily ever after...</span>
			</div>
            <img
				className="hero-background sm:w-full sm:h-auto"
				src={heroImage}
				alt="Steph & Steven"
			/>
		</div>
	);
};

export default Welcome;
