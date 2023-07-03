import React from "react";
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ListCampusName(props) {
  console.log("LIST CAMPUS NAME COMPONENT");
  return props.list ? (
    props.list.map((item) => {
      return (
        <div key={item.id}>
          <LinkContainer to={`/campuses/${item.id}`}>
            <Nav.Link><h1>{item.name}</h1></Nav.Link>
          </LinkContainer>
          <img src={item.imageUrl} alt={item.name} />
        </div>
      );
    })
  ) : (
    <h1>Loading...</h1>
  );
}