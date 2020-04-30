import React, { PureComponent } from "react";
import WeeklyLessonsElement from "./WeeklyLessonsElement";

import getNameDay from "../utils/getDayName";
import TableWithHours from "./TableWithHours";
import LessonsElement from "./LessonsElement";

export default class WeeklyLessons extends PureComponent {
  render() {
    const { lessons, hours } = this.props;

    //Map user's lessons with day name as a top element
    const lessonsDisplay = lessons.map((lessonRow, id) => (
      <div className="weeklyLessons__column" key={id}>
        <LessonsElement upperText={getNameDay(id + 1)} />

        {lessonRow.map((lesson, id) => (
          <WeeklyLessonsElement lesson={lesson} key={id} />
        ))}
      </div>
    ));

    const hourWithEmptySlot = [{}, ...hours];
    return (
      <TableWithHours hours={hourWithEmptySlot}>
        <div className="weeklyLessons">{lessonsDisplay}</div>
      </TableWithHours>
    );
  }
}