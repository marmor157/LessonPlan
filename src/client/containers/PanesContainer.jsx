import React, { Component } from "react";
import { connect } from "react-redux";
import FullScreenPane from "../components/FullScreenPane";
import * as PanesActions from "../actions/PanesActions";
import * as LessonsActions from "../actions/LessonsActions";

class PanesContainer extends Component {
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      prevProps.isAuthenticated != this.props.isAuthenticated &&
      this.props.isAuthenticated
    ) {
      this.props.getLessons();
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
          Hahah
        </FullScreenPane>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    panes: state.panes,
    isAuthenticated: state.session.isAuthenticated,
  };
};

const mapDispatchToProps = { ...PanesActions, ...LessonsActions };

export default connect(mapStateToProps, mapDispatchToProps)(PanesContainer);
