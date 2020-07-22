import React, { Component } from "react";
import Clock from "./Clock";
import MainScreenLesson from "./MainScreenLesson";
import { ILesson } from "../constants/Lessons.constans";

interface Props {
  currentLesson: ILesson;
  nextLesson: ILesson;
}

export const MainScreen = ({ currentLesson, nextLesson }: Props) => {
  console.log(currentLesson, nextLesson);
  return (
    <div className="mainScreen">
      <Clock />
      <MainScreenLesson
        dayText="Now"
        lessonText={currentLesson?.subject.longName}
        roomText="Room"
        roomNumber={currentLesson?.roomNumber}
      />
      <MainScreenLesson
        dayText="Next"
        lessonText={nextLesson?.subject.longName}
        roomText="Room"
        roomNumber={nextLesson?.roomNumber}
      />
    </div>
  );
};

export default MainScreen;
