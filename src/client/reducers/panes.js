import { PANE_TYPES } from "../constants/PaneTypes";

const initialState = {
  showTodayPane: false,
  showWeekPane: false,
};

export function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case PANE_TYPES.SHOW_TODAY_PANE: {
      return {
        ...state,
        showTodayPane: true,
      };
    }

    case PANE_TYPES.HIDE_TODAY_PANE: {
      return {
        ...state,
        showTodayPane: false,
      };
    }

    case PANE_TYPES.SHOW_WEEK_PANE: {
      return {
        ...state,
        showWeekPane: true,
      };
    }

    case PANE_TYPES.HIDE_WEEK_PANE: {
      return {
        ...state,
        showWeekPane: false,
      };
    }

    default:
      return state;
  }
}
