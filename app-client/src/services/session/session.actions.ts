import axios from "axios";
import jwt from "jsonwebtoken";

import getPath from "../../utils/getPath";
import setAuthorizationToken from "../../utils/setAuthorizationToken";
import { SessionEvents, ISessionUser, ICredentials } from "./session.consts";
import { Dispatch } from "redux";
import {
  makeAction,
  makeActionWithoutPayload,
  IActionUnion,
} from "../../utils/actionsUtils";

export const setCurrentUser = makeAction<
  SessionEvents.SET_CURRENT_USER,
  ISessionUser | {}
>(SessionEvents.SET_CURRENT_USER);

export const requestSignin = makeActionWithoutPayload<
  SessionEvents.REQUEST_SIGNIN
>(SessionEvents.REQUEST_SIGNIN);

export const setErrors = makeAction<SessionEvents.SET_ERRORS, any>(
  SessionEvents.SET_ERRORS
);

const actions = {
  setCurrentUser,
  requestSignin,
  setErrors,
};

export type ISessionActions = IActionUnion<typeof actions>;

export const userSigninRequest = (credentials: ICredentials) => {
  return async (dispatch: Dispatch<ISessionActions>) => {
    dispatch(requestSignin());
    try {
      const res = await axios.post(getPath("/api/users/auth"), credentials);
      const { token } = res.data;

      setAuthorizationToken(token);
      dispatch(setCurrentUser(jwt.decode(token)));
    } catch (error) {
      console.log(error);
      dispatch(setErrors(error.response.data));
    }
  };
};

export const logout = () => {
  return (dispatch: Dispatch<ISessionActions>) => {
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  };
};
