import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteStudentThunk } from "../redux/students/students.actions"
import { LinkContainer } from 'react-router-bootstrap';
import { useParams } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ListAllStudents({ listStudents }) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const deleteStudent = (studentId) => {
    return dispatch(deleteStudentThunk(studentId));
  };

  const handleDelete = (studentId) => {
    deleteStudent(studentId);
  }

  return listStudents.length !== 0 ? (
    <Row>
      {listStudents.map((student) => (
        <Col key={student.id} xs={12} sm={6} md={4}>
          <Card className="text-center mb-4">
            <Card.Img variant="top" src={student.imageUrl} alt={student.id} />
            <Card.Body>
              <Card.Title>
                <LinkContainer to={`/students/${student.id}`}>
                  <a>{student.firstName} {student.lastName}</a>
                </LinkContainer>
              </Card.Title>
              <Card.Text>
                <LinkContainer to={`/campuses/${student.campusId}`}>
                  <a>{student.campusId}</a>
                </LinkContainer>
              </Card.Text>
              <Row>
                <Col xs={12} md={6}>
                  <Button variant="primary">
                    <LinkContainer to={`/students/edit/${student.id}`}>
                      <Nav.Link>Edit</Nav.Link>
                    </LinkContainer>
                  </Button>
                </Col>
                <Col xs={12} md={6}>
                  <Button variant="primary" onClick={() => handleDelete(student.id)}>Delete</Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  ) : (
    <div>
      <p>There are no students registered in the database.</p>
    </div>
  );
}