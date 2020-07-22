import { UserEvents, IUserState } from "../constants/Users.constans";
import { IUserActions } from "../actions/UsersActions";

const initialState: IUserState = {
  user: {},
  isLoading: false,
  errors: [],
};

export const reducer = (
  state: IUserState = initialState,
  action: IUserActions
): IUserState => {
  switch (action.type) {
    case UserEvents.REQUEST_USER: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case UserEvents.RECEIVE_USER: {
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };
    }
    case UserEvents.CLEAR_USER: {
      return {
        ...state,
        user: {},
      };
    }
    case UserEvents.SET_ERRORS: {
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
