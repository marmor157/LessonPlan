import React, { Component } from "react";
import TableWithHours from "./TableWithHours";
import TodayLessonsElement from "./TodayLessonsElement";

export default class TodayLessons extends Component {
  render() {
    const { lessons, hours } = this.props;

    const lessonsDisplay = lessons.map((lesson, id) => (
      <TodayLessonsElement lesson={lesson} key={id} />
    ));

    return (
      <TableWithHours hours={hours}>
        <div className="todayLessons">{lessonsDisplay}</div>
      </TableWithHours>
    );
  }
}
