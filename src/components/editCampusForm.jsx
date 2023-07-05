import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editCampusThunk } from "../redux/campuses/campuses.actions";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const EditCampus = () => {
  const campus = useSelector((state) => state.campus.campus);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [editForm, setEditForm] = useState({});

  useEffect(() => {
    setEditForm(campus);
  }, [campus]);

  const handleEditSubmit = (event) => {
    event.preventDefault();
    dispatch(editCampusThunk(editForm));
    navigate(`/campuses/${campus.id}`);
  };

  const handleInputChange = (event) => {
    setEditForm({
      ...editForm,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="forms">
      <h1 className="header">Edit Campus</h1>
      <Form onSubmit={handleEditSubmit}>
        <Form.Group>
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={editForm.name || ""}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Address:</Form.Label>
          <Form.Control
            type="text"
            name="address"
            value={editForm.address || ""}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Image URL:</Form.Label>
          <Form.Control
            type="text"
            name="imageUrl"
            value={editForm.imageUrl || ""}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Description:</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            value={editForm.description || ""}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
    </div>
  );
};

export default EditCampus;