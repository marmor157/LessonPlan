import axios from "axios";
import jwt from "jsonwebtoken";

import setAuthorizationToken from "../utils/setAuthorizationToken";
import { SESSION_TYPES } from "../constants/SessionTypes";

export const setCurrentUser = (payload) => ({
  type: SESSION_TYPES.SET_CURRENT_USER,
  payload,
});

export const requestSignin = () => ({
  type: SESSION_TYPES.REQUEST_SIGNIN,
});

export const setErrors = (payload) => ({
  type: SESSION_TYPES.SET_ERRORS,
  payload,
});

export const userSigninRequest = (credentials) => {
  return async (dispatch) => {
    dispatch(requestSignin());
    try {
      const res = await axios.post("/api/users/auth", credentials);
      const { token } = res.data;

      setAuthorizationToken(token);
      dispatch(setCurrentUser(jwt.decode(token)));
    } catch (error) {
      dispatch(setErrors(error.response.data));
    }
  };
};

export const logout = () => {
  return (dispatch) => {
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  };
};
