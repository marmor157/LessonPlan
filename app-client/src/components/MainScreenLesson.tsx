import React, { memo } from "react";

interface Props {
  dayText: string;
  lessonText?: string;
  roomText: string;
  roomNumber?: string;
}

export const MainScreenLesson = React.memo(
  ({ dayText, lessonText = "- -", roomText, roomNumber = "- -" }: Props) => {
    return (
      <div className="mainScreen__lesson">
        {dayText}:<br />
        {lessonText}
        <br />
        {roomText} {roomNumber}
      </div>
    );
  }
);

export default MainScreenLesson;
