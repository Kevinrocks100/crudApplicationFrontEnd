import CampusesActionType from "./campuses.types";

export const INITIAL_CAMPUSES_STATE = {
  allCampuses: [],
  campus: {}
};

const campusesReducer = (state = INITIAL_CAMPUSES_STATE, { type, payload }) => {
  switch (type) {
    case CampusesActionType.FETCHING_ALL_CAMPUSES:
      return { ...state, allCampuses: payload };
    case CampusesActionType.FETCHING_SINGLE_CAMPUS:
      return { ...state, campus: payload };
    case CampusesActionType.CREATING_CAMPUS:
      return { ...state, allCampuses: [...state.allCampuses, payload] };
    default:
      return state;
  }
};

export default campusesReducer;
