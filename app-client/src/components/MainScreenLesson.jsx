import React, { PureComponent } from "react";

export default class MainScreenLesson extends PureComponent {
  render() {
    const {
      dayText,
      lessonText = "- -",
      roomText,
      roomNumber = "- -",
    } = this.props;

    return (
      <div className="mainScreen__lesson">
        {dayText}:<br />
        {lessonText}
        <br />
        {roomText} {roomNumber}
      </div>
    );
  }
}
