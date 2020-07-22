import { PanesEvents, IPanesState } from "../constants/Pane.constans";
import { IPanesActions } from "../actions/PanesActions";

const initialState: IPanesState = {
  isTodayPaneShown: false,
  isWeekPaneShown: false,
};

export const reducer = (
  state: IPanesState = initialState,
  action: IPanesActions
): IPanesState => {
  switch (action.type) {
    case PanesEvents.SHOW_TODAY_PANE: {
      return {
        ...state,
        isTodayPaneShown: true,
      };
    }

    case PanesEvents.HIDE_TODAY_PANE: {
      return {
        ...state,
        isTodayPaneShown: false,
      };
    }

    case PanesEvents.SHOW_WEEK_PANE: {
      return {
        ...state,
        isWeekPaneShown: true,
      };
    }

    case PanesEvents.HIDE_WEEK_PANE: {
      return {
        ...state,
        isWeekPaneShown: false,
      };
    }

    default:
      return state;
  }
};

export default reducer;
