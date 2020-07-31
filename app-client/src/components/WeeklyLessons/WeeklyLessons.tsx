import React, { PureComponent } from "react";
import WeeklyLessonsElement from "./components/WeeklyLessonsElement";

import getNameDay from "../../utils/getDayName";
import TableWithHours from "../TableWithHours/TableWithHours";
import LessonsElement from "../LessonsElement/LessonsElement";
import { ILesson } from "../../services/lessons/lessons.consts";
import { IHour } from "../../services/hours/hours.consts";

import "./WeeklyLessons.scss";

interface Props {
  lessons: Array<Array<ILesson>>;
  hours: Array<IHour | {}>;
}

export const WeeklyLessons = React.memo(({ lessons, hours }: Props) => {
  const lessonsDisplay = lessons.map((lessonRow, id) => (
    <div className="weeklyLessons__column" key={id}>
      <LessonsElement upperText={getNameDay(id + 1)} />

      {lessonRow.map((lesson, id) => (
        <WeeklyLessonsElement lesson={lesson} key={id} />
      ))}
    </div>
  ));

  const hourWithEmptySlot = [{ id: 0, startHour: 0, finishHour: 0 }, ...hours];
  return (
    <TableWithHours hours={hourWithEmptySlot}>
      <div className="weeklyLessons">{lessonsDisplay}</div>
    </TableWithHours>
  );
});

export default WeeklyLessons;
