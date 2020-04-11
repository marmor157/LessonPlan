import React, { Component } from "react";
import { connect } from "react-redux";
import FullScreenPane from "../components/FullScreenPane";
import WeeklyLessons from "../components/WeeklyLessons";
import * as PanesActions from "../actions/PanesActions";
import * as LessonsActions from "../actions/LessonsActions";
import * as HoursActions from "../actions/HoursActions";
import { lessonsGroupedByDaySelector } from "../selectors/LessonSelectors";

class PanesContainer extends Component {
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      prevProps.isAuthenticated != this.props.isAuthenticated &&
      this.props.isAuthenticated
    ) {
      this.props.getLessons();
      this.props.getHours();
    }
  }
  render() {
    return (
      <React.Fragment>
        <FullScreenPane
          title="Today"
          show={this.props.panes.showTodayPane}
          onClose={this.props.hideTodayPane}
        >
          Hahah
        </FullScreenPane>
        <FullScreenPane
          title="Week"
          show={this.props.panes.showWeekPane}
          onClose={this.props.hideWeekPane}
        >
          <WeeklyLessons
            lessons={this.props.lessons}
            hours={this.props.hours}
          />
        </FullScreenPane>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    panes: state.panes,
    lessons: lessonsGroupedByDaySelector(state),
    hours: state.hours.hours,
    isAuthenticated: state.session.isAuthenticated,
  };
};

const mapDispatchToProps = {
  ...PanesActions,
  ...LessonsActions,
  ...HoursActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(PanesContainer);
