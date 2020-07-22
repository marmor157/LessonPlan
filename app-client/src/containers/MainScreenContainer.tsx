import React, { Component } from "react";
import { connect } from "react-redux";

import MainScreen from "../components/MainScreen";
import {
  currentLessonSelector,
  nextLessonSelector,
} from "../selectors/LessonSelectors";
import { IAppState } from "../reducers";

const mapStateToProps = (state: IAppState) => {
  return {
    currentLesson: currentLessonSelector(state),
    nextLesson: nextLessonSelector(state),
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
