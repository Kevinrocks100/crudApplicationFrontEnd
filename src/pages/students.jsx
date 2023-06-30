import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllStudentsThunk } from "../redux/students/students.actions";
import ListStudentName from "../components/listStudentName";
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
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
    <div>
      <h1>Students Page</h1>
      <ListStudentName list={allStudents} />
    </div>
  );
};

export default Students;