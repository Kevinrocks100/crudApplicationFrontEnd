import CampusesActionType from "./campuses.types";

export const INITIAL_CAMPUSES_STATE = {
  allCampuses: [],
};

const campusesReducer = (state = INITIAL_CAMPUSES_STATE, { type, payload }) => {
  console.log('CAMPUSESREDUCER IS HANDLING FETCH ALL CAMPUSES ACTION')
  switch (type) {
    case CampusesActionType.FETCHING_ALL_CAMPUSES:
      return { ...state, allCampuses: payload };
    default:
      return state;
  }
};

export default campusesReducer;
