import { combineReducers } from "redux";
import studentReducer from "./students/students.reducer";
import campusesReducer from "./campuses/campuses.reducer"; 

const rootReducer = combineReducers({
  student: studentReducer,
  campus: campusesReducer
});

export default rootReducer;
