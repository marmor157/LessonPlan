import React, { Component } from "react";
import TableWithHours from "./TableWithHours";
import TodayLessonsElement from "./TodayLessonsElement";
import { ILesson } from "../constants/Lessons.constans";
import { IHour } from "../constants/Hours.constans";

interface Props {
  lessons: Array<ILesson>;
  hours: Array<IHour>;
}

export const TodayLessons = ({ lessons, hours }: Props) => {
  const lessonsDisplay = lessons.map((lesson, id) => (
    <TodayLessonsElement lesson={lesson} key={id} />
  ));

  return (
    <TableWithHours hours={hours}>
      <div className="todayLessons">{lessonsDisplay}</div>
    </TableWithHours>
  );
};

export default TodayLessons;
