import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
// Pages
import Home from "../pages/Home";
import Students from "../pages/students";
import Student from "../pages/student";
import AddStudent from "../pages/addStudent"
import Campuses from "../pages/campuses";
import Campus from "../pages/campus"
import AddCampus from "../pages/addCampus"
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Navbar bg="dark" data-bs-theme="dark">
        <LinkContainer to="/"><Navbar.Brand>Home</Navbar.Brand></LinkContainer>
        <Nav className="me-auto">
          <LinkContainer to="/campuses">
            <Nav.Link>Campuses</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/students">
            <Nav.Link>Students</Nav.Link>
          </LinkContainer>
        </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">

        </Navbar.Collapse>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/students/:id" element={<Student />} />
        <Route path="/students/add" element={<AddStudent />} />
        <Route path="/campuses" element={<Campuses />} />
        <Route path="/campuses/:id" element={<Campus />} />
        <Route path="/campuses/add" element={<AddCampus />} />
      </Routes>
    </Router>
  );
}

export default App;