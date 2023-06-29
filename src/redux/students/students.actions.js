import axios from "axios";

import StudentsActionType from "./students.types";

export const fetchAllStudents = (payload) => {
  console.log("FETCH ALL STUDENTS ACTION");
  return {
    type: StudentsActionType.FETCHING_ALL_STUDENTS,
    payload: payload,
  };
};

export const fetchAllStudentsThunk = () => {
  return async (dispatch) => {
    try {
      console.log("FETCHALLSTUDENTSTHUNK IS FIRING");
      const response = await axios.get("http://localhost:8080/api/students");
      console.log("FETCHALLSTUDENTSTHUNK COMPLETED"); 
      dispatch(fetchAllStudents(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};
