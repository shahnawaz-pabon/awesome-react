import { combineReducers } from "redux";
import counterReducer from "./counter";

// Combine all the reducers into a single root reducer
const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
