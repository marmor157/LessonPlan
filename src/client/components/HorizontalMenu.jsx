import React, { Component } from "react";
import HorizontalMenuOption from "./HorizontalMenuOption";

export default class HorizontalMenu extends Component {
  render() {
    return (
      <div className="horizontalMenu">
        <HorizontalMenuOption text="Ustawienia" faIconName="tools" />
        <HorizontalMenuOption text="Dzisiaj" faIconName="calendar-day" />
        <HorizontalMenuOption text="Tydzień" faIconName="calendar-week" />
      </div>
    );
  }
}
