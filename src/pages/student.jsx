import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleStudentThunk } from "../redux/students/students.actions";
import SingleStudent from "../components/singleStudent";
import { useParams } from 'react-router-dom'

const Student = () => {
  const student = useSelector((state) => state.student);
  const dispatch = useDispatch();
  const { id } = useParams();
  const fetchSingleStudent = () => {
    console.log('RUNNING DISPATCH FROM FETCHSINGLESTUDENT')
    return dispatch(fetchSingleStudentThunk(id));
  };

  useEffect(() => {
    console.log('FETCH SINGLE STUDENT FIRING IN USEEFFECT')
    fetchSingleStudent();
  }, [id]);

  return ( 
    <div>
      <h1>Students Page</h1>
      <SingleStudent singleStudent={student} />
    </div>
  );
};

export default Student;