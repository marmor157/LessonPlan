import React, { Component } from "react";
import { connect } from "react-redux";
import LoginScreen from "../components/LoginScreen/LoginScreen";
import { userSigninRequest } from "../services/session/session.actions";
import { IAppState } from "../services";

const mapStateToProps = (state: IAppState) => {
  return {
    isAuthenticated: state.session.isAuthenticated,
  };
};

const mapDispatchToProps = {
  userSigninRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
