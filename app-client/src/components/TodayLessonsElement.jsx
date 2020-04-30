import React from "react";
import LessonsElement from "./LessonsElement";

export default function TodayLessonsElement(props) {
  const { lesson } = props;
  return (
    <LessonsElement
      upperText={lesson.subject.longName}
      bottomText={lesson.roomNumber + "."}
    />
  );
}
