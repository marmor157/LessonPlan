import React, { Component } from "react";
import Clock from "./Clock";
import MainScreenLesson from "./MainScreenLesson";

export default class MainScreen extends Component {
  render() {
    console.log(this.props);
    const { currentLesson, nextLesson } = this.props;
    return (
      <div className="mainScreen">
        <Clock />
        <MainScreenLesson
          dayText="Now"
          lessonText={currentLesson.subject?.longName}
          roomText="Room"
          roomNumber={currentLesson.roomNumber}
        />
        <MainScreenLesson
          dayText="Next"
          lessonText={nextLesson.subject?.longName}
          roomText="Room"
          roomNumber={nextLesson.roomNumber}
        />
      </div>
    );
  }
}
