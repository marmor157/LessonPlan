import React, { Component } from "react";
import Clock from "./Clock";
import MainScreenLesson from "./MainScreenLesson";

export default class MainScreen extends Component {
  render() {
    return (
      <div className="mainScreen">
        <Clock />
        <MainScreenLesson dayText="Teraz" roomText="Sala" />
        <MainScreenLesson dayText="Następnie" roomText="Sala" />
      </div>
    );
  }
}
