import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editStudentThunk } from "../redux/students/students.actions";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const EditStudent = ({studentId}) => {
  const student = useSelector((state) => state.student.student);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [editForm, setEditForm] = useState({});

  useEffect(() => {
    setEditForm(student);
  }, [student]);

  const handleEditSubmit = (event) => {
    event.preventDefault();
    dispatch(editStudentThunk(editForm));
    navigate(`/students/${studentId}`);
  };

  const handleInputChange = (event) => {
    setEditForm({
      ...editForm,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="text-center">
      <h1 className="header">Edit Student</h1>
      <Form onSubmit={handleEditSubmit}>
        <Form.Group>
          <Form.Label>First Name:</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            className="text-center"
            value={editForm.firstName || ""}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name:</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            className="text-center"
            value={editForm.lastName || ""}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            className="text-center"
            value={editForm.email || ""}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Image URL:</Form.Label>
          <Form.Control
            type="text"
            name="imageUrl"
            className="text-center"
            value={editForm.imageUrl || ""}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>GPA:</Form.Label>
          <Form.Control
            type="number"
            name="gpa"
            className="text-center"
            value={editForm.gpa || ""}
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

export default EditStudent;