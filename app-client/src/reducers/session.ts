import { SessionEvents, ISessionState } from "../constants/Session.constans";
import isEmpty from "../utils/isEmpty";
import { ISessionActions } from "../actions/SessionActions";

const initialState: ISessionState = {
  isAuthenticated: false,
  user: {},
  isLoading: false,
  errors: {},
};

export const reducer = (
  state: ISessionState = initialState,
  action: ISessionActions
): ISessionState => {
  switch (action.type) {
    case SessionEvents.SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
        isLoading: false,
        errors: {},
      };

    case SessionEvents.REQUEST_SIGNIN:
      return {
        ...state,
        isLoading: true,
        errors: {},
      };

    case SessionEvents.SET_ERRORS:
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
