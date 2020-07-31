import { HoursEvents, IHoursState } from "./hours.consts";
import { IHoursActions } from "./hours.actions";

const initialState: IHoursState = {
  hours: [],
  errors: {},
  isLoading: false,
};

export const reducer = (
  state: IHoursState = initialState,
  action: IHoursActions
): IHoursState => {
  switch (action.type) {
    case HoursEvents.REQUEST_HOUR: {
      return {
        ...state,
        isLoading: true,
        errors: {},
      };
    }

    case HoursEvents.RECEIVE_HOURS: {
      return {
        isLoading: false,
        errors: {},
        hours: action.payload,
      };
    }

    case HoursEvents.SET_ERRORS: {
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      };
    }

    default:
      return state;
  }
};

export default reducer;
