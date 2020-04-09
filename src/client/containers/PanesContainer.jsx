import React, { Component } from "react";
import { connect } from "react-redux";
import FullScreenPane from "../components/FullScreenPane";
import * as PanesActions from "../actions/PanesActions";

class PanesContainer extends Component {
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
  };
};

const mapDispatchToProps = { ...PanesActions };

export default connect(mapStateToProps, mapDispatchToProps)(PanesContainer);
