import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { addStudentThunk } from "../redux/students/students.actions";
import { Form, Button } from "react-bootstrap";

const AddStudentForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    imageUrl: "https://img.freepik.com/premium-vector/cartoon-urban-cityscape-with-college-academy-students-university-architecture-background_212168-968.jpg",
    gpa: null,
    campusId : null
  });

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const campusId = searchParams.get("campusId");
    setFormData((prevFormData) => ({
      ...prevFormData,
      campusId: parseInt(campusId), // Set the campusId in the form data
    }));
  }, [location.search]);

  const [validationErrors, setValidationErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      console.log(formData); 
      dispatch(addStudentThunk(formData));
      setFormData({
        firstName: "",
        lastName: "",
        email: ""
      });
      navigate('/students');
    } else {
      setValidationErrors(errors);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.firstName.trim()) {
      errors.firstName = "Student's first name is required";
    }
    if (!formData.lastName.trim()) {
      errors.lastName = "Student's last name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Student's email is required";
    }
    return errors;
  };

  return (
    <div className="text-center">
      <h2>Add Student</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            className="text-center"
            value={formData.firstName}
            onChange={handleChange}
            isInvalid={validationErrors.firstName}
          />
          <Form.Control.Feedback type="invalid">
            {validationErrors.firstName}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            className="text-center"
            value={formData.lastName}
            onChange={handleChange}
            isInvalid={validationErrors.lastName}
          />
          <Form.Control.Feedback type="invalid">
            {validationErrors.lastName}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            className="text-center"
            value={formData.email}
            onChange={handleChange}
            isInvalid={validationErrors.email}
          />
          <Form.Control.Feedback type="invalid">
            {validationErrors.email}
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Student
        </Button>
      </Form>
    </div>
  );
};

export default AddStudentForm;