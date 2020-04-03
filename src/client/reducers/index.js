import { combineReducers } from "redux";
import { reducer as PanesReducer } from "./panes";
import { reducer as LessonsReducer } from "./lessons";

export default combineReducers({
  panes: PanesReducer,
  lessons: LessonsReducer,
});
