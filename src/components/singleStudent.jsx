import React from "react";
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import { deleteStudentThunk } from "../redux/students/students.actions";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SingleStudent({ singleStudent }) {
  const dispatch = useDispatch();
  const { id } = useParams();

  const deleteStudent = (id) => {
    return dispatch(deleteStudentThunk(id));
  };

  const handleDelete = (id) => {
    deleteStudent(id);
  };
  return singleStudent.campusId ? (
    <div>
      <h1>{singleStudent.firstName} {singleStudent.lastName}</h1>
      <p>{singleStudent.email}</p>
      <img src={singleStudent.imageUrl} alt={singleStudent.id} />
      <p>{singleStudent.gpa}</p>
      <p>{singleStudent.campus.name}</p>
      <div className="container-fluid">
        <Row>
          <Col xs={12} md={6}>
            <Button variant="primary">
              <LinkContainer to={`/students/edit/${singleStudent.id}`}>
                <Nav.Link>Edit</Nav.Link>
              </LinkContainer>
            </Button>
          </Col>
          <Col xs={12} md={6}>
            <Button variant="primary" onClick={() => handleDelete(singleStudent.id)}>Delete</Button>
          </Col>
        </Row>
      </div>
      <h2>Student's Registered Campus</h2>
    </div>
  ) : (
    <div>
      <h1>{singleStudent.firstName} {singleStudent.lastName}</h1>
      <p>{singleStudent.email}</p>
      <img src={singleStudent.imageUrl} alt={singleStudent.id} />
      <p>{singleStudent.gpa}</p>
      <p>This Student is not registered with a campus.</p>
      <div className="container-fluid">
        <Row>
          <Col xs={12} md={6}>
            <Button variant="primary">
              <LinkContainer to={`/students/edit/${singleStudent.id}`}>
                <Nav.Link>Edit</Nav.Link>
              </LinkContainer>
            </Button>
          </Col>
          <Col xs={12} md={6}>
            <Button variant="primary" onClick={() => handleDelete(singleStudent.id)}>Delete</Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}