import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
// Pages
import Home from "../pages/Home";
import Students from "../pages/students";
import Campuses from "../pages/campuses";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/campuses" element={<Campuses />} />
      </Routes>
    </Router>
  );
}

export default App;
