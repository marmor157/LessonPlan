import React, { Component } from "react";
import TableWithHours from "../TableWithHours/TableWithHours";
import TodayLessonsElement from "./components/TodayLessonsElement";
import { ILesson } from "../../services/lessons/lessons.consts";
import { IHour } from "../../services/hours/hours.consts";

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
