import CampusesActionType from "./campuses.types";

export const INITIAL_CAMPUSES_STATE = {
  allCampuses: [],
  campus: {}, 
  isLoading: false
};

const campusesReducer = (state = INITIAL_CAMPUSES_STATE, { type, payload }) => {
  switch (type) {
    case CampusesActionType.FETCHING_ALL_CAMPUSES:
      return { ...state, allCampuses: payload };
    case CampusesActionType.FETCHING_SINGLE_CAMPUS:
      return { ...state, campus: payload };
    case CampusesActionType.CREATING_CAMPUS:
      return { ...state, allCampuses: [...state.allCampuses, payload] };
    case CampusesActionType.EDITING_CAMPUS:
      return { ...state, allCampuses: state.allCampuses.map((campus) => campus.id === payload.id ? payload : campus), campus: payload, isLoading: false,};
    case CampusesActionType.DELETING_CAMPUS:
      return { ...state, allCampuses: state.allCampuses.filter((campus) => campus.id !== payload )};
    default:
      return state;
  }
};

export default campusesReducer;
