import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCampusThunk } from "../redux/campuses/campuses.actions";
import AddCampusPage from "../pages/addCampus";
import { useParams } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ListAllCampuses({ allCampuses }) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const deleteCampus = (id) => {
    return dispatch(deleteCampusThunk(id));
  };

  const handleDelete = (id) => {
    deleteCampus(id);
  };
  return allCampuses.length !== 0 ? (
    <Row>
      {allCampuses.map((campus) => (
        <Col key={campus.id} xs={12} sm={6} md={4}>
          <Card className="text-center">
            <Card.Img variant="top" src={campus.imageUrl} alt={campus.name} />
            <Card.Body>
              <Card.Title>
                <LinkContainer to={`/campuses/${campus.id}`}>
                  <a>{campus.name}</a>
                </LinkContainer>
              </Card.Title>
              <Card.Text>
                <p>{campus.students.length} students</p>
              </Card.Text>
              <Row>
                <Col xs={12} md={6}>
                  <Button variant="primary">
                    <LinkContainer to={`/campuses/edit/${campus.id}`}>
                      <Nav.Link>Edit</Nav.Link>
                    </LinkContainer>
                  </Button>
                </Col>
                <Col xs={12} md={6}>
                  <Button variant="primary" onClick={() => handleDelete(campus.id)}>Delete</Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  ) : (
    <div>
      <p>There are no campuses registered in this database!</p>
    </div>
  );
}