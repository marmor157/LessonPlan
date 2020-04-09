import React, { Component } from "react";
import Clock from "./Clock";
import MainScreenLesson from "./MainScreenLesson";

export default class MainScreen extends Component {
  render() {
    return (
      <div className="mainScreen">
        <Clock />
        <MainScreenLesson dayText="Now" roomText="Room" />
        <MainScreenLesson dayText="Next" roomText="Room" />
      </div>
    );
  }
}
