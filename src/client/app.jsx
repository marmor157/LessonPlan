import React, { useState, Component } from "react";
import MainScreen from "./components/MainScreen";
import HorizontalMenu from "./components/HorizontalMenu";
import "./fontawesome";
import "./styles/main.scss";
import FullScreenPane from "./components/FullScreenPane";

import * as PanesActions from "./actions/PanesActions";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="container">
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

const mapStateToProps = state => {
  return {
    panes: state.panes
  };
};

const mapDispatchToProps = { ...PanesActions };

export default connect(mapStateToProps, mapDispatchToProps)(App);
