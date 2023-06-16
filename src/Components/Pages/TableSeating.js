import { useState, createContext } from 'react';
import { Reorder } from 'framer-motion';
import SearchBar from '../Utilities/search-bar';

export const FilterContext = createContext('');

const Seating = () => {
	const table = [
		{ number: 1, guests: ['Example', 'One', 'Twoo', 'Three'] },
		{ number: 2, guests: ['Example', 'One', 'Twoo'] },
		{ number: 3, guests: ['First', 'Second', 'Thirdddd'] },
		{ number: 4, guests: ['Some Name', 'Another Name', 'Guest 1.', 'Guest 2'] },
		{ number: 5, guests: ['Mama Kim', 'Papa Kimm', 'Brother Kim'] },
		{ number: 6, guests: [] },
		{ number: 7, guests: [] },
		{ number: 8, guests: [] },
		{ number: 9, guests: [] },
	];

	const [list, setList] = useState(table);
	const [filter, setFiltered] = useState('');

	return (
		<div
			id="seating"
			className="w-full md:w-10/12 bg-white flex flex-col mx-auto px-3 h-auto"
		>
			<h2 className="text-6xl mx-auto mb-2 font-sacramento">
				Dinner Seating Arrangements
			</h2>
            <div className='w-10/12 mx-auto mb-3'>
            <FilterContext.Provider value={{filter, setFiltered}}>
                <SearchBar />
            </FilterContext.Provider>
            </div>
			<Reorder.Group
				axis="x"
				values={list}
				onReorder={setList}
				className="w-10/12 mx-auto grid grid-cols-2 md:grid-cols-3 gap-5"
			>
				{table.map((table) => {
					if (
						table.guests.filter(
							(guest) => guest.toLowerCase().includes(filter) || filter === ''
						).length > 0
					) {
						return (
							<Reorder.Item
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								key={table.number}
								className="py-3 md:p-8 pl-2 h-auto border-solid border-2 border-black-200"
							>
								<p className="text-2xl md:text-3xl font-sacramento">
									Table {table.number}
								</p>
								<ul className="leading-4 mt-1">
									{table.guests
										.filter(
											(guest) =>
												guest.toLowerCase().includes(filter) || filter === ''
										)
										.map((guest) => {
											return (
												<li
													key={guest}
													className="ml-1 indent-2 whitespace-nowrap font-oswald"
												>
													{guest}
												</li>
											);
										})}
								</ul>
							</Reorder.Item>
						);
					} else {
						return <></>;
					}
				})}
			</Reorder.Group>
		</div>
	);
};

export default Seating;
