import React, { useEffect } from "react";

import FullScreenPane from "../FullScreenPane/FullScreenPane";
import WeeklyLessons from "../WeeklyLessons/WeeklyLessons";
import TodayLessons from "../TodayLessons/TodayLessons";
import { IPanesState } from "../../services/panes/panes.consts";
import { ILesson } from "../../services/lessons/lessons.consts";
import { IHour } from "../../services/hours/hours.consts";

interface IProps {
  isAuthenticated: boolean;
  getLessons: () => void;
  getHours: () => void;
  panes: IPanesState;
  hideTodayPane: () => void;
  todayLessons: Array<ILesson>;
  hideWeekPane: () => void;
  lessons: Array<Array<ILesson>>;
  hours: Array<IHour>;
}

const Panes = (props: IProps) => {
  useEffect(() => {
    if (props.isAuthenticated) {
      props.getLessons();
      props.getHours();
    }
  }, [props.isAuthenticated]);

  return (
    <React.Fragment>
      <FullScreenPane
        title="Today"
        show={props.panes.isTodayPaneShown}
        onClose={props.hideTodayPane}
      >
        <TodayLessons lessons={props.todayLessons} hours={props.hours} />
      </FullScreenPane>
      <FullScreenPane
        title="Week"
        show={props.panes.isWeekPaneShown}
        onClose={props.hideWeekPane}
      >
        <WeeklyLessons lessons={props.lessons} hours={props.hours} />
      </FullScreenPane>
    </React.Fragment>
  );
};

export default Panes;
