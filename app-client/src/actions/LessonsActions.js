import { LESSONS_TYPES } from "../constants/LessonsTypes";
import axios from "axios";
import getPath from "../utils/getPath";

export const requestLesson = () => ({
  type: LESSONS_TYPES.REQUEST_LESSON,
});

export const receiveLesson = (data) => ({
  type: LESSONS_TYPES.RECEIVE_LESSON,
  payload: data,
});

export const receiveLessons = (data) => ({
  type: LESSONS_TYPES.RECEIVE_LESSONS,
  payload: data,
});

export const setErrors = (error) => ({
  type: LESSONS_TYPES.SET_ERRORS,
  payload: error,
});

export const getLessons = () => {
  return async (dispatch) => {
    dispatch(requestLesson());
    try {
      const res = await axios.get(getPath("/api/lessons"));
      dispatch(receiveLessons(res.data));
    } catch (error) {
      dispatch(setErrors(error.response.data));
    }
  };
};
