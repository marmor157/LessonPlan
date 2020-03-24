import React, { PureComponent } from "react";

export default class MainScreenLesson extends PureComponent {
  render() {
    const {
      dayText,
      subjectName = "- -",
      roomText,
      roomNumber = "- -"
    } = this.props;

    return (
      <div className="mainScreen__lesson">
        {dayText}:<br />
        {subjectName}
        <br />
        {roomText} {roomNumber}
      </div>
    );
  }
}
