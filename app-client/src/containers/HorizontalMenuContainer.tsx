import React, { Component } from "react";
import { connect } from "react-redux";
import HorizontalMenu from "../components/HorizonalMenu/HorizontalMenu";
import { actions as PanesActions } from "../services/panes/";
import { IAppState } from "../services";

const mapStateToProps = (state: IAppState) => {
  return {
    panes: state.panes,
  };
};

const mapDispatchToProps = { ...PanesActions };

export default connect(mapStateToProps, mapDispatchToProps)(HorizontalMenu);
