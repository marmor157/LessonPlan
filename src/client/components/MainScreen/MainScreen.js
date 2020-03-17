import React, { Component } from "react";
import Clock from "./components/Clock/Clock";
import Lesson from "./components/Lesson/Lesson";
import "./MainScreen.scss";

export default class MainScreen extends Component {
  render() {
    return (
      <div className="mainScreen">
        <Clock />
        <Lesson dayText="Teraz" roomText="Sala" />
        <Lesson dayText="Następnie" roomText="Sala" />
      </div>
    );
  }
}
