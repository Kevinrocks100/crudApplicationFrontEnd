import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleCampusThunk } from "../redux/campuses/campuses.actions";
import { fetchAllStudentsThunk } from "../redux/students/students.actions";
import SingleCampus from "../components/singleCampus";
import { useParams } from 'react-router-dom'

const Campus = () => {
  const campus = useSelector((state) => state.campus.campus); 
  const students = useSelector(state => state.student.allStudents);
  const dispatch = useDispatch();
  const { id } = useParams();
  const fetchSingleCampus = () => {
    return dispatch(fetchSingleCampusThunk(id));
  };

  const fetchAllStudents = ()=>{
    return dispatch(fetchAllStudentsThunk());
  };

  useEffect(() => {
    console.log('FETCH SINGLE CAMPUS FIRING IN USEEFFECT')
    fetchAllStudents();
    fetchSingleCampus();
  }, [id]);
  const campusStudents = students.filter(student => student.campusId===parseInt(id));
  return ( 
    <div>
      <h1>Campus Page</h1>
      <SingleCampus singleCampus={campus} students={campusStudents}/>
    </div>
  );
};

export default Campus;