import React, { Component } from "react";
import { connect } from "react-redux";

import MainScreen from "../components/MainScreen";
import {
  currentLessonSelector,
  nextLessonSelector,
} from "../selectors/LessonSelectors";

class MainScreenContainer extends Component {
  render() {
    return <MainScreen {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    currentLesson: currentLessonSelector(state),
    nextLesson: nextLessonSelector(state),
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainScreenContainer);
