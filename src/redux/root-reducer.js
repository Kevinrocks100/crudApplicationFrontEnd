import { combineReducers } from "redux";
import studentReducer from "./students/students.reducer";

const rootReducer = combineReducers({
  student: studentReducer,
});

export default rootReducer;
