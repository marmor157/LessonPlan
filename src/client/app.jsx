import React from "react";
import MainScreen from "./components/MainScreen";
import HorizontalMenu from "./components/HorizontalMenu";
import "./fontawesome";
import "./styles/main.scss";

import "./app.scss";

export default () => {
  return (
    <div className="container">
      <MainScreen />
      <HorizontalMenu />
    </div>
  );
};
