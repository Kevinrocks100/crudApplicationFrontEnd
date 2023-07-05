import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCampusesThunk } from "../redux/campuses/campuses.actions";
import ListAllCampuses from "../components/listAllCampuses";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const Campuses = () => {
  const allCampuses = useSelector((state) => state.campus.allCampuses);
  const dispatch = useDispatch();
  const fetchAllCampuses = () => {
    return dispatch(fetchAllCampusesThunk());
  };

  useEffect(() => {
    fetchAllCampuses();
  }, []);

  return ( 
    <div className="text-center">
      <h1>All Campuses</h1>
      <Button variant="primary">
        <LinkContainer to="/campuses/add">
          <Nav.Link>Add Campus</Nav.Link>
        </LinkContainer>
      </Button>
      <ListAllCampuses allCampuses={allCampuses} />
    </div>
  );
};

export default Campuses;