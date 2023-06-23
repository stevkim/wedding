const Card = ({props}) => {
  const {person, index} = props;
  const {name, role} = person;

  const imageUrl = name.split(' ').join('').toLowerCase();

	return (
		<div className={`flex w-full h-20 border-2 border-gray-400 my-16 rounded shadow-xl ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
			<div className="w-1/2 flex justify-center items-center">
					<img
						className="flex justify-center items-center rounded-full overflow-hidden aspect-square object-cover w-8/12"
						// src={require(`../../images/${imageUrl}.jpg`)}
						alt={name}
					/>
			</div>
			<div className="w-1/2 flex flex-col justify-center items-center p-2 whitespace-nowrap font-edu text-xl">
      <p>{name}</p>
			<p>{role}</p>
			</div>
		</div>
	);
};

export default Card;

// ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}
