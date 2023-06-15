const MenuIcon = ({ prop }) => {
	// prop is a boolean
	return (
		<>
			<div className="menu-bar-wrapper">
				<div className={`bar ${prop ? 'active-first' : ''}`}></div>
				<div className={`bar ${prop ? 'active-middle' : ''}`}></div>
				<div className={`bar ${prop ? 'active-last' : ''}`}></div>
			</div>
		</>
	);
};

export default MenuIcon;
