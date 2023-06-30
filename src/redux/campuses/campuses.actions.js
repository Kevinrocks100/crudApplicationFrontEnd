import axios from "axios";

import CampusesActionType from "./campuses.types";

export const fetchAllCampuses = (payload) => {
  console.log("FETCH ALL CAMPUSES ACTION");
  return {
    type: CampusesActionType.FETCHING_ALL_CAMPUSES,
    payload: payload,
  };
};

export const fetchSingleCampus = (payload)=>{
  console.log("FETCH SINGLE CAMPUS ACTION");
  return {
      type: CampusesActionType.FETCHING_SINGLE_CAMPUS,
      payload: payload,
  };
};

export const fetchAllCampusesThunk = () => {
  return async (dispatch) => {
    try {
      console.log("FETCHALLCAMPUSESTHUNK IS FIRING");
      const response = await axios.get("http://localhost:8080/api/campuses");
      console.log("FETCHALLCAMPUSESTHUNK COMPLETED"); 
      dispatch(fetchAllCampuses(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const fetchSingleCampusThunk = (campusId) =>{
  return async (dispatch)=>{
      try {
          console.log("FETCHSINGLECAMPUSTHUNK IS FIRING");
          const response = await axios.get(`http://localhost:8080/api/campuses/${campusId}`);
          console.log("FETCHSINGLECAMPUSTHUNK COMPLETED");
          dispatch(fetchSingleCampus(response.data));
      } catch (error) {
          console.error(error);
      }
  };
};