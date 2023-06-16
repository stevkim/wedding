import { useState, useContext } from 'react';
import { FilterContext } from '../Pages/TableSeating';

const SearchBar = () => {
	const [open, setOpen] = useState(false);
	const { filter, setFiltered } = useContext(FilterContext);

	return (
		<div
			className={`border-2 overflow-hidden flex justify-center items-center ${
				open ? 'w-full' : 'ml-auto w-6 aspect-square'
			}`}
		>
			<div
				className={`transition-all relative flex items-center ml-auto  ${
					open ? 'w-full' : 'w-6 aspect-square'
				}`}
			>
				<input
					type="text"
					value={filter}
					onChange={(event) => setFiltered(event.target.value.toLowerCase())}
					placeholder={open ? 'Search By Name' : ''}
					className="search-input"
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
	);
};

export default SearchBar;
