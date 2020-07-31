import React, { Component } from "react";
import formatHour from "../../utils/formatHour";
import minutesToHour from "../../utils/minutesToHour";
import { IHour } from "../../services/hours/hours.consts";

import "./TableWithHours.scss";

interface Props {
  hours: Array<IHour | {}>;
  children: React.ReactChild;
}

const TableWithHours = ({ hours, children }: Props) => {
  //Map user's hours
  const hoursDisplay = hours.map((hour, id) => {
    //Allows empty element to appear
    if (hour == {}) return <div className="tableWithHours__element"></div>;

    const [startHour, startMinute] = formatHour(
      minutesToHour((hour as IHour).startHour)
    );
    const [finishHour, finishMinute] = formatHour(
      minutesToHour((hour as IHour).finishHour)
    );

    return (
      <div className="tableWithHours__element">
        {startHour}:{startMinute} - {finishHour}:{finishMinute}
      </div>
    );
  });

  return (
    <div className="tableWithHours">
      <div className="tableWithHours__hourColumn">{hoursDisplay}</div>
      <div className="tableWithHours__contentContainer">{children}</div>
    </div>
  );
};

export default TableWithHours;
