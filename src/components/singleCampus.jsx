import React from "react";
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function singleCampus({ singleCampus, students }) {
  return singleCampus ? (
    <div>
        <h2>Campuse Details</h2>
        <p>Name: {singleCampus.name}</p>
        <img src={singleCampus.imageUrl} alt={singleCampus.id} />
        <p>Address: {singleCampus.address}</p>
        <p>Description: {singleCampus.description}</p>
        <div>
        {
          students.map((student) => {
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
    </div>
  ) : (
    <div>
        <p>Name: {singleCampus.name}</p>
        <img src={singleCampus.imageUrl} alt={singleCampus.id} />
        <p>Address: {singleCampus.address}</p>
        <p>Description: {singleCampus.description}</p>
        <p>Please Add Students to Campus!</p>
    </div>
  );
}