const MenuIcon = ({ prop }) => {
	// prop is a boolean
	return (
		<>
			<div className="w-[15px] aspect-square flex flex-col justify-evenly overflow-hidden">
				<div className={`bar ${prop ? 'active-first' : ''}`}></div>
				<div className={`bar ${prop ? 'active-middle' : ''}`}></div>
				<div className={`bar ${prop ? 'active-last' : ''}`}></div>
			</div>
		</>
	);
};

export default MenuIcon;
