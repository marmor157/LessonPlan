import { SESSION_TYPES } from "../constants/SessionTypes";
import isEmpty from "../utils/isEmpty";

const initialState = {
  isAuthenticated: false,
  user: {},
  isLoading: false,
  errors: {},
};

export function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case SESSION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(payload),
        user: payload,
        isLoading: false,
        errors: {},
      };

    case SESSION_TYPES.REQUEST_SIGNIN:
      return {
        ...state,
        isLoading: true,
        errors: {},
      };

    case SESSION_TYPES.SET_ERRORS:
      return {
        ...state,
        isLoading: false,
        errors: payload,
      };

    default:
      return state;
  }
}
