import { HOURS_TYPES } from "../constants/HoursTypes";

const initialState = {
  hours: [],
  errors: {},
  isLoading: false,
};

export function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case HOURS_TYPES.REQUEST_HOUR: {
      return {
        ...state,
        isLoading: true,
        errors: {},
      };
    }

    case HOURS_TYPES.RECEIVE_HOURS: {
      return {
        isLoading: false,
        errors: {},
        hours: action.payload,
      };
    }

    case HOURS_TYPES.SET_ERRORS: {
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      };
    }

    default:
      return state;
  }
}
