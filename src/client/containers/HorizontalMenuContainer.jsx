import React, { Component } from "react";
import { connect } from "react-redux";
import HorizontalMenu from "../components/HorizontalMenu";
import * as PanesActions from "../actions/PanesActions";

class HorizontalMenuContainer extends Component {
  render() {
    return <HorizontalMenu {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    panes: state.panes,
  };
};

const mapDispatchToProps = { ...PanesActions };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HorizontalMenuContainer);
