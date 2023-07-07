import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
// Pages
import Home from "../pages/Home";
import Students from "../pages/students";
import Student from "../pages/student";
import AddStudent from "../pages/addStudent"
import EditStudent from "../pages/editStudent"
import Campuses from "../pages/campuses";
import Campus from "../pages/campus"
import AddCampus from "../pages/addCampus"
import EditCampus from "../pages/editCampus";
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Navbar bg="dark" data-bs-theme="dark">
        <LinkContainer to="/">
          <Navbar.Brand>Home</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="me-auto">
            <Nav.Item className="me-2">
              <LinkContainer to="/campuses">
                <Nav.Link>Campuses</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer to="/students">
                <Nav.Link>Students</Nav.Link>
              </LinkContainer>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/students/:id" element={<Student />} />
        <Route path="/students/add" element={<AddStudent />} />
        <Route path="/students/edit/:id" element={<EditStudent />} />
        <Route path="/campuses" element={<Campuses />} />
        <Route path="/campuses/:id" element={<Campus />} />
        <Route path="/campuses/add" element={<AddCampus />} />
        <Route path="/campuses/edit/:id" element={<EditCampus />} />
      </Routes>
    </Router>
  );
}

export default App;