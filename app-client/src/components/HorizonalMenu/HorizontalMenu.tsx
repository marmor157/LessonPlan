import React, { Component } from "react";
import HorizontalMenuOption from "./components/HorizontalMenuOption";

import "./HorizontalMenu.scss";

interface Props {
  showTodayPane: () => void;
  showWeekPane: () => void;
}

export const HorizontalMenu = ({ showTodayPane, showWeekPane }: Props) => {
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
};

export default HorizontalMenu;
