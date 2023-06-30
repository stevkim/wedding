import Welcome from './Components/Pages/Welcome';
import Timeline from './Components/Pages/Timeline';
import Seating from './Components/Pages/TableSeating';
import Honeymoon from './Components/Pages/Honeymoon';
import NavBar from './Components/NavBar/Navbar';
import { Routes, Route } from 'react-router-dom';
import { useState, createContext } from 'react';
import WeddingParty from './Components/Pages/WeddingParty';
import FoodRec from './Components/Pages/FoodRec';

export const NavContext = createContext(false);

function App() {
	const [nav, openNav] = useState(false);

	return (
		<div
			className="md:border-2 md:shadow-md"
			onClick={() => openNav(false)}
		>
			<NavContext.Provider value={{ nav, openNav }}>
				<NavBar />
				<Routes>
					<Route
						path="/"
						element={<Welcome />}
					/>
					<Route
						path="timeline"
						element={<Timeline />}
					/>
					<Route
						path="table-seating"
						element={<Seating />}
					/>
					<Route
						path="registry"
						element={<Honeymoon />}
					/>
					<Route 
						path="wedding-party"
						element={<WeddingParty />}
					/>
					<Route 
						path='drink-food-pairings'
						element={<FoodRec />}
					/>
				</Routes>
			</NavContext.Provider>
		</div>
	);
}

export default App;
