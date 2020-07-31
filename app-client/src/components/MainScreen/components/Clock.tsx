import React, { useState, useEffect } from "react";
import formatTime from "../../../utils/formatHour";

import "./Clock.scss";

const Clock = () => {
  const date = new Date();
  const [hour, setHour] = useState(date.getHours());
  const [minute, setMinute] = useState(date.getMinutes());
  const [colon, setColon] = useState(false);
  const [intervalID, setIntervalID] = useState(null);

  const newTime = () => {
    const date = new Date();
    setHour(date.getHours());
    setMinute(date.getMinutes());
    setColon(!colon);
  };

  useEffect(() => {
    const intervalId = setInterval(newTime, 1000);
    setIntervalID(intervalId);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const [hourFormated, minuteFormated] = formatTime({ hour, minute });

  return (
    <span className="clock">
      {hourFormated}
      <span className="clock__colon">{colon ? ":" : ""}</span>
      {minuteFormated}
    </span>
  );
};

export default Clock;
