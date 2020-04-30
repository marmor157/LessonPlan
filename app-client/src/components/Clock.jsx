import React, { Component } from "react";
import formatHour from "../utils/formatHour";

export default class Clock extends Component {
  constructor(props) {
    super(props);

    const date = new Date();
    this.state = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      colon: false,
      intervalId: null,
    };

    this.newTime = this.newTime.bind(this);
  }

  componentDidMount() {
    const intervalId = setInterval(this.newTime, 1000);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  newTime() {
    const date = new Date();
    this.setState({
      hour: date.getHours(),
      minute: date.getMinutes(),
      colon: !this.state.colon,
    });
  }

  render() {
    const { hour, minute } = formatHour(this.state);
    const { colon } = this.state;
    return (
      <span className="clock">
        {hour}
        <span className="clock__colon">{colon ? ":" : ""}</span>
        {minute}
      </span>
    );
  }
}
