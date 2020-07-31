import React, { Component } from "react";
import { connect } from "react-redux";

import MainScreen from "../components/MainScreen/MainScreen";
import {
  currentLessonSelector,
  nextLessonSelector,
} from "../services/lessons/lessons.selectors";
import { IAppState } from "../services";

const mapStateToProps = (state: IAppState) => {
  return {
    currentLesson: currentLessonSelector(state),
    nextLesson: nextLessonSelector(state),
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
