const Card = ({ props }) => {
	const { person, index } = props;
	const { name, role, image } = person;

	return (
		<div
			className={`flex w-10/12 sm:w-1/3 h-20 glassmorphism my-16 rounded shadow-xl mx-auto ${
				index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
			}`}
		>
			<div className="w-1/2 flex justify-center items-center">
				<img
					className="flex justify-center items-center rounded-full overflow-hidden aspect-square object-cover card-image"
					src={image}
					alt={name}
				/>
			</div>
			<div className="w-1/2 flex flex-col justify-center items-center p-2 whitespace-nowrap font-edu text-xl md:text-2xl">
				<p>{name}</p>
				<p>{role}</p>
			</div>
		</div>
	);
};

export default Card;

// ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}
