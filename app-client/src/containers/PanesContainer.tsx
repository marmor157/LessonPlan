import React, { Component, useEffect } from "react";
import { connect } from "react-redux";

import { actions as PanesActions } from "../services/panes";
import { actions as LessonsActions } from "../services/lessons";
import { actions as HoursActions } from "../services/hours";
import {
  lessonsGroupedByDaySelector,
  todayLessonsSelector,
} from "../services/lessons/lessons.selectors";

import { IAppState } from "../services";
import Panes from "../components/Panes/Panes";

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
