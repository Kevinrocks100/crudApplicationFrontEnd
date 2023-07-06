import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from 'react-router-dom'
import EditStudentForm from "../components/editStudentForm";
import { fetchSingleStudentThunk } from "../redux/students/students.actions"

const EditStudent = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleStudentThunk(id));
  }, [id, dispatch]);

  return (
    <div>
      <EditStudentForm studentId={id}/>
    </div>
  );
};

export default EditStudent;