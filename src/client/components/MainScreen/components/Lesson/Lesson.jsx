import React, { PureComponent } from "react";
import "./Lesson.scss";

export default class Lesson extends PureComponent {
  render() {
    const {
      dayText,
      subjectName = "- -",
      roomText,
      roomNumber = "- -"
    } = this.props;

    return (
      <div className="lesson">
        {dayText}:<br />
        {subjectName}
        <br />
        {roomText} {roomNumber}
      </div>
    );
  }
}
