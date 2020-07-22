import { LessonsEvents, ILesson } from "../constants/Lessons.constans";
import axios from "axios";
import getPath from "../utils/getPath";
import { Dispatch } from "redux";
import {
  makeAction,
  makeActionWithoutPayload,
  IActionUnion,
} from "../utils/actionsUtils";

export const requestLesson = makeActionWithoutPayload<
  LessonsEvents.REQUEST_LESSON
>(LessonsEvents.REQUEST_LESSON);

export const receiveLesson = makeAction<LessonsEvents.RECEIVE_LESSON, ILesson>(
  LessonsEvents.RECEIVE_LESSON
);

export const receiveLessons = makeAction<
  LessonsEvents.RECEIVE_LESSONS,
  Array<ILesson>
>(LessonsEvents.RECEIVE_LESSONS);

export const setErrors = makeAction<LessonsEvents.SET_ERRORS, any>(
  LessonsEvents.SET_ERRORS
);

const actions = {
  requestLesson,
  receiveLesson,
  receiveLessons,
  setErrors,
};

export type ILessonsActions = IActionUnion<typeof actions>;

export const getLessons = () => {
  return async (dispatch: Dispatch<ILessonsActions>) => {
    dispatch(requestLesson());
    try {
      const res = await axios.get(getPath("/api/lessons"));
      dispatch(receiveLessons(res.data));
    } catch (error) {
      dispatch(setErrors(error.response.data));
    }
  };
};
