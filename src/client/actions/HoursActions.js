import { HOURS_TYPES } from "../constants/HoursTypes";
import axios from "axios";

export const requestHour = () => ({
  type: HOURS_TYPES.REQUEST_HOUR,
});

export const receiveHour = (data) => ({
  type: HOURS_TYPES.RECEIVE_HOUR,
  payload: data,
});

export const receiveHours = (data) => ({
  type: HOURS_TYPES.RECEIVE_HOURS,
  payload: data,
});

export const setErrors = (error) => ({
  type: HOURS_TYPES.SET_ERRORS,
  payload: error,
});

export const getHours = () => {
  return async (dispatch) => {
    dispatch(requestHour());
    try {
      const res = await axios.get("/api/hours");
      dispatch(receiveHours(res.data));
    } catch (error) {
      dispatch(setErrors(error.response.data));
    }
  };
};
