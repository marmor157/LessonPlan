import { combineReducers } from "redux";
import { reducer as PanesReducer } from "./panes";
import { reducer as LessonsReducer } from "./lessons";
import { reducer as HoursReducer } from "./hours";
import { reducer as UsersReducer } from "./users";
import { reducer as SessionReducer } from "./session";

export const reducers = combineReducers({
  panes: PanesReducer,
  lessons: LessonsReducer,
  hours: HoursReducer,
  users: UsersReducer,
  session: SessionReducer,
});

export type IAppState = ReturnType<typeof reducers>;

export default reducers;
