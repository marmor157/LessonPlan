import React from "react";
import LessonsElement from "./LessonsElement";

export default function WeeklyLessonsElement(props) {
  const { lesson } = props;
  return (
    <LessonsElement
      upperText={lesson.subject.shortName}
      bottomText={lesson.roomNumber + "."}
    />
  );
}
