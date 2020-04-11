import React, { PureComponent } from "react";
import WeeklyLessonsElement from "./WeeklyLessonsElement";
import formatHour from "../utils/formatHour";
import minutesToHour from "../utils/minutesToHour";
export default class WeeklyLessons extends PureComponent {
  render() {
    const { lessons, hours } = this.props;
    console.log(hours);

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

    const lessonsDisplay = lessons.map((lessonRow, id) => (
      <div className="weeklyLessons__column" key={id}>
        {lessonRow.map((lesson, id) => (
          <WeeklyLessonsElement lesson={lesson} key={id} />
        ))}
      </div>
    ));

    return (
      <div className="weeklyLessons">
        <div className="weeklyLessons__column weeklyLessons__column--hour">
          {hoursDisplay}
        </div>
        {lessonsDisplay}
      </div>
    );
  }
}
