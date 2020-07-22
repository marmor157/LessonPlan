import { createSelector } from "reselect";
import { IAppState } from "../reducers/index";
import { ILesson } from "../constants/Lessons.constans";
import getNextDay from "../utils/getNextDay";

export const lessonsSelector = (state: IAppState) => state.lessons.lessons;

export const lessonsGroupedByDaySelector = createSelector(
  lessonsSelector,
  (lessons): Array<Array<ILesson>> =>
    lessons.reduce((acc, lesson) => {
      acc[lesson.day - 1] = acc[lesson.day - 1] || [];
      acc[lesson.day - 1].push(lesson);
      return acc;
    }, [])
);

export const todayLessonsSelector = createSelector(
  lessonsGroupedByDaySelector,
  (lessons): Array<ILesson> => {
    return lessons[new Date().getDay() - 1] || []; //-1 becouse arary start from Monday and in Date().getDay() monday is 1
  }
);

export const nextDayLessonsSelector = createSelector(
  lessonsGroupedByDaySelector,
  (lessons): Array<ILesson> => {
    return lessons[getNextDay() - 1] || []; //-1 becouse arary start from Monday and in Date().getDay() monday is 1
  }
);

export const currentLessonSelector = createSelector(
  lessonsSelector,
  (lessons): ILesson => {
    let currentLesson = lessons[0];
    const currDate = new Date();
    const currHourInMinPastMidnight =
      currDate.getHours() * 60 + currDate.getMinutes();
    lessons.forEach((lesson) => {
      if (
        lesson.day == currDate.getDay() &&
        lesson.hour.startHour <= currHourInMinPastMidnight &&
        lesson.hour.finishHour >= currHourInMinPastMidnight
      )
        currentLesson = lesson;
    });
    return currentLesson;
  }
);

export const nextLessonSelector = createSelector(
  lessonsSelector,
  nextDayLessonsSelector,
  (lessons: Array<ILesson>, nextDayLessons: Array<ILesson>) => {
    const currDate = new Date();
    const currHourInMinPastMidnight =
      currDate.getHours() * 60 + currDate.getMinutes();

    lessons.forEach((lesson) => {
      if (
        currDate.getDay() == lesson.day &&
        lesson.hour?.startHour >= currHourInMinPastMidnight
      )
        //If we find first lesson that match, none of later lessons would be better so we can return
        return lesson;
    });

    return nextDayLessons[0];
  }
);
