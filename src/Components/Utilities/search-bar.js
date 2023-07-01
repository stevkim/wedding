import { useState, useContext, useRef, useEffect } from 'react';
import { FilterContext } from '../Pages/TableSeating';

const SearchBar = () => {
	const [open, setOpen] = useState(false);
	const { filter, setFiltered } = useContext(FilterContext);
	const ref = useRef(null);

	useEffect(() => {
		if (open) {
			ref.current.focus()
		}
	}, [open])

	return (
		<div className="flex w-full relative">
			<div
				className={` overflow-hidden flex rounded-sm ${
					open ? 'w-full' : 'mr-auto w-6 aspect-square'
				}`}
			>
				<div
					className={`transition-all relative flex items-center mr-auto  ${
						open ? 'w-full' : 'w-6 aspect-square'
					}`}
				>
					<input
						type="text"
						value={filter}
						className={'search-input'}
						onChange={(event) => setFiltered(event.target.value.toLowerCase())}
						placeholder={open ? 'Search By Name' : ''}
						ref={ref}
					/>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="absolute h-full right-0 p-1"
						onClick={() => setOpen(!open)}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
						/>
					</svg>
				</div>
			</div>
				<div className={`transition-all absolute left-[50px] flex justify-center items-center ${open ? 'translate-x-[150%]' : 'translate-x-0'}`}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6 arrow-bounce"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
						/>
					</svg>
					<p className='ml-2 font-edu text-lg'>You can search by your name!</p>
				</div>
		</div>
	);
};

export default SearchBar;
