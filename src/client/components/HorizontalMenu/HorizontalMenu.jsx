import React, { Component } from "react";
import "./HorizontalMenu.scss";
import Option from "./components/Option/Option";

export default class HorizontalMenu extends Component {
  render() {
    return (
      <div className="horizontalMenu">
        <Option text="Ustawienia" faIconName="tools" />
        <Option text="Dzisiaj" faIconName="calendar-day" />
        <Option text="Tydzień" faIconName="calendar-week" />
      </div>
    );
  }
}
