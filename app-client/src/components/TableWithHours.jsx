import React, { Component } from "react";
import formatHour from "../utils/formatHour";
import minutesToHour from "../utils/minutesToHour";

export default class TableWithHours extends Component {
  render() {
    const { hours, children } = this.props;

    //Map user's hours
    const hoursDisplay = hours.map((hour, id) => {
      const { hour: startHour, minute: startMinute } = formatHour(
        minutesToHour(hour.startHour)
      );
      const { hour: finishHour, minute: finishMinute } = formatHour(
        minutesToHour(hour.finishHour)
      );

      //Allows empty element to appear
      if (startHour)
        return (
          <div className="tableWithHours__element">
            {startHour}:{startMinute} - {finishHour}:{finishMinute}
          </div>
        );
      else return <div className="tableWithHours__element"></div>;
    });

    return (
      <div className="tableWithHours">
        <div className="tableWithHours__hourColumn">{hoursDisplay}</div>
        <div className="tableWithHours__contentContainer">{children}</div>
      </div>
    );
  }
}
