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

export const createCampus = (payload) => {
  return {
      type: CampusesActionType.CREATING_CAMPUS,
      payload: payload
  }
}

export const editCampus = (payload) => {
  return {
    type: CampusesActionType.EDITING_CAMPUS,
    payload: payload,
  };
};

export const deleteCampus = (payload) => {
  return {
    type: CampusesActionType.DELETING_CAMPUS,
    payload: payload,
  };
};

export const fetchAllCampusesThunk = () => {
  return async (dispatch) => {
    try {
      console.log("FETCHALLCAMPUSESTHUNK IS FIRING");
      console.log(`${process.env.REACT_APP_API_URL}api/campuses`); 
      const response = await axios.get(`${process.env.REACT_APP_API_URL}api/campuses`);
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
          const response = await axios.get(`${process.env.REACT_APP_API_URL}api/campuses/${campusId}`);
          console.log("FETCHSINGLECAMPUSTHUNK COMPLETED");
          dispatch(fetchSingleCampus(response.data));
      } catch (error) {
          console.error(error);
      }
  };
};

export const createCampusThunk = (campus) => {
  return async (dispatch) => {
      try {
          const response = await axios.post(`${process.env.REACT_APP_API_URL}api/campuses/add`, campus);
          dispatch(createCampus(response.data));
      } catch (error) {
          console.log(error); 
      }
  }
}

export const editCampusThunk = (campus) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`${process.env.REACT_APP_API_URL}api/campuses/edit/${campus.id}`, campus);
      dispatch(editCampus(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const deleteCampusThunk = (campusId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}api/campuses/delete/${campusId}`);
      dispatch(deleteCampus(campusId));
    } catch (error) {
      console.error(error);
    }
  };
};