import React, { useState } from "react";
import HourPickerColumn from "./components/HourPickerColumn";

import "./HourPicker.scss";

interface Props {}

const HourPicker = (props: Props) => {
  const [actualHoursIndex, setActualHoursIndex] = useState(0);
  const [actualMinutesIndex, setActualMinutesIndex] = useState(0);

  const possibleHours = Array.from(Array(24), (_, i) => i + 1);
  const possibleMinutes = Array.from(Array(60), (_, i) => i + 1);

  return (
    <div className="hourPicker">
      <HourPickerColumn
        title={"Hour"}
        possibleValues={possibleHours}
        actualValueIndex={actualHoursIndex}
        changeActual={(newValue: number): void => {
          setActualHoursIndex(newValue);
        }}
      />
      <HourPickerColumn
        title={"Minutes"}
        possibleValues={possibleMinutes}
        actualValueIndex={actualMinutesIndex}
        changeActual={(newValue: number): void => {
          setActualMinutesIndex(newValue);
        }}
      />
    </div>
  );
};

export default HourPicker;
