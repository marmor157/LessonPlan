import React from "react";

export default function WeeklyLessonsElement(props) {
  const { lesson } = props;
  return (
    <div className="weeklyLessons__element">
      {lesson.subject.shortName}
      <br />
      {lesson.roomNumber + "."}
    </div>
  );
}
