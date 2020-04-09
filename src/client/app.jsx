import React, { useState, Component } from "react";

//Components
import MainScreen from "./components/MainScreen";

//Containers
import LoginScreenContainer from "./containers/LoginScreenContainer";
import HorizontalMenuContainer from "./containers/HorizontalMenuContainer";
import PanesContainer from "./containers/PanesContainer";

//Styles
import "./fontawesome";
import "./styles/main.scss";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <LoginScreenContainer />
        <MainScreen />
        <HorizontalMenuContainer />
        <PanesContainer />
      </div>
    );
  }
}
