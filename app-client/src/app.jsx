import React, { useState, Component } from "react";

//Containers
import LoginScreenContainer from "./containers/LoginScreenContainer";
import HorizontalMenuContainer from "./containers/HorizontalMenuContainer";
import PanesContainer from "./containers/PanesContainer";
import MainScreenContainer from "./containers/MainScreenContainer";

//Styles
import "./fontawesome";
import "./styles/main.scss";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <LoginScreenContainer />
        <MainScreenContainer />
        <HorizontalMenuContainer />
        <PanesContainer />
      </div>
    );
  }
}
