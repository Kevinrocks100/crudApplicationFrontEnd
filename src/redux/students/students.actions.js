import axios from "axios";

import StudentsActionType from "./students.types";

export const fetchAllStudents = (payload) => {
  console.log("FETCH ALL STUDENTS ACTION");
  return {
    type: StudentsActionType.FETCHING_ALL_STUDENTS,
    payload: payload,
  };
};

export const fetchSingleStudent = (payload)=>{
  console.log("FETCH SINGLE STUDENT ACTION");
  return {
      type: StudentsActionType.FETCH_SINGLE_STUDENT,
      payload: payload,
  };
};

export const addStudent = (payload) => {
  return {
      type: StudentsActionType.CREATING_STUDENT,
      payload: payload
  }
}

export const editStudent = (payload) => {
  return {
    type: StudentsActionType.EDITING_STUDENT,
    payload: payload,
  };
};

export const deleteStudent = (payload) => {
  return {
    type: StudentsActionType.DELETING_STUDENT,
    payload: payload,
  };
};

export const fetchAllStudentsThunk = () => {
  return async (dispatch) => {
    try {
      console.log("FETCHALLSTUDENTSTHUNK IS FIRING");
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/students`);
      console.log("FETCHALLSTUDENTSTHUNK COMPLETED"); 
      dispatch(fetchAllStudents(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const fetchSingleStudentThunk = (studentId) =>{
  return async (dispatch)=>{
      try {
          console.log("FETCHSINGLESTUDENTTHUNK IS FIRING");
          const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/students/${studentId}`);
          console.log("FETCHSINGLESTUDENTTHUNK COMPLETED");
          dispatch(fetchSingleStudent(response.data));
      } catch (error) {
          console.error(error);
      }
  };
};

export const addStudentThunk = (student) => {
  return async (dispatch) => {
      try {
          const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/students/add`, student);
          dispatch(addStudent(response.data));
      } catch (error) {
          console.log(error); 
      }
  }
}

export const editStudentThunk = (student) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`${process.env.REACT_APP_API_URL}/api/students/edit/${student.id}`, student);
      dispatch(editStudent(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const deleteStudentThunk = (studentId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/api/students/delete/${studentId}`);
      dispatch(deleteStudent(studentId));
    } catch (error) {
      console.error(error);
    }
  };
};