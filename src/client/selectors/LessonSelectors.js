import { createSelector } from "reselect";

export const lessonsSelector = (state) => state.lessons.lessons;

export const lessonsGroupedByDaySelector = createSelector(
  lessonsSelector,
  (lessons) =>
    lessons.reduce((acc, lesson) => {
      acc[lesson.day - 1] = acc[lesson.day - 1] || [];
      acc[lesson.day - 1].push(lesson);
      return acc;
    }, [])
);
