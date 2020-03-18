import React from "react";
import MainScreen from "./components/MainScreen/MainScreen";
import HorizontalMenu from "./components/HorizontalMenu/HorizontalMenu";
import "./fontawesome";

import "./app.scss";

export default () => {
  return (
    <div className="container">
      <MainScreen />
      <HorizontalMenu />
    </div>
  );
};
