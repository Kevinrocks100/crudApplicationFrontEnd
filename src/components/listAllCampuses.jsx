import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCampusThunk } from "../redux/campuses/campuses.actions";
import { useParams } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ListAllCampuses({ allCampuses }) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const deleteCampus = (campusId) => {
    return dispatch(deleteCampusThunk(campusId));
  };

  const handleDelete = (campusId) => {
      deleteCampus(campusId);
  }

  return allCampuses.length !== 0 ? (
    allCampuses.map((campus) => {
      return (
        <div key={campus.id}>
          <Card className="text-center" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={campus.imageUrl} alt={campus.name}/>
            <Card.Body>
              <Card.Title><LinkContainer to={`/campuses/${campus.id}`}><a>{campus.name}</a></LinkContainer></Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary" onClick={() => handleDelete(campus.id)}>Delete</Button>
            </Card.Body>
          </Card>
        </div>
        // <div key={campus.id}>
        //   <LinkContainer to={`/campuses/${campus.id}`}>
        //     <Nav.Link><h1>{campus.name}</h1></Nav.Link>
        //   </LinkContainer>
        //   <img src={campus.imageUrl} alt={campus.name} />
        // </div>
      );
    })
  ) : (
    <h1>There are no campuses registered in this database!</h1>

  );
}