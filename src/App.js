import Welcome from "./Components/Pages/Welcome";
import Timeline from "./Components/Pages/Timeline";
import Seating from './Components/Pages/TableSeating'
import Honeymoon from "./Components/Pages/Honeymoon";
import NavBar from "./Components/NavBar/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <div className="overflow-hidden">
      <NavBar />
        <Routes>
          <Route path="/" element={<Welcome />}/>
          <Route path="timeline" element={<Timeline />}/>
          <Route path="table-seating" element={<Seating />}/>
          <Route path="registry" element={<Honeymoon />}/>
        </Routes>
    </div>
  );
}

export default App;
