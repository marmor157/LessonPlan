import React from "react";
import LessonsElement from "../../LessonsElement/LessonsElement";
import { ILesson } from "../../../services/lessons/lessons.consts";

export default function WeeklyLessonsElement({ lesson }: { lesson: ILesson }) {
  return (
    <LessonsElement
      upperText={lesson.subject.shortName}
      bottomText={lesson.roomNumber + "."}
    />
  );
}
