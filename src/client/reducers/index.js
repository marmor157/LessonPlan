import { combineReducers } from "redux";
import { reducer as PaneReducer } from "./panes";

export default combineReducers({ panes: PaneReducer });
