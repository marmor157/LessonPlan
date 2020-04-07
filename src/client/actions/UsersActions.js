import { USERS_TYPES } from "../constants/UsersTypes";
import axios from "axios";

export const requestUser = () => ({
  type: USERS_TYPES.REQUEST_USER,
});

export const receiveUser = (payload) => ({
  type: USERS_TYPES.RECEIVE_USER,
  payload,
});

export const clearUser = () => ({
  type: USERS_TYPES.CLEAR_USER,
});

export const updateUser = (payload) => ({
  type: USERS_TYPES.UPDATE_USER,
  payload,
});

export const setErrors = (payload) => ({
  type: USERS_TYPES.SET_ERRORS,
  payload,
});

export const fetchUser = () => {
  return async (dispatch) => {
    dispatch(requestUser());
    try {
      const res = await axios.get("/api/users");
      dispatch(receiveUser(res));
    } catch (error) {
      dispatch(setErrors(error.response.data));
    }
  };
};

export const updatePassword = (password) => {
  return async (dispatch) => {
    dispatch(updateUser());
    try {
      await axios.post("/api/users/password", password);
      dispatch(logout());
    } catch (error) {
      dispatch(setErrors(error.response.data));
    }
  };
};
