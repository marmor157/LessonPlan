import React, { Component } from "react";
import { connect } from "react-redux";
import HorizontalMenu from "../components/HorizontalMenu";
import * as PanesActions from "../actions/PanesActions";
import { IAppState } from "../reducers";

const mapStateToProps = (state: IAppState) => {
  return {
    panes: state.panes,
  };
};

const mapDispatchToProps = { ...PanesActions };

export default connect(mapStateToProps, mapDispatchToProps)(HorizontalMenu);
