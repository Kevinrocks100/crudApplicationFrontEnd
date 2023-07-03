import React from "react";

export default function singleStudent(props) {
  return props.singleStudent.campusId ? (
    <div>
        <h2>Student Details</h2>
        <p>Name: {props.singleStudent.firstName} {props.singleStudent.lastName}</p>
        <p>Email: {props.singleStudent.email}</p>
        <img src={props.singleStudent.imageUrl} alt={props.singleStudent.id} />
        <p>GPA: {props.singleStudent.gpa}</p>
        <p>campusId: {props.singleStudent.campus.name}</p>
    </div>
  ) : (
    <div>
        <h2>Student Details</h2>
        <p>Name: {props.singleStudent.firstName} {props.singleStudent.lastName}</p>
        <p>Email: {props.singleStudent.email}</p>
        <img src={props.singleStudent.imageUrl} alt={props.singleStudent.id} />
        <p>GPA: {props.singleStudent.gpa}</p>
        <p>Please Add CampusId!</p>
    </div>
  );
}