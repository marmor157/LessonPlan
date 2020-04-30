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

export const todayLessonsSelector = createSelector(
  lessonsGroupedByDaySelector,
  (lessons) => {
    return lessons[new Date().getDay() - 1] || []; //-1 becouse arary start from Monday and in Date().getDay() monday is 1
  }
);

export const currentLessonSelector = createSelector(
  lessonsSelector,
  (lessons) => {
    let currentLesson = {};
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

export const nextLessonSelector = createSelector(lessonsSelector, (lessons) => {
  //Had to delcare pseudo lesson so there is no 1< undefined comparison
  let nextDayLesson = { hour: { startHour: 9999 } };

  const currDate = new Date();
  const currHourInMinPastMidnight =
    currDate.getHours() * 60 + currDate.getMinutes();
  //Getting next school day, if it's weekend return 1, else currentDay +1
  const nextSchoolDay =
    currDate.getDay() > 4 || currDate.getDay() == 0 ? 1 : currDate.getDay() + 1;

  lessons.forEach((lesson) => {
    if (
      currDate.getDay() == lesson.day &&
      lesson.hour?.startHour >= currHourInMinPastMidnight
    )
      //If we find first lesson that match, none of later lessons would be better so we can return
      return lesson;

    //Serches for alternative best lesson but on next shool day
    if (
      nextSchoolDay == lesson.day &&
      lesson.hour?.startHour < nextDayLesson.hour?.startHour
    )
      nextDayLesson = lesson;
  });
  return nextDayLesson;
});
