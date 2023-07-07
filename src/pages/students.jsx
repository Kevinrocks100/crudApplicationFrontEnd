import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllStudentsThunk } from "../redux/students/students.actions";
import ListAllStudents from "../components/listAllStudents";
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Students = () => {
  const allStudents = useSelector((state) => state.student.allStudents);
  const dispatch = useDispatch();
  const fetchAllStudents = () => {
    console.log('RUNNING DISPATCH FROM FETCHALLSTUDENTS')
    return dispatch(fetchAllStudentsThunk());
  };

  useEffect(() => {
    console.log('FETCH ALL STUDENTS FIRING IN USEEFFECT')
    fetchAllStudents();
  }, []);

  return ( 
    <div className="text-center">
      <h1>All Students</h1>
      <Button variant="primary">
        <LinkContainer to="/students/add">
          <Nav.Link>Add Student</Nav.Link>
        </LinkContainer>
      </Button>
      <ListAllStudents listStudents={allStudents} />
    </div>
  );
};

export default Students;