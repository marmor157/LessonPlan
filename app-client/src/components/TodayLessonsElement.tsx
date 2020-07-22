import React from "react";
import LessonsElement from "./LessonsElement";
import { ILesson } from "../constants/Lessons.constans";

export default function TodayLessonsElement({ lesson }: { lesson: ILesson }) {
  return (
    <LessonsElement
      upperText={lesson.subject.longName}
      bottomText={lesson.roomNumber + "."}
    />
  );
}
