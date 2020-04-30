import Lesson from "./lesson.model";
import { User } from "../users";
import { Hour } from "../hours";
import { Op } from "sequelize";
import { Subject } from "../subjects";

class LessonSerivce {
  constructor(lesson) {
    this.lesson = lesson;
  }

  async addLesson({ userId, roomNumber, day, subjectId, hourId }) {
    return await this.lesson.create({
      roomNumber,
      day,
      userId,
      subjectId,
      hourId,
    });
  }

  async createUsersDefaultLessons({ userId, hoursId }) {
    for (let day = 1; day < 6; day++) {
      hoursId.forEach(async (hourId) => {
        await this.addLesson({
          userId,
          roomNumber: "",
          day,
          hourId,
          subjectId: 1,
        });
      });
    }
  }

  async updateLesson({ id, roomNumber, subjectId }) {
    const data = await this.lesson.update(
      { roomNumber, subjectId },
      {
        where: {
          id,
        },
      }
    );

    return data;
  }

  async getTodaysLessons(userId) {
    const curretDay = new Date().getDay();

    const todaysLessons = await this.lesson.findAll({
      where: {
        userId,
        day: curretDay,
      },
      include: [{ model: Hour }, { model: Subject }],
    });

    return todaysLessons;
  }

  async getAllLessons(userId) {
    const lessons = await this.lesson.findAll({
      where: { userId },
      include: [{ model: Hour }, { model: Subject }],
    });

    return lessons;
  }

  async getCurrentLesson(userId) {
    const currDate = new Date();
    const minutesPastMidnight =
      currDate.getHours() * 60 + currDate.getMinutes();

    const currentLesson = await this.lesson.findOne({
      where: {
        userId,
        day: currDate.getDay(),
      },
      include: [
        {
          model: Hour,
          where: {
            [Op.and]: {
              startHour: {
                [Op.lte]: minutesPastMidnight,
              },
              finishHour: {
                [Op.gt]: minutesPastMidnight,
              },
            },
          },
        },
        {
          model: Subject,
        },
      ],
    });

    return currentLesson;
  }

  async getNextLesson(userId) {
    const currDate = new Date();

    const minutesPastMidnight =
      currDate.getHours() * 60 + currDate.getMinutes();

    const nextSchoolDay =
      currDate.getDay() > 4 || currDate.getDay() == 0
        ? 1
        : currDate.getDay() + 1;

    const nextLesson = this.lesson.findOne({
      where: {
        userId,
        day: currDate.getDay(),
        [Op.or]: {
          [Op.and]: {
            "$Hours.startHour": {
              [Op.gt]: minutesPastMidnight,
            },
            day: currDate.getDay(),
          },
          day: nextSchoolDay,
        },
      },
      include: [
        {
          model: Hour,
        },
        {
          model: Subject,
        },
      ],
      order: [
        ["day", "DESC"],
        ["id", "ASC"],
      ],
    });

    return nextLesson;
  }
}

export default new LessonSerivce(Lesson);
