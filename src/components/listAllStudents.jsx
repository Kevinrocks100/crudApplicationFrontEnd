import React from "react";
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ListStudentName({ listStudents }) {
  return listStudents.length !== 0 ? (
    listStudents.map((student) => {
      return (
        <div key={student.id}>
          <LinkContainer to={`/students/${student.id}`}>
            <Nav.Link>{student.firstName} {student.lastName}</Nav.Link>
          </LinkContainer>
        </div>
      );
    })
  ) : (
    <div>
      <p>There are no students registered in the database.</p>
      <Button variant="primary"><LinkContainer to="/students/add"><Nav.Link>Add Student</Nav.Link></LinkContainer></Button>
    </div>
  );
}