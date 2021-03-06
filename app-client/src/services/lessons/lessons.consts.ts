import { IHour } from "../hours/hours.consts";
import { ISubject } from "../subjects/subjects.consts";

export interface ILesson {
  id: string;
  roomNumber: string;
  day: number;
  hour: IHour;
  subject: ISubject;
}

export interface ILessonsState {
  lessons: Array<ILesson>;
  errors: any;
  isLoading: boolean;
}

export enum LessonsEvents {
  REQUEST_LESSON = "lessons/REQUEST_LESSON",
  RECEIVE_LESSONS = "lessons/RECEIVE_LESSONS",
  RECEIVE_LESSON = "lessons/RECEIVE_LESSON",

  SET_ERRORS = "lessons/SET_LESSONS",
}
