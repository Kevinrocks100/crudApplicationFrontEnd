import React from "react";
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ListStudentName(props) {
  console.log("LIST ITEMS COMPONENT");
  return props.list ? (
    props.list.map((item) => {
      return (
        <div key={item.id}>
          <LinkContainer to={`/students/${item.id}`}>
            <Nav.Link>{item.firstName} {item.lastName}</Nav.Link>
          </LinkContainer>
        </div>
      );
    })
  ) : (
    <h1>Loading...</h1>
  );
}