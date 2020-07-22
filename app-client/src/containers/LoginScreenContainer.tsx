import React, { Component } from "react";
import { connect } from "react-redux";
import LoginScreen from "../components/LoginScreen";
import { userSigninRequest } from "../actions/SessionActions";
import { IAppState } from "../reducers";

const mapStateToProps = (state: IAppState) => {
  return {
    isAuthenticated: state.session.isAuthenticated,
  };
};

const mapDispatchToProps = {
  userSigninRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
