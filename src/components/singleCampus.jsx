import React from "react";
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import { deleteCampusThunk } from "../redux/campuses/campuses.actions";
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SingleCampus({ singleCampus, students }) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const deleteCampus = (id) => {
    return dispatch(deleteCampusThunk(id));
  };

  const handleDelete = (id) => {
    deleteCampus(id);
  };
  return students.length !== 0 ? (
    <div>
      <h1>{singleCampus.name}</h1>
      <img src={singleCampus.imageUrl} alt={singleCampus.id} />
      <p>{singleCampus.address}</p>
      <p>{singleCampus.description}</p>
      <Row>
        <Col xs={12} md={6}>
          <Button variant="primary">
            <LinkContainer to={`/campuses/edit/${singleCampus.id}`}>
              <Nav.Link>Edit</Nav.Link>
            </LinkContainer>
          </Button>
        </Col>
        <Col xs={12} md={6}>
          <Button variant="primary" onClick={() => handleDelete(singleCampus.id)}>Delete</Button>
        </Col>
      </Row>
      <Row>
        {students.map((student) => (
          <Col key={student.id} xs={12} sm={6} md={4}>
            <Card className="text-center">
              <Card.Img variant="top" src={student.imageUrl} alt={student.id} />
              <Card.Body>
                <Card.Title>
                  <LinkContainer to={`/students/${student.id}`}>
                    <a>{student.firstName} {student.lastName}</a>
                  </LinkContainer>
                </Card.Title>
                <Card.Text>
                  <p>{singleCampus.name}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  ) : (
    <div>
      <h1>{singleCampus.name}</h1>
      <img src={singleCampus.imageUrl} alt={singleCampus.id} />
      <h3>{singleCampus.address}</h3>
      <p>{singleCampus.description}</p>
      <h2>Students on Campus</h2>
      <p>Please Add Students to Campus!</p>
      <Button variant="primary">
        <LinkContainer to="/campuses/add">
          <Nav.Link>Add Campus</Nav.Link>
        </LinkContainer>
      </Button>
    </div>
  );
}