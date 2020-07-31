import { HoursEvents, IHour } from "./hours.consts";
import axios from "axios";
import getPath from "../../utils/getPath";
import { Dispatch } from "redux";
import {
  makeAction,
  makeActionWithoutPayload,
  IActionUnion,
} from "../../utils/actionsUtils";

export const requestHour = makeActionWithoutPayload<HoursEvents.REQUEST_HOUR>(
  HoursEvents.REQUEST_HOUR
);

export const receiveHour = makeAction<HoursEvents.RECEIVE_HOUR, IHour>(
  HoursEvents.RECEIVE_HOUR
);

export const receiveHours = makeAction<HoursEvents.RECEIVE_HOURS, Array<IHour>>(
  HoursEvents.RECEIVE_HOURS
);

export const setErrors = makeAction<HoursEvents.SET_ERRORS, any>(
  HoursEvents.SET_ERRORS
);

const actions = {
  requestHour,
  receiveHour,
  receiveHours,
  setErrors,
};

export type IHoursActions = IActionUnion<typeof actions>;

export const getHours = () => {
  return async (dispatch: Dispatch<IHoursActions>) => {
    dispatch(requestHour());
    try {
      const res = await axios.get(getPath("/api/hours"));
      dispatch(receiveHours(res.data));
    } catch (error) {
      dispatch(setErrors(error.response.data));
    }
  };
};
