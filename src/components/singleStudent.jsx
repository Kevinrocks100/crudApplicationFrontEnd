import React from "react";

export default function singleStudent(props) {
  return props.singleStudent.student.campusId ? (
    <div>
        <h2>Student Details</h2>
        <p>Name: {props.singleStudent.student.firstName} {props.singleStudent.student.lastName}</p>
        <p>Email: {props.singleStudent.student.email}</p>
        <img src={props.singleStudent.student.imageUrl} alt={props.singleStudent.student.id} />
        <p>GPA: {props.singleStudent.student.gpa}</p>
        <p>campusId: {props.singleStudent.student.campus.name}</p>
    </div>
  ) : (
    <div>
        <h2>Student Details</h2>
        <p>Name: {props.singleStudent.student.firstName} {props.singleStudent.student.lastName}</p>
        <p>Email: {props.singleStudent.student.email}</p>
        <img src={props.singleStudent.student.imageUrl} alt={props.singleStudent.student.id} />
        <p>GPA: {props.singleStudent.student.gpa}</p>
        <p>Please Add CampusId!</p>
    </div>
  );
}