import React, { useState, Component } from "react";
import { connect } from "react-redux";
import MainScreen from "./components/MainScreen";
import HorizontalMenu from "./components/HorizontalMenu";
import FullScreenPane from "./components/FullScreenPane";
import LoginScreen from "./components/LoginScreen";
import * as PanesActions from "./actions/PanesActions";

import "./fontawesome";
import "./styles/main.scss";

class App extends Component {
  render() {
    return (
      <div className="container">
        <LoginScreen />
        <MainScreen />
        <HorizontalMenu />
        <FullScreenPane
          title="Title"
          show={this.props.panes.showTodayPane}
          onClose={this.props.hideTodayPane}
        >
          Hahah
        </FullScreenPane>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    panes: state.panes,
  };
};

const mapDispatchToProps = { ...PanesActions };

export default connect(mapStateToProps, mapDispatchToProps)(App);
