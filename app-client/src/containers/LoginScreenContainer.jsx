import React, { Component } from "react";
import { connect } from "react-redux";
import LoginScreen from "../components/LoginScreen";
import * as SessionActions from "../actions/SessionActions";

class LoginScreenContainer extends Component {
  render() {
    return <LoginScreen {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    session: state.session,
  };
};

const mapDispatchToProps = { ...SessionActions };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreenContainer);
