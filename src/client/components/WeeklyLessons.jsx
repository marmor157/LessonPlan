import React, { PureComponent } from "react";
import WeeklyLessonsElement from "./WeeklyLessonsElement";

export default class WeeklyLessons extends PureComponent {
  render() {
    const { lessons } = this.props;
    console.log(lessons);

    const lessonsDisplay = lessons.map((lessonRow) => (
      <div className="weeklyLessons__column">
        {lessonRow.map((lesson) => (
          <WeeklyLessonsElement lesson={lesson} />
        ))}
      </div>
    ));

    return <div className="weeklyLessons">{lessonsDisplay}</div>;
  }
}
