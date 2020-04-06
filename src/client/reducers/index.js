import { combineReducers } from "redux";
import { reducer as PanesReducer } from "./panes";
import { reducer as LessonsReducer } from "./lessons";
import { reducer as HoursReducer } from "./hours";

export default combineReducers({
  panes: PanesReducer,
  lessons: LessonsReducer,
  hours: HoursReducer,
});
