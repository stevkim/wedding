import Welcome from "./Components/Pages/Welcome";
import Timeline from "./Components/Pages/Timeline";
import Seating from './Components/Pages/TableSeating'
import Honeymoon from "./Components/Pages/Honeymoon";
import NavBar from "./Components/Navbar";

function App() {
  
  return (
    <div className="bg-slate-200">
      <NavBar />
      <Welcome />
      <Timeline />
      <Honeymoon />
      <Seating />
    </div>
  );
}

export default App;
