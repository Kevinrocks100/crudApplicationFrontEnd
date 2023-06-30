import React from "react";
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function singleCampus(props) {
  return props.singleCampus.campus.students.length !== 0 ? (
    <div>
        <h2>Student Details</h2>
        <p>Name: {props.singleCampus.campus.name}</p>
        <img src={props.singleCampus.campus.imageUrl} alt={props.singleCampus.campus.id} />
        <p>Address: {props.singleCampus.campus.address}</p>
        <p>Description: {props.singleCampus.campus.description}</p>
        {
            props.singleCampus.campus.students.map((student) => {
                return (
                  <div key={student.id}>
                    <LinkContainer to={`/students/${student.id}`}>
                      <Nav.Link>{student.firstName} {student.lastName}</Nav.Link>
                    </LinkContainer>
                  </div>
                );
              })
        }
    </div>
  ) : (
    <div>
        <h2>Student Details</h2>
        <p>Name: {props.singleStudent.student.firstName} {props.singleStudent.student.lastName}</p>
        <img src={props.singleStudent.student.imageUrl} alt={props.singleStudent.student.id} />
        <p>GPA: {props.singleStudent.student.gpa}</p>
        <p>Please Add CampusId!</p>
    </div>
  );
}