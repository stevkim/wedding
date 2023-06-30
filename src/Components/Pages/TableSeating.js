import { useState, createContext } from 'react';
import { Reorder } from 'framer-motion';
import SearchBar from '../Utilities/search-bar';
import { SEATING } from '../../data/seating';
import background from '../../images/background-main.png';

export const FilterContext = createContext('');

const Seating = () => {
	const [list, setList] = useState(SEATING);
	const [filter, setFiltered] = useState('');

	return (
		<div className="page w-full background-overlay flex-col">
			<div className="w-full md:w-10/12 flex flex-col mx-auto h-full overflow-hidden">
				<h2 className="text-6xl mx-auto my-8 font-parisienne sm:whitespace-nowrap w-10/12 text-center">
					Find Your Table
				</h2>
				<div className="divider"></div>
				<div className="mx-auto my-2">
					<FilterContext.Provider value={{ filter, setFiltered }}>
						<SearchBar />
					</FilterContext.Provider>
				</div>
				<div className="h-auto p-2 overflow-scroll">
					<Reorder.Group
						axis="x"
						values={list}
						onReorder={setList}
						className="w-10/12 mx-auto grid grid-cols-2 md:grid-cols-3 gap-5"
					>
						{SEATING.map((table) => {
							if (
								table.guests.filter(
									(guest) =>
										guest.toLowerCase().includes(filter) || filter === ''
								).length > 0
							) {
								return (
									<Reorder.Item
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										key={table.table}
										className="py-3 md:p-8 h-auto glassmorphism table"
									>
										<p className="text-4xl font-parisienne whitespace-nowrap text-center w-full">
											Table {table.table}
										</p>
										<ul className="leading-4 mt-2">
											{table.guests
												.filter(
													(guest) =>
														guest.toLowerCase().includes(filter) ||
														filter === ''
												)
												.map((guest) => {
													return (
														<li
															key={guest}
															className="ml-4 font-edu my-3"
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
			</div>
			<img
				src={background}
				className="background"
				alt="background"
			/>
		</div>
	);
};

export default Seating;
