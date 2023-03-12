import NavBar from "./Components/Navbar";
import Welcome from "./Components/Pages/Welcome";
import Timeline from "./Components/Pages/Timeline";
import Seating from './Components/Pages/TableSeating'

function App() {
  return (
    <div className="bg-slate-200">
      <NavBar />
      <Welcome />
      <Timeline />
      <Seating />
    </div>
  );
}

export default App;
