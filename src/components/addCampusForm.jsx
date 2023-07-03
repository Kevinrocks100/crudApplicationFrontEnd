import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { createCampusThunk } from "../redux/campuses/campuses.actions";

const AddCampusForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
      name: "",
      imageUrl: "",
      address: "",
      description: ""
    });
    
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(createCampusThunk(formData)); 
      navigate('/campuses');
    };
    // const newCampus = useSelector((state) => state.campus.campus);
    return (
        <div>
            <h1>Hi! this is Add Campus page</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="imageUrl">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control
                        type="text"
                        name="imageUrl"
                        value={formData.imageUrl}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}
export default AddCampusForm;