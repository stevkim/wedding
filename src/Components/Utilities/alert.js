const Alert = ({ msg }) => {
	return (
		<div className="fixed top-0 left-0 w-full h-auto z-[100] text-center  font-edu text-xs md:text-lg font-bold border-2 bg-blue-300 text-black pointer-events-none">
			{msg}
		</div>
	);
};

export default Alert;
