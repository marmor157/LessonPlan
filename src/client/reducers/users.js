import { USERS_TYPES } from "../constants/UsersTypes";

const initialState = {
  user: {},
  isLoading: false,
  errors: [],
};

export function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case USERS_TYPES.REQUEST_USER: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case USERS_TYPES.RECEIVE_USER: {
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };
    }
    case USERS_TYPES.CLEAR_USER: {
      return {
        ...state,
        user: {},
      };
    }
    case USERS_TYPES.SET_ERRORS: {
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
