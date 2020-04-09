import React, { Component } from "react";
import HorizontalMenuOption from "./HorizontalMenuOption";

export default class HorizontalMenu extends Component {
  render() {
    const { showTodayPane, showWeekPane } = this.props;
    return (
      <div className="horizontalMenu">
        <HorizontalMenuOption text="Ustawienia" faIconName="tools" />
        <HorizontalMenuOption
          text="Dzisiaj"
          faIconName="calendar-day"
          onClick={showTodayPane}
        />
        <HorizontalMenuOption
          text="Tydzień"
          faIconName="calendar-week"
          onClick={showWeekPane}
        />
      </div>
    );
  }
}
