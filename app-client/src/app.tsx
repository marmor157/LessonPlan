import React, { Component } from "react";

//Containers
import LoginScreenContainer from "./containers/LoginScreenContainer";
import HorizontalMenuContainer from "./containers/HorizontalMenuContainer";
import PanesContainer from "./containers/PanesContainer";
import MainScreenContainer from "./containers/MainScreenContainer";

//Styles
import "./fontawesome";
import "./App.scss";

export const App = () => {
  return (
    <div className="container">
      <LoginScreenContainer />
      <MainScreenContainer />
      <HorizontalMenuContainer />
      <PanesContainer />
    </div>
  );
};

export default App;
