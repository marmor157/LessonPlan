import React, { Component, useEffect } from "react";
import { connect } from "react-redux";

import * as PanesActions from "../actions/PanesActions";
import * as LessonsActions from "../actions/LessonsActions";
import * as HoursActions from "../actions/HoursActions";
import {
  lessonsGroupedByDaySelector,
  todayLessonsSelector,
} from "../selectors/LessonSelectors";

import { IAppState } from "../reducers";
import Panes from "../components/Panes";

const mapStateToProps = (state: IAppState) => {
  return {
    panes: state.panes,
    lessons: lessonsGroupedByDaySelector(state),
    todayLessons: todayLessonsSelector(state),
    hours: state.hours.hours,
    isAuthenticated: state.session.isAuthenticated,
  };
};

const mapDispatchToProps = {
  ...PanesActions,
  ...LessonsActions,
  ...HoursActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Panes);
