import React, { PureComponent } from "react";
import WeeklyLessonsElement from "./WeeklyLessonsElement";
import formatHour from "../utils/formatHour";
import minutesToHour from "../utils/minutesToHour";
import getNameDay from "../utils/getDayName";

export default class WeeklyLessons extends PureComponent {
  render() {
    const { lessons, hours } = this.props;

    //Map user's hours
    const hoursDisplay = hours.map((hour, id) => {
      const { hour: startHour, minute: startMinute } = formatHour(
        minutesToHour(hour.startHour)
      );
      const { hour: finishHour, minute: finishMinute } = formatHour(
        minutesToHour(hour.finishHour)
      );

      return (
        <div className="weeklyLessons__element weeklyLessons__element--hour">
          {startHour}:{startMinute} - {finishHour}:{finishMinute}
        </div>
      );
    });

    //Map user's lessons with day name as a top element
    const lessonsDisplay = lessons.map((lessonRow, id) => (
      <div className="weeklyLessons__column" key={id}>
        <div className="weeklyLessons__element">{getNameDay(id + 1)}</div>

        {lessonRow.map((lesson, id) => (
          <WeeklyLessonsElement lesson={lesson} key={id} />
        ))}
      </div>
    ));

    return (
      <div className="weeklyLessons">
        <div className="weeklyLessons__hourColumn">
          <div className="weeklyLessons__element weeklyLessons__element--hour"></div>
          {hoursDisplay}
        </div>
        <div className="weeklyLessons__lessonsContainer">{lessonsDisplay}</div>
      </div>
    );
  }
}
