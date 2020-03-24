import React, { Component } from "react";

export default class Clock extends Component {
  constructor(props) {
    super(props);

    const date = new Date();
    this.state = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      intervalId: null
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
      minute: date.getMinutes()
    });
  }

  render() {
    const { hour, minute } = this.state;
    return (
      <span className="clock">
        {hour} {minute}
      </span>
    );
  }
}
