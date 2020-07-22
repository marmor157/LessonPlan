import React from "react";
import LessonsElement from "./LessonsElement";
import { ILesson } from "../constants/Lessons.constans";

export default function WeeklyLessonsElement({ lesson }: { lesson: ILesson }) {
  return (
    <LessonsElement
      upperText={lesson.subject.shortName}
      bottomText={lesson.roomNumber + "."}
    />
  );
}
