import StudentsActionType from "./students.types";

export const INITIAL_STUDENTS_STATE = {
  allStudents: [],
  student: {}
};

const studentReducer = (state = INITIAL_STUDENTS_STATE, { type, payload }) => {
  switch (type) {
    case StudentsActionType.FETCHING_ALL_STUDENTS:
      return { ...state, allStudents: payload }
    case StudentsActionType.FETCH_SINGLE_STUDENT:
      return { ...state, student: payload}
    case StudentsActionType.CREATING_STUDENT:
      return { ...state, allStudents: [...state.allStudents, payload] }; 
    case StudentsActionType.EDITING_STUDENT:
      return { ...state, allCampuses: state.allCampuses.map((campus) => campus.id === payload.id ? payload : campus), campus: payload, isLoading: false,};
    case StudentsActionType.DELETING_STUDENT:
      return { ...state, allStudents: state.allStudents.filter((student) => student.id !== payload )}; 
    default:
      return state;
  }
};

export default studentReducer;
