import { UserEvents, IUser } from "./users.consts";
import axios from "axios";
import getPath from "../../utils/getPath";
import { Dispatch } from "redux";
import { logout } from "../session/session.actions";
import {
  makeActionWithoutPayload,
  makeAction,
  IActionUnion,
} from "../../utils/actionsUtils";

export const requestUser = makeActionWithoutPayload<UserEvents.REQUEST_USER>(
  UserEvents.REQUEST_USER
);

export const receiveUser = makeAction<UserEvents.RECEIVE_USER, IUser>(
  UserEvents.RECEIVE_USER
);

export const clearUser = makeActionWithoutPayload<UserEvents.CLEAR_USER>(
  UserEvents.CLEAR_USER
);

export const updateUser = makeActionWithoutPayload<UserEvents.UPDATE_USER>(
  UserEvents.UPDATE_USER
);

export const setErrors = makeAction<UserEvents.SET_ERRORS, any>(
  UserEvents.SET_ERRORS
);

const actions = {
  requestUser,
  receiveUser,
  clearUser,
  updateUser,
  setErrors,
};

export type IUserActions = IActionUnion<typeof actions>;

export const fetchUser = () => {
  return async (dispatch: Dispatch<IUserActions>) => {
    dispatch(requestUser());
    try {
      const res = await axios.get(getPath("/api/users"));
      dispatch(receiveUser(res.data));
    } catch (error) {
      dispatch(setErrors(error.response.data));
    }
  };
};

export const updatePassword = (password: string) => {
  return async (dispatch: Dispatch<IUserActions>) => {
    dispatch(updateUser());
    try {
      await axios.post(getPath("/api/users/password"), password);
      logout();
    } catch (error) {
      dispatch(setErrors(error.response.data));
    }
  };
};
