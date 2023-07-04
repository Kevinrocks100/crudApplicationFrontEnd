import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { createCampusThunk } from "../redux/campuses/campuses.actions";

const AddCampusForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        imageUrl: "jhshdf", 
        address: "",
        description: "shd"
    });

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
            dispatch(createCampusThunk(formData));
            setFormData({
                name: "",
                address: "",
            });
            setValidationErrors({});
            navigate('/campuses');
        } else {
            setValidationErrors(errors);
        }
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.name.trim()) {
            errors.name = "Campus name is required";
        }
        if (!formData.address.trim()) {
            errors.address = "Campus address is required";
        }
        return errors;
    };

    return (
        <div>
            <h2>Add New Campus</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="name">
                    <Form.Label>Campus Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        isInvalid={validationErrors.name}
                    />
                    <Form.Control.Feedback type="invalid">
                        {validationErrors.name}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="address">
                    <Form.Label>Campus Address</Form.Label>
                    <Form.Control
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        isInvalid={validationErrors.address}
                    />
                    <Form.Control.Feedback type="invalid">
                        {validationErrors.address}
                    </Form.Control.Feedback>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add Campus
                </Button>
            </Form>
        </div>
    );
};

export default AddCampusForm;